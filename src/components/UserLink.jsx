import React from "react";
import { Link } from "react-router-dom";

const UserLink = ({user, variant, id}) => {
    
    return (
        <Link to={`/users/${id}`} className={variant} >{user}</Link>
    )
}


export default UserLink


