const mongoose = require('mongoose')

const AuditSchema = new mongoose.Schema({
  audit:{
    type:String,
    required: [true, 'Please provide audit name'],
    maxlength:50,
  },
  started:{
    type:Date,
    required: [true, 'Please provide audit start date'],
  },
  ended:{
    type:Date,
  },
  issues:{
    type:Number,
  },
  status:{
    type:String,
    enum:['complete','outstanding','canceled'],
    default: 'outstanding',
  },
  createdBy:{    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true, 'Please provide user']
  }
}, { timestamps: true }
)

module.exports = mongoose.model('Audit', AuditSchema)