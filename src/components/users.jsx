import React from "react";
import API from "../api/index.js";

const Users = () => {
  const api = API.users.fetchAll();
  return api;
};

export default Users;
