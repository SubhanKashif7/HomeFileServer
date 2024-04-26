import { User } from "../models/user.model.js";
const createUser = async (req,res) => {
    const {username , password} = req.body;
    try{
        const existingUser = await User.findOne({username});
        if (existingUser){
           res.status(400).json({
            error_msg : "User with this username already exists..."
           }) 
        };

        const newUser = new User({username,password});
        await newUser.save();

        res.status(200).json({success_msg : "User Created Successfully..."});
    
    }catch (error){
        res.json({error_msg : error.message})
    }
};

const getUsers = async (req,res) => {
    try{
    const realUserArr = await  User.find();
    const modifiendUserArray = [];

    realUserArr.forEach((user)=>{
        modifiendUserArray.push({
            username : user.username
        })
    })
    res.json(modifiendUserArray)
}catch (err){
    res.json({
        error_msg : err
    })
}
};


const loginUser = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if (!user){
            throw new Error("User not found");
        };
        const isMatch = await user.isPasswordCorrect(password);

        if (user){
            res.status(200).json({
                username : user.username
            });
        }

    }catch (err){
        console.log("Err : ",err)
    }
};


export const funcs = {

    createUser : createUser,
    getUsers : getUsers,
    loginUser : loginUser
}