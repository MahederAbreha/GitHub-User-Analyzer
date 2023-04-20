import React, { useState } from 'react';
import Navigate from "react-router-dom"; 
const Welcome = () => {
    const [userExists, setUserExists] = useState();
   let user = {name: ''};

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserExists(true)
    }
    if (userExists) {
        return (
            <Navigate to = {{
              pathname: "/user",
            }}
            />
        );
          }


  return (
    <div>
      <h1>Welcome to our project</h1>
        <form onSubmit={handleSubmit}>
            type your name: <input type="text" name="name" onChange={e => user.name = e.target.value} />    
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default Welcome;