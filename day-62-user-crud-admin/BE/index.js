console.log("Day-62 User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8000;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

/// API user register

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "read error",
        data: [],
      });
    }

    const readDataObject = JSON.parse(readData);

    response.json({
      status: "success",
      data: readDataObject,
    });
  });
});

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const usersDataObj = JSON.parse(readData);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }

          console.log("hashed data: ", hashData);

          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          usersDataObj.push(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(usersDataObj),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "error during write file",
                  data: [],
                });
              }
              response.json({
                status: "success",
                data: usersDataObj,
              });
            }
          );
        });
      });
    });
  });
});

/// API user login

app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const usersArrayObject = JSON.parse(readData);

    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    /// хэрэглэгч users.json дотор байхгүй байвал:
    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    }

    /// хэрэглэгч олдвол
    else {
      const foundUserObj = foundUser[0];
      console.log(foundUserObj);
      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "User name or password do not match!!!",
            });
          }

          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstname: foundUserObj.firstname,
                lastname: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match!!!",
              data: [],
            });
          }
        }
      );
    }
  });
});

/// API get all user roles

app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);

    response.json({
      status: "success",
      data: dataObject,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
