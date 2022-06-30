function getminutes() {
    //minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away
    //from total seconds remaining
    return secs - Math.round(mins * 60);
}

function Decrement() {
    if (document.getElementById) {
        if (gameWon == false && wrongGuesses < 10) {

            //if less than a minute remaining
            //Display only seconds value.
            if (secs < 59) {
                seconds.innerHTML = `${secs}`;
            }

            //Display both minutes and seconds, getminutes and getseconds is used to get minutes and seconds
            else {
                minutes.innerHTML = `${getminutes()}: `;
                seconds.innerHTML = `${getseconds()}`;
            }
            //when less than a minute remaining, colour of the minutes and seconds changes to red
            if (mins < 1) {
                timer.style.color = red;
            }
            //if seconds becomes zero, then game over
            if (secs == 0) {
                gameFinished(false);
                msgInt.innerHTML = `<p class="game-over" style="display:block; letter-spacing:2px;" > Oh no. Looks like your time is up !! The word was ${chosen}</p>`;
                minutes.innerHTML = "0: ";
                seconds.innerHTML = "0";
            }
            //if seconds > 0 then seconds is decremented
            else {
                secs--;
                setTimeout('Decrement()', 1000);
            }
        }
    }
}

function countdown() {
    setTimeout('Decrement()', 60);
}

var chooseWord = (words, names) => {
    var nameIndex = Math.floor(Math.random() * words.length);
    listNameEl.innerHTML = names[nameIndex];
    var chosenList = words[nameIndex];
    var wordIndex = Math.floor(Math.random() * chosenList.length);
    var chosenWord = chosenList[wordIndex].toUpperCase();
    chosenList.splice(wordIndex, 1);
    if (chosenList.length == 0) {
        words.splice(nameIndex, 1);
        names.splice(nameIndex,1);
    }
    return chosenWord;
}

var getGuessedWord = function getGuessedWord(secretWord, lettersGuessed) {
    // secretWord: string, the word the user is guessing
    // lettersGuessed: msgInt, what letters have been guessed so far
    // returns: string, comprised of letters and underscores that represents
    //   what letters in secretWord have been guessed so far.

    let word = '';
    for (let i = 0; i < secretWord.length; i++) {
        if (lettersGuessed.includes(secretWord[i])) {
            char = " " + secretWord[i] + " ";
            word += char;
        }
        else {
            word += ' _ ';
        }
    }

    return word;
}

var isWordGuessed = function isWordGuessed(secretWord, lettersGuessed) {
    // secretWord: string, the word the user is guessing
    // lettersGuessed: msgInt, what letters have been guessed so far
    // returns: boolean, True if all the letters of secretWord are in lettersGuessed;
    //   False otherwise

    for (let i = 0; i < secretWord.length; i++) {
        if (!(lettersGuessed.includes(secretWord[i]))) {
            return false;
        }
    }
    return true
}

