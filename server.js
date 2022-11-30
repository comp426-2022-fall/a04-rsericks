#!/usr/bin/env node

import {roll} from "./lib/lib/roll.js";
import minimist from "minimist";
import express from "express";
const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port ? args.port: 5000;

app.get('/app', (req, res) => {
    res.send("200 OK");
    res.end();
})

app.use((req, res, next) =>{
    res.status(404).send("404 NOT FOUND");
    res.end();
})

app.get('/app/roll',  (req, res, next) =>{
    res.send(roll(6,2,1));
    res.end();
})

app.get('/app/roll/:sides/:dice', (req, res, next) =>{
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.end();
})

app.get('/app/roll/:sides', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
    res.end();
})

app.use('/app/roll/:sides/:dice/:rolls', (req, res, next) =>{
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.end();
})

app.use('/app/roll' , (req, res, next) => {
    var sidesint = req.params.sides ? parseInt(req.params.sides) : 6;
    var diceint = req.params.dice ? parseInt(req.params.dice) : 2;
    var rollint = req.params.rolls ? parseInt(req.params.rolls) : 1;
    res.send(roll(sidesint, diceint, rollint));
    res.end();
})

app.listen(port, (err) => {
    console.log("Server port is " + port);
})