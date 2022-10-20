var roomNum = 2;
var correctPuzzlePieces = 0;
var points = 0;

var bathroomKeyFound = false;
var fridgeUnlocked = false;
var puzzle1found = false;
var puzzle2found = false;
var puzzle3found = false;
var puzzle1In = false;
var puzzle2In = false;
var puzzleSolved = false;
var magnetFound = false;
var computerPuzzleSolved = false;
var magnetAndYarnCombined = false;
var sinkNumFound = false;
var bathroomBoxPuzzleSolved = false;
var cheatPuzzle1Solved = false;
var cheatFridgeUnlocked = false;

var pokeballImg = new Image();
pokeballImg.src = "resources/pokeball.png";

var grass = new Image();
grass.src = "resources/grass.png";

var sprite1 = new Image();
sprite1.src = "resources/bulbasaur.png";

var sprite2 = new Image();
sprite2.src = "resources/charmander.png";

var sprite3 = new Image();
sprite3.src = "resources/squirtle.png";

var a;
var pokeball;
var bulbasaur;

function changeRoomsForward()
{
    if (roomNum !== 4)
    {
        roomNum = roomNum + 1
        document.getElementById("output").innerHTML = roomNum;
    }
    //bathroom to bedroom
    if (roomNum === 2)
    {
        document.getElementById("bathroomImg").style.visibility = "hidden";
        document.getElementById("bathroomKeyImg").style.visibility = "hidden";
        document.getElementById("bedroomImg").style.visibility = "visible";
        document.getElementById("fullPuzzleImg").style.visibility = "visible";
        document.getElementById("puzzleButton").style.display = "block";
        document.getElementById("computerLockImg").style.visibility = "visible";
        document.getElementById("computerLockButton").style.display = "block";
        document.getElementById("bathroomSinkButton").style.display = "none";
        document.getElementById("bathroomBoxImg").style.visibility = "hidden";
        document.getElementById("bathroomBoxButton").style.display = "none";
        if (fridgeUnlocked === false)
        {
            document.getElementById("cheatGift1Img").style.visibility = "visible";
            document.getElementById("cheatButton1").style.display = "block";
        }
        if (puzzle2found === false)
        {
            document.getElementById("puzzle2Img").style.visibility = "visible";
            document.getElementById("puzzle2Button").style.display = "block";
        }
    }
    //bedroom to kitchen
    if (roomNum === 3)
    {
        document.getElementById("fullPuzzleImg").style.visibility = "hidden";
        document.getElementById("kitchenImg").style.visibility = "visible";
        document.getElementById("fridgeLockImg").style.visibility = "visible";
        document.getElementById("fridgeLockButton").style.display = "block";
        document.getElementById("bedroomImg").style.visibility = "hidden";
        document.getElementById("puzzle2Img").style.visibility = "hidden";
        document.getElementById("puzzle2Button").style.display = "none";
        document.getElementById("puzzleButton").style.display = "none";
        document.getElementById("computerLockImg").style.visibility = "hidden";
        document.getElementById("computerLockButton").style.display = "none";
        document.getElementById("kitchenCupsButton").style.display = "block";
        document.getElementById("cheatGift1Img").style.visibility = "hidden";
        document.getElementById("cheatButton1").style.display = "none";
        if (puzzle1found === false)
        {
            document.getElementById("puzzle1Img").style.visibility = "visible";
            document.getElementById("puzzle1Button").style.display = "block";
        }
    }
    //kitchen to front door
    if (roomNum === 4)
    {
        document.getElementById("frontDoorImg").style.visibility = "visible";
        document.getElementById("fridgeLockButton").style.display = "none";
        document.getElementById("fridgeLockImg").style.visibility = "hidden";
        document.getElementById("bedroomImg").style.visibility = "hidden";
        document.getElementById("kitchenImg").style.visibility = "hidden";
        document.getElementById("puzzle1Img").style.visibility = "hidden";
        document.getElementById("puzzle1Button").style.display = "none";
        document.getElementById("kitchenCupsButton").style.display = "none";
        document.getElementById("keypadButton").style.display = "block";
    }
}

