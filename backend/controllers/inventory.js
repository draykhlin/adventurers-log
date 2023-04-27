const Inventory = require('../models/Inventory')
const mongoose = require('mongoose')


const getInventory = async (req,res) => {
   const inventoryItems = await Inventory.find()
   res.status(200).json(inventoryItems)
}

const addItem = async (req,res) => {
   const {name, qty} = req.body

   try {
      const item = await Inventory.create({name, qty})
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
      console.log(req.body.newQty)
      await Inventory.findByIdAndUpdate(
         id,
         {qty: req.body.newQty}
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




      // const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, )


      console.log('Updated quantity')
      //res.json('Updated qty')
   } catch(err) {
      console.log(err)
   }
}

const deleteItem = async (req,res) => {
   try {
      // await Inventory.findOneAndDelete({_id:req.body.itemIdFromJSFile})

      // await Inventory.findOneAndDelete({_id: req.params.id})

      await Inventory.findByIdAndDelete(req.params.id)


      // const item = await Inventory.findById(req.params.id)
      // if (!item) {
      //    res.status(400)
      //    throw new Error('Not found')
      // }
      // await item.remove()

      res.status(200).json({ id: req.params.id })
   } catch(err) {
      console.log(err)
   }
}

module.exports = {
   getInventory,
   addItem,
   updateQty,
   deleteItem
}