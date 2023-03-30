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
   try {
      await Inventory.findOneAndUpdate({_id: req.body.itemIdFromJSFile}, {
            qty: req.body.itemQtyFromJSFile
      })
      console.log('Updated quantity')
      //res.json('Updated qty')
   } catch(err) {
      console.log(err)
   }
}

const deleteItem = async (req,res) => {
   try {
      await Inventory.findOneAndDelete({_id:req.body.itemIdFromJSFile})

      // delete
      console.log('Deleted item')
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