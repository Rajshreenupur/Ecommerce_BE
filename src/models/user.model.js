const mongoose =require ("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobike:{
        type:String,
    },

    //here I use foreign key 
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInformation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment_information"
        }
    ],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

//here i export the user model table

const User=mongoose.model("users",userSchema);
module.exports=User;