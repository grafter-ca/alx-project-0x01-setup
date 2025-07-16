import Header from "@/components/layout/Header";
import React from "react";

const dummyUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
];

const UsersPage: React.FC = () => {
  return (

    <>
      <Header />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul className="space-y-4">
        {dummyUsers.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow rounded hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700">{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
    </>
  );
};

export default UsersPage;
