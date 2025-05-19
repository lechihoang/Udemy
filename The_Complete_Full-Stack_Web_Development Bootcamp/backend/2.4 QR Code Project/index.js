/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// take input
const questions = [
  {
    type: 'input',
    name: 'URL',
    message: "What's the site URL",
  },
];

// make QR image

inquirer.prompt(questions).then((answers) => {
    const qr_png = qr.image(answers.URL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    console.log(`Generated QR image for ${answers.URL}`);
    fs.writeFile('URL.txt', answers.URL, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
            console.log(`Answer stored in URL.txt`)
        }
    });
});