function changeRoomsBackwards()
{
    if (roomNum !== 1)
    {
        roomNum = roomNum - 1
        document.getElementById("output").innerHTML = roomNum;
    }
    //bedroom to bathroom
    if (roomNum === 1)
    {
        if (bathroomKeyFound === false)
        {
            document.getElementById("bathroomKeyImg").style.visibility = "visible";
        }
        document.getElementById("bathroomImg").style.visibility = "visible";
        document.getElementById("bedroomImg").style.visibility = "hidden";
        document.getElementById("puzzle2Img").style.visibility = "hidden";
        document.getElementById("puzzle2Button").style.display = "none";
        document.getElementById("fullPuzzleImg").style.visibility = "hidden";
        document.getElementById("puzzleButton").style.display = "none";
        document.getElementById("computerLockImg").style.visibility = "hidden";
        document.getElementById("computerLockButton").style.display = "none";
        document.getElementById("bathroomSinkButton").style.display = "block";
        document.getElementById("bathroomBoxImg").style.visibility = "visible";
        document.getElementById("bathroomBoxButton").style.display = "block";
        document.getElementById("cheatGift1Img").style.visibility = "hidden";
        document.getElementById("cheatButton1").style.display = "none";
    }
    //kitchen to bedroom
    if (roomNum === 2)
    {
        document.getElementById("bedroomImg").style.visibility = "visible";
        document.getElementById("kitchenImg").style.visibility = "hidden";
        document.getElementById("bathroomImg").style.visibility = "hidden";
        document.getElementById("fridgeLockButton").style.display = "none";
        document.getElementById("fridgeLockImg").style.visibility = "hidden";
        document.getElementById("puzzle1Img").style.visibility = "hidden";
        document.getElementById("puzzle1Button").style.display = "none";
        document.getElementById("fullPuzzleImg").style.visibility = "visible";
        document.getElementById("puzzleButton").style.display = "block";
        document.getElementById("computerLockImg").style.visibility = "visible";
        document.getElementById("computerLockButton").style.display = "block";
        document.getElementById("kitchenCupsButton").style.display = "none";
        if (fridgeUnlocked === false)
        {
            document.getElementById("cheatGift1Img").style.visibility = "visible";
            document.getElementById("cheatButton1").style.display = "block";
        }
        if (puzzle2found === false)
        {
            document.getElementById("puzzle2Img").style.visibility = "visible";
            document.getElementById("puzzle2Button").style.display = "block";
        }
    }
    //front door to kitchen
    if (roomNum === 3)
    {
        document.getElementById("kitchenImg").style.visibility = "visible";
        document.getElementById("fridgeLockImg").style.visibility = "visible";
        document.getElementById("fridgeLockButton").style.display = "block";
        document.getElementById("frontDoorImg").style.visibility = "hidden";
        document.getElementById("kitchenCupsButton").style.display = "block";
        document.getElementById("keypadButton").style.display = "none";
        if (puzzle1found === false)
        {
            document.getElementById("puzzle1Img").style.visibility = "visible";
            document.getElementById("puzzle1Button").style.display = "block";
        }
    }
}

function keyInInventory()
{
    if (bathroomKeyFound === false)
    {
        document.getElementById("bathroomKeyImg").style.visibility = "hidden";
        document.getElementById("invBathroomKeyImg").style.visibility = "visible";
        document.getElementById("bathroomKeyButton").style.display = "none";
    }
    bathroomKeyFound = true
    if (cheatFridgeUnlocked === false)
    {
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    }
}

function dresserPuzzle()
{
    document.getElementById("computerLockImg").style.visibility = "hidden";
    document.getElementById("computerLockButton").style.display = "none";
    document.getElementById("keyholeBox").style.display = "block";
    document.getElementById("fullPuzzleImg").style.visibility = "hidden";
    document.getElementById("puzzleButton").style.display = "none";
    document.getElementById("dresserKeyholeImg").style.visibility = "visible";
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    document.getElementById("bedroomDresserButton").style.display = "none";
}

//drag and drop was learned from the internet

function allowDrop(ev)
{
    ev.preventDefault()
}

function drag(ev)
{
    ev.dataTransfer.getData("text");
}

