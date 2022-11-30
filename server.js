#!/usr/bin/env node

import roll from "./lib/lib/roll.js";
import minimist from "minimist";
import express from "express";
const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port ? args.port: 5000;