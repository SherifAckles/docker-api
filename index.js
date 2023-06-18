const express = require("express");
const { Sequelize } = require("sequelize");
//pick up the localhost and the port 5432
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
  try {
    //try to connect to the database
    sequelize.authenticate()
    console.log('connected to database')
  } catch (error) {
     console.log("couldn't connect to database", error);
  }
  console.log("server is running on http://localhost:8080/data");
});
