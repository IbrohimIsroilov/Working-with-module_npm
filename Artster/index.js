const figlet=require('figlet');
const color=require('colors');
figlet('Keita', (err,data)=>{
    if(err){
        console.log("Something went wrong");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
})