function dropKey(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/bathroomKey.png")
    {
        document.getElementById("openDresserImg").style.visibility = "visible";
        document.getElementById("dresserKeyholeImg").style.visibility = "hidden";
        document.getElementById("invBathroomKeyImg").style.visibility = "hidden";
        document.getElementById("openDresserButton").style.display = "block";
        document.getElementById("keyholeBox").style.display = "none";
        if (cheatFridgeUnlocked === false)
        {
            var x = parseInt(document.getElementById("pBar").style.width);
            x = x + 6
            document.getElementById("pBar").style.width = x + "%"
            document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        }
    }
}

function dropP1(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/puzzle1.png")
    {
        document.getElementById("invPuzzle1Img").style.visibility = "hidden"
        document.getElementById("puzzle1InImg").src = data
        document.getElementById("puzzle1InImg").style.visibility = "visible"
        document.getElementById("puzzle1Box").style.display = "none"
        document.getElementById("puzzle1InImg").style.visibility = "visible"
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 5
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        correctPuzzlePieces += 1;
        puzzle1In = true;
    }
    checkPuzzleDone()
}

function dropP2(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/puzzle2.png")
    {
        document.getElementById("invPuzzle2Img").style.visibility = "hidden"
        document.getElementById("puzzle2InImg").src = data
        document.getElementById("puzzle2InImg").style.visibility = "visible"
        document.getElementById("puzzle2Box").style.display = "none"
        document.getElementById("puzzle2InImg").style.visibility = "visible"
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 5
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        correctPuzzlePieces += 1;
        puzzle2In = true;
    }
    checkPuzzleDone()
}

function dropP3(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/puzzle3.png")
    {
        document.getElementById("invPuzzle3Img").style.visibility = "hidden"
        document.getElementById("puzzle3InImg").src = data
        document.getElementById("puzzle3InImg").style.visibility = "visible"
        document.getElementById("puzzle3Box").style.display = "none"
        document.getElementById("puzzle3InImg").style.visibility = "visible"
        correctPuzzlePieces += 1;
    }
    checkPuzzleDone()
}

function checkPuzzleDone()
{
    if (correctPuzzlePieces === 3)
    {
        document.getElementById("puzzle1InImg").style.visibility = "hidden"
        document.getElementById("puzzle2InImg").style.visibility = "hidden"
        document.getElementById("puzzle3InImg").style.visibility = "hidden"
        puzzleSolved = true;
        document.getElementById("puzzleNum").style.visibility = "visible"
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        document.getElementById("fullPuzzleImg").src = "resources/puzzleNum.png";
        document.getElementById("fullPuzzleImg").style.width = "130px"
        document.getElementById("fullPuzzleImg").style.left = "65px"
    }
}

