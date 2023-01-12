const mongoose = require('mongoose');
require("../models/Task")
const Task = mongoose.model('Task');


exports.get = async() => {
    const res = await Task.find({active: true}, 'title');
    return res;
}

exports.getById = async(id) =>{
    const res = await Task.findById(id);
    return res;
}

exports.create = async(data) => {
  var task = new Task(data);
  await task.save();  
}


exports.update = async(id, data) =>{
    await Task.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            content: data.content
        }
      
    })
}

exports.delete = async(id) => {
    await Task.findOneAndDelete(id)
 }

