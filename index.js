// event listener for click , array of choices for random comp selection, conditional statements for which choice beats which, function to return choice of player and comp, also return result

document.getElementById("rock").addEventListener('click', play);

document.getElementById("paper").addEventListener('click', play);

document.getElementById("scissors").addEventListener('click', play);




function play(e){
    const usr = e.target.textContent

    
   
    const options = ['R','P','S']

    const cp = options[Math.floor(Math.random()*3)]

    let winner

    document.getElementById("compChoice").textContent= `Computer played ${cp}`


    document.getElementById("playerChoice").textContent= `You played ${usr}`

    if (usr === cp) {
        winner = 'draw'
    } else if ((usr === 'R' && cp === 'S') || (usr === 'P' && cp === 'R') || (usr === 'S' && cp === 'P')){
        winner='You win'
    } else {
        winner = "computer wins"
    }
    document.getElementById("result").textContent= `${winner}`




}