function xOutPuzzle()
{
    document.getElementById("xOutImg").style.visibility = "hidden";
    document.getElementById("xOutButton").style.display = "none";
    if (document.getElementById("fridgePasswordImg").style.visibility === "visible" || document.getElementById("openFridgeImg").style.visibility === "visible")
    {
        document.getElementById("fridgePasswordImg").style.visibility = "hidden";
        document.getElementById("num1").style.display = "none";
        document.getElementById("num2").style.display = "none";
        document.getElementById("num3").style.display = "none";
        document.getElementById("num4").style.display = "none";
        document.getElementById("fridgeUnlockButton").style.display = "none";
        document.getElementById("openFridgeImg").style.visibility = "hidden";
        document.getElementById("puzzle3Img").style.visibility = "hidden";
        document.getElementById("magnetImg").style.visibility = "hidden";
        document.getElementById("magnetButton").style.display = "none";
        document.getElementById("boltCutterBox").style.display = "none";
    }
    else if (document.getElementById("dresserKeyholeImg").style.visibility === "visible" || document.getElementById("openDresserEmptyImg").style.visibility === "visible")
    {
        document.getElementById("dresserKeyholeImg").style.visibility = "hidden";
        document.getElementById("openDresserEmptyImg").style.visibility = "hidden";
        document.getElementById("puzzleButton").style.display = "block";
        document.getElementById("fullPuzzleImg").style.visibility = "visible";
        document.getElementById("computerLockImg").style.visibility = "visible";
        document.getElementById("computerLockButton").style.display = "block";
    }
    else if (document.getElementById("puzzleImg").style.visibility === "visible" || document.getElementById("computerScreen").style.visibility === "visible")
    {
        document.getElementById("puzzleImg").style.visibility = "hidden";
        document.getElementById("puzzleButton").style.display = "block";
        document.getElementById("fullPuzzleImg").style.visibility = "visible";
        document.getElementById("computerLockImg").style.visibility = "visible";
        document.getElementById("computerLockButton").style.display = "block";
        document.getElementById("computerScreen").style.visibility = "hidden";
        document.getElementById("puzzle1Box").style.display = "none";
        document.getElementById("puzzle2Box").style.display = "none";
        document.getElementById("puzzle3Box").style.display = "none";
        document.getElementById("canvas").style.display = "none";
        document.getElementById("computerNumImg").style.visibility = "hidden";
        document.getElementById("puzzleNum").style.visibility = "hidden";
        if (puzzle1In === true)
        {
            document.getElementById("puzzle1InImg").style.visibility = "hidden";
        }
        if (puzzle2In === true)
        {
            document.getElementById("puzzle2InImg").style.visibility = "hidden";
        }
    }
    else if (document.getElementById("puzzleNum").style.visibility === "visible")
    {
        document.getElementById("puzzleNum").style.visibility = "hidden"
    }
    else if (document.getElementById("kitchenCupsImg").style.visibility === "visible")
    {
        document.getElementById("kitchenCupsImg").style.visibility = "hidden";
        document.getElementById("kitchenCupsButton").style.display = "block";
    }
    else if (document.getElementById("bathroomSinkImg").style.visibility === "visible")
    {
        document.getElementById("bathroomSinkImg").style.visibility = "hidden";
        document.getElementById("bathroomSinkButton").style.display = "block";
        document.getElementById("drainBox").style.display = "none";
        document.getElementById("sinkNumImg").style.visibility = "hidden";
        document.getElementById("bathroomBoxImg").style.visibility = "visible";
        document.getElementById("bathroomBoxButton").style.display = "block";
    }
    else if (document.getElementById("bathroomBoxLockImg").style.visibility === "visible")
    {
        document.getElementById("bathroomBoxLockImg").style.visibility = "hidden";
        document.getElementById("bathroomBoxUnlockedImg").style.visibility = "hidden";
        document.getElementById("computerColor0").style.display = "none";
        document.getElementById("computerColor1").style.display = "none";
        document.getElementById("computerColor2").style.display = "none";
        document.getElementById("computerColor3").style.display = "none";
    }
    else if (document.getElementById("bathroomBoxUnlockedImg").style.visibility === "visible")
    {
        document.getElementById("bathroomBoxUnlockedImg").style.visibility = "hidden";
    }
    else if (document.getElementById("keyPadImg").style.visibility === "visible")
    {
        document.getElementById("keyPadImg").style.visibility = "hidden";
        document.getElementById("keypadButton").style.display = "block";
        document.getElementById("kb1").style.display = "none";
        document.getElementById("kb2").style.display = "none";
        document.getElementById("kb5").style.display = "none";
        document.getElementById("kb8").style.display = "none";
        document.getElementById("kbEnter").style.display = "none";
    }
}

function dresserInInventory()
{
    document.getElementById("openDresserEmptyImg").style.visibility = "visible";
    document.getElementById("openDresserImg").style.visibility = "hidden";
    document.getElementById("yarnImg").style.visibility = "visible";
    document.getElementById("invDresserNoteImg").style.visibility = "visible";
    document.getElementById("dresserNoteButton").style.display = "block";
    document.getElementById("openDresserButton").style.display = "none";
    if (cheatFridgeUnlocked === false)
    {
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    }
}

function displayDresserNote()
{
    if (document.getElementById("dresserNoteImg").style.visibility === "hidden")
    {
        document.getElementById("dresserNoteImg").style.visibility = "visible"
    }
    else
    {
        document.getElementById("dresserNoteImg").style.visibility = "hidden"

    }
}

