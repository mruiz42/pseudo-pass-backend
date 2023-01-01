import express from "express";
import dotenv from 'dotenv';
dotenv.config();

// Express Server
const app = express();
const PORT = process.env.EXPRESS_PORT;
// CORS

// Environment

// Routes
const credentialRoutes = require('./routes/credentialRoutes');
const didRoutes = require('./routes/didsRoutes');

// Define routes
app.use("/credentials", credentialRoutes);
app.use("/dids", didRoutes);

app.use(express.json());
app.post('/', (req: { body: { name: any; }; }, res: { send: (arg0: string) => void; })=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
});

// Start listening on selected port
app.listen(PORT || 4000, (error?: any) => {
        if(!error)
            console.log("Server Running & listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);