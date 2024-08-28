// // import express from "express";
// // import { MongoClient, ObjectId } from "mongodb";
// // import cors from 'cors';
// // import dotenv from 'dotenv';

// // // Load environment variables from .env file
// // dotenv.config();

// // const app = express();
// // app.use(express.json());

// // const PORT = process.env.PORT || 3001;
// // const connectionString = process.env.ATLAS_URI; // Use the environment variable for MongoDB URI

// // const client = new MongoClient(connectionString, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });

// // let db;

// // app.use(cors({
// //     origin: 'http://localhost:3000',
// //     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
// //     credentials: true
// // }));

// // async function connectDB() {
// //   try {
// //     await client.connect();
// //     db = client.db("mytraining");
// //     console.log("Connected to database");
// //   } catch (e) {
// //     console.error("Database connection error:", e);
// //     process.exit(1);
// //   }
// // }

// // connectDB();

// // // CRUD routes

// // // Create a new record
// // app.post("/records", async (req, res) => {
// //   try {
// //     const collection = db.collection("records");
// //     const result = await collection.insertOne(req.body);
// //     res.status(201).send(result);
// //   } catch (e) {
// //     res.status(500).send({ error: "Error creating record", details: e.message });
// //   }
// // });

// // // Get all records
// // app.get("/records", async (req, res) => {
// //   try {
// //     const collection = db.collection("records");
// //     const records = await collection.find({}).toArray();
// //     res.status(200).send(records);
// //   } catch (e) {
// //     res.status(500).send({ error: "Error fetching records", details: e.message });
// //   }
// // });

// // // Get a single record by ID
// // app.get("/records/:id", async (req, res) => {
// //   try {
// //     const collection = db.collection("records");
// //     const record = await collection.findOne({ _id: new ObjectId(req.params.id) });
// //     if (!record) {
// //       res.status(404).send({ error: "Record not found" });
// //     } else {
// //       res.status(200).send(record);
// //     }
// //   } catch (e) {
// //     res.status(500).send({ error: "Error fetching record", details: e.message });
// //   }
// // });

// // // Update a record by ID
// // app.patch("/records/:id", async (req, res) => {
// //   try {
// //     const collection = db.collection("records");
// //     const result = await collection.updateOne(
// //       { _id: new ObjectId(req.params.id) },
// //       { $set: req.body }
// //     );
// //     if (result.matchedCount === 0) {
// //       res.status(404).send({ error: "Record not found" });
// //     } else {
// //       res.status(200).send(result);
// //     }
// //   } catch (e) {
// //     res.status(500).send({ error: "Error updating record", details: e.message });
// //   }
// // });

// // // Delete a record by ID
// // app.delete("/records/:id", async (req, res) => {
// //   try {
// //     const collection = db.collection("records");
// //     const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
// //     if (result.deletedCount === 0) {
// //       res.status(404).send({ error: "Record not found" });
// //     } else {
// //       res.status(200).send({ message: "Record deleted" });
// //     }
// //   } catch (e) {
// //     res.status(500).send({ error: "Error deleting record", details: e.message });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// //server.mjs
// //server.mjs
// //server.mjs

// import express from "express";
// import { MongoClient, ObjectId } from "mongodb";
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3001;
// const connectionString = process.env.ATLAS_URI; // Use the environment variable for MongoDB URI

// const client = new MongoClient(connectionString);

// let db;

// app.use(cors({
//     origin: 'http://localhost:3001',
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//     credentials: true
// }));

// async function connectDB() {
//   try {
//     await client.connect();
//     db = client.db("mytraining");
//     console.log("Connected to database");
//   } catch (e) {
//     console.error("Database connection error:", e);
//     process.exit(1);
//   }
// }

// connectDB();

// // CRUD routes

// // Create a new record
// app.post("/records", async (req, res) => {
//   try {
//     const collection = db.collection("records");
//     const result = await collection.insertOne(req.body);
//     res.status(201).send(result);
//   } catch (e) {
//     res.status(500).send({ error: "Error creating record", details: e.message });
//   }
// });

// // Get all records
// app.get("/records", async (req, res) => {
//   try {
//     const collection = db.collection("records");
//     const records = await collection.find({}).toArray();
//     res.status(200).send(records);
//   } catch (e) {
//     res.status(500).send({ error: "Error fetching records", details: e.message });
//   }
// });

// // Get a single record by ID
// app.get("/records/:id", async (req, res) => {
//   try {
//     const collection = db.collection("records");
//     const record = await collection.findOne({ _id: new ObjectId(req.params.id) });
//     if (!record) {
//       res.status(404).send({ error: "Record not found" });
//     } else {
//       res.status(200).send(record);
//     }
//   } catch (e) {
//     res.status(500).send({ error: "Error fetching record", details: e.message });
//   }
// });

// // Update a record by ID
// app.patch("/records/:id", async (req, res) => {
//   try {
//     const collection = db.collection("records");
//     const result = await collection.updateOne(
//       { _id: new ObjectId(req.params.id) },
//       { $set: req.body }
//     );
//     if (result.matchedCount === 0) {
//       res.status(404).send({ error: "Record not found" });
//     } else {
//       res.status(200).send(result);
//     }
//   } catch (e) {
//     res.status(500).send({ error: "Error updating record", details: e.message });
//   }
// });

// // Delete a record by ID
// app.delete("/records/:id", async (req, res) => {
//   try {
//     const collection = db.collection("records");
//     const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
//     if (result.deletedCount === 0) {
//       res.status(404).send({ error: "Record not found" });
//     } else {
//       res.status(200).send({ message: "Record deleted" });
//     }
//   } catch (e) {
//     res.status(500).send({ error: "Error deleting record", details: e.message });
//   }
// });

// //Production Script 

// app.use(express.static("./client/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected..."))
  .catch((err) => console.log(err));

//db schema
const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
});

//db model
const User = new mongoose.model("User", userSchema);

app.get("/get-users", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.post("/create", (req, res) => {
  //save to mongodb and send response
  const newUser = new User({
    name: req.body.name,
    lastName: req.body.lastName,
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
//Production Script 

app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});


//