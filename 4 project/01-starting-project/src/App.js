import React, { useState, Fragment } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={users} />
    </Fragment>
  );
};

export default App;
