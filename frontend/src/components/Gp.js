import { useState, useEffect } from 'react'

const Gp = () => {
   const [money, setMoney] = useState({})

   useEffect(() => {
      const fetchGp = async () => {
         try {
            const res = await fetch('/api/gp')
            const data = await res.json()
            console.log(`data: ${data}`)
            setMoney(data.money)
         } catch (err) {
            console.error(err)
         }
         // if (res.ok) {
         //    await setGpAmounts(money)
         // }
      }
      fetchGp()
   }, [])


   return (
      <>
      <div className="gp-container card">
         <div className="gp-items">
            <div className="gp-item">
               <p>GP (Gold)</p>
               <p>{money.gp}</p>
            </div>
            <div className="gp-item">
               <p>CP (Copper)</p>
               <p>{money.cp}</p>
            </div>
            <div className="gp-item">
               <p>SP (Silver)</p>
               <p>{money.sp}</p>
            </div>
            <div className="gp-item">
               <p>PP (Platinum)</p>
               <p>{money.pp}</p>
            </div>
         </div>
         
         <form className="gp-form">
            <input type="number" className="gp-select-qty"></input>
            
            <select className="gp-select-denomination">
               <option value="gp" selected>GP</option>
               <option value="cp">CP</option>
               <option value="sp">SP</option>
               <option value="pp">PP</option>
            </select>

            <button type="submit">Subtract</button>
            <button type="submit">Add</button>
         </form>
      </div>
      </>
   )
}

export default Gp





// const handleSave = async () => {
//    try {
//       const res = await fetch('/api/gp', {
//          method: 'POST',
//          headers: {
//             'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({

//                currency: 'gp',
//                amount: 100,
             
//          }),
//       })
//       if (res.ok) {
//          console.log('Document saved successfully');
//          // Additional logic or UI updates
//        } else {
//          console.error('Error saving document');
//          // Handle error case
//        }
//    } catch (error) {
//       console.error(`Model error: ${error}`)
//    }
// }
// useEffect(() => {
//    handleSave()
// }, [])