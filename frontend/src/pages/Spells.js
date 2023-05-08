import { useEffect, useState } from 'react'
import Spell from '../components/Spell'

const Spells = () => {
   const [userSpells, setUserSpells] = useState([])
   const [allSpells, setAllSpells] = useState([])

   // fetch full spell list
   useEffect(() => {
      const fetchAllSpellData = async () => {
         const res = await fetch('https://www.dnd5eapi.co/api/spells')
         const json = await res.json()
         const spellsObj = json.results
         setAllSpells(spellsObj)

         // parse spell names
         // setAllSpellNames(spellsObj.map(spell => spell.name))
      }

      fetchAllSpellData()
   }, [])

   // fetch user's spells
   useEffect(() => {
      const fetchUserSpells = async () => {
        const res = await fetch('/api/spells')
        const json = await res.json()
  
        if (res.ok) {
          setUserSpells(json)
        }
      }
  
      fetchUserSpells()
    }, [])

   
   const handleClick = async (e) => {
      e.preventDefault()

      const newSpell = {
         name: "",
         index: ""
      }
      setUserSpells([...userSpells, newSpell])

      const res = await fetch('api/spells', {
         method: 'POST',
         body: JSON.stringify(newSpell),
         headers: {
            'Content-Type': 'application/json'
         }
      })
      const json = await res.json()

      if (!res.ok) {
         console.log(json.error)
      }
   } 

   const updateSpell = async (updatedSpell) => {
      const updatedSpells = userSpells.map(spell => {
         if (spell._id === updatedSpell._id) {
            return updatedSpell
         } else {
            return spell
         }
      })
      
      setUserSpells(updatedSpells)
   }

   return (
      <div className="spells-container">
         <button onClick={handleClick}>Add</button>

         {userSpells && userSpells.map(spell => 
            <Spell key={spell._id} allSpells={allSpells} spell={spell} updateSpell={updateSpell} />
         )}

      </div>
   )
}

export default Spells