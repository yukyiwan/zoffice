// route functions
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Person from '../models/person.js'
import mongoose from 'mongoose';

const secret = 'test';

export const getPersons = async (req, res) => {
    try {
        const personList = await Person.find();
        res.status(200).json(personList);
    }
    catch(error){
        res.status(404).json({ message: error.message });          
    }
}

export const signIn = async (req, res) => {

    const {email, pwd, faceId} = req.body;

    try {
            const oldUser = await Person.findOne({ email }); //check on frontend
        
            if (!oldUser) return res.status(404).json({ message: "User doesn't exist" }); //check on frontend
        
            if (pwd) {
                // console.log(pwd);
                const isPasswordCorrect = await bcrypt.compare(pwd, oldUser.pwd);
                if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });}

            if (faceId) {
                // console.log(faceId);
                const oldUserFace = await Person.findOne({faceId});
                if (!oldUserFace) return res.status(400).json({ message: "Invalid credentials" });}
        
            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
            // console.log(token);
            res.status(200).json({ result: oldUser, token });
            
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }


export const createPerson = async (req, res) => {

        try {

            const { cName, fName, lName, email, pwd, title, dName, profilePic } = req.body;

            const oldUser = await Person.findOne({ email });
        
            if (oldUser) return res.status(400).json({ message: "User already exists" }); // prompt alert to front end
        
            const hashedPassword = await bcrypt.hash(pwd, 12);
         
            const result = await Person.create({ cName, fName, lName, email, pwd: hashedPassword, title, dName, profilePic});

            const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
        
            res.status(201).json({ result, token });

            } catch (error) {

            res.status(500).json({ message: "Something went wrong" });
            
            console.log(error);
            }
    }


export const updatePerson = async (req, res) => {
    const { id } = req.params;
    const {cName, fName, lName, email, title, dName, profilePic, faceId, online} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No person with id: ${id}`);

    const updatedPerson = {cName, fName, lName, email, title, dName, profilePic, faceId, online, _id: id };

    await Person.findByIdAndUpdate(id, updatedPerson, { new: true });

    res.json(updatedPerson);
}


export const deletePerson = async (req, res) => {
    
    console.log("in")
    
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No person with id: ${id}`);

    await Person.findByIdAndRemove(id);

    res.json({ message: "Person deleted successfully." });
}