import { useReducer } from "react";

function UseReducer(count,action) {
      switch(action){
         case'Increment':
         return count +1;
         case 'Decrement':
        return count -1;
        case 'Reset':
             return 0;
           default :
           return count;
      }
    }

 
  const SimpleCounter=()=>{
  const [count,dispatch]= useReducer(UseReducer,0);
 return (
     <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> dispatch('Increment')}>Increment + 1</button>
  <button onClick={()=> dispatch('Decrement')}>Deccrement - 1</button>
  <button onClick={()=> dispatch('Reset')}>Reset</button>
     </div>

  
 )
  }

export default SimpleCounter