import React from "react";

const users = [
  { id: 1, name: "Ahmet", age: 25 },
  { id: 2, name: "Mehmet", age: 30 },
  { id: 3, name: "Zeynep", age: 22 },
];

const UserItem = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong> - Yaş: {user.age}
    </li>
  );
};

const UserList = () => {
  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
