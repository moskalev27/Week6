import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { createReadStream } from 'fs';
import crypto from 'crypto';
import m from 'mongoose';

const UserSchema = new m.Schema({
    login: {
      type: 'String'
    },
    password: {
      type: 'String'
    }
});

import appSrc from './app.js';

const app = appSrc(express, bodyParser, createReadStream, crypto, http, m, UserSchema);

try {
    app.listen(process.env.PORT || 4321);
} catch(e) {
    console.log(e.codeName);
}
