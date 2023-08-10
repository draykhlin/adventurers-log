const Inventory = require('../models/Inventory')
const mongoose = require('mongoose')


const getInventory = async (req,res) => { 
   try {
      if (req.user) {
         const inventoryItems = await Inventory.find({userId: req.user.id})
         if (inventoryItems) {
            res.setHeader('Access-Control-Allow-Origin', 'https://adventurerslogapp.onrender.com')
            return res.json(inventoryItems)
         }
      } else {console.error('user not found when fetching inventory')}
   } catch (err) {
      console.error('console.error: error fetching inventory')
      res.status(500).json({error: 'error fetching inventory' })
   }
}
      


const addItem = async (req,res) => {
   const {name, qty, notes} = req.body

   try {
      // if (req.user.id === '64a715f26d2a81cb93dc8a6b') {
      //    console.log('guest user')
      //    db.inventories.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 10 } )
      //    const item = await Inventory.create({name, qty, notes, userId: req.user.id, createdAt: new Date()})
      // } else {
      //    const item = await Inventory.create({name, qty, notes, userId: req.user.id})
      // }
      const item = await Inventory.create({name, qty, notes, userId: req.user.id})
      res.status(200).json(item)
   } catch (error) {
      res.status(400).json({error: error.message})
   }
   
   // try {
   //    await Inventory.create({item: req.body.itemName, qty: !req.body.itemQty ? 1 : req.body.itemQty})
   //    console.log('Item added')
   //    res.redirect('/inventory')
   // } catch(err) {
   //    console.log(err)
   // }
}   

const updateQty = async (req,res) => {
   const id = req.params.id
   try {
      await Inventory.findByIdAndUpdate(
         id,
         {
            qty: req.body.qty,
            notes: req.body.notes
         }
      )

      
      ////////Example///////
      // const updateDocument = async (id) => {
      //    try {
      //      const updatedResult = await User.findByIdAndUpdate(
      //        { _id: id },
      //        {
      //          profession: "Backend Developer",
      //        },
      //      );
      //      console.log(updatedResult);
      //    } catch (error) {
      //      console.log(error);
      //    }
      //  };
      ////////////////////////

      console.log('Updated quantity')
   } catch(err) {
      console.log(err)
   }
}

// const deleteItem = async (req,res) => {
//    try {
//       await Inventory.findByIdAndDelete(req.params.id)


//       res.status(200).json({ id: req.params.id })
//    } catch(err) {
//       console.log(err)
//    }
// }

const deleteItem = (req, res) => {
   Inventory.findByIdAndDelete(req.params.id, (err, deletedItem) => {
      if (err) {
         return res.status(500).json({error: 'Failed to delete'})
      }

      if (!deletedItem) {
         return res.status(404).json({error: 'Item not found'})
      }

      return res.json({message: 'Item deleted successfully'})
   })
}

module.exports = {
   getInventory,
   addItem,
   updateQty,
   deleteItem
}