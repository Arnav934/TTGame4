class SinglePlayerHome{
      constructor(){
            this.level1 = createButton('LEVEL1')
            this.level2 = createButton('LEVEL2')
           
            this.back=createImg('Images/backButton.png',
            () => {
                this.back.size(100, AUTO);
            });

            this.submit=createImg('Images/submit.png',
            () => {
                this.submit.size(200, AUTO);
            });
            
      }

        Hide(){
            this.level2.hide();    
            this.level1.hide(); 
            this.back.hide();  
            this.submit.hide();
            console.log("hide")
                         
        }

        display(){

           
            this.level1.position(displayWidth/2 - 100, displayHeight/2 - 100)  
            this.level2.position(displayWidth/2 - 100, displayHeight/2)
            this.back.position(100, displayHeight - 300, 50,50);
            this.submit.position(displayWidth - 300, displayHeight - 300, 50,50)
          
            
            this.level1.mousePressed(()=>{
                background("white")     
                this.Hide();            
                gameState = "playLevel1"
                });

                this.back.mousePressed(()=>{
                   
                    singlePlrHome.Hide();       
                    homeObj.display();
             
                     console.log("back button is pressed")
                  });
                  this.submit.mousePressed(()=>{
                      alert("select the level")
                  })
        }      
}