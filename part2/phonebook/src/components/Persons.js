import React, { useState } from 'react'
import Contact from './Contact'

const Persons = ( { contactsToShow }) => {
  return (
    <ul>
      {contactsToShow.map((person) => 
        <Contact key={person.name} person={person} />
      )}
    </ul>
  )
}

export default Persons