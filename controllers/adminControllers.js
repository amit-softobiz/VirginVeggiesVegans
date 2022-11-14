const Admin = require("../models/adminServices");

exports.adminCreate = async(req, res)=> {
  try {
    const admin = await Admin.create({ name: "amit kumar", email: "amit@gmail.com", password: "seed1234", age: "25", address: { street: "soni hospital", city: "panipat" } })
    console.log(admin);
  } catch (e) {
    console.log(e.message);
  }
}
exports.adminFind = async(req, res)=> {
    try {
      const admin = await Admin.find({});
      console.log(admin);
      res.status(200).send(admin);
    
    } catch (e) {
      console.log(e.message);
    }
   }
