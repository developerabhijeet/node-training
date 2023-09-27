const User = require("../models/user");
const path = require("path");
const fs = require("fs");
const userData = require("../../user.json");
let user: any = userData;

export const getUser = async (req, res) => {
  res.send(user).status(200);
};

export const getSingleUser = async (req, res) => {
  const singleUser = user.find((user: any) => user.id === req.params.id);
  const userData =
    singleUser !== undefined ? singleUser : { message: "No data found!" };
  res.send(userData).status(200);
};

// create a new User
export const createUser = async (req, res) => {
  const newUser = req.body;
  user.push(newUser);
  res.send(user).status(201);
};

// update User
export const updateUser = async (req, res) => {
  const updateUser = user.map((sUser: any) =>
    sUser.id == req.params.id ? req.body : sUser
  );
  const userData =
    updateUser.length > 0 ? updateUser : { message: "No user found!" };
  user = updateUser;
  res.send(userData).status(200);
};

// delete user
export const deleteUser = async (req, res) => {
  const filterUsers = user.filter((user: any) => user.id !== req.params.id);
  const userData =
    filterUsers.length !== user.length
      ? { message: "user deleted successfully" }
      : { message: "No user found!" };
  user = filterUsers;
  res.send(userData).status(200);
};
