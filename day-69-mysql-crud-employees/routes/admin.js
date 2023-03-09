import express from "express";
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";

const admin_router = express.Router();

admin_router.get("/employees", async (request, response) => {
  const result = await getEmployees();

  response.status(200).send(result);
});

admin_router.put("/employee", async (request, response) => {
  const { empNo, lastName, gender } = request.body;

  const result = await updateEmployee(empNo, lastName, gender);

  response.status(200).send(result);
});

admin_router.delete("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await fireEmployee(body.empNo);

  response.status(200).send(result);
});

admin_router.post("/employee", async (request, response) => {
  const { birthDate, firstName, lastName, gender, hireDate } = request.body;
  const { max } = await getMaxNo();
  console.log(max);

  const result = await hireEmployee(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  );

  console.log(result);

  response.status(200).send({});
});

export default admin_router;
