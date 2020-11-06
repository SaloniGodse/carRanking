class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  static DeletePlayers() {
    database.ref('/').update({
      players: ""
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, distance:this.distance
    });
  }

  static getDetails() {
    var info = database.ref("players");
    info.on("value",(data)=>{details = data.val()})
  }

getRankValue() {
  database.ref("carRanking").on("value",(data)=>{
    this.rank = data.val();
  })
}

static updateRank(rank) {
  database.ref('/').update({
    carRanking:rank
  })
}

}


