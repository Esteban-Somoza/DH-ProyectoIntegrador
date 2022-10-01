import React from 'react'
import { Link } from "react-router-dom";
import '..'
export default function Users({users}) {
console.log(users);

  return (
   
            <div className="adminContainer">
              <div>
                {users &&
                  users.map((user, index) =>  <img key={index} src={user.imagen} />)}
              </div>
            </div>
  )
}
