
let hangman = () => {
    const word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let guessWord = ['_', '_', '_', '_', '_', '_', '_'];
    let done = [];
    let test;
    let count = 0;
    let trying = () => {
        test = 0;
        let yourLetter = prompt("Votre lettre").toUpperCase();
        for(let i = 0; i <= done.length; i++){
            if(done[i] === yourLetter){
                alert("Lettre déjà utilisée");
                trying();
                count ++;
            }
        }
        for (let i = 0; i <= word.length; i++) {
            if(word[i] === yourLetter){
                    guessWord.splice(i, 1, yourLetter);
                    console.log(guessWord);
                    done.splice(i, 0, yourLetter);
                    test = 1;
            }
        }
        if(test == 1){
            alert(`bien joué! Continuez: ${guessWord} `);
            if(done.length === word.length){
                alert(`Félicitations! Terminé ${guessWord} en ${count} coups`);
                hangman();
            }
        }
        else{
            alert(`Dommage :( réessayez: ${guessWord} `);
        }
        count ++;
        trying();
    }
    trying();
}
hangman();