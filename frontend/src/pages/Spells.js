import { useEffect, useState } from 'react'
import Spell from '../components/Spell'

const Spells = () => {
   const [spells, setSpells] = useState([])
   


   // fetch user's spells
   useEffect(() => {
      const fetchSpells = async () => {
        const res = await fetch('/api/spells')
        const json = await res.json()
  
        if (res.ok) {
          setSpells(json)
          console.log(json)
        }
      }
  
      fetchSpells()
    }, [])

   
   

   
   const handleClick = () => {
      
   } 

   return (
      <div className="spells-container">
         <button onClick={handleClick}>Add</button>

         {spells && spells.map(spell => 
            <Spell key={spell._id} spell={spell} />
         )}

      </div>
   )
}

export default Spells