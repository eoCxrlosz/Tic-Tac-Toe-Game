let board = ["", "", "", "", "", "", "", "", ""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");
let user1_score = 0;
let user2_score = 0;

let current_player = "X";
let game_over = false;

function main(btn) {
    if (btn.innerHTML === "" && !game_over) {
        btn.innerHTML = current_player;
        board[btn.id - 1] = current_player;
        check();
        change_player();
    }
}

function change_player() {
    if(current_player === "O"){
        current_player = "X";
    } else {
        current_player = "O";
    }
}

function check(){
    check_horizontal();
    check_vertical();
    check_diagonal();
    check_draw();
}

function check_horizontal(){
    if(allEqual(board[0], board[1], board[2], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual(board[3], board[4], board[5], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual(board[6], board[7], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }
}

function check_vertical(){
    if(allEqual(board[0], board[3], board[6], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual(board[1], board[4], board[7], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual(board[2], board[5], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }
}

function check_diagonal(){
    if(allEqual(board[0], board[4], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual(board[2], board[4], board[6], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }
}

function check_draw(){
    if(!board.includes("") && !game_over){
        message.innerHTML = "Draw";
        popup.classList.remove("hide");
        game_over = true;
    }
}

function allEqual(a, b, c, d){
    return a === b && b === c && c === d && a !== "";
}

function restart(){
    for(let i = 0; i < 9; i++){
        board[i] = "";
        document.getElementById(i + 1).innerHTML = "";
    }
    game_over = false;
    popup.classList.add("hide");
}

function count_points(){
    if(current_player === "X"){
        user1_score++;
        document.querySelector(".user__1 span").innerHTML = user1_score;
    } else {
        user2_score++;
        document.querySelector(".user__2 span").innerHTML = user2_score;
    }
}

function reset_scoreboard() {
    user1_score = 0;
    user2_score = 0;

    document.querySelector(".user__1 span").innerHTML = user1_score;
    document.querySelector(".user__2 span").innerHTML = user2_score;
    }
    
    function restart_game() {
      restart();
     reset_scoreboard();
    }
    
    document.querySelector(".restart-button").addEventListener("click", restart_game);