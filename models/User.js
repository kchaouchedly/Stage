const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose')
const UserSchema = mangoose.Schema({

cin : {
    type : Number, 
    required : true
},
Nom : {
    type : String, 
    required : true
},
Prenom  : {
    type : String, 
    required : true
},
Email : {
    type : String, 
    required : true
}
}); 

//module.exports = user = mongoose.model('User', UserSchema )
const User = mongoose.model('User', UserSchema )
module.exports = User 

