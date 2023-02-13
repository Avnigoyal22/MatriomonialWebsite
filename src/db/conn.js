const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect("mongodb+srv://avnigoyal:avni%40goyal@cluster0.zw2srxs.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 


