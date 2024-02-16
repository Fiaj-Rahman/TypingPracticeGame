// screen hide class added 
function AddClass(addedClasses)
{
    const addClassesId = document.getElementById(addedClasses);

    addClassesId.classList.add('hidden');
    
}

// screen hide class remove 
function RemovedClass(removedClasses)
{
    const removedClassId = document.getElementById(removedClasses);

    removedClassId.classList.remove('hidden');

}


function changeFirstScreen()
{
    const firstSection = AddClass('SecOne')
    const secondSection = RemovedClass('SecTwo')
    const ContinueGame = continueGames();
    console.log(ContinueGame);

    
   

}


function continueGames()
{
    const alphabets = rendomAlphabet();
    
    const showAlphabet = document.getElementById('ScreenText')
    showAlphabet.innerText = alphabets;
    console.log(alphabets)

    // Add Background Color 

    addBackgroundColor(alphabets)

}


// Generate Random Alphabet 

function rendomAlphabet()
{
    const allAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const alphabet = allAlphabet.split('');
    

    // rendom Number 

    const rendomNumber = Math.random()*25;
    const roundRendomNumber = Math.round(rendomNumber)

    const setAlphabet = alphabet[roundRendomNumber].toLowerCase();
    return setAlphabet;
    
}


function addBackgroundColor(addColor)
{
    const AddColors = document.getElementById(addColor);
    AddColors.classList.add('bg-orange-400')
}



function removeBackgroundColor(addColor)
{
    const AddColors = document.getElementById(addColor);
    AddColors.classList.remove('bg-orange-400')
}

// keybroad function 


document.addEventListener('keyup', function KeybroadHandle(event){
   const playerKeybroadPress = event.key;

   const alphabetMatch = document.getElementById('ScreenText');
   const alphabetValue = alphabetMatch.innerText;

   if(playerKeybroadPress === alphabetValue){
    
    const gameScore = document.getElementById('scoreIncrease');

    const gameScoreValue = parseInt(gameScore.innerText);

    const updateGameScore = gameScoreValue + 1;
    gameScore.innerText = updateGameScore;

    console.log(gameScoreValue)
    removeBackgroundColor(alphabetValue)
    continueGames();
    
   }

   else
   {
     const gameLifeScore = document.getElementById('lifeScore');

     const gameLifeScoreValue = parseInt(gameLifeScore.innerText);

    const updateLifeScoreValue = gameLifeScoreValue -1;
    gameLifeScore.innerText = updateLifeScoreValue;

    if(gameLifeScoreValue === 0)
    {
        gameOver()
    }
   }

})





function gameOver()
{
    RemovedClass('SecThird');
    AddClass('SecTwo')
}


function playAgain()
{
    RemovedClass('SecTwo');
    AddClass('SecThird')
    continueGames();

    const gameLifeScore = document.getElementById('lifeScore');

    gameLifeScore.innerText = 5; 

    const gameScore = document.getElementById('scoreIncrease');
    gameScore.innerText = 0;

}