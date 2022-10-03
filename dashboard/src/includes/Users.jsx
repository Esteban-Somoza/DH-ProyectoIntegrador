import React from "react";
import { Link,useParams } from "react-router-dom";

export default function Users({ users }) {
  let { id } = useParams();
  return (
    <div className="adminContainer">
      <div>
      
        {users &&
          users.map((user, index) => (
            <Link key={index} to={`/usuarios/${user.id}`}>
             
              <img src={user.imagen} />
            </Link>
          ))}
      </div>
    </div>
  );
}
