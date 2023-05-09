class Start{
    constructor(){
        this.playerName = "Player";
        this.botName = "Suitbot";
        this.playerOption;
        this.botOption;
        this.winner = "";
    }
    // get ambilBotOption(){
    //     return this.botOption;
    // }
    // set aturBotOption(optionFromComp){

    // }

    get ambilPlayerOption(){
        return this.playerOption;
    }
    set aturPlayerOption (optionFromPlayer){
        this.playerOption = optionFromPlayer;
    }
}

function clickOption(playerClick){
   const start = new Start();
   start.aturPlayerOption = playerClick;
}