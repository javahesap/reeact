import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/sersSlice";

const App = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.image} alt={user.firstName} />
            <div>{user.firstName} {user.lastName}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </ul>
    );
  } else if (status === "failed") {
    content = <div>Error: {error}</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User List</h1>
      {content}
    </div>
  );
};

export default App;
