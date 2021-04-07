import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import personRoutes from './routes/persons.js';

const app = express();

// setup middleware of routes
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/persons', personRoutes);


// connect to the mongodb cloud atlas
// mongodb+srv://corawan:<password>@cluster0.nykum.mongodb.net/zoffice?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://corawan:admin@cluster0.nykum.mongodb.net/zoffice?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(app.listen(port, () => console.log(`listening on port ${port}...`)))
    .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);