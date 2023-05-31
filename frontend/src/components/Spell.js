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
      <div className="spell-card">
         <section className="spell-slot-controls">
            <div className="slot-toggle">
            {isAvailable ? 
                  <>
                  <FontAwesomeIcon icon="toggle-on" size="lg" className="toggle-on" style={{ cursor: "pointer" }} onClick={handleToggle} />
                  <h4>Available</h4>
                  </>
                  :
                  <>
                  <FontAwesomeIcon icon="toggle-off" size="lg" style={{ cursor: "pointer"}} onClick={handleToggle} />
                  <h4>Expended</h4>
                  </>
               }
            </div>

            <FontAwesomeIcon icon="times" size="xl" style={{ cursor: "pointer"}} onClick={() => onDelete(spell._id)} />
         </section>
         
         <label>
               <select className="spell-select" onChange={handleChange}>
                  {allSpells && allSpells.map(spell => 
                     <option value={spell.index}>{spell.name}</option>
                  )}
               </select>
         </label>

         <h3>{currentSpellData.name}</h3>
         
         <div className="stats">
            <div className="stat">
               <h4>Level</h4>
               <p>{currentSpellData.level}</p>
            </div>

            <div className="stat">
               <h4>Casting Time</h4>
               <p>{currentSpellData.casting_time}</p>
            </div>

            <div className="stat">
               <h4>Range</h4>
               <p>{currentSpellData.range}</p>
            </div>

            <div className="stat">
               <h4>Components</h4>
               <p>{currentSpellData.components && currentSpellData.components.map((spellComponent, i) => {
                  // {i > 0 && ", "},  spellComponent
                  if (i > 0) {return `, ${spellComponent}`}
                  else {return spellComponent}
                  }
               )}</p>
            </div>

            <div className="stat">
               <h4>Duration</h4>
               <p>{currentSpellData.duration}</p>
            </div>

            <div className="stat">
               <h4>Classes</h4>
               <p>{currentSpellData.classes && currentSpellData.classes.map((spellClass, i) => {
                  if (i > 0) {return `, ${spellClass.name}`}
                  else {return spellClass.name}
                  }
               )}</p>
            </div>
         </div>

         <div className="spell-desc">
            <h4>Description</h4>
            <p>{currentSpellData.desc}</p>
         </div>
         
      </div>
   )
}

export default Spell