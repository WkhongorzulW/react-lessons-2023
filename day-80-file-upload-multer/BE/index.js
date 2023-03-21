const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();
const PORT = 8080;
const upload = multer({ storage: storage });
app.use("/upload", express.static("upload"));

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response
    .status(200)
    .send(
      `<h1 style="text-align: center; background-color: black; color: hotpink; padding: 10px">Hello Day-80 File Upload Multer</h1>`
    );
});

app.get("/files", async (request, response) => {
  const images = [];
  fs.readdirSync("./upload/").forEach((file) => {
    console.log(file);
    const fileUrl = `http://localhost:8080/upload/${file}`;
    images.push(fileUrl);
  });

  response.json({
    data: images,
  });
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  const images = [];
  fs.readdirSync("./upload/").forEach((file) => {
    console.log(file);
    const fileUrl = `http://localhost:8080/upload/${file}`;
    images.push(fileUrl);
  });

  response.json({
    data: images,
  });
});

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
