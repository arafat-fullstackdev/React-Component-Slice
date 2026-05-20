import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [user,setUser]= useState([]);
  const [loading,setLoading]= useState(true);
  const [error,setError]= useState(null);

   useEffect(()=>{
    //define 
    const fetchUser= async () =>{
      try{
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if(!response.ok){
          throw new error("Network failed! try again")
        }

        const data = await response.json();
        setUser(data);
      } catch(err){
        setError(err.message)
      } finally{
        setLoading(false);
      }
    };
    fetchUser();
   },[error]);

   if(loading) return <p>Loading data...</p>
   if(error) return <p>Network failde!</p>
  return (
    <div>UseEffect
      <ul>
        {user.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect