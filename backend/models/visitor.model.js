import  Mongoose  from "mongoose"; 

const visitorSchema = new Mongoose.Schema({
ip: {
type: String,
required: true,
},
location: {
type: String,
required: true,
},
userAgent: {
type: String,
required: true,
},
viewacount: {
type: Number,
default: 1,
},
},{
timestamps: true,
});


export const Visitors =  Mongoose.model("Visitor", visitorSchema);