import express, { request } from "express";
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";
import { getPopularCategories } from "../services/category-services.js";
import { getChildrenMenus, getParentMenus } from "../services/menusServices.js";
import { search, getAllProducts } from "../services/product-services.js";

const api_router = express.Router();

api_router.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

api_router.get("/products", async (request, response) => {
  const keyword = request.query.keyword;
  const result = await getAllProducts();
  response.status(200).send(result);
});

api_router.get("/search", async (request, response) => {
  const keyword = request.query.keyword;
  const result = await search(keyword);
  response.status(200).send(result);
});

api_router.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent, index) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(parentMenus);
});

// api_router.get("/employees", async (request, response) => {
//   const result = await getEmployees();

//   response.status(200).send(result);
// });

// api_router.put("/employee", async (request, response) => {
//   const { empNo, lastName, gender } = request.body;

//   const result = await updateEmployee(empNo, lastName, gender);

//   response.status(200).send(result);
// });

// api_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);

//   const result = await fireEmployee(body.empNo);

//   response.status(200).send(result);
// });

// api_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);

//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );

//   console.log(result);

//   response.status(200).send({});
// });

export default api_router;
