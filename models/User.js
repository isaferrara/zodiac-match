const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  email: String,
  password: String,
  birthDate: {
    day: Number,
    month: {
      type: Number,
      enum: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    year: Number,
    hour: Number,
    minutes: Number,
    place:{
      lat: Number,
      long: Number,
      timeZone: Number
    }
  },
  username:String,
  location: String,
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  profilePicture: String,
  match: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comp: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  version: {
    type: String,
    enum: ['basic', 'super']
  },
  post: [{
    type: Schema.Types.ObjectId,
    ref:'Post'
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


