var readlineSync = require("readline-sync");
var chalk = require("chalk");
var username = readlineSync.question("What is Your name ? ");
console.log(chalk.green("\nWelcome "+username+".\nLets Start the Game...\nIt Will be Fun!!!\n"));

console.log(chalk.green("------------------------------------------"));
score=0
var choose = readlineSync.question("What u like 2 play?\n1 for Marvel\n2 for Anime \n")

console.log(chalk.green("------------------------------------------"));
console.log("Enter Full names")
console.log(chalk.green("------------------------------------------"));

function Quiz(questions,answer)
{
  var userAnswer=readlineSync.question(questions);
  if (userAnswer.toLowerCase()===answer)
  {
    score++;
    console.log("Great!!!\n");
  }
  else{
    console.log("oops...Better Luck Next Time\n");
  }
}

function QuizA(questions,answer)
{
  var userAnswer=readlineSync.question(questions);
  if (userAnswer.toLowerCase()===answer)
  {
    score++;
    console.log("Great!!!\n");
  }
  else{
    console.log("Baka...Better Luck Next Time\n");
  }
}


if (choose==="1"){
  var ques=[{question:"What is the full name of Captain America? ",answer:"steve rogers"},{question:"What is the name of first A.I of Iron Man ? ",answer:"jarvis"},{question:"What is the capital of one of the Nine Realm? ",answer:"asgard"},{question:"What is the name of A.I of Spiderman ? ",answer:"karen"},{question:"Where did Doctor Stephen Strange get the eye of agamotto? ",answer:"kamar taj"},{question:"Where did king t'challa rull? ",answer:"wakanda"},{question:"What is the name of Reality Stone? ",answer:"aether"},{question:"What is the name of A.I of Iron Man In the END GAME? ",answer:"friday"},{question:"What is the name of Space Stone? ",answer:"tesseract"},{question:"Captain's Shield is made of which material? ",answer:"vibranium"}];
  for (var i =0;i<ques.length;i++)
  {
    Quiz(ques[i].question,ques[i].answer);
  }
}
else if(choose=="2"){
  var ques=[{question:"Who was having DeathNote in the starting of DeathNote? ",answer:"light yagami"},{question:"What is Full name of Luffy? ",answer:"monkey d. luffy"},{question:"Who is rival of Asta? ",answer:"yuno"},{question:"Who is awarded as name as Fullmetal in Fullmetal Alchemist? ",answer:"edward elric"},{question:"How many Dragon Balls are there? ",answer:"7"},{question:"Who is known as Lion's Sin of Pride? ",answer:"escanor"},{question:"What type of wizard Gray Fullbuster is? ",answer:"ice"},{question:"Who actualy awakens Rinnegan eye after Sage of Six Paths? ",answer:"madara uchiha"},{question:"How many Dragon Slayers in FairyTale Guild? ",answer:"4"},{question:"What is the Quirk of All Might? ",answer:"one for all"}];
  for (var i =0;i<ques.length;i++)
  {
    QuizA(ques[i].question,ques[i].answer);
  }
}
else
{
  console.log("Invalid choice....");
}

console.log(chalk.green("------------------------------------------"));

if(score<5)
{
  console.log("Better luck next time.\nYour Score is "+score);
}
else if(score>5 && score<9)
{
  console.log("Nice Played.\nYour Score is "+score);
}
else
{
  console.log("Superb...\n Your score is "+score);
}

console.log(chalk.green("------------------------------------------"));

console.log("send me ur score...")
