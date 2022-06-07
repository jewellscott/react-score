import React from 'react'
import { useState } from 'react';

const Team = ({ name }) => {

  const [ score, setScore ] = useState(0);

  return (
    <div
      name={name}
    >          
      <p class="score">{score}</p>
      <h2>{name}</h2>
      <button class="btn inc" onClick={() => setScore(score + 1)}> ++ </button>
      <button class="btn dec"  onClick={() => setScore(score - 1)}> -- </button>
    </div>
  )
}

export default Team