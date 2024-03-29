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
      }

      fetchAllSpellData()
   }, [])

   // fetch user's spells
   const fetchUserSpells = async () => {
      try {
         const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/spells/', {
            credentials: "include"
         })
         const json = await res.json()
         setUserSpells(json)
      } catch (err) {
         console.log('fetch error')
      }
   }
   
   useEffect(() => {  
      fetchUserSpells()
    }, [])

   
   const handleClick = async (e) => {
      e.preventDefault()

      const newSpell = {
         name: "",
         index: "",
      }
      // setUserSpells([...userSpells, newSpell])

      const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/spells', {
         method: 'POST',
         body: JSON.stringify(newSpell),
         headers: {
            'Content-Type': 'application/json',
         },
         credentials: "include"
      })
      const json = await res.json()

      if (res.ok) {
         fetchUserSpells()
      }

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

   const handleDelete = async (id) => {
      await fetch(`https://adventurers-log-server-bw9t.onrender.com/api/spells/${id}`, {
         method: 'DELETE',
         credentials: "include"
      })

      await setUserSpells(userSpells.filter((spell) => spell._id !== id))
   }

   return (
      <>
      <div className="help-info">
         <strong>
            Keep track of your spells and their availability for casting.
         </strong>
         <p>
            Spell slots represent each player's limited reservoir of magic. Once a spell is cast, the slot is expended until the player can rest.
         </p>
         
      </div>
      <section className="spells-container">
         <button className="add-button" onClick={handleClick}>Add spell slot</button>

         <div className="spell-slots-container">
            {userSpells && userSpells.map(spell => 
               <Spell key={spell._id} allSpells={allSpells} spell={spell} updateSpell={updateSpell} onDelete={handleDelete} />
            )}
         </div>
      </section>
      </>
   )
}

export default Spells