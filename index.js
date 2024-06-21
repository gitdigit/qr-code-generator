
import fs from "fs"; 
import inquirer from 'inquirer';
import qr from "qr-image";



inquirer
  .prompt([

   { message: "Type in your URL",
    name: "URL",
   }, 
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrimg.png"));

    fs.writeFile("url.txt", url, (err)=>{
        if(err) throw err;
        console.log("The file has been saved!")
        });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There is a problem !");
    } else {
      console.log("QR Code generated.")
    }
  });
