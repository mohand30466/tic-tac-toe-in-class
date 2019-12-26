

class Game{
    constructor(){
        this.boasrd = new Board();
        this.tic = "x";
        this.tack = "0";
        this.current = this.tic;
        this.scorePlyer = 0;
        this.scorePlyer = 0;


    }
    initApp(){

    }
    onBoardclick(){

    }
    cheakRows(){

    }
    cheackColoums(){

    }
    cheackDiagonald(){

    }


}



 class Board{
     constructor(){
         this.cells = [];
         this.cells[0][0] = $(`.row:nth-child(1) .cells:nth-child(1)`)        
         this.cells[0][1] = $(`.row:nth-child(1) .cells:nth-child(2)`)
         this.cells[0][2] = $(`.row:nth-child(1) .cells:nth-child(3)`)
         this.cells = [];
         this.cells[1][0] = $(`.row:nth-child(1) .cells:nth-child(1)`)        
         this.cells[1][1] = $(`.row:nth-child(1) .cells:nth-child(2)`)
         this.cells[1][2] = $(`.row:nth-child(1) .cells:nth-child(3)`)
         this.cells = [];
         this.cells[2][0] = $(`.row:nth-child(1) .cells:nth-child(1)`)        
         this.cells[2][1] = $(`.row:nth-child(1) .cells:nth-child(2)`)
         this.cells[2][2] = $(`.row:nth-child(1) .cells:nth-child(3)`)




     }
     

}