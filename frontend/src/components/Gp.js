import { useState, useEffect } from 'react'

const Gp = () => {
   const [currencies, setCurrencies] = useState({})
   const [amountToUpdate, setAmountToUpdate] = useState(0)
   const [currencyToUpdate, setCurrencyToUpdate] = useState("gp")

   useEffect(() => {
      const fetchGp = async () => {
         try {
            const res = await fetch('https://adventurers-log-server-bw9t.onrender.com/api/gp', {
               method: 'GET',
               credentials: "include"
            })
            const data = await res.json()
            setCurrencies(data.currencies)
         } catch (err) {
            console.log(`fetchGp error: ${err}`)
         }
         // if (res.ok) {
         //    await setGpAmounts(currencies)
         // }
      }
      fetchGp()
   }, [])

   const handleSubtract = () => {
      setCurrencies((prevCurrencies) => ({
         ...prevCurrencies,
         [currencyToUpdate]: prevCurrencies[currencyToUpdate] - amountToUpdate
      }))
   }

   const handleAdd = () => {
      setCurrencies((prevCurrencies) => ({
         ...prevCurrencies,
         [currencyToUpdate]: prevCurrencies[currencyToUpdate] + amountToUpdate
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      await fetch('https://adventurers-log-server-bw9t.onrender.com/api/gp', {
         method: 'PATCH',
         body: JSON.stringify(currencies),
         headers: {
            'Content-Type': 'application/json'
         },
         credentials: "include"
      })
   }

   return (
      <>
      <div className="gp-container card">
         <h3>Currency</h3>
         <div className="gp-wrapper">
            <div className="gp-items">
               <div className="gp-item">
                  <p>GP (Gold)</p>
                  <p>{currencies.gp}</p>
               </div>
               <div className="gp-item">
                  <p>CP (Copper)</p>
                  <p>{currencies.cp}</p>
               </div>
               <div className="gp-item">
                  <p>SP (Silver)</p>
                  <p>{currencies.sp}</p>
               </div>
               <div className="gp-item">
                  <p>PP (Platinum)</p>
                  <p>{currencies.pp}</p>
               </div>
            </div>
            
            <form className="gp-form" onSubmit={handleSubmit}>
               <input type="number" className="gp-select-qty" onChange={(e) => setAmountToUpdate(parseInt(e.target.value))} />

               <select className="gp-select-denomination" defaultValue="gp" onChange={(e) => setCurrencyToUpdate(e.target.value)}>
                  <option value="gp">GP</option>
                  <option value="cp">CP</option>
                  <option value="sp">SP</option>
                  <option value="pp">PP</option>
               </select>

               <button type="submit" className="gp-subtract-btn" onClick={handleSubtract}>Subtract</button>
               <button type="submit" className="gp-add-btn" onClick={handleAdd}>Add</button>
            </form>
         </div>
      </div>
      </>
   )
}

export default Gp