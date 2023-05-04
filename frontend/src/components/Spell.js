import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spell = ({ spell }) => {

   return (
      <div className="spell-slot-container">
         <p>{spell.name}</p>
      </div>
   )
}

export default Spell