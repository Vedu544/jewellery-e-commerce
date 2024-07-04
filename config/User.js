const mongoose = require('mongoose');
const {isEmail}  = require('validator')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true,"please enter an email"],
    unique:true,
    lowercase:true,
    validate : [isEmail,'please enter a valid email']

  },
  password: {
    type: String,
    required: [true,"please enter a password"],
    minLength: [8,"minimum password length is 8 characters"]
  },
});


//fire a function befrore doc saved to db
//for registration or signup
userSchema.pre('save', async function(next){
  const salt =  await bcrypt.genSalt(); 
  this.password = await bcrypt.hash(this.password,salt)  
  next();               
})


//static method to login user
userSchema.statics.login = async function(email,password){  //function
  const user = await this.findOne({email});  //find email
  if(user){
    const auth = await bcrypt.compare(password, user.password); //cpmapre the hash password which is strored on database
    if(auth){ /// if auth is right 
      return user //return user
    }
    throw error('incorrect password')
  }
  throw error('incorret email') //if inputed email is not correct then it will throw error
}

const User = mongoose.model('user',userSchema)

module.exports = User



// hash is number of string which is added before to the password and added to the
// hashing algorithm and also added to password ,it will check for login
// "this." refers to thee instances of the user we are trying to create