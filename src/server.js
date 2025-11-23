const express = require("express");
const mongoose = require("mongoose");

const app = require("./app");



mongoose.connect("mongodb+srv://arsh:Password%40123@cluster0.hyxw14t.mongodb.net/paysyncDB?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected 🎯"))
    .catch(err => console.log("DB Error:", err));

const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port 🚀", PORT));