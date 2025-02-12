import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../store/actions';

function RepoPage() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="users-list">
          {repos.map((repo) => (
            <div key={repo.id} className="user-card">
              <img src={repo.avatar_url} alt={repo.node_id} />
              <h3>{repo.login} {repo.lastName}</h3>
              <p>Email: {repo.email}</p>
              <p>Phone: {repo.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RepoPage;
