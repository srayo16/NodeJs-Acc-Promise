// const { errorHandler, two } = require("./errorhandler");
import { errorHandler, two } from './errorhandler.js';

async function getData() {
    try {
        // undefined.find();
        const emailError = new Error("Already exists");
        throw emailError;
    } catch (error) {
        // console.log("Error!");
        errorHandler(error);
    }
}

getData();


// console.log("Done");