function fridgePuzzle()
{
    document.getElementById("xOutButton").style.display = "block";
    document.getElementById("xOutImg").style.visibility = "visible";
    if (cheatPuzzle1Solved === true)
    {
        document.getElementById("boltCutterBox").style.display = "block";
    }
    if (cheatFridgeUnlocked === false)
    {
        document.getElementById("fridgePasswordImg").style.visibility = "visible"
        document.getElementById("num1").style.display = "block";
        document.getElementById("num2").style.display = "block";
        document.getElementById("num3").style.display = "block";
        document.getElementById("num4").style.display = "block";
        document.getElementById("fridgeUnlockButton").style.display = "block";
    }
    else if (cheatFridgeUnlocked === true)
    {
        unlockFridge()
    }
}

function checkFridgePassword()
{
    var passNum1 = parseInt(document.getElementById("num1").value)
    var passNum2 = parseInt(document.getElementById("num2").value)
    var passNum3 = parseInt(document.getElementById("num3").value)
    var passNum4 = parseInt(document.getElementById("num4").value)
    if (passNum1 === 2 && passNum2 === 1 && passNum3 === 3 && passNum4 === 0)
    {
        unlockFridge()
    }
}

function unlockFridge()
{
    if (fridgeUnlocked === false || cheatPuzzle1Solved === false)
    {
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 9
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    }
    if (puzzle3found === false)
    {
        document.getElementById("puzzle3Img").style.visibility = "visible";
        document.getElementById("puzzle3Button").style.display = "block";
    }
    if (magnetFound === false)
    {
        document.getElementById("magnetButton").style.display = "block";
        document.getElementById("magnetImg").style.visibility = "visible";
    }
    document.getElementById("openFridgeImg").style.visibility = "visible";
    document.getElementById("num1").style.display = "none";
    document.getElementById("num2").style.display = "none";
    document.getElementById("num3").style.display = "none";
    document.getElementById("num4").style.display = "none";
    document.getElementById("fridgeUnlockButton").style.display = "none";
    fridgeUnlocked = true;
}

function p1InInventory()
{
    puzzle1found = true
    document.getElementById("invPuzzle1Img").style.visibility = "visible";
    document.getElementById("puzzle1Img").style.visibility = "hidden";
    document.getElementById("puzzle1Button").style.display = "none";
    var x = parseInt(document.getElementById("pBar").style.width);
    x = x + 6
    document.getElementById("pBar").style.width = x + "%"
    document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
}

function p2InInventory()
{
    puzzle2found = true
    document.getElementById("invPuzzle2Img").style.visibility = "visible";
    document.getElementById("puzzle2Img").style.visibility = "hidden";
    document.getElementById("puzzle2Button").style.display = "none";
    var x = parseInt(document.getElementById("pBar").style.width);
    x = x + 6
    document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
}

function p3InInventory()
{
    puzzle3found = true
    document.getElementById("invPuzzle3Img").style.visibility = "visible";
    document.getElementById("puzzle3Img").style.visibility = "hidden";
    document.getElementById("puzzle3Button").style.display = "none";
    var x = parseInt(document.getElementById("pBar").style.width);
    x = x + 6
    document.getElementById("pBar").style.width = x + "%"
    document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
}

function openPuzzle()
{
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    if (puzzleSolved === false)
    {
        document.getElementById("puzzle1Box").style.display = "block";
        document.getElementById("puzzle2Box").style.display = "block";
        document.getElementById("puzzle3Box").style.display = "block";
        document.getElementById("puzzleImg").style.visibility = "visible";
        document.getElementById("puzzleButton").style.display = "none";
        document.getElementById("computerLockImg").style.visibility = "hidden";
        document.getElementById("computerLockButton").style.display = "none";
        if (puzzle1In === true)
        {
            document.getElementById("puzzle1InImg").style.visibility = "visible";
        }
        if (puzzle2In === true)
        {
            document.getElementById("puzzle2InImg").style.visibility = "visible";
        }
    }
    else if (puzzleSolved === true)
    {
        document.getElementById("puzzleNum").style.visibility = "visible"
    }
}

