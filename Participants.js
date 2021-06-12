class Participants {
  constructor() {
    this.index = null;
    this.opt_sel = 0;
    this.name = null;
  }

  getCount() {
    var participantCountRef = database.ref('participantsCount');
    participantCountRef.on("value", (data) => {
      participantCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      participantCount: count
    });
  }

  update() {
    var participantIndex = 'participants/participant' + this.index;

    database.ref(participantIndex).set({

      name: this.name,
      opt_sel: this.opt_sel


    });

  }


  static getParticipantInfo() {
    var allParticipantsInfoRef = database.ref('questions');
    allParticipantsInfoRef.on("value", (data) => {

      allParticipant = data.val();


    });
  }

//this function I have not called yet ,there is not of things to do 

}
