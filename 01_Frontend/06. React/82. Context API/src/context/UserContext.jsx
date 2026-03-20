import React, { createContext, useContext } from 'react'

export const UserDataContext = createContext();

const UserContext = (props) => {
    const user = [
      {
        "postId": 1,
        "userId": 101,
        "username": "john_doe",
        "content": "Enjoying a sunny day at the beach 🌞",
        "likes": 120,
        "comments": 15,
        "date": "2026-01-10"
      },
      {
        "postId": 2,
        "userId": 102,
        "username": "sarah99",
        "content": "Just finished reading a great book!",
        "likes": 89,
        "comments": 8,
        "date": "2026-01-12"
      },
      {
        "postId": 3,
        "userId": 103,
        "username": "mike_t",
        "content": "Workout complete 💪 Feeling strong",
        "likes": 200,
        "comments": 25,
        "date": "2026-01-15"
      },
      {
        "postId": 4,
        "userId": 104,
        "username": "emily_w",
        "content": "Homemade pizza night 🍕",
        "likes": 150,
        "comments": 18,
        "date": "2026-01-18"
      },
      {
        "postId": 5,
        "userId": 105,
        "username": "alex_k",
        "content": "Traveling to Japan next week ✈️",
        "likes": 300,
        "comments": 40,
        "date": "2026-01-20"
      }
    ]

  return (
    <div>
        <UserDataContext.Provider value= {user} >
            {props.children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext