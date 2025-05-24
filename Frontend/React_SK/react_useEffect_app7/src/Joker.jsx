
//*  Activity : to see use casese of useEffect in asyncronous operations


import { useState, useEffect } from "react";

export default function Joker() {

    let [joke, setJoke] = useState({
        setup: "",
        punchline: "",
    });

    const URL = "https://official-joke-api.appspot.com/random_joke";

    async function handleNewJoke () {
     let response = await fetch(URL);
     let jsonResponse = await response.json(); // response come in promise object format, we need to convert that into json first 
     console.log(jsonResponse); 
     setJoke( {
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
     }
     );
    };

/*

*  USE OF useEffect
?  Why need ? where we use ?  
   - before using useEffect, Our joke game is fine, but after refresh their is no joke coming , only when we click on Get joke button then joke come
   - to fix that, we send request on URl to get our first joke while Rendering first time

*/ 

// useEffect()
   useEffect(
    () => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke(
                {
                    setup: jsonResponse.setup,
                    punchline: jsonResponse.punchline,
                }
            )
        }
        getFirstJoke();
    },
    []
   );


/*
! Dont directly pass async setup/ sideEffect function in useEffect (react suggest)

    @react-refresh:267 useEffect must not return anything besides a function, which is used for clean-up.
    It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

    useEffect(() => {
    async function fetchData() {
        You can await here
        const response = await MyAPI.getData(someId);
        ...
    }
    fetchData();
    }, [someId]); // Or [] if effect doesn't need props or state

*/
   
    return(
        <div>
            <h2>Jokes</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <br />
            <button onClick={handleNewJoke}>Get Joke</button>
        </div>
    );
};