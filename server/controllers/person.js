// route functions
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import request from 'request';
import Person from '../models/person.js'

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

    const {email, pwd} = req.body;

    try {
            const oldUser = await Person.findOne({ email });
        
            if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
        
            const isPasswordCorrect = await bcrypt.compare(pwd, oldUser.pwd);
        
            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
        
            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
            
            console.log(token)
        
            res.status(200).json({ result: oldUser, token });
            
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    };


export const createPerson = async (req, res) => {

        console.log("passed")

        const { cName, fName, lName, email, pwd, title, dName, profilePic } = req.body;

        // var options = {
        //     method: 'POST',
        //     url: "https://api.luxand.cloud/subject/v2",
        //     qs: {"name":email,"store":"1"},
        //     headers: {
        //         'token': "3f0af461941045cda54bb9741e2c5569"
        //     },
        //     formData: { 
        //         photo: profilePic
        //     }
        // };

        var options = {
            'method': 'POST',
            'url': 'https://api.luxand.cloud/subject/v2',
            'headers': {
              'token': "3f0af461941045cda54bb9741e2c5569"
            },
            formData: {
              'name': email,
              'photo': {
                'value': profilePic,
                'options': {
                  'filename': null,
                  'contentType': null
                }
              },
              'store': '1'
            }
          };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            
        });

        

        try {
          const oldUser = await Person.findOne({ email });
      
          if (oldUser) return res.status(400).json({ message: "User already exists" });
      
          const hashedPassword = await bcrypt.hash(pwd, 12);
      
          const result = await Person.create({ cName, fName, lName, email, pwd: hashedPassword, title, dName, profilePic});
      
          const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
      
          res.status(201).json({ result, token });

        } catch (error) {

          res.status(500).json({ message: "Something went wrong" });
          
          console.log(error);
        }
    }

// export const createPerson = async (req, res) => {
//     const person = req.body;

//     const newPerson = new Person(person);

//     try {
//         await newPerson.save();
//         res.status(201).json(newPerson);
//     }
//     catch(error){
//         res.status(409).json({ message: error.message });          
//     }
// }