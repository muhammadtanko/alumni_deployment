const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SetSchema = new Schema({
    yearOfGraduation: { type: Number, min: 1989, max: new Date().getFullYear() },
    classRep: { type: mongoose.Types.ObjectId, ref:"User"  },
},{
    timestamps:true
});

module.exports = mongoose.model('Set', SetSchema);