function magnetInInventory()
{
    document.getElementById("magnetButton").style.display = "none";
    document.getElementById("magnetImg").style.visibility = "hidden";
    document.getElementById("invMagnetImg").style.visibility = "visible";
    document.getElementById("invMagnetButton").style.display = "block";
    var x = parseInt(document.getElementById("pBar").style.width);
    x = x + 6
    document.getElementById("pBar").style.width = x + "%"
    document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    magnetFound = true;

}

function computerPuzzle()
{
    document.getElementById("computerScreen").style.visibility = "visible";
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    document.getElementById("computerLockImg").style.visibility = "hidden";
    document.getElementById("computerLockButton").style.display = "none";
    document.getElementById("fullPuzzleImg").style.visibility = "hidden";
    document.getElementById("puzzleButton").style.display = "none";
    if (computerPuzzleSolved === true)
    {
        showComputerHint()
    }
    else
    {
        document.getElementById("canvas").style.display = "block";
    }

    var ctx = document.getElementById("canvas").getContext("2d");
    bulbasaur = createImage(sprite1.src,300,300,50,45, 0);
    pokeball = createImage(pokeballImg.src, 100, 100, 40, 40, 0)
    interval = setInterval(movePokemon, 2000);
    ctx.drawImage(pokeball,pokeball.left,pokeball.top,pokeball.width,pokeball.height);
    ctx.drawImage(bulbasaur,bulbasaur.left,bulbasaur.top,bulbasaur.width,bulbasaur.height);

    animate()
}

function displayBathroomBox()
{
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    if (bathroomBoxPuzzleSolved === false)
    {
        document.getElementById("bathroomBoxLockImg").style.visibility = "visible";
        document.getElementById("computerColor0").style.display = "block";
        document.getElementById("computerColor1").style.display = "block";
        document.getElementById("computerColor2").style.display = "block";
        document.getElementById("computerColor3").style.display = "block";
    }
    else if (bathroomBoxPuzzleSolved === true)
    {
        document.getElementById("bathroomBoxUnlockedImg").style.visibility = "visible";
    }
}

var createImage = function(src,xco,yco,w,h,s) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.speed = s;
    img.vis= false;
    return img;
}

$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //a key to go left
    if(keycode === 65)
    {
        pokeball.left -= 20
    }
    //d key to go right
    if(keycode === 68)
    {
        pokeball.left += 20
    }
    //w key to go up
    if(keycode === 87)
    {
        pokeball.top -= 20
    }
    //s key to go down
    if(keycode === 83)
    {
        pokeball.top += 20
    }
});

function animate()
{
    a=requestAnimationFrame(animate)
    drawBackground()
    drawScore()
    drawPokeball()
    drawPokemon()
    checkCollision(pokeball, bulbasaur)
}

function drawBackground()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(grass, 0, 0, 525, 500)
}

function drawScore()
{
    var ctx = canvas.getContext("2d");
    ctx.font = 'bold 30px Courier New';
    ctx.fillStyle= "#ffffff"
    ctx.fillText("Score: " + points, 10, 30);
}

function drawPokeball()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(pokeball,pokeball.left,pokeball.top,pokeball.width,pokeball.height);
}

function drawPokemon()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(bulbasaur,bulbasaur.left,bulbasaur.top,bulbasaur.width,bulbasaur.height);
}

function movePokemon()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    bulbasaur.left = Math.floor(Math.random() * (450 - 50)) + 50;
    bulbasaur.top = Math.floor(Math.random() * (350 - 50)) + 50;
    ctx.drawImage(bulbasaur,bulbasaur.left,bulbasaur.top,bulbasaur.width,bulbasaur.height);
}

function checkCollision(p1, p2)
{
    if ((p1.left + p1.width > p2.left) && (p1.left < p2.left + p2.width) && (p1.top + p1.height > p2.top) && (p1.top < p2.top + p2.height))
    {
        points++;
        if (points === 3)
        {
            showComputerHint()
        }
        movePokemon()
        changePokemon()
    }
}

pokemonArray = ["resources/charmander.png", "resources/squirtle.png"]

function changePokemon()
{
    bulbasaur.src = pokemonArray[points - 1]
}

