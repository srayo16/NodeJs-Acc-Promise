// console.log(module);
function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name, message);

    // logger.error({
    //     name,
    //     message,
    //     stack
    // });
    console.log("Internal server error!");

}

function two() {
    console.log("two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// console.log(module);

// module.exports = {
//     errorHandler,
//     two,
// }

export { errorHandler, two };