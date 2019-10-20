import React from 'react';
import theWords from '../eventyr.txt';

const aWords = new Promise( (resolve,reject) => {
    fetch(theWords);

})
export default aWords;