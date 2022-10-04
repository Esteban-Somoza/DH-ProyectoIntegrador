import React, { FC, useContext} from "react";
import { Route } from "react-router-dom";
import PublicLogin from "../pages/PublicLogin";
import { userContext } from "../context/UserContext";

export default function AuthService(props) {
   const {user, userSet} = useContext(userContext)
   console.log(props);
   return (
      <Route >{user ? props.component : <PublicLogin />}</Route>
   );
}
