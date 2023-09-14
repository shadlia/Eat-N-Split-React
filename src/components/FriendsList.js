import { useState } from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, Onselection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          Onselection={Onselection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
