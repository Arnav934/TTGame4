class MultiHome {
       constructor () {
        this.back=createImg('Images/backButton.png',
        () => {
            this.back.size(100, AUTO);
        });

        this.submit=createImg('Images/submit.png',
        () => {
            this.submit.size(200, AUTO);
        });  
         this.title = createElement('H2')
         this.greeting = createElement('H3')
        this.name = createInput('Enter Your Name')
        }


        Hide(){
            this.title.hide();    
            this.name.hide(); 
            this.back.hide();  
            this.submit.hide();
                                     
        }

        display(){

           
            this.title.position(displayWidth/2 - 100, displayHeight/2 - 100)  
            this.name.position(displayWidth/2 - 100, displayHeight/2)
            this.back.position(100, displayHeight - 300, 50,50);
            this.submit.position(displayWidth - 300, displayHeight - 300, 50,50)
            
            game = new Game();
            game.getState();
            console.log(gameState)

                    this.back.mousePressed(()=>{
                   
                    multiHomeObj.Hide();       
                    homeObj.display();
             
                     console.log("back button is pressed")
                  });

                  this.submit.mousePressed(()=>{
                      multiHomeObj.Hide(); 
                      var playerName = this.name.value(); 
                      this.start();
                      player = new Player();
                      player.getCount();
                    
                      playerCount+=1;
                      console.log(playerCount)
                      player.index = playerCount;
                      player.update();
                      player.updateCount(playerCount);
                      this.greeting.html("Hello " + playerName);
                      this.greeting.position(displayWidth/2 - 70, displayHeight/2 - 50)
                  })

                 
        }   
        async start(){
            if(gameState === 0){
                console.log(gameState)
            
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
             
            }
        
            paddle1 = createSprite(100,200);
            paddle2 = createSprite(300,200);
            
          }   


}