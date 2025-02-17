import React from 'react';
import { useSelector } from 'react-redux';
import withLoading from '../hoc/withLoading';
import CustomLoader from '../hoc/CustomLoader';
import { fetchUsers } from '../store/actions';


function UsersPage() {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <h2>Users</h2>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.firstName} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Bekleme süresi 2000ms (2 saniye)
export default withLoading(UsersPage, fetchUsers, (state) => state.users, {
  loadingMessage: "Kullanıcılar yükleniyor...",
  LoadingComponent: CustomLoader,
  minLoadingTime: 2000
});
