import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spell = ({ allSpells, spell, updateSpell, onDelete }) => {
   const [currentSpellName, setCurrentSpellName] = useState(spell.index)
   const [currentSpellData, setCurrentSpellData] = useState([])
   const [isAvailable, setIsAvailable] = useState(spell.isAvailable)

   
   // fetch current spell data
   useEffect(() => {
      const fetchCurrentSpellData = async () => {
         const res = await fetch(`https://www.dnd5eapi.co/api/spells/${currentSpellName}`)
         const json = await res.json()
         setCurrentSpellData(json)
      }

      fetchCurrentSpellData()
   }, [currentSpellName])

   const handleChange = async (e) => {
      const newSpell = e.target.value
      await setCurrentSpellName(newSpell)
      const updatedSpell = {...spell, index: newSpell}

      await fetch(`/api/spells/${spell._id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedSpell),
         headers: {
         'Content-Type': 'application/json'
         }
      })
      
      await updateSpell(updatedSpell)
   }

   const handleToggle = async () => {
      await setIsAvailable(!isAvailable)
      
      const updatedSpell = {...spell, isAvailable: !isAvailable}

      await fetch(`/api/spells/${spell._id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedSpell),
         headers: {
         'Content-Type': 'application/json'
         }
      })

   }

   return (
      <div className="spell-slot-container">
         <section className="spell-slot-controls">
            <label>
               <select onChange={handleChange}>
                  {allSpells && allSpells.map(spell => 
                     <option value={spell.index}>{spell.name}</option>
                  )}
               </select>
            </label>

            <div style={{ display: "flex" }}>
               {isAvailable ? 
                  <>
                  <h4>Available</h4>
                  <FontAwesomeIcon icon="toggle-on" size="lg" style={{color: "#ff4f88"}} onClick={handleToggle} />
                  </>
                  :
                  <>
                  <h4>Expended</h4>
                  <FontAwesomeIcon icon="toggle-off" size="lg" onClick={handleToggle} />
                  </>
               }

               <FontAwesomeIcon icon="times" onClick={() => onDelete(spell._id)} />
            </div>
         </section>
         
         
         <h3>{currentSpellData.name}</h3>
         
         <h4>Level</h4>
         <p>{currentSpellData.level}</p>
         
         <h4>Casting Time</h4>
         <p>{currentSpellData.casting_time}</p>

         <h4>Description</h4>
         <p>{currentSpellData.desc}</p>
         




      </div>
   )
}

export default Spell