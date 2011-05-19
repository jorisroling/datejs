process.env.LANGUAGE='nl-NL';
console.log('Hi JJR '+process.env.LANGUAGE);

var datejs=require('./date-'+(process.env.LANGUAGE?process.env.LANGUAGE:'en-US'));
 
console.log(new Date);
module.exports = datejs;