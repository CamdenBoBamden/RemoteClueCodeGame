$(function () {

    $('#btnGameReset').on('click', function () {
        //reset all cards to black backgrounds
        var list = document.getElementsByClassName("basicCard");
        for (var i = 0; i < list.length; i++) {
            list.item(i).style.backgroundColor = "darkgrey";
        }


        var gameSet = [];
        var gameCards = [];
        var wordBank = [
            "SHAKESPEARE",
            "GAS",
            "TORCH",
            "HOLE",
            "ROW",
            "BAND",
            "SEAL",
            "ROUND",
            "RULER",
            "MINT",
            "BERMUDA",
            "STRIKE",
            "PHOENIX",
            "KNIGHT",
            "WIND",
            "FIELD",
            "POLICE",
            "SCALE",
            "KEY",
            "CAST",
            "PLANE",
            "COTTON",
            "DEGREE",
            "MASS",
            "MILLIONAIRE",
            "KIWI",
            "WELL",
            "CIRCLE",
            "CAP",
            "QUEEN",
            "FORK",
            "PORT",
            "HIMALAYAS",
            "STREAM",
            "MOUNT",
            "TICK",
            "LIGHT",
            "MAPLE",
            "CODE",
            "SOLDIER",
            "DATE",
            "GHOST",
            "PLATYPUS",
            "AGENT",
            "DIAMOND",
            "TRACK",
            "MOUTH",
            "LAB",
            "CARROT",
            "FOREST",
            "OCTOPUS",
            "TOOTH",
            "STAFF",
            "WAKE",
            "MICROSCOPE",
            "DUCK",
            "DRAGON",
            "TEACHER",
            "SUIT",
            "LAWYER",
            "PIN",
            "POUND",
            "BELT",
            "MOUSE",
            "PISTOL",
            "CROSS",
            "FILE",
            "BACK",
            "NEEDLE",
            "COPPER",
            "CALF",
            "OIL",
            "BILL",
            "PUMPKIN",
            "NINJA",
            "HOLLYWOOD",
            "PIE",
            "DRESS",
            "TUBE",
            "MISSILE",
            "FIGHTER",
            "POLE",
            "SKYSCRAPER",
            "DOG",
            "COOK",
            "TAIL",
            "COLD",
            "GRACE",
            "WITCH",
            "TEMPLE",
            "KETCHUP",
            "CRASH",
            "ALPS",
            "DWARF",
            "SUPERHERO",
            "CLOAK",
            "TRUNK",
            "TRIP",
            "BUGLE",
            "FLY",
            "LEPRECHAUN",
            "MODEL",
            "SCUBA DIVER",
            "CYCLE",
            "DRAFT",
            "PYRAMID",
            "SCHOOL",
            "OPERA",
            "CRANE",
            "SCIENTIST",
            "COURT",
            "BUFFALO",
            "CLUB",
            "PRINCESS",
            "VAN",
            "DEATH",
            "WALL",
            "NEW YORK",
            "NIGHT",
            "IRON",
            "MOON",
            "PASS",
            "MAIL",
            "ROSE",
            "BOX",
            "GOLD",
            "CRICKET",
            "NOVEL",
            "GAME",
            "STRING",
            "DROP",
            "LOCH NESS",
            "CHAIR",
            "NUT",
            "STOCK",
            "CHICK",
            "KANGAROO",
            "HORSESHOE",
            "ROBIN",
            "THUMB",
            "ROBOT",
            "PITCH",
            "TOKYO",
            "AZTEC",
            "WASHER",
            "LINE",
            "FRANCE",
            "AIR",
            "HOSPITAL",
            "FIRE",
            "PILOT",
            "CAPITAL",
            "SPRING",
            "PARACHUTE",
            "CAR",
            "GRASS",
            "AFRICA",
            "BAT",
            "POOL",
            "HEAD",
            "SPELL",
            "DECK",
            "HOOK",
            "CARD",
            "RABBIT",
            "WAVE",
            "EUROPE",
            "SWITCH",
            "NURSE",
            "HELICOPTER",
            "SWING",
            "SERVER",
            "STAR",
            "PLOT",
            "STICK",
            "GENIUS",
            "SHOE",
            "SOUL",
            "SNOWMAN",
            "ARM",
            "PRESS",
            "SCORPION",
            "POINT",
            "LIMOUSINE",
            "REVOLUTION",
            "MEXICO",
            "LOG",
            "LAP",
            "PIPE",
            "AUSTRALIA",
            "CHARGE",
            "BRIDGE",
            "ALIEN",
            "BOOT",
            "BAR",
            "SPIKE",
            "HONEY",
            "CELL",
            "PART",
            "GLASS",
            "PAN",
            "RACKET",
            "BERLIN",
            "SATELLITE",
            "ENGLAND",
            "PIT",
            "VET",
            "SPACE",
            "ICE CREAM",
            "LION",
            "CASINO",
            "MINE",
            "MARBLE",
            "NET",
            "PANTS",
            "TABLET",
            "DRILL",
            "CENTER",
            "CONTRACT",
            "BLOCK",
            "KING",
            "CENTAUR",
            "PIANO",
            "BELL",
            "CLIFF",
            "OLIVE",
            "SPINE",
            "PLATE",
            "ORGAN",
            "LUCK",
            "MUG",
            "POST",
            "PALM",
            "UNDERTAKER",
            "AMAZON",
            "BOW",
            "MAMMOTH",
            "GREEN",
            "SNOW",
            "STATE",
            "STADIUM",
            "THIEF",
            "ROULETTE",
            "FAN",
            "SOUND",
            "MOSCOW",
            "YARD",
            "MOLE",
            "CROWN",
            "SHOT",
            "BERRY",
            "WHALE",
            "FORCE",
            "AMBULANCE",
            "FOOT",
            "LOCK",
            "COMPOUND",
            "SHIP",
            "RAY",
            "BATTERY",
            "JAM",
            "FENCE",
            "PIRATE",
            "EMBASSY",
            "ROOT",
            "TIE",
            "DICE",
            "FAIR",
            "CHOCOLATE",
            "BUCK",
            "LONDON",
            "NAIL",
            "TRIANGLE",
            "UNICORN",
            "PASTE",
            "ICE",
            "KID",
            "TAP",
            "FALL",
            "BOTTLE",
            "FIGURE",
            "PARK",
            "STRAW",
            "COVER",
            "WAR",
            "EYE",
            "DAY",
            "SMUGGLER",
            "WHIP",
            "INDIA",
            "SHOP",
            "BOMB",
            "SQUARE",
            "JET",
            "CHECK",
            "HAM",
            "CHEST",
            "PUPIL",
            "MERCURY",
            "COMIC",
            "WATCH",
            "SLIP",
            "PENGUIN",
            "PLASTIC",
            "BRUSH",
            "ORANGE",
            "CONCERT",
            "BOND",
            "ANTARCTICA",
            "CAT",
            "CHANGE",
            "SHARK",
            "BOLT",
            "CHINA",
            "LITTER",
            "GERMANY",
            "BANK",
            "RING",
            "TAG",
            "POISON",
            "WASHINGTON",
            "PAPER",
            "WORM",
            "BUTTON",
            "BARK",
            "HORSE",
            "WEB",
            "ENGINE",
            "PLAY",
            "SPOT",
            "CONDUCTOR",
            "DANCE",
            "DOCTOR",
            "ROME",
            "DISEASE",
            "HEART",
            "FLUTE",
            "SLUG",
            "TRAIN",
            "MARCH",
            "BEAR",
            "FILM",
            "NOTE",
            "GLOVE",
            "BOARD",
            "BED",
            "MATCH",
            "JACK",
            "GROUND",
            "OLYMPUS",
            "TELESCOPE",
            "TOWER",
            "SOCK",
            "TABLE",
            "CZECH",
            "LINK",
            "SPY",
            "EGYPT",
            "BALL",
            "GIANT",
            "WATER",
            "DINOSAUR",
            "BEACH",
            "CHURCH",
            "SUB",
            "ATLANTIS",
            "TURKEY",
            "LIFE",
            "HOTEL",
            "BUG",
            "SINK",
            "BOOM",
            "VACUUM",
            "SATURN",
            "HAWK",
            "THEATER",
            "ANGEL",
            "FACE",
            "ROCK",
            "LASER",
            "SCREEN",
            "BEAT",
            "GREECE",
            "SPIDER",
            "HAND",
            "EAGLE",
            "IVORY",
            "APPLE",
            "HORN",
            "TIME",
            "LEMON",
            "HOOD",
            "KNIFE",
            "BEIJING",
            "JUPITER",
            "FISH",
            "SHADOW",
            "AMERICA",
            "CANADA",
            "LEAD"




        ];

        //Picks 25 random words from the list of 400
        while (gameSet.length < 25) {
            var newCard = Math.floor(Math.random() * 400)
            if (gameSet.includes(newCard)) {
            }
            else {
                gameSet.push(newCard)
                gameCards.push(wordBank[newCard])
            }
        }

        //Picks random numbers for team card positions
        var gameCardPositions = [];
        for (var i = 0; i < 25; i++) {
            var newCard2 = Math.floor(Math.random() * 25)
            if (gameCardPositions.includes(newCard2)) {
            }
            else {
                gameCardPositions.push(newCard2)
            }
        }


        //assign colors to team cards below
        list[parseInt(gameCardPositions[0])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[1])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[2])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[3])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[4])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[5])].style.backgroundColor = "#148cf5";
        list[parseInt(gameCardPositions[6])].style.backgroundColor = "#148cf5";
        //Red Team has one less card 
        list[parseInt(gameCardPositions[7])].style.backgroundColor = "#f55656";
        list[parseInt(gameCardPositions[8])].style.backgroundColor = "#f55656";
        list[parseInt(gameCardPositions[9])].style.backgroundColor = "#f55656";
        list[parseInt(gameCardPositions[10])].style.backgroundColor = "#f55656";
        list[parseInt(gameCardPositions[11])].style.backgroundColor = "#f55656";
        list[parseInt(gameCardPositions[12])].style.backgroundColor = "#f55656";
        //Orange Card
        list[parseInt(gameCardPositions[13])].style.backgroundColor = "#f5910f";

        //Mouse down reveal game key and mouse up hides game key
        $("#btnGameKey").mousedown(function () {
            var list = document.getElementsByClassName("genBtn");
            for (var i = 0; i < list.length; i++) {
                list[i].style.opacity = ".1";
            }
        });
        $("#btnGameKey").mouseup(function () {
            var list = document.getElementsByClassName("genBtn");
            for (var i = 0; i < list.length; i++) {
                list[i].style.opacity = "1";
            }
        });
        //Assign words to cards
        $("#card1").text(wordBank[gameSet[0]]);
        $("#card2").text(wordBank[gameSet[1]]);
        $("#card3").text(wordBank[gameSet[2]]);
        $("#card4").text(wordBank[gameSet[3]]);
        $("#card5").text(wordBank[gameSet[4]]);
        $("#card6").text(wordBank[gameSet[5]]);
        $("#card7").text(wordBank[gameSet[6]]);
        $("#card8").text(wordBank[gameSet[7]]);
        $("#card9").text(wordBank[gameSet[8]]);
        $("#card10").text(wordBank[gameSet[9]]);
        $("#card11").text(wordBank[gameSet[10]]);
        $("#card12").text(wordBank[gameSet[11]]);
        $("#card13").text(wordBank[gameSet[12]]);
        $("#card14").text(wordBank[gameSet[13]]);
        $("#card15").text(wordBank[gameSet[14]]);
        $("#card16").text(wordBank[gameSet[15]]);
        $("#card17").text(wordBank[gameSet[16]]);
        $("#card18").text(wordBank[gameSet[17]]);
        $("#card19").text(wordBank[gameSet[18]]);
        $("#card20").text(wordBank[gameSet[19]]);
        $("#card21").text(wordBank[gameSet[20]]);
        $("#card22").text(wordBank[gameSet[21]]);
        $("#card23").text(wordBank[gameSet[22]]);
        $("#card24").text(wordBank[gameSet[23]]);
        $("#card25").text(wordBank[gameSet[24]]);

    });
});
//On clicking a card remove the bottom revealing the card underneath
function revealCard(id) {
    document.getElementById(id).style.display = "none";
}

function timer() {
    document.getElementById('btnTimer').style.display = "none";
    var countTime = 60,
        timer = setInterval(function () {
            document.getElementById('counter').innerHTML = (countTime--);
            if (countTime < 0) {
                clearInterval(timer)
                document.getElementById('counter').innerHTML = ("Ding!")
                document.getElementById('btnTimer').style.display = "block";
            };
        }, 1000);
}

