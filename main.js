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
    max_value:10,
    questions:10,
    oper:[2,3],
    current_question:0
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
        vals[2]= 
        vals[3]= eval(vals[0]+ vals[2] + vals[1]);
        output.innerHTML = `${vals[0]} ${vals[2]} ${vals[1]} = ${vals[3]}`
    }
   
}
