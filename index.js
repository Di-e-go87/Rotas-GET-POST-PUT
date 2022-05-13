const express = require('express');
const dotenv = require('dotenv');
const pg = require('pg');
const sequelize = require('sequelize');


const app = express ();

app.use(express.json())
app.use(dotenv())
app.use(pg())
app.use(sequelize())

app.listen(3001, () =>{
    console.log("Express started  att http://localhost:3001")
})
   const buildingDataBase = require ('./infrastructure/database/building-modeling-structure');
   buildingDataBase.sequelize.sync();

   app.listen(3001, console.log('Server do Projeto de Estagiarios Iblue esta funcionando na Porta 3001.'))


   