function showComputerHint()
{
    if (document.getElementById("computerScreen").style.visibility === "visible")
    {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("computerNumImg").style.visibility = "visible";
        document.getElementById("computerLockImg").src = "resources/unlocked.png";
        document.getElementById("computerLockImg").style.top = "415px";
        document.getElementById("computerLockImg").style.width = "50px";
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        computerPuzzleSolved = true
    }
}

var buttonColors = ["#f7b565", "#fcb8c7", "#daffa6", "#fffea8", "#a7f2f0"]
var variables = [0, 0, 0, 0]

function changeButtonColor(clickID)
{
    for (i = 0; i < 4; i++)
    {
        var buttonId = "computerColor" + i
        if (buttonId === clickID)
        {
            var idName = document.getElementById(buttonId)
            idName.style.backgroundColor = buttonColors[variables[i]]
            variables[i]++;
            if (variables[i] > 4)
            {
                variables[i] = 0;
            }
        }
    }

    if (document.getElementById("computerColor0").style.backgroundColor === "rgb(247, 181, 101)" &&
        document.getElementById("computerColor1").style.backgroundColor === "rgb(167, 242, 240)" &&
        document.getElementById("computerColor2").style.backgroundColor === "rgb(252, 184, 199)" &&
        document.getElementById("computerColor3").style.backgroundColor === "rgb(255, 254, 168)")
    {
        bathroomBoxPuzzleSolved = true;
        x = 0
        while (x < 4)
        {
            document.getElementById("computerColor" + x).style.display = "none";
            x++
        }
        document.getElementById("bathroomBoxUnlockedImg").style.visibility = "visible";
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    }
}

function displayCups()
{
    document.getElementById("kitchenCupsImg").style.visibility = "visible";
    document.getElementById("kitchenCupsButton").style.display = "none";
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
}

function displaySink()
{
    document.getElementById("bathroomSinkImg").style.visibility = "visible";
    document.getElementById("bathroomSinkButton").style.display = "none";
    document.getElementById("bathroomBoxImg").style.visibility = "hidden";
    document.getElementById("bathroomBoxButton").style.display = "none";
    document.getElementById("drainBox").style.display = "block";
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    if (sinkNumFound === true)
    {
        document.getElementById("sinkNumImg").style.visibility = "visible";
    }
}

function dropYM(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/magnet.png" && document.getElementById("invMagnetImg").style.visibility === "visible")
    {
        document.getElementById("yarnImg").src = "resources/magnetAndYarn.PNG";
        document.getElementById("yarnImg").style.left = "1240px";
        document.getElementById("yarnImg").style.width = "100px";
        document.getElementById("invMagnetImg").style.display = "none";
        document.getElementById("yarnMagnetBox").style.display = "none";
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        magnetAndYarnCombined = true;
    }
}

function dropD(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/magnetAndYarn.PNG")
    {
        document.getElementById("yarnImg").style.visibility = "hidden";
        document.getElementById("sinkNumImg").style.visibility = "visible";
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 6
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        sinkNumFound = true;
    }
}

var screenNum = 0

