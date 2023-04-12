import React, { useState } from 'react';
const Welcome = () => {
    const [userExists, setUserExists] = useState();
    const [state, setState] = useState();
    const baseUrl = 'http://localhost:3000/users';
   let user = {name: ''};

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserExists(true)
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