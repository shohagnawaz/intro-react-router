import React from "react";
import { useLoaderData } from "react-router-dom";
import Dude from "../components/Dude/Dude";

const Friends = () => {
  const friends = useLoaderData();
//   console.log(friends);

  return (
    <div>
      <h2>These are my friends: {friends.length}</h2>
      <div>
        {friends.map((friend) => (
          <Dude key={friend.id} friend={friend}></Dude>
        ))}
      </div>
    </div>
  );
};

export default Friends;
