const gameArea =document.querySelector('.game');
const btn = document.createElement('button');
const output = document.createElement('div');
const answer = document.createElement('input');



output.textContent = 'Click the button to start the game';
btn.textContent = 'Start Game';
gameArea.append(output);
gameArea.append(btn);

const opts = ['*','/','+','-']

const game = {
    max_value:30,
    questions:10,
    Ovals:[0,1,2,3],
    current_question:0,
    hidden_value:3
};

btn.addEventListener('click', start_game)

for(let i=0;i<10;i++){

}

function start_game(){
   // btn.style.display= 'none';
    game.current_question = 0;
    build_question()
}

function build_question(){
    
    if(game.current_question< game.questions){
        game.current_question++;
        output.innerHTML = '';
        let vals =[];
        vals[0]= Math.floor(Math.random()*(game.max_value+1));
        vals[1]= Math.floor(Math.random()*(game.max_value+1));
        // randomize a postive or a negative return if we have anything less than 0.5
        game.Ovals.sort(()=>{return 0.5 -Math.random()});

        if(game.Ovals[0] ==1){
            let temp = vals[0]*vals[1];
            // replace the value of the temp in front of the vals array
            vals.unshift(temp);
            console.log(temp);
        }
        else{
            vals[2]= eval(vals[0]+ opts[game.Ovals[0]] + vals[1]);
        }
        vals[3]= opts[game.Ovals[0]];
        
        console.log(vals)
         let hidden_value 
        //select the value where support to be the hidden one
        if(game.hidden_value !=3){
            hidden_value = game.hidden_value
        }else{
            // hidde a value  and show the others
            hidden_value = Math.floor(Math.random()*3);
        }
       

        vals[hidden_value]= '_';

        output.innerHTML = `${vals[0]} ${vals[3]} ${vals[1]} = ${vals[2]}`
    }
   
}