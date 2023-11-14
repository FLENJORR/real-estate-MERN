import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.freepik.com/free-photo/excited-overwhelmed-cute-amused-dark-skinned-womanfriend-red-t-shirt-smiling-broadly-pressing-palms-together-near-chest-standing-thrilled-thankful-awesome-gift-white-wall_17942743.htm#query=lady%20smiling&position=24&from_view=keyword&track=ais"
    }
}, 
{ timestamps: true}

);

const User = mongoose.model('User', userSchema);

export default User;