var canvas, backgroundImage;

var quizState = 0;
var participantCount;
var allParticipant;
  
var database;
var question;
var form, quiz;
var participant;


function setup() {
  canvas = createCanvas(400, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getQuizState();
  quiz.start();
}


function draw() {
  background("lightblue");
// quiz.update(1);
  //}
   //if (quizState === 1) {

    //clear();
    //quiz.play();
// leave your mouse


  }
