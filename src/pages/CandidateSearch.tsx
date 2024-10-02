import { useState, useEffect } from 'react';

import { searchGithub } from '../api/API';
import { Candidate, Response } from '../interfaces/Candidate.interface';

// import { CiBatteryEmpty } from "react-icons/ci";
// import { json } from 'react-router-dom';



const CandidateSearch = () => {
  const [results, setResults] = useState<Response[]>([]);  //state variable response[] is an array of response
  //use useEffect when something happens in the useState, useEffect is a hook that lets you perform side effects in function components
  const [candidate, setCandidate] = useState<Candidate | null>(); 
  // const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  //loading state variable, set to true
  // const [responseId, setResponseId] = useState<number>(0);  //handles the response variable, set to 0

  const fetchData = async() => {  //this is fetching the data from the searchGithub function api            
    //const data = await fetch('https://api.github.com/users?since=0');  //fetched data from the api
    const data = await searchGithub();  //fetched data from the api & react wants state variable..need to set it to the data
      //converting the data to json here, already done on searchGihub function
    console.log(data);    //logging it to the console.
    setCandidate({
      name: data[0].name,
      username: data[0].login,
      location: data[0].location,
      avatar: data[0].avatar_url,
      email: data[0].emails_url,
      hmtl_url: data[0].html_url,
      company: data[0].organizations_url,
      index: 0
    })
    setResults(data);  //react wants states variable..need to set it to the data
    setLoading(false);  //loading is done, data already is set, now need to set it to false
  }   //at this point the fetchData is done, and the data is stored in the results variable
      //but you will get an "undefined" at this point(<span> {results[0].repos_url}</span> in the Return).  Need to do a conditional rendering to check if the data is there or not.

  useEffect(() => {
    fetchData();     //useEffect is calling my fetchData function, if i ts in useEffect, then it'll only be called once and can't be called upon again.
    // return () => {
    //   // cleanup code, when our fucntion gets unmounted
    // }
  }, []);  //this is the dependency array, if we pass an empty array, it will only run once at this point "results" has my data from the api
  //if you passsomething in the array, it will run everytime that variable changes, if you pass nothing, it will only run once

 
  // const handleButtonClick = () => {
  //   setResponseId((candidate) => responseId + 1);
  // };
  

  const removeCandidate = () => {   //function to remove candidate, if remove it will call the search again
    const newIndex = candidate? candidate.index + 1: 0; 
    if (newIndex >= results.length) {
      fetchData();
      return;
    }
    setCandidate({
      name: results[newIndex].name,
      username: results[newIndex].login,
      location: results[newIndex].location,
      avatar: results[newIndex].avatar_url,
      email: results[newIndex].emails_url,
      hmtl_url: results[newIndex].html_url,
      company: results[newIndex].organizations_url,
      index: newIndex
    });
  };

  const addCandidate = () => {  //function to add candidate
    const storage = localStorage.getItem('candidates');         //making a call and grab from local storage
    const  pontentialCandidates = storage ? JSON.parse(storage) : [];   //if there is something in storage, then parse it, if not, then make it an empty array
    pontentialCandidates.push(candidate); //pushing the candidate into the array(pontentialCandidates)
    localStorage.setItem('candidates', JSON.stringify(pontentialCandidates));  //sending to local storage
    removeCandidate();  //calling this function bc its cycling through the candidates again after you have added
  }


  return (              //{resutls}, can store results from api here
    
    <div>
      {loading ? <h1> Loading...</h1> : null}
      <h1>CandidateSearch</h1>
      <div className='candidate'>
        {candidate !== null ? (
          // <h3> Candidates</h3>
          // <{...results} />
          <div className='candidate' style={{width: 400}}>
            <div className='candidate-card'>
              {/* <span role='img' aria-label='avatar'> </span> */}
              <h5 className='card-title'> {candidate?.username} </h5>
              <img src={candidate?.avatar} alt='avatar' />
              <h5> email: {candidate?.location} </h5>
              <h5> {candidate?.email} </h5>
              <h5> {candidate?.company} </h5>
              <button onClick={removeCandidate}> - </button>
              <span> {candidate?.hmtl_url}</span>   
              <button onClick={addCandidate}> + </button>
            </div>
          </div>
        ) : (
          <h1> No Candidates Found</h1>
        )}

       </div> 
    </div>

  );
}

export default CandidateSearch;
