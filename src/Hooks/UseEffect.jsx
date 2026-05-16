// Common Use Cases:
// Data Fetching: Loading information from an API when a page loads.
// Subscriptions: Setting up a connection to a chat service or a 
// WebSocket.Timers: Starting a setTimeout or setInterval.DOM 
// Manipulation: Updating the document title or interacting with e
// xternal libraries that need direct DOM access 

import { useEffect, useState } from "react"


 const UseEffect = () => {


    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        //fetch data
        fetch('https://api.github.com/users/octocat')
        .then((response)=> response.json())
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
    },[])  // [] means "run only once when the component mounts

    if(loading) return <p>Loading data..</p>;
  return (
    <div className="flex "><h1>UseEffect Hooks</h1>
      <div>
        {/* Time counting: {count} */}
        <h2>{user.name}</h2>
        <h2>{user.bio}</h2>
        
      </div>
    </div>
    

  )
}

export default UseEffect