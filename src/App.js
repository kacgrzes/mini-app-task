import React, { useEffect, useState } from "react";
import { fetchUsers } from "./services/UserService";

function App(props) {
  const [users, setUsers] = useState([]);
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users);
    });
  }, []);

  const toggleFavorite = id => {
    if (favoriteUsers.includes(id)) {
      favoriteUsers.filter(user => id !== user.id);
    } else {
      [...favoriteUsers, id];
    }
    setFavoriteUsers(favoriteUsers);
    localStorage.setItem("favUsers", JSON.stringify(favoriteUsers));
  };

  if (users.length === 0) {
    return <Loader />;
  } else {
    return <UsersList users={users} onFavorite={toggleFavorite} />;
  }
}

export default App;
