 const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

let forms = mongoose.Schema({

  NAME:String,
  email:String,
  password:String,
  account_creation:String,
  line1:String,
  line2:String,
  state:String,
  city:String,
  zip_code: String,
  credit_card:String,
  expiry _date: String,
  CVV:String,
  billing_zip_code:String
});


let formNew = mongoose.model('formNew', forms);
  let save = (data => {
  
  for (var i = 0 ; i < data.length ; i++){
    
    var obj = {
      NAME:data[i].NAME,
      email:data[i].email,
      password: data[i].password,
      account_creation:data[i].,
	  line1:data[i].line1,
	  line2:data[i].line2,
	  state:data[i].state,
	  city:data[i].city,
	  zip_code: data[i].zip_code,
	  credit_card:data[i].credit_card,
	  expiry _date: data[i].expiry _date,
	  CVV:data[i].CVV,
	  billing_zip_code:data[i].billing_zip_code
    }
    var rebo = new formNew(obj);
    rebo.save()
}
})

module.exports.save = save;
module.exports.Repo =Repo;
