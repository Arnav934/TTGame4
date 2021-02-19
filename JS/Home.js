class Home {
      constructor(){
     
      }

      hide(){
            
      }
      display(){
         
            background(bgImg)
            var singlePlayerButton = createButton('SINGLE-PLAYER')    
            var multiPlayerButton = createButton('MULTI-PLAYER')
            singlePlayerButton.position(displayWidth/2 - 100, displayHeight/2 - 100)  
            multiPlayerButton.position(displayWidth/2 - 100, displayHeight/2)  
     
            singlePlayerButton.mousePressed(()=>{
                  clear();
                  background(singleBgImg) ;
                  
                  console.log("singleplayer button pressed") 
             
                  singlePlayerButton.hide();
                  multiPlayerButton.hide();     
                  singlePlrHome = new SinglePlayerHome();
                  singlePlrHome.display()
              })

              multiPlayerButton.mousePressed(()=>{
                  clear();
                  background(singleBgImg) ;
                  
                  console.log("multiplayer button pressed") 
             
                  singlePlayerButton.hide();
                  multiPlayerButton.hide();     
                  multiHomeObj = new MultiHome();
                  multiHomeObj.display()
              })
           
      }      
}