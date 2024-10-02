import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
const [candidates, setCandidates] = useState<Candidate[]>([]);  //state variable response[] is an array of response


useEffect(() => {
  if (localStorage.getItem('candidates')) {
    setCandidates(JSON.parse(localStorage.getItem('candidates')!)); //if there is something in local storage, then parse it, then get it
  } 
 
}, []);

useEffect(() => {
  if(candidates) {
    localStorage.setItem('candidates', JSON.stringify(candidates)); // if there is something in candidates, then stringify it and set it to local storage
  }
}); [candidates];

  if(candidates.length === 0) {
    return (
      <h1> No Candidates Saved </h1>
    );
  }

  return (
    <>
      <h1>Potential Candidates</h1>

      <div className="potential-candidat">
        <p className="table">Table of Candidates</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.name}</td>
                <td>{candidate.username}</td>
                <td>{candidate.location}</td>
                <td>{candidate.company}</td>
                <td>{candidate.email}</td>
              </tr>
            ))}
          </tbody>
          </table>
        
 
      </div>

    </>
  );
};


export default SavedCandidates;
