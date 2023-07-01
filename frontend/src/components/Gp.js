import { useState, useEffect } from 'react'

const Gp = () => {
   // const [gp, setGp] = useState([])
   // const [cp, setCp] = useState([])
   // const [sp, setSp] = useState([])
   // const [pp, setPp] = useState([])
   // const [gpAmounts, setGpAmounts] = useState(0)
   const [gpData, setGpData] = useState(null)

   useEffect(() => {
      const fetchGp = async () => {
         try {
            const res = await fetch('/api/gp')
            const data = await res.json()
            console.log(`data: ${data}`)
            setGpData(data)
            // console.log(data)
            // const {money} = await data
            // console.log(`gp amount is: ${money}`)
            // await setGpAmounts(money)
            // console.log(`gpamounts: ${gpAmounts}`)
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
         {/* <div className="gp-items">
            <div className="gp-item">
               <p>GP (Gold)</p>
               <p>{gpAmounts.gp}</p>
            </div>
            <div className="gp-item">
               <p>CP (Copper)</p>
               <p>{gpAmounts.cp}</p>
            </div>
            <div className="gp-item">
               <p>SP (Silver)</p>
               <p>{gpAmounts.sp}</p>
            </div>
            <div className="gp-item">
               <p>PP (Platinum)</p>
               <p>{gpAmounts.pp}</p>
            </div>
         </div> */}
         
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