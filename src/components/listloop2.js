import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ahmet", age: 25 },
    { id: 2, name: "Mehmet", age: 30 },
  ]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: "Yeni Kullanıcı", age: 20 };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - Yaş: {user.age}
          </li>
        ))}
      </ul>
      <button onClick={addUser}>Yeni Kullanıcı Ekle</button>
    </div>
  );
};

export default UserList;
