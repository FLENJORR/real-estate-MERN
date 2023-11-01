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