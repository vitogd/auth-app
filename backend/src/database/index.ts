import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("📦 Successfully connected to database!");
  })
  .catch((err) => {
    console.error(err.message);
  });
