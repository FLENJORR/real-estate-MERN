import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";

export const signup = async (req, res, next) => {

const { username, email, password } = req.body;

// hassh password
const hashedPassword = bcryptjs.hashSync(password, 10);
// hass password
const newUser = new User({ username, email, password: hashedPassword });

try {
    await newUser.save()
    res.status(201).json('user creeated successfully !');
    
} catch (error) {
    next(error);   
}
};


// signIn functionality
export const signin =async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    } catch (error) {
        next(error);
    }
}