function nextPage()
{
    if (screenNum === 0)
    {
        document.getElementById("dots1Img").style.visibility = "visible";
    }
    else if (screenNum === 1)
    {
        document.getElementById("dots2Img").style.visibility = "visible";
    }
    else if (screenNum === 2)
    {
        document.getElementById("dots1Img").style.visibility = "hidden";
        document.getElementById("dots2Img").style.visibility = "hidden";
        document.getElementById("ohNoImg").style.visibility = "visible";
    }
    else if (screenNum === 3)
    {
        document.getElementById("ohNoImg").style.visibility = "hidden";
        document.getElementById("oversleptImg").style.visibility = "visible";
    }
    else if (screenNum === 4)
    {
        document.getElementById("oversleptImg").style.visibility = "hidden";
        document.getElementById("openingScreenImg").style.visibility = "hidden";
        document.getElementById("nextImg").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";
        document.getElementById("text1Img").style.visibility = "visible";
        document.getElementById("nextButton").style.opacity = "0";
        document.getElementById("pBar").style.width = 2 + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
    }
    else if (screenNum === 5)
    {
        document.getElementById("text1Img").style.visibility = "hidden";
        document.getElementById("text2Img").style.visibility = "visible";
    }
    else if (screenNum === 6)
    {
        document.getElementById("text2Img").style.visibility = "hidden";
        document.getElementById("text3Img").style.visibility = "visible";
    }
    else if (screenNum === 7)
    {
        document.getElementById("text3Img").style.visibility = "hidden";
        document.getElementById("nextButton").style.display = "none";
    }
    else if (screenNum === 8)
    {
        document.getElementById("text4Img").style.visibility = "visible";
    }
    else if (screenNum === 9)
    {
        document.getElementById("text4Img").style.visibility = "hidden";
        document.getElementById("text5Img").style.visibility = "visible";
    }
    else if (screenNum === 10)
    {
        document.getElementById("text5Img").style.visibility = "hidden";
        document.getElementById("text6Img").style.visibility = "visible";
    }
    else if (screenNum === 11)
    {
        document.getElementById("openingScreenImg").style.visibility = "visible";
        document.getElementById("text6Img").style.visibility = "hidden";
        document.getElementById("text7Img").style.visibility = "visible";
    }
    else if (screenNum === 12)
    {
        document.getElementById("text7Img").style.visibility = "hidden";
    }
    screenNum++;

}

function keypadPuzzle()
{
    document.getElementById("keyPadImg").style.visibility = "visible";
    document.getElementById("keypadButton").style.display = "none";
    document.getElementById("xOutImg").style.visibility = "visible";
    document.getElementById("xOutButton").style.display = "block";
    document.getElementById("kb1").style.display = "block";
    document.getElementById("kb2").style.display = "block";
    document.getElementById("kb5").style.display = "block";
    document.getElementById("kb8").style.display = "block";
    document.getElementById("kbEnter").style.display = "block";
}

var password = []

function keypadNum(buttonID)
{
    for (i = 0; i < 9; i++)
    {
        var temp = "kb" + i
        if (temp === buttonID)
        {
            password.push(i)
        }
    }
}

function checkKeypad()
{
    if (password[0] === 5 && password[1] === 1 && password[2] === 2 && password[3] === 8)
    {
        document.getElementById("openFrontDoorImg").style.visibility = "visible";
        document.getElementById("xOutImg").style.visibility = "hidden";
        document.getElementById("xOutButton").style.display = "none";
        document.getElementById("text4Img").style.visibility = "visible";
        document.getElementById("nextButton").style.display = "block";
        document.getElementById("nextButton").style.opacity = "0";
        document.getElementById("pBar").style.width = "100%";
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        screenNum = 8
        nextPage()
    }
    else
    {
        var passwordLength = password.length
        x = 0
        while (x < passwordLength)
        {
            password.pop()
            x++
        }
    }
}

function cheatPuzzle1()
{
    document.getElementById("cheatPuzzle1Img").style.visibility = "visible";
    document.getElementById("cheatPuzzle1Sol").style.display = "block";
    document.getElementById("cheatSubmitButton1").style.display = "block";
}

function checkCheatPuzzle1()
{
    document.getElementById("cheatPuzzle1Img").style.visibility = "hidden";
    document.getElementById("cheatGift1Img").style.visibility = "hidden";
    document.getElementById("cheatButton1").style.display = "none";
    document.getElementById("cheatPuzzle1Sol").style.display = "none";
    document.getElementById("cheatSubmitButton1").style.display = "none";
    if (document.getElementById("cheatPuzzle1Sol").value === "987")
    {
        document.getElementById("boltCutterImg").style.visibility = "visible";
        cheatPuzzle1Solved = true
    }
}

function dropBC(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data === "http://localhost:63342/ERFP%2005.11/resources/boltCutter.png")
    {
        unlockFridge()
        document.getElementById("fridgeLockImg").style.visibility = "hidden";
        var x = parseInt(document.getElementById("pBar").style.width);
        x = x + 32
        document.getElementById("pBar").style.width = x + "%"
        document.getElementById("pBar").innerHTML = document.getElementById("pBar").style.width;
        cheatFridgeUnlocked = true;
    }
}


