
let cell = ['','','','','','','','',''];
let turn = 0;
let WorL = 0;
let opponent;
let board =['','','','','','','','',''];

function inItBoard(){
    document.getElementById('fix-container').style.display='none';
    document.getElementById('gameBoard').innerHTML=' ';
    WorL=undefined;
    showTurn();
    for(let i=0;i<9;i++){
        document.getElementById('gameBoard').innerHTML+=`<input type="button" id="b${i}" class="td" onclick="play(b${i},${i})" value=''>`;
        document.getElementById(`b${i}`).disabled=false;
        document.getElementById(`b${i}`).style.color='#0f0f0f';
    }
}


function play(a,b){
    if(turn==0 && WorL==undefined){
        a.value='X';
        a.disabled=true;
        a.style.color='#0000ff';
        cell[b]='X';
        board[b]='X';
        turn=1;
    }
    else if(turn==1 && opponent=='Lp' && WorL==undefined){
        a.value='O';
        a.disabled=true;
        a.style.color='#f82803f6';
        cell[b]='O';
        turn=0;
    }
    showTurn();
    winOrDraw();
    if(turn ==1 && opponent=='computer' && WorL==undefined){
 setTimeout(() => {
           let y=  bot_genrate_move(); 
           document.getElementById(`b${y}`).value='O';
           document.getElementById(`b${y}`).disabled=true;
           document.getElementById(`b${y}`).style.color='#f82803f6';
           cell[y]='O';
           turn=0;
           showTurn();
           winOrDraw();
           board[y]='O';
 }, 500);
    }
}

//win condition
function winOrDraw(){
            //line 1 horizontal
        if(cell[0] ==cell[1]  && cell[1] ==cell[2] &&cell[2]!=''){
            player_winOr_Lose(0,1,2);
        }else if(cell[3] ==cell[4]  && cell[4] ==cell[5] &&cell[5]!=''){     //line 2 horizonatl
            player_winOr_Lose(3,4,5);
        }else if(cell[6] ==cell[7]  && cell[7] ==cell[8] && cell[8]!=''){        //Line 3 horizontal
            player_winOr_Lose(6,7,8);
        }else if(cell[0] ==cell[3]  && cell[3] ==cell[6] && cell[6]!=''){     //Column 1 verticle
            player_winOr_Lose(0,3,6);
        }else if(cell[1] ==cell[4]  && cell[4] ==cell[7] && cell[7]!=''){     // Column 2 verticle
            player_winOr_Lose(1,4,7);
        }else if(cell[2] ==cell[5]  && cell[5] ==cell[8] && cell[8]!=''){     //Column 3 verticle
            player_winOr_Lose(2,5,8);
        }else if(cell[0] ==cell[4]  && cell[4] ==cell[8] && cell[8]!=''){     //diagonal line top left to bottom right
            player_winOr_Lose(0,4,8);
        } else if(cell[2] ==cell[4]  && cell[4] ==cell[6] && cell[6]!=''){    // diagonal line top right to bottom left
           player_winOr_Lose(2,4,6)
        }
        else if(cell[0]!=='' && cell[1]!=='' && cell[2]!=='' && cell[3]!=='' && cell[4]!=='' && cell[5]!=='' && cell[6]!=='' && cell[7]!=='' && cell[8]!=='' ){
            if((cell[0] !=cell[1]  || cell[1] !=cell[2] )&&(cell[3] !=cell[4]  || cell[4] !=cell[5] )
                && (cell[6] !=cell[7]  || cell[7] !=cell[8] ) && (cell[0] !=cell[3]  || cell[3] !=cell[6] )
                && (cell[1] !=cell[4]  || cell[4] !=cell[7] )&& (cell[2] !=cell[5]  || cell[5] !=cell[8] )
                && (cell[0] !=cell[4]  || cell[4] !=cell[8] ) && (cell[2] !=cell[4]  || cell[4] !=cell[6] )){ 
                    document.getElementById('result').innerHTML='<p> Draw !</p> <button class="reset" onclick="restart()" style="height:30px; width: 40px" autofocus> OK </button>'
                    WorL=0;
                }
        }   
}


function restart(){
    cell = ['','','','','','','','',''];
    board = ['','','','','','','','',''];
    inItBoard();
    if(opponent=='computer' && turn==1){
        let h =  Math.floor(Math.random()*9);
        turn=0;
        document.getElementById(`b${h}`).value='O';
        document.getElementById(`b${h}`).disabled=true;
        document.getElementById(`b${h}`).style.color='#f82803f6';
       cell[h]='O';
       board[h]='O';
       winOrDraw();
    }
}
function exit(){
    document.getElementById('fix-container').style.display='block';
    turn = 0;
    for(let i=0; i<9;i++){
        cell[i]='';
    }
}

function showTurn(){
    if(turn==0 && WorL==undefined){
        document.getElementById('result').innerText = 'PLAYER 1';
    }
    else if(turn==1 && opponent=='Lp' && WorL==undefined){
        document.getElementById('result').innerText = 'PLAYER 2';
    }
    else if(turn==1 && opponent=='computer' && WorL==undefined){
        document.getElementById('result').innerText = 'COMPUTER';
    }
}



