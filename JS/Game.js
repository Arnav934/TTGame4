class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
      play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      
  
      if(keyIsDown(SPACE) && player.index !== null){
       //TO DO
      }
        drawSprites();
    }
  
    end(){
    console.log("GAME ENDED")
    }
  
   
  }
  