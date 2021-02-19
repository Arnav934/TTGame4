class Level1{
    constructor(){
         this.ball = createSprite(displayWidth/2, displayHeight/2, 10, 20)
         this.computer = createSprite(25, displayHeight/2, 25, 50)
         this.player = createSprite(displayWidth - 75, displayHeight/2, 25, 50)
         this.ball.visible = false
         this.computer.visible = false
         this.player.visible = false
         this.computerScore = 0;
         this.playerScore = 0;
         this.g1State = "serve"
         this.hitSound = loadSound('hit.mp3');
         this.wallHitSound = loadSound('wall_hit.mp3');
         this.scoreSound = loadSound('score.mp3');
         this.edges = createEdgeSprites();
         
    }

      display(){
          this.ball.visible = true
          this.computer.visible = true
          this.player.visible = true      

          //display Scores
          text(this.computerScore,170,20);
          text(this.playerScore, 230,20);

          //draw dotted lines
          for (var i = 0; i < displayHeight; i+=20) {
               line(displayWidth/2,i,displayWidth/2,i+10);
          }

          if (this.g1State === "serve") {
          text("Press Space to Serve",150,180);
          }

          if (this.g1State === "over") {
          text("Game Over!",170,160);
          text("Press 'R' to Restart",150,180);
          }

          if (keyDown("r")) {
          this.g1State = "serve";
          this.computerScore = 0;
          this.playerScore = 0;
          }


          //give velocity to the ball when the user presses play
          //assign random velocities later for fun
          if (keyDown("space") && this.g1State == "serve") {
          this.ball.velocityX = 15;
          this.ball.velocityY = 15;
          this.g1State = "play";
          }

          //make the userPaddle move with the mouse
          this.player.y = World.mouseY;



          //make the ball bounce off the user paddle
          if(this.ball.isTouching(this.player)){
          this.hitSound.play();
          this.ball.x = this.ball.x - 5;
          this.ball.velocityX = -this.ball.velocityX;
          }

          //make the ball bounce off the computer paddle
          if(this.ball.isTouching(this.computer)){
               this.hitSound.play();
               this.ball.x = this.ball.x + 5;
               this.ball.velocityX = -this.ball.velocityX;
          }

          //place the ball back in the centre if it crosses the screen
          if(this.ball.x > displayWidth || this.ball.x < 0){
                    //scoreSound.play();

                    if (this.ball.x < 0) {
                         this.playerScore++;
                    }
                    else {
                         this.computerScore++;
                    }

                    this.ball.x = displayWidth/2;
                    this.ball.y = displayHeight/2;
                    this.ball.velocityX = 0;
                    this.ball.velocityY = 0;
                    this.g1State = "serve";

                    if (this.computerScore=== 5 || this.playerScore === 5){
                         this.g1State = "over";
                    }
          }

          //make the ball bounce off the top and bottom walls
          if (this.ball.isTouching(this.edges[2]) || this.ball.isTouching(this.edges[3])) {
               this.ball.bounceOff(this.edges[2]);
               this.ball.bounceOff(this.edges[3]);
               this.wallHitSound.play();
          }

          //add AI to the computer paddle so that it always hits the ball
          //if (frameCount %5 === 0) {
          //this.computer.y = this.ball.y - random(10,20);
          //console.log(this.computer.y)
          //}
          //else {
          //this.computer.y = this.ball.y - random(0,3);
          //}
          
          if (this.ball.x < displayWidth/2 - 50) {
               this.computer.y = this.ball.y - random(25, 50);
               console.log("done")
               }
               else {
               this.computer.y = this.ball.y - random(15,20);
               }

          }
     }