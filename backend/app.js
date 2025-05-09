const express = require('express');
const mongoose = require('mongoose');
const diagnosisRoutes = require('./routes/diagnostico');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/diagnostico', diagnosisRoutes);

app.listen(3001, () => console.log('Backend rodando na porta 3001'));