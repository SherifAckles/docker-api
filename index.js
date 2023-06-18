const express = require("express");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect:'postgres'
});
const app = express();
app.use(express.json())
const dataList=[]

app.get("/data", (req, res) => {
  res.status(201).send(dataList);
  return;
});

app.post("/data", (req, res) => {
  let data = req.body;
  dataList.push(data);
  res.status(200).send(data);
  return;
});

app.listen({ port: 8080 }, () => {
  console.log("server is running on http://localhost:8080/data");
});
