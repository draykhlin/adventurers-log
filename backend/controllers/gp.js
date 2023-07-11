const Gp = require('../models/Gp')
const User = require('../models/User')
const mongoose = require('mongoose')


// const getGp = async (req, res) => {
//    const currentUser = await User.findOne({_id: req.user.id})
//    if (res.status === 200) {
//       console.log('user found')
//       return res.json(currentUser)
//    } else {
//       console.log(res.status())
//       console.log('user not found')
//    }
// }

const getGp = async (req, res) => {
   try {
     const currentUser = await User.findOne({ _id: req.user.id });
     if (currentUser) {
       console.log('User found');
       return res.json(currentUser);
     } else {
       console.log('User not found');
       return res.status(404).json({ message: 'User not found' });
     }
   } catch (error) {
     console.log('Error occurred:', error);
     return res.status(500).json({ message: 'Internal Server Error' });
   }
 };

const updateGp = async (req, res) => {
   // const userId = req.user.id
   try {
      console.log(req.body)
      await User.findByIdAndUpdate(
         {_id: req.user.id},
         {currencies: req.body},
         { new: true }
         // {
         //    qty: req.body.qty,
         //    notes: req.body.notes
         // }
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
   getGp,
   updateGp
}