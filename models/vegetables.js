// const vegetables = [
//     {
//         name: 'potato',
//         color: 'brown',
//         readyToEat: true
//     },
//     {
//         name: 'broccoli',
//         color: 'yellow',
//         readyToEat: false
//     },
//     {
//         name: 'mushroom',
//         color: 'white',
//         readyToEat: true
//     },
//     {
//         name: 'corn',
//         color: 'yellow',
//         readyToEat: true
//     },
//     {
//         name: 'asparagus',
//         color: 'green',
//         readyToEat: true
//     }
// ];

// module.exports = vegetables

// creating the schema
const mongoose = require("mongoose")

const vegetableSchema = new mongoose.Schema({
    name:{type: String, required:true},
    color:{type: String, required: true},
    readyToEat: Boolean
},
{
    timestamps:true
})

// the model controls the data
const Vegetable = mongoose.model("Vegetable", vegetableSchema)

module.exports = Vegetable