
class Form {
  constructor() {

    this.input = createInput("Enter Your Name");
    this.button = createButton('Start Quiz');
    this.message = createElement('h2');

    //this.input1=createInput("Enter Correct Option");
    //this.button1=createButton("Submit");




  }
  hide() {
    this.input.hide();
    this.button.hide();
    this.message.hide();
  }

  display() {
    var title = createElement('h2');
    title.html("Quiz Game");
    title.position(130, 10);

    this.input.position(130, 120);
    this.button.position(250, 200);

    this.button.mousePressed(() => {

      this.input.hide();
      this.button.hide();

      participant.name = this.input.value();
      participantCount = participantCount +1;

      participant.index = participantCount;
      console.log(participantCount)
      participant.update();
      participant.updateCount(participantCount);

      this.message.html("Welcome To Quiz Game  " + participant.name);
      this.message.position(20, 100);

    });


  }


}