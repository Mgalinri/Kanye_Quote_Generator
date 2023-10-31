import React,{useState,useEffect} from 'react' ;
//Adds the stylesheet
import './app.css';

 function Header(){
   
    const[head,setHead]=useState(false);
      //Fetches the API
     const click = async() =>{fetch('https://api.kanye.rest/')
    .then((response) => response.json())
    .then((data)=> {
        setHead(data.quote);
       
    })
    .catch((err) => {
       console.log(err.message);
    }); 
     }


    
    return <header>
        <div className='container'>
        <div className='quote'>
        <h1>{head}</h1>
        <p>Kanye West</p>
        <button onClick={click} className='button' >Refresh</button>
        </div>
        </div>
    </header>
}

export default Header