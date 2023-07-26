const mongoose = require('mongoose')
const BlogShema = new mongoose.Schema({
  userId:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  title:{
    type: String,
    required: true,
    min:4,
  },
  desc:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
    required:true,
  },
  chategory:{
    type:String,
    required:true
  },
  featured:{
    type:Boolean,
    default: false
  },
  views:{
    type: Number,
    default:0
  },
  likes:{
    type:[String],
    default:[]
  },
},{timestamps:true});
module.exports = mongoose.model('Blog',BlogShema);