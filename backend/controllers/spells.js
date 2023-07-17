const Spells = require('../models/Spell')
const mongoose = require('mongoose')


const getSpells = async (req, res) => {
   try {
      const spellsFromServer = await Spells.find({userId: req.user.id})
      console.log('spells find success')
      res.status(200).json(spellsFromServer)
   } catch(err) {
      console.log('fetch error 2')
      // res.status(400).json({error: err.message})
   }
}

const addSpell = async (req, res) => {
   const {name, index} = req.body
   
   try {
      const spell = await Spells.create({name, index, userId: req.user.id})
      res.status(200).json(spell)
   } catch (err) {
      res.status(400).json({error: err.message})
   }
}

const updateSpell = async (req, res) => {
   const id = req.params.id
   try {
      console.log(req.body)
      await Spells.findByIdAndUpdate(
         id,
         {
            name: req.body.name,
            index: req.body.index,
            isAvailable: req.body.isAvailable
         }
      )
   } catch(err) {
      console.log(err)
   }
}

const deleteSpell = async (req, res) => {
   console.log(`deleted spell ${req.params.id}`)

   try {
      await Spells.findByIdAndDelete(req.params.id)
      res.status(200).json({ id: req.params.id })
   } catch(err) {
      console.log(err)
   }
}

module.exports = {
   getSpells,
   addSpell,
   updateSpell,
   deleteSpell
}