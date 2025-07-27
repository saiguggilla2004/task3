import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f2f4f8",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <UserCard name="Sai Guggilla" email="sai@example.com" />
    </div>
  );
}

export default App;
