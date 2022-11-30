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