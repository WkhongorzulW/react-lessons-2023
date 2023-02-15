console.log("Day-63 Category CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app
  .route("/category")
  .post((request, response) => {
    const body = request.body;

    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const categoryDataObject = JSON.parse(categoryData);
    const newCategory = {
      id: Date.now().toString(),
      name: body.catName,
    };

    categoryDataObject.push(newCategory);

    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObject)
    );
    if (writeCategoryData) {
      response.json({
        status: "file reader error",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataObject,
      });
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
