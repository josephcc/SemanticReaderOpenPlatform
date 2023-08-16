'use client'

import { useEffect, useState } from 'react'
import Person, { PersonType } from './person';



function shuffle(array: any[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function PersonShuffleList({people}: {people: PersonType[]}) {
  const [shuffled, _] = useState(shuffle(people))
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && shuffled.map(person => (
        <div className="relative flex flex-col items-center p-6" key={person.name}>
          <Person {...person} />
        </div>
      ))}
    </>
  )
}