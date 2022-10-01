import React from 'react'
import { Link } from "react-router-dom";

export default function Users({ users }) {

  return (

    <div className="adminContainer">
      <div>
        {users &&
          users.map((user, index) => <img key={index} src={user.imagen} />)}
      </div>
    </div>
  )
}
