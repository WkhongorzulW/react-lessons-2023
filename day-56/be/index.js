console.log(" Day-56 REST API");

const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send(`<h1>Express REST API is running</h1>`);
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(typeof timerData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.post("/timers", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "error",
        daata: [],
      });
    }

    const timerDataObject = JSON.parse(readData);
    timerDataObject.push(body);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(timerDataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: timerDataObject,
        });
      }
    );
  });
});

app.put("/timers", (request, response) => {
  const body = request.body;

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === body.id) {
        (d.title = body.title),
          (d.project = body.project),
          (d.elapsed = body.elapsed);
      }
      return d;
    });

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.delete("/timers", (request, response) => {
  const body = request.body;

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.timerId);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
