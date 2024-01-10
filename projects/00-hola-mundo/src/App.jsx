import React from "react";
import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "darwin06",
    name: "Darwin Mateos",
    isFollowing: true,
  },
  {
    userName: "jondoe",
    name: "Jon Doe",
    isFollowing: false,
  },
  {
    userName: "jeandoe",
    name: "Jean Doe",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