var wrongGuessed = (guesses) => {
    let returnstr = "";
    if (smallScreen == true) {
        if (guesses == 1) {
            returnstr = "No, that's wrong. It's just the start, dw :)";
            ctx.beginPath();
            ctx.moveTo(5, 235);
            ctx.lineTo(175, 235);
            ctx.stroke();
        }

        if (guesses == 2) {
            returnstr = "Oh no, this isn't correct either.";
            ctx.moveTo(90, 235);
            ctx.lineTo(90, 15);
            ctx.stroke();
        }

        if (guesses == 3) {
            returnstr = "Hmmm, are you struggling still ?";
            ctx.lineTo(200, 15);
            ctx.stroke();
        }

        if (guesses == 4) {
            returnstr = "Tch tch, The stage is set, the man will be hanging soon...";
            ctx.lineTo(200, 55);
            ctx.stroke();
        }

        if (guesses == 5) {
            returnstr = "You have used up half of your guesses dear.";
            ctx.beginPath();
            ctx.arc(200, 75, 20, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (guesses == 6) {
            returnstr = "Poor guy will be sacrificed if you kept making mistakes like these";
            ctx.moveTo(200, 95);
            ctx.lineTo(200, 155);
            ctx.stroke();
        }

        if (guesses == 7) {
            returnstr = "Think harder. Maybe, JUST MAYBE, you can do it...";
            ctx.moveTo(200, 110);
            ctx.lineTo(170, 145);
            ctx.stroke();
        }

        if (guesses == 8) {
            returnstr = "Well nvm, idt you can actually do this one";
            ctx.moveTo(200, 110);
            ctx.lineTo(230, 145);
            ctx.stroke();
        }

        if (guesses == 9) {
            returnstr = "See, I told you. This is beyond your expertise. One more mistake and ...";
            ctx.moveTo(200, 155);
            ctx.lineTo(170, 190);
            ctx.stroke();
        }

        if (guesses == 10) {

            returnstr = `<p class="game-over" style="display:block; letter-spacing:2px;" > Game Over !! The word was ${chosen}</p>`;
            ctx.moveTo(200, 155);
            ctx.lineTo(230, 190);
            ctx.stroke();
        }
    }

    else {
        if (guesses == 1) {
            returnstr = "No, that's wrong. It's just the start, dw :)";
            ctx.beginPath();
            ctx.moveTo(10, 320);
            ctx.lineTo(210, 320);
            ctx.stroke();
        }

        if (guesses == 2) {
            returnstr = "Oh no, this isn't correct either.";
            ctx.moveTo(110, 320);
            ctx.lineTo(110, 20);
            ctx.stroke();
        }

        if (guesses == 3) {
            returnstr = "Hmmm, are you struggling still ?";
            ctx.lineTo(260, 20);
            ctx.stroke();
        }

        if (guesses == 4) {
            returnstr = "Tch tch, The stage is set, the man will be hanging soon...";
            ctx.lineTo(260, 70);
            ctx.stroke();
        }

        if (guesses == 5) {
            returnstr = "You have used up half of your guesses dear.";
            ctx.beginPath();
            ctx.arc(260, 95, 25, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (guesses == 6) {
            returnstr = "Poor guy will be sacrificed if you kept making mistakes like these";
            ctx.moveTo(260, 120);
            ctx.lineTo(260, 220);
            ctx.stroke();
        }

        if (guesses == 7) {
            returnstr = "Think harder. Maybe, JUST MAYBE, you can do it...";
            ctx.moveTo(260, 145);
            ctx.lineTo(210, 195);
            ctx.stroke();
        }

        if (guesses == 8) {
            returnstr = "Well nvm, idt you can actually do this one";
            ctx.moveTo(260, 145);
            ctx.lineTo(310, 195);
            ctx.stroke();
        }

        if (guesses == 9) {
            returnstr = "See, I told you. This is beyond your expertise. One more mistake and ...";
            ctx.moveTo(260, 220);
            ctx.lineTo(210, 295);
            ctx.stroke();
        }

        if (guesses == 10) {

            returnstr = `<p class="game-over" style="display:block; letter-spacing:2px;" > Game Over !! The word was ${chosen}</p>`;
            ctx.moveTo(260, 220);
            ctx.lineTo(310, 295);
            ctx.stroke();
        }
    }

    return returnstr;
}

var calculateScore = (scores) => {
    let points = 0;

    if (scores == 10) { points = scores * 2; }

    if (scores < 10 && scores > 6) { points = scores * 1.8; }

    if (scores <= 6 && scores > 3) { points = scores * 1.5; }

    if (scores <= 3) { points = scores * 1.3; }

    let st = 0;

    if (gameMode == "multiplayer") {
        st = playerStreaks[curPlayer];
        points += st;
    }
    else {
        st = streak;
        let mlt = 1;
        if (streak >= 15) {
            mlt = 1.25;
        }
        if (streak >= 30) {
            mlt = 1.50;
        }
        if (streak >= 50) {
            mlt = 1.75;
        }
        if (streak >= 75) {
            mlt = 2.0;
        }
        if (streak >= 100) {
            mlt = 2.5;
        }
        if (streak >= 150) {
            mlt = 3.0;
        }
        if (streak >= 200) {
            mlt = 3.5;
        }
        points *= mlt;
    }
    

    return Math.floor(points);
}

var gameCompleted = ()=> {
    nextMoveBtn.style.display = 'none';
    gameClearText.style.display = 'block';
    newGameBtn.style.display = 'block';
    goHom.style.display = 'block';
    msgInt.innerHTML = `<span class="celebrate" style="font-size:16px; padding: 3px;">Many Congratulations. You cleared this game !!</span>`;
}

var gameFinished = (won) => {
    for (let i = 0; i < 26; i++) {
        btnBox[0].children[i].disabled = true;
        btnBox[0].children[i].style.cursor = "not-allowed";
        if (btnBox[0].children[i].style.backgroundColor == blue) {
            btnBox[0].children[i].style.backgroundColor = black;
        }
    }

    if (won) {
        let point = 10;
        point = calculateScore(guessesLeft);
        msgInt.innerHTML = `<p class="game-over" style="display:block; letter-spacing:2px; background-color:${green};" > Congratulations, you scored ${point} points !</p>`;
        moveClearedSound.play();
        nextMoveBtn.style.display = "block";
        timer.style.color = green;
        if (gameMode == "multiplayer") {
            playerScores[curPlayer] += point;
            scoreEl.innerHTML = `Your Current Score is: ${playerScores[curPlayer]}`
            playerStreaks[curPlayer]++;
            streakEl.innerHTML = `Streak: ${playerStreaks[curPlayer]}`;
        }
        else {
            score += point;
            scoreEl.innerHTML = `Your Current Score is: ${score}`;
            streak++;
            streakEl.innerHTML = `Streak: ${streak}`;
            if (testList2.length == 0) {
                gameCompleted();
            }
        }
    }

    else {
        highScore = localStorage.getItem("highScore");
        timer.style.color = red;
        gameOverSound.play();
        if (gameMode == "multiplayer") {
            playerStreaks[curPlayer] = 0;
            nextMoveBtn.style.display = "block";
        }
        else {
            newGameBtn.style.display = "block";
            if (gameMode == "timerush") {
                timeHighScore = localStorage.getItem("timeHighScore");
                if (score > timeHighScore) {
                    localStorage.setItem("timeHighScore", score);
                    timeHighScore = score;
                    localStorage.setItem("timeHighStreak", streak);
                    timeHighStreak = streak;
                    gameOverSound.pause();
                    newHighScoreSound.play();
                    highScoreReached.style.display = "flex";
                }
            }
            else {

                if (score > highScore) {
                    localStorage.setItem("highScore", score);
                    highScore = score;
                    localStorage.setItem("highStreak", streak);
                    highStreak = streak;
                    gameOverSound.pause();
                    newHighScoreSound.play();
                    highScoreReached.style.display = "flex";
                }
            }
        }
    }
    if (gameMode == "multiplayer") {
        curPlayer++;
        if (curPlayer == players) {
            curPlayer = 0;
            curTurn++;
            if (turns < curTurn) {
                displayBtn.disabled = false;
                displayBtn.style.display = "block";
                displayBtn.style.backgroundColor = blue
                nextMoveBtn.style.display = "none";
            }
        }
        nextMoveBtn.innerHTML = `pass device to ${playerNames[curPlayer]}`;
    }
}

var change_col = function change_col(elem, x) {
    let btn = document.getElementById(elem);
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    if (x.includes(elem)) {
        btn.style.backgroundColor = green;
        msgInt.innerHTML = "wow, nice guess !!"
        rightClickSound.play();
    }
    else {
        btn.style.backgroundColor = red;
        wrongClickSound.pause();
        wrongClickSound.play();
        wrongGuesses++;
        texts = wrongGuessed(wrongGuesses);
        msgInt.innerHTML = texts;
        guessesLeft = maxGuess - wrongGuesses;
        document.getElementsByClassName("guessesLeft")[0].innerHTML = `Your Guesses Left: ${guessesLeft}`;
        if (wrongGuesses == 10) {
            gameWon = false;
            turnEnded = true;
            gameFinished(gameWon);
        }
    }
}

var btn_clicked = function btn_clicked(elem) {
    change_col(elem, chosen);
    letters.push(elem);
    word = getGuessedWord(chosen, letters);
    document.getElementById("wordTodo").innerHTML = word;
    WordDone = isWordGuessed(chosen, letters);
    if (WordDone) {
        gameWon = true;
        turnEnded = true;
        gameFinished(gameWon);
    }
}

var displayResults = () => {
    ctx.clearRect(0, 0, 330, 330);
    msgInt.removeChild(msgInt.children[0]);
    unSortedScore = [...playerScores];
    sortedScore = playerScores.sort(function (a, b) { return b - a });
    msgInt.innerHTML = `<span class="celebrate" style="padding: 2px;margin-top: 2px"> Congratulations ${playerNames[unSortedScore.indexOf(sortedScore[0])]}, you have won this game !!</span>`;
    document.getElementsByTagName("aside")[0].appendChild(document.createElement("ul"));
    ul = document.getElementsByTagName("ul")[0];
    var index = 0;
    var retStr = 0;
    for (let i = 0; i < players; i++) {
        index = unSortedScore.indexOf(sortedScore[i]);
        retStr = `Rank ${i + 1}: <span>${playerNames[index]} with a score of ${unSortedScore[index]}</span>`;
        node = document.createElement("li");
        node.style.listStyleType = "none";
        node.innerHTML = retStr;
        ul.appendChild(node);
    }
    goHom.style.backgroundColor = blue;
    goHom.style.display = "block";
    goHom.disabled = false;
    newHighScoreSound.play();
    displayBtn.style.display = 'none';
}

var goHomes = () => {
    window.location.href = "index.html";
}

var initialize = () => {
    letters = [];
    // chosen = chooseWord(testList, testList2); 
    chosen = chooseWord(wordList, nameList);
    gameWon = false;
    wrongGuesses = 0;
    guessesLeft = maxGuess - wrongGuesses;
    document.getElementsByClassName("guessesLeft")[0].innerHTML = `Your Guesses Left: ${guessesLeft}`;
    wrd = getGuessedWord(chosen, letters);
    document.getElementById("wordTodo").innerHTML = wrd;
    if (msgInt.children.length > 0) {
        msgInt.removeChild(msgInt.children[0]);
    }
    msgInt.innerHTML = `This word is ${chosen.length} characters long.`;
    for (let i = 0; i < 26; i++) {
        btnBox[0].children[i].disabled = false;
        btnBox[0].children[i].style.cursor = "pointer";
        btnBox[0].children[i].style.backgroundColor = blue;
    }
    ctx.clearRect(0, 0, 330, 330);
    nextMoveBtn.style.display = "none";
    newGameBtn.style.display = "none";
    timer.style.color = "white";
    highScoreReached.style.display = "none";
    if (gameMode == "multiplayer") {
        turnEl.innerHTML = `Turn Number  ${curTurn}: ${playerNames[curPlayer]}`;
        scoreEl.innerHTML = `Your Current Score is: ${playerScores[curPlayer]}`;
        streakEl.innerHTML = `Streak: ${playerStreaks[curPlayer]}`;
    }
    smallScreen = screen.width < 400;
    if (gameMode == "timerush" || timeMode == "true") {
        hiSc.innerHTML = `Your High Score is: ${timeHighScore}`;
        hiSt.innerHTML = `The Streak for the High Score is: ${timeHighStreak}`;
        countdown();
        timer.style.display = "block";
        if (streak <= 10) {
            mins = 2;
            secs = mins * 60;
        }
        if (streak >= 20) {
            mins = 2
            secs = mins * 45;
        }
        if (streak >= 30) {
            mins = 2
            secs = mins * 37.5;
        }
        if (streak >= 40) {
            mins = 1;
            secs = mins * 60;
        }
        if (streak >= 50) {
            mins = 0;
            secs = 30;
        }
    }
    else {
        timer.style.display = "none";
    }
}

var newGame = () => {
    streak = 0;
    score = 0;
    document.getElementsByClassName("score")[0].innerHTML = `Your Current Score is: ${score}`;
    document.getElementsByClassName("streak")[0].innerHTML = `Streak: ${streak}`;
    if (gameMode == "timerush") {
        hiSc.innerHTML = `Your High Score is: ${timeHighScore}`;
        hiSt.innerHTML = `The Streak for the High Score is: ${timeHighStreak}`;
    }
    else {
        hiSc.innerHTML = `Your High Score is: ${highScore}`;
        hiSt.innerHTML = `The Streak for the High Score is: ${highStreak}`;
    }
    mammalsClone = [...mammals];
    insectsClone = [...insects];
    aquaticsClone = [...aquatics];
    birdsClone = [...birds];
    wordList = [mammalsClone, insectsClone, aquaticsClone, birdsClone];
    testList = [[ "ant", "honeybee", "mosquito", "spider"], ["canary", "cormorant", "crane", "crow", "cuckoo", "dove"], ["anglerfish", "atlanticsalmon", "barracuda", "batfish", "belugawhale"]];
    testList2 = ['insects', 'birds', 'aquatics'];
    nameList = ['mammal', 'insect', 'aquatic animal', 'bird'];
    // chosen = chooseWord(wordList, nameList);
    // chosen = mammals[Math.floor(Math.random() * 54)].toUpperCase();
    initialize();
}

var nextWord = () => {
    initialize();
}

// variable declarations

const green = 'rgb(30, 240, 50)';
const red = 'red';
// const blue = 'rgb(8, 97, 160)';
const blue = 'var(--dark3)'
const black = 'rgb(37, 39, 36)';
const dark = 'darkslategray';
const strokeCol = '#fff';
const fillCol = green;
var gameWon = false;
var highScore = localStorage.getItem("highScore");
var highStreak = localStorage.getItem("highStreak");
var timeHighScore = localStorage.getItem("timeHighScore");
var timeHighStreak = localStorage.getItem("timeHighStreak");
if (highScore == null) {
    localStorage.setItem("highScore", 0);
    highScore = 0;
}
if (highStreak == null) {
    localStorage.setItem("highStreak", 0);
    highStreak = 0;
}
if (timeHighScore == null) {
    localStorage.setItem("timeHighScore", 0);
    timeHighScore = 0;
}
if (timeHighStreak == null) {
    localStorage.setItem("timeHighStreak", 0);
    timeHighStreak = 0;
}

var mammals = ['armadillo', 'ass', 'bat', 'bear', 'beaver', 'cat', 'chimpanzee', 'cow', 'coyote', 'deer', 'dog', 'dolphin', 'elephant', 'fox', 'panda', 'gibbon', 'giraffe', 'goat', 'gopher', 'hedgehog', 'hippopotamus', 'horse', 'jaguar', 'kangaroo', 'koala', 'leopard', 'lion', 'llama', 'lynx', 'mole', 'monkey', 'mouse', 'narwhal', 'orangutan', 'orca', 'otter', 'ox', 'pig', 'polarbear', 'porcupine', 'puma', 'rabbit', 'raccoon', 'rat', 'rhinoceros', 'sheep', 'squirrel', 'tiger', 'walrus', 'weasel', 'wolf', 'zebra', 'goat', 'horse'];
var birds = ['canary', 'cormorant', 'crane', 'crow', 'cuckoo', 'dove', 'duck', 'eagle', 'flamingo', 'goldfinch', 'goose', 'guineafowl', 'hawk', 'hen', 'hoatzin', 'hornbill', 'hummingbird', 'jay', 'kestrel', 'kingfisher', 'macaw', 'magpie', 'myna', 'nightingale', 'oriole', 'ostrich', 'owl', 'parrot', 'partridge', 'peacock', 'pelican', 'penguin', 'pheasant', 'pigeon', 'quail', 'raven', 'robin', 'rooster', 'seagull', 'skylark', 'sparrow', 'starling', 'stork', 'swallow', 'swan', 'tailorbird', 'toucans', 'turkey', 'vulture', 'wagtails', 'weaverbird', 'woodpecker']
var aquatics = ['anglerfish', 'atlanticsalmon', 'axolotl', 'bannerfish', 'barracuda', 'batfish', 'belugawhale', 'bluemarlin', 'bluetang', 'boxfish', 'butterflyfish', 'clams', 'clownfish', 'conch', 'coral', 'cormorant', 'cowfish', 'crab', 'crocodilefish', 'cuttlefish', 'eagle ray', 'eel', 'elephantseal', 'flounder', 'flyingfish', 'fugu', 'glassfish', 'guitarfish', 'haddock', 'hammerheadshark', 'herring', 'horseshoecrab', 'humpbackwhale', 'jellyfish', 'killerwhale', 'leafyseadragon', 'lionfish', 'lobster', 'mackerel', 'manatee', 'mantaray', 'mollusk', 'moorishidol', 'mussels', 'nautilus', 'octopus', 'oyster', 'pacifichalibut', 'pelican', 'penguin', 'pilotwhale', 'plankton', 'porcupinefish', 'rockfish', 'sardines', 'sawfish', 'scallop', 'scorpionfish', 'seaanemone', 'seaotter', 'seaslug', 'seasnail', 'seasnake', 'seaturtle', 'seaurchin', 'seagull', 'seahorse', 'seal', 'sealion', 'seaweed', 'shark', 'shell', 'shrimp', 'squid', 'starfish', 'stingray', 'stonefish', 'sunfish', 'swordfish', 'tigershark', 'whale', 'yellowtang', 'yellowfintuna', 'zebrashark']
var insects = ['ant', 'honeybee', 'mosquito', 'spider', 'grasshopper', 'fly', 'cricket', 'butterfly', 'caterpillar', 'cockroach', 'beetle', 'bedbug', 'bumblebee', 'dragonfly', 'fireflies', 'greenstinkbug', 'hornworm', 'indianhornet', 'woodworm', 'tick', 'termite', 'stickinsect', 'scorpion', 'redvelvetmite', 'redbug', 'paintedgrasshopper', 'moth', 'molecricket', 'maggot', 'ladybug', 'silkworms', 'assassinfly', 'beanweevil', 'centipede', 'cicada', 'diggerwasp', 'dungbeetle', 'earwig', 'fireflies', 'flea', 'flowerfly', 'flyingtermites', 'giantwaterbug', 'greenfly', 'grub', 'leafinsect', 'locust', 'louse', 'mayfly', 'waterbeetle', 'wasp', 'prayingmantis', 'nepidae', 'millipede']

var letters = [];
var chosen = "";
var btnBox = document.getElementsByClassName("btn-box");
var nextMoveBtn = document.getElementById("nextMove");
nextMoveBtn.style.backgroundColor = green;
var newGameBtn = document.getElementById("newGame");
newGameBtn.style.backgroundColor = red;
var smallScreen = screen.width < 400;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = strokeCol;
var hiSc = document.getElementsByClassName("highScore")[0];
var hiSt = document.getElementsByClassName("highStreak")[0];
var timer = document.getElementsByClassName("timer")[0];
var msgInt = document.getElementById("msg-int");
var listNameEl = document.getElementsByClassName("listName")[0];
const maxGuess = 10;
var wrongGuesses = 0;
var streak = 0;
var score = 0;
var guessesLeft = maxGuess - wrongGuesses;
var mins = 2;
var secs = mins * 60;
var wrd = getGuessedWord(chosen, letters);
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var highScoreReached = document.getElementsByClassName("highscore")[0];
var scoreEl = document.getElementsByClassName("score")[0];
var streakEl = document.getElementsByClassName("streak")[0];
// audio elements
var gameOverSound = document.getElementById("gameOver");
var rightClickSound = document.getElementById("rightClick");
var wrongClickSound = document.getElementById("wrongClick");
var moveClearedSound = document.getElementById("moveCleared");
var newHighScoreSound = document.getElementById("newHighScore");
var displayBtn = document.getElementById("displayMultiResults");
displayBtn.disabled = true;
displayBtn.style.display = "none";
var goHom = document.getElementById("goHome");
var gameClearText = document.getElementsByClassName("gameCleared")[0];
gameClearText.style.display = 'none';
goHom.disabled = true;
goHom.style.display = "none";
var gameMode = window.location.href.split('?')[1].slice(5);
var turnEnded = false;
if (gameMode == "multiplayer") {
    document.getElementsByClassName("highScore")[0].style.display = "none";
    document.getElementsByClassName("highStreak")[0].style.display = "none";
    var turnEl = document.getElementsByClassName("turn")[0];
    var turns = Number(window.location.href.split('?')[2].slice(6));
    var players = Number(window.location.href.split('?')[3].slice(8));
    var timeMode = window.location.href.split('?')[4].slice(8)
    var curPlayer = 0;
    var curTurn = 1;
    var playerNames = [];
    var playerScores = [];
    var playerStreaks = [];
    for (let i = 5; i < (players + 5); i++) {
        var plname = window.location.href.split('?')[i].slice(8);
        if (plname.includes("%20")) {
            plname = plname.split("%20").join(" ")
        }
        playerNames.push(plname);
        playerScores.push(0);
        playerStreaks.push(0);
    }
}

// newGame();       