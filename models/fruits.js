// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
//   ];

//   module.exports = fruits

// creating the schema
const mongoose = require("mongoose")

const fruitSchema = new mongoose.Schema({
    name:{type: String, required:true},
    color:{type: String, required: true},
    readyToEat: Boolean
},
{
    timestamps:true
})

// the model controls the data
const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit