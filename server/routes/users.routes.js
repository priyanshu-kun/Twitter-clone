const express = require("express")
const Router = express.Router()
const {registerUser,fetchUser,updateUser,deleteUser} = require("../controllers/users.controllers")

Router.post("/register",registerUser)
Router.get("/",fetchUser)
Router.put("/update",updateUser)
Router.delete("/delete",deleteUser)