function player_winOr_Lose(c1,c2,c3){
    if(cell[c1]=='X'){
        if(opponent=='Lp'){
            document.getElementById('result').innerHTML='<p> PLAYER 1 WON !</p> <button class="reset" onclick="restart()" style="height:30px; width: 40px"> OK </button>' ;  
        }
        else if(opponent=='computer'){
            document.getElementById('result').innerHTML='<p> YOU WON !</p> <button class="reset" onclick="restart()" style="height:30px; width: 40px"> OK </button>' ;  
        } 
        WorL=1;
        turn=0;
    }else if(cell[c1]=='O'){
        if(opponent=='Lp'){
            document.getElementById('result').innerHTML='<p> PLAYER 2 WON !</p> <button class="reset" onclick="restart()" style="height:30px; width: 40px" autofocus> OK </button>' ;  
        }
        else if(opponent=='computer'){
            document.getElementById('result').innerHTML='<p> YOU LOSE !</p> <button class="reset" onclick="restart()" style="height:30px; width: 40px" autofocus> OK </button>' ;  
        } 
        WorL=-1;
        turn=1;
    }
    for(let i=0;i<9;i++){
        document.getElementById(`b${i}`).disabled=true;
        if(i==c1 || i==c2 || i==c3 ){
            document.getElementById(`b${i}`).style.color='#0fef0f';
        }
    }
}



function reset(){
    turn=0;
    restart();
}
//Local player function
function localPlayer(){
    opponent='Lp';
    inItBoard();
    console.log('localPlayer');
}
//creating Bot
function bot(){
    opponent = 'computer';
    inItBoard();
    console.log('bot');
}

let count =0;

const bot_genrate_move=()=>{
    let value = -2;
    let Index;
    for(let i=0;i<board.length;i++){
        if(board[i]!==''){ continue;}
        board[i]='O';
        let newValue = minimax('X');
        board[i]='';
        if(newValue>value){
            value=newValue;
            Index=i;
        }
    }
    return Index;
}

const minimax=(playerSign)=>{                                     //Minimax function
    let score = checkPossibleWinCase();
    if(score===true){
        return 1;
    }
    else if(score==='TIE'){
        return 0;
    }else if(score===false){
        return -1;
    }
    
    if(playerSign==='O'){
        let value = -2;
        for(var j=0;j<board.length;j++){
            if(board[j]===''){
                board[j]='O';
                let newValue = minimax('X');
                board[j]='';
                value =(newValue>value)?newValue:value;
            }
        }
        return value;
    }else{
        let value = 2;
        for(var k=0;k<board.length;k++){
            if(board[k]===''){
                board[k]='X';
                let newValue = minimax('O');
                board[k]='';
                value =(newValue<value)?newValue:value;
            }  
        }
        return value;
    }

}

function checkPossibleWinCase(){
         //line 1 horizontal
         if(board[0] ==board[1]  && board[1] ==board[2] &&board[2]!=''){
            return ( board[2]=='O')?true:false;
        }else if(board[3] ==board[4]  && board[4] ==board[5] &&board[5]!=''){     //line 2 horizonatl
            return (board[4]=='O')?true:false;
        }else if(board[6] ==board[7]  && board[7] ==board[8] && board[8]!=''){        //Line 3 horizontal
            return (board[8]=='O')?true:false;
        }else if(board[0] ==board[3]  && board[3] ==board[6] && board[6]!=''){     //Column 1 verticle
            return (board[6]=='O')?true:false;
        }else if(board[1] ==board[4]  && board[4] ==board[7] && board[7]!=''){     // Column 2 verticle
            return (board[4]=='O')?true:false;
        }else if(board[2] ==board[5]  && board[5] ==board[8] && board[8]!=''){     //Column 3 verticle
            return ( board[2]=='O')?true:false;
        }else if(board[0] ==board[4]  && board[4] ==board[8] && board[8]!=''){     //diagonal line top left to bottom right
            return ( board[4]=='O')?true:false;
        } else if(board[2] ==board[4]  && board[4] ==board[6] && board[6]!=''){    // diagonal line top right to bottom left
           return ( board[2]=='O')?true:false;
        }
        else if(board[0]!=='' && board[1]!=='' && board[2]!=='' && board[3]!=='' && board[4]!=='' && board[5]!=='' && board[6]!=='' && board[7]!=='' && board[8]!=='' ){
            if((board[0] !=board[1]  || board[1] !=board[2] )&&(board[3] !=board[4]  || board[4] !=board[5] )
                && (board[6] !=board[7]  || board[7] !=board[8] ) && (board[0] !=board[3]  || board[3] !=board[6] )
                && (board[1] !=board[4]  || board[4] !=board[7] )&& (board[2] !=board[5]  || board[5] !=board[8] )
                && (board[0] !=board[4]  || board[4] !=board[8] ) && (board[2] !=board[4]  || board[4] !=board[6] )){ 
                    return 'TIE';
                }
        } 
}
