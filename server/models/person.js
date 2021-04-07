import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const URL = 'mongodb+srv://corawan:admin@cluster0.nykum.mongodb.net/zoffice?retryWrites=true&w=majority'
const connection = mongoose.createConnection(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
 
autoIncrement.initialize(connection);

const personSchema = new mongoose.Schema({
    cName: { 
        type: String, 
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    fName: { 
        type: String, 
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    lName: { 
        type: String, 
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    userType: {
        type: String,
        default: 'admin'
    },
    title: { 
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    dName: { 
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    email: { 
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    pwd: { 
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
    },
    profilePic: {
        type: String
    },
    online: {
        type: Boolean,
        default: 0
    },
});
       
personSchema.plugin(autoIncrement.plugin, {
    model: 'Seat',
    field: 'seatId',
    startAt: 1
});

const Seat = connection.model('Seat', personSchema);

const Person = mongoose.model('person', personSchema) // Pascal case to create a class called Course, this is not an object

export default Person;

