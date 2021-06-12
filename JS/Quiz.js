class Quiz {
  constructor(){}

  getQuizState(){
    var questionRef  = database.ref('quizState');
    questionRef.on("value",function(data){
      quizState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      quizState: state
    });
  }

  start()
  {
    if(quizState === 0)
    {
      participant  = new Participants();
       participant.getCount();
       form = new Form();
       form.display();
       }
  }


  getQuizQuestion(){
    var questionRef  = database.ref('Question');
    questionRef.on("value",function(data){
      question = data.val();
    });

  }



 //we dont need the play function  now ok yes
  }



  
