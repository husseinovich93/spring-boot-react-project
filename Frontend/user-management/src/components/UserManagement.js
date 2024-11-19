import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUser, setEditUser] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCreateUser = async () => {
    try {
      await axios.post("http://localhost:8080/api/users", newUser);
      fetchUsers();
      setNewUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${editUser.id}`, editUser);
      fetchUsers();
      setEditUser({ id: "", name: "", email: "" });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      
      <h2>Create User</h2>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleCreateUser}>Create</button>

      <h2>Edit User</h2>
      <input
        type="text"
        value={editUser.name}
        onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={editUser.email}
        onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleUpdateUser}>Update</button>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => setEditUser(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;