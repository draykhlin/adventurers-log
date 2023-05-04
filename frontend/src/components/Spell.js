import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spell = ({ spell }) => {
   const [allSpells, setAllSpells] = useState([])
   const [currentSpellName, setCurrentSpellName] = useState(spell.index)
   const [currentSpellData, setCurrentSpellData] = useState([])


   // fetch full spell list
   useEffect(() => {
      const fetchAllSpellData = async () => {
         const res = await fetch('https://www.dnd5eapi.co/api/spells')
         const json = await res.json()
         const spellsObj = json.results
         // console.log(spellsObj)
         setAllSpells(spellsObj)

         // parse spell names
         // setAllSpellNames(spellsObj.map(spell => spell.name))
      }

      fetchAllSpellData()
   }, [])

   // fetch current spell data
   useEffect(() => {
      const fetchCurrentSpellData = async () => {
         const res = await fetch(`https://www.dnd5eapi.co/api/spells/${currentSpellName}`)
         const json = await res.json()
         setCurrentSpellData(json)
      }

      fetchCurrentSpellData()
   }, [])


   return (
      <div className="spell-slot-container">
         <label>
            <select>
               {allSpells && allSpells.map(spell => 
                  <option value={spell.index}>{spell.name}</option>
               )}
            </select>
         </label>
         <p>{currentSpellData.desc}</p>
      </div>
   )
}

export default Spell