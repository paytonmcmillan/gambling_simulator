//version 1:41 5/21

/*
notes:
fix:
Add different messages for the form of gambling. when a destination is chosen.

goals:
possibly format game differently with images or not in console.
add easter egg where perks can be earned. (ex: random number pick, and if you get it right then that is your lucky number)
add taxes
add competition mode
add easy hack for a free win for a name like Pmac or something.
*/

var highScore = (11050000000);
var highScoreUserName = "swizz";
var userName = "";
var game = "";
var money = 10000;
var win = 0;
var laws = 0;
var moneyOpportunities = [loan, facebook, football, stream, kidney, declareBankrupt, tattoos, medExp, bank, kidnap];
var numMoneyOpportunity = (moneyOpportunities.length - 1);
var daysToLive = "AVG";
var numKidney = 2;
var currencyType = "USD";
var decision = "No";
var reason = "";
var Roll = 0;
var Roll2 = 0;
var userLocation = "United States";
var hitItBigChance = 1;
var death = false;
var doneTattoos = false;
var tattooChoiceMade = false;
var timesKidneyAsked = 0;
var doneMeds = false;
var medChoiceMade = false;
var doneBankrupt = false;
var bankruptChoiceMade = false;
var doneKidnap = false;
var kidnapChoiceMade = false;
var totalKidnappings = 0;
var irsDodge = 40;
var goal = highScore;
var business = 0;
var bankChoiceMade = false;
var doneBank = false;
var doneLoan = false;
var userIsJeffBezos = false;
var skipKidnap = false;
var skipTattoo = false;
var skipLoan = false;
var skipBankrupt = false;
var skipBank = false;
var skipKidney = false;
var skipMed = false;
var facebookChoiceMade = false;
var doneFacebook = false;
var footballChoiceMade = false;
var doneFootball = false;
var inNFL = false;
var wentViral = false;
var doneStream = false;
var gotSwatted = false;
var streamChoiceMade = false;
var highestViewers = (100);
var viewerCeiling = (100100);
var revenue = (0);
//random deaths available
var stoleNeighborCar = false;
var ateTooManyHotDogs = false;
var stoleFromHomeless = false;
var stoleFromPirates = false;
var stoleFromGhostPirates = true;
var stoleFromPokemonCollector = false;
var markCuban = false;
var stoleFromAmazon = false;
var stoleFromPolice = false;
var madePharmaceuticalsMad = false;
//random lucks available
var gainedStockKnowledge = false;
//blackJack variables
var aceCount = 0;
var gameDone = false;
var gameForeverDone = false;
var stayChoiceMade = false;
var userHand = [];
var userHandTotal = 0;
var dealerHand = [];
var dealerHandTotal = 0;
var ace = 1;
var count = 1;
// Roulette variables
var chamber = [0, 0, 0, 0, 0, 1];
var calledFromBlackjack = false;
var passedLastTurn = false;
var chamberRound = 0;
var dealerInheritance = false;
var dealerAssets = 0;
var dealerRetirementSavings = false;
var dealerIsAMillionare = false;
var dealerPassedLastTurn = false
var rouletteTurn = 0;
var rouletteDone = false;
var spin = false;
var dealerSpin = false;

function start(){
    lossCheck();
    var shuffledMoneyOpportunities = shuffleArray(moneyOpportunities);
    if (win == 0){
        console.log("High Score: " + highScore + " set by user: " + highScoreUserName);
        whatMoney();
        if (win == 0){
            console.log("Running gambling simulator...");
            var gameChoice = chooseGame();
            if (win == 0){
                destination();
                lossCheck();
                for (var i = 0; i < 100; i++){
                    if (win == 0 && gameForeverDone == false){
                        for (var j = 0; j < moneyOpportunities.length; j++){
                            if (money <= 0 && win == 0){
                                randomOpportunity(moneyOpportunities);
                            }
                        }
                        lossCheck();
                        if (win == 0){
                            destinationCheck();
                        }
                        if (win == 0){
                            tattooCheck();
                        }
                        if (win == 0){
                            medExpCheck();
                        }
                        if (win == 0){
                            copCheck();
                        }
                        if (win == 0){
                            facebookCheck();
                        }
                        if (win == 0){
                            footballCheck();
                        }
                        if (win == 0){
                            streamCheck();
                        }
                        if (win == 0){
                            randomLuck();
                        }
                        if (win == 0){
                            streamRevenue();
                        }
                        if (money >= highScore && userIsJeffBezos == false && gameForeverDone == false){
                            gameForeverDone = true;
                            addicted();
                            if (win == 0){
                                win = 1;
                            }
                        }
                        if (win == 0 && gameForeverDone == false){
                            if (money <= 0){
                                randomLuck();
                                randomLuck();
                            }
                            if (money > 0){
                                gameChoice();
                            }
                        }
                    }
                    else{
                        break;
                    }
                }
            }
        }
    } 
    
    if (win == 1){
        console.log("Wow. I didn't think it was possible, but you won. You... Won... Gambling. Please do not expect similar results in the future.");
        if (userIsJeffBezos){
            bezos();
            console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        }
        else{
            console.log("New High score achieved!!! Congratulations! Old high score: " + highScore + " . New high score: " + money + ", set by user: " + userName);
        }
    }
    if (win == 0){
        console.log("win: " + win);
        console.log("glitch, win == 0");
        console.log("You Lost! Reason: " + reason);
        console.log("Score achieved: " + money);
    }
    if (win == -1){
        console.log("You Lost " + userName + "! Reason: " + reason);
        console.log("Score achieved: " + money);
    }
    lawCheck();
    console.log("end");
}

function shuffleArray(x){
  for (var i = x.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return (x);
}

function randomOpportunity(x){
    if (numMoneyOpportunity > 0){
    x[numMoneyOpportunity]();
  }
  numMoneyOpportunity = (numMoneyOpportunity - 1);
}

function chooseGame(){
    game = readLine ("Would you like to play blackjack, flip a coin, roulette, or gamble? ");
    if (game == "blackjack" || game == "Blackjack" || game == "blackJack" || game == "BlackJack" || game == "Black Jack" || game == "black jack" || game == "Black jack"){
        game = blackjack;
    }
    else if (game == "flip" || game == "Flip" || game == "flip a coin" || game == "flipacoin" || game == "Flipacoin" || game == "Flip a coin" || game == "Flip A Coin" || game == "FLIP A COIN"){
        game = flipACoin;
    }
    else if (game == "stop"){
        win = -1;
    }
    else if (game == "roulette" || game == "Roulette" || game == "ruolette" || game == "Ruolette" || game == "Russian Roulette" || game == "Russian roulette" || game == "russian roulette" || game == "r" || game == "R" || game == "rr" || game == "RR"){
        game = roulette;
    }
    else{
        game = gamble;
    }
    return game;
}

function lawCheck(){
    console.log("Lets see how many laws you broke! ");
    if (laws <= 0){
        console.log("What a good Samaritan! Laws Broken: " + laws);
    }
    else if (laws >= 1 && laws <= 19){
        console.log("Not too shabby! Laws Broken: " + laws);
    }
    else if (laws >= 20 && laws <= 50){
        console.log("Minor Problems with law. Laws Broken: " + laws);
    }
    else if (laws >= 50 && laws <= 100){
        console.log("Felon. Laws Broken: " + laws);
    }
    else if (laws >= 100 && laws <= 1000){
        console.log("Outlaw. Laws Broken: " + laws);
    }
    else if (laws >= 1000 && laws <= 10000){
        console.log("Yikes. I don't think you will do great in the court of Law. Laws Broken: " + laws);
    }
    else if (laws >= 10000){
        console.log("Bad to the Bone. Laws Broken: " + laws);
    }
}

function loan(){
    if (doneLoan == false){
        doneLoan = true;
        laws += 2;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
    console.log("Find a near banker that supports either Payday Loans OR Car loans. These will have the highest interest rate but the highest acceptability. The interest rate wont matter because you will hit it big!");
    decision = readLine(userName + ", would you like to pursue a Loan? ");
        if (decision == "yes" || decision == "Yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            skipLoan = true;
            var charisma = Randomizer.nextInt(-1,20);
            console.log("Rolling Charisma D20 (for loan)...");
            console.log("Roll = " + charisma);
            if (charisma >= 19){
                console.log("Wow! You are one sweet-talker! You managed to convince the Loan Officer to give you the largest loan available! Additionally, the loan officer liked you so much that they are loaning some of their own money and paying off all debts to help you on your gambling adventure! Great Job!");
                console.log("Money gained: 100,000 + 29,654 of Loan Officer's Roth IRA.");
                console.log("Days to live: " + daysToLive);
                money = (money + 129654);
            }
            else if (charisma >= 15){
                console.log("Great! Gained a 69,745 Loan!");
                money = (money + 69745);
            }
            else if (charisma >= 10){
                console.log("Nice! Gained a 25,000 Loan!");
                money = (money + 25000);
            }
            else if (charisma >= 4){
                console.log("Not too shabby. Gained a 10,000 Loan.");
                money = (money + 10000);
            }
            else if (charisma >= 0){
                console.log("Yikes. Just Yikes. Absolutely terrible interview. $500 obtained.");
                money = (money + 500);
            }
            else if (charisma < 0){
                console.log("Didn't know that was possible.");
                win = (-1);
                money = (1);
                reason = "not able to gamble";
                gameForeverDone = true;
            }
        }
        else{
            console.log("Bummer, well we can always try other options!");
        }
    }
}

function whatMoney(){
    userName = readLine("Enter name: ");
    if (userName == "duh, i'm Jeff Bezos" || userName == "Duh, i'm Jeff Bezos" || userName == "I'm jeff Bezos" || userName == "i'm jeff bezos" || userName == "Jeff Bezos" || userName == "jeff bezos" || userName == "Jeff bezos"){
        console.log("Ooooooo, easter egg! congrats Mr. Bezos!");
        userIsJeffBezos = true;
        laws += 999999;
    }
    else if (userName == "stop"){
        win = -1;
    }
    else if (userName == "blackjack" || userName == "blackJack" || userName == "BlackJack" || userName == "Blackjack"){
        for(var i = 0; i < 100; i++){
        blackjack();
        }
        win = -1
    }
    else if (userName == "flip" || userName == "Flip" || userName == "flip a coin" || userName == "flipacoin" || userName == "Flipacoin" || userName == "Flip a coin" || userName == "Flip A Coin" || userName == "FLIP A COIN"){
        for(var i = 0; i < 100; i++){
        flipACoin();
        }
        win = -1
    } 
    else {
    console.log("Congratulations " + userName + "! An anonymous donor has supplied you with " + money + " " + currencyType + " to gamble!");
    }
}

function kidney(){
    if (numKidney < 0){
        console.log("Uh Oh! your lack of matter in your abdominal section resulted in a black hole (Negative numbers are not possible). Better luck next time!");
        reason = "****Impossible death unlocked**** Black hole in abdomen.";
        win = (-1);
    }
    if (numKidney == 2 && timesKidneyAsked < 2){
        timesKidneyAsked = (timesKidneyAsked + 1);
        decision = readLine(userName + ", Would you like to sell a kidney for 500,000 in gambling money? this will increase your odds of hitting it big! ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
        numKidney = 1;
        laws += 2;
        timesKidneyAsked = (0);
        money = (money + 500000);
        if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
            } 
        reason = "EKSD (kidney failure).";
        }
        else {
            timesKidneyAsked = (timesKidneyAsked + 1);
        }
    }
    if (numKidney == 1 && money < 0 && timesKidneyAsked < 2){
        timesKidneyAsked = (timesKidneyAsked + 1);
        decision = readLine(userName + ", Would you like to sell youre last kidney for 500,000 in gambling money? This will increase your odds of hitting it big! ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            console.log("Great, you'll definetly hit it big now! ");
            numKidney = 0;
            laws += 3;
            if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "Died in surgery removing last kidney.";
            }
            money = (money + 50000);
            reason = "Lost consciousness due to lack of kidneys.";
        }
        else {
            timesKidneyAsked = (timesKidneyAsked + 1);
        }
    }
}

function lossCheck(){
    if (win == 0){
        if (daysToLive == "Uncertain"){
            Roll = Randomizer.nextInt(1,40);
            if (Roll == 1){
                win = (-1);
                death = true;
            }
        }
        if (daysToLive == "Numbered"){
            Roll = Randomizer.nextInt(1,30);
            if (Roll == 1){
                win = (-1);
                death = true;
            }
        }
        if (daysToLive == "Scarce"){
            Roll = Randomizer.nextInt(1,10);
            if (Roll == 1){
                win = (-1);
                death = true;
            }
            else if (Roll < 4){
                numKidney = 2;
                console.log("After loosing consciousness in the streets of " + userLocation + ", you were evac'd to Europe for better healthcare (you could not afford healthcare from" + userLocation + "). You are now living on the streets of Europe.");
                userLocation = "Europe";
                daysToLive = "AVG";
                hitItBigChance = 1;
                currencyType = "Euro";
            }
        }
        //random deaths
        if (win == 0 && ateTooManyHotDogs){
            Roll = Randomizer.nextInt(1,30);
            if (Roll == 1){
                win = -1;
                death = true;
                reason = "*****rare death unlocked!***** just couldn't take all those hot dogs.";
            }
        }
        if (win == 0 && stoleNeighborCar){
            Roll = Randomizer.nextInt(1,20);
            if (Roll == 1){
                win = -1
                reason = "*****rare loss unlocked!***** ratted out by neighbor. He was still salty about the car.";
            }
        }
        if (win == 0 && stoleFromHomeless){
            Roll = Randomizer.nextInt(1,20);
            if (Roll == 1){
                win = -1
                reason = "*****rare death unlocked!***** Homeless man got his revenge, and his $20 back!";
            }
        }
        if (win == 0 && stoleFromPirates){
            Roll = Randomizer.nextInt(1,30);
            if (Roll == 1){
                win = -1;
                death = true;
                if (stoleFromGhostPirates){
                    reason = "*****rarer death unlocked!***** Pirate ghosts found out you gambled away their haunted treasure and cursed you for eternity. ";
                }
                else {
                    reason = "*****rare death unlocked!***** Pirates found out you gambled away their buried treasure. They were not happy.";
                }
            }
        }
        if (win == 0 && stoleFromPokemonCollector){
            Roll = Randomizer.nextInt(1,30);
            if (Roll == 1){
                win = -1
                reason = "*****rare death unlocked!***** Pokemon collector from blackout party found out about the PSG 10 Charizard. He was not happy.";
            }
        }
        if (win == 0 && stoleFromAmazon){
            Roll = Randomizer.nextInt(1,20);
            if (Roll == 1){
                win = -1
                reason = "*****rare loss unlocked!***** Amazon found out about the delivery truck and took you to court. 20 year sentence means you cant gamble!";
            }
        }
        if (win == 0 && markCuban){
            Roll = Randomizer.nextInt(1,20);
            if (Roll == 1){
                win = -1
                reason = "*****rare death unlocked!***** Mark cuban betrayed you for your successful DoubleDeckerSofa company.";
            }
        }
        if (win == 0 && stoleFromPolice){
            Roll = Randomizer.nextInt(1,15);
            if (Roll == 1){
                win = -1
                reason = "*****rare loss unlocked!***** Police found out about the stolen police cruiser.";
            }
        }
        if (win == 0 && madePharmaceuticalsMad){
            Roll = Randomizer.nextInt(1,15);
            if (Roll == 1){
                win = -1
                reason = "*****rare death unlocked!***** Pharmaceutical CEOs arranged your downfall";
            }
        }
        madePharmaceuticalsMad
        
        if (win == 0){
            Roll = Randomizer.nextInt(1,25);
            if (Roll == 1){
                Roll = Randomizer.nextInt(1,38);
                win = (-1);
                death = true;
                if (Roll == 1){
                    reason = "Homeless man beat and robbed you on the way to the casino";
                }
                else if (Roll == 2){
                    reason = "Slipped on Banana peel";
                }
                else if (Roll == 3){
                    reason = "Contracted malaria.";
                }
                else if (Roll == 4){
                    reason = "Global Catastrophe: hit by asteroid";
                }
                else if (Roll == 5){
                    reason = "Global Catastrophe: Earth got too hot to handle";
                }
                else if (Roll == 6){
                    reason = "Global Catastrophe: Nuclear Winter";
                }
                else if (Roll == 7){
                    reason = "Lead poisoning";
                }
                else if (Roll == 8){
                    reason = "Got lucky gambling against the wrong people";
                }
                else if (Roll == 9){
                    reason = "Slipped in the shower";
                }
                else if (Roll == 10){
                    reason = "Both kidneys failed";
                }
                else if (Roll == 11){
                    reason = "old age";
                }
                else if (Roll == 12){
                    reason = "Aids?";
                }
                else if (Roll == 13){
                    reason = "Mistakenly assassinated by bounty hunter.";
                }
                else if (Roll == 14){
                    reason = "Died to radioactivity in 10,000+ bananas";
                }
                else if (Roll == 15){
                    reason = "Food poisoning";
                }
                else if (Roll == 16){
                    reason = "Paralized from car accident, thus unable to gamble";
                }
                else if (Roll == 17){
                    reason = "didn't drink enough water";
                    laws += 1;
                }
                else if (Roll == 18){
                    reason = "Kickstarted black plague outbreak";
                }
                else if (Roll == 19){
                    reason = "Died in a freestyle battle to Kendrick Lamar";
                }
                else if (Roll == 20){
                    reason = "pulled the wrong lever in an ancient mayan tomb.";
                }
                else if (Roll == 21){
                    reason = "Quicksand.";
                }
                else if (Roll == 22){
                    reason = "Frozen in carbonite.";
                }
                else if (Roll == 22){
                    reason = "Didn't look both ways when crossing the road.";
                    laws += 1;
                }
                else if (Roll == 23){
                    reason = "Went skydiving with a backpack.";
                    laws += 1;
                }
                else if (Roll == 24){
                    reason = "Fell into a hole with a comically large amount of snakes at the bottom.";
                }
                else if (Roll == 25){
                    reason = "Drove a little to close behind a drunk driver.";
                }
                else if (Roll == 26){
                    reason = "Played cut the rope whilst base jumping.";
                    laws += 1;
                }
                else if (Roll == 27){
                    reason = "2 cringe";
                }
                else if (Roll == 28){
                    reason = "Grand Piano Fell on head";
                }
                else if (Roll == 29){
                    reason = "Woke up from the matrix. It was a simulation the whole time.";
                    laws += 999;
                }
                else if (Roll == 30){
                    reason = "Fell in a sinkhole";
                }
                else if (Roll == 31){
                    reason = "Bored to death (Tried watching 2001: A Space Odyssey)";
                }
                else if (Roll == 32){
                    reason = "Fell in a volcano";
                }
                else if (Roll == 33){
                    reason = "Shark attack.";
                    laws += 1;
                }
                else if (Roll == 34){
                    reason = "Sucked up by tornado. Did NOT land in OZ.";
                }
                else if (Roll == 35){
                    reason = "Tried to surf a tidal wave.";
                }
                else if (Roll == 36){
                    reason = "Went Scuba Diving with Steve Irwin.";
                }
                else if (Roll == 37){
                    reason = "Found out you were allergic to wasps the hard way";
                }
                else if (Roll == 38){
                    reason = "Couldn't get to a hospital in time after a venemous snake bite.";
                }
            }
        }
    }
}

function destination(){
    decision = readLine(userName + ",  Would you like to gamble in Macau (China), Marina Bay (Singapore), Las Vegas (United States), New Jersey (United States), or London (England)?");
    if (decision == "Macau" || decision == "macau" || decision == "macau." || decision == "Macau." || decision == "Macau, China" || decision == "China" || decision == "china" || decision == "Macau, china" || decision == "macau china" || decision == "Macau (China)" || decision == "macauchina"){
        userLocation = "China";
        laws += 1;
        hitItBigChance = 2;
        console.log("flight cost: $1290 USD");
        money -= 1290;
        currencyType = "MOP";
        if (money < 0){
            console.log("Looks like the flight set you in debt!");
        }
        
    }
    else if (decision == "Marina Bay" || decision == "marina bay" || decision == "Marina bay" || decision == "marina Bay." || decision == "Marina Bay. " || decision == "Singapore" || decision == "singapore" || decision == "SINGAPORE" || decision == "Marina Bay, Singapore" || decision == "marina bay, singapore" || decision == "Marina Bay (Singapore)" || decision == "Marina bay (Singapore)"){
        userLocation = "Singapore";
        laws += 1;
        hitItBigChance = 1.8;
        console.log("flight cost: $1063 USD");
        money -= 1063;
        currencyType = "Singapore Dollar";
        if (money < 0){
            console.log("Looks like the flight set you in debt!");
        }
    }
    else if (decision == "Las Vegas" || decision == "las vegas" || decision == "Las vegas" || decision == "las Vegas" || decision == "Las Vegas." || decision == "US" || decision == "us" || decision == "America" || decision == "america" || decision == "United States" || decision == "united states" || decision == "United states" || decision == "united States"){
        userLocation = "United States";
        hitItBigChance = 1.5;
        console.log("flight cost: $241 USD");
        money -= 241;
        currencyType = "USD";
        if (money < 0){
            console.log("Looks like the flight set you in debt!");
        }
        
    }
    else if (decision == "New Jersey" || decision == "New jersey" || decision == "new Jersey" || decision == "new jersey" || decision == "New Jersey." || decision == "New jersey, United States" || decision == "New Jersey (United States)" || decision == "new Jersey (United states)" || decision == "New jersey (United States)"){
        userLocation = "United States";
        hitItBigChance = 1.2;
        console.log("flight cost: $179 USD");
        money -= 179;
        currencyType = "USD";
        if (money < 0){
            console.log("Looks like the flight set you in debt!");
        }
    }
    else{
        console.log("flight cost: $942 USD");
        hitItBigChance = 0.5;
        money -= 942;
        userLocation = "England";
        currencyType = "Pounds";
        if (money < 0){
            console.log("Looks like the flight set you in debt!");
        }
    }
}

function gamble(){
    if (money < goal && gameForeverDone == false){
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        var winChance = 1/30000000;
        winChance = winChance*money;
        winChance = winChance*hitItBigChance;
        var winChanceDisplay = 1/winChance;
        winChanceDisplay = winChanceDisplay.toFixed(0);
        if (winChanceDisplay <= 2){
            winChanceDisplay = 2;
        }
        var guess = readInt("Gamble time! pick a number between 1 and " + winChanceDisplay + ".");
        var winNum = Randomizer.nextInt (1,winChanceDisplay);
        if (userIsJeffBezos){
            winNum = guess;
            laws += 1;
        }
        console.log ("Guess: " + guess + ". Winning number: " + winNum);
        if (guess == winNum){
            if (winChanceDisplay > 1000){
                money = (money*winChanceDisplay);
            } else {
                money = (money * 1000);
            }
            money = money.toFixed(0);
            if (userIsJeffBezos){
                    money = goal+1;
                    gameForeverDone = true;
            }
            console.log("You hit it big! your new balance is " + money + " " + currencyType);
        }
        else if (guess != winNum){
            money = (0);
            console.log("better luck next time!");
        } else {
            console.log("glitch");
            win = (1);
            death = false;
        }
    }
    else {
        gameForeverDone = true;
        addicted();
        if (win == 0){
            win = 1;
        }
    }
}

function addicted(){
    Roll = Randomizer.nextInt(1,4);
    if (Roll == 1){
        win = (-1);
        reason = "got addicted to gambling, and lost it all.";
    }
}

function destinationCheck(){
    if (userLocation == "United States"){
        Roll = Randomizer.nextInt(1,140);
        if (Roll == 1){
        death = true;
        win = (-1);
        reason = "Ate too much (in the US).";
        }
        else if (Roll == 2){
        death = true;
        win = (-1);
        reason = "Heatstroke (in the US).";
        }
        else if (Roll == 3){
        death = true;
        win = (-1);
        reason = "Vape'd to death (in the US).";
        }
        else if (Roll == 4){
        death = true;
        win = (-1);
        reason = "Heart Disease (in the US).";
        }
    }
    if (userLocation == "China"){
        laws += 1;
        Roll = Randomizer.nextInt(1,60);
        if (Roll == 1){
        death = true;
        win = (-1);
        reason = "Lung cancer (in China)";
        }
        else if (Roll == 2){
        death = true;
        win = (-1);
        reason = "Ate crappy duck feet. (in China)";
        }
    }
    if (userLocation == "Singapore"){
        laws += 1;
        Roll = Randomizer.nextInt(1,30);
        if (Roll == 1){
        death = true;
        win = (-1);
        reason = "Pneumonia (in Singapore)";
        }
    }
    if (userLocation == "England"){
        Roll = Randomizer.nextInt(1,10);
        if (Roll == 1){
        death = true;
        win = (-1);
        reason = "Stabbed to death (in Britain)";
        }
        if (Roll == 2 || Roll == 3 || Roll == 4){
            console.log("ate some funky british cuisine (lost days to live).");
            if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "your health could not take the british cuisine";
            }
        }
        
    }
    if (userLocation == "Europe"){
        Roll = Randomizer.nextInt(1,280);
        if (Roll == 1){
        death = true;
        win = (-1);
        reason = "Drank to death (in the heart of Germany)";
        laws += 1;
        }
        if (Roll == 2){
        death = true;
        win = (-1);
        reason = "Killed by MOB (in the heart of Italy)";
        laws += 1;
        }
        if (Roll == 3){
        death = true;
        win = (-1);
        reason = "Died in bullfighting incident (in the heart of Spain)";
        laws += 1;
        }
        if (Roll == 4){
        death = true;
        win = (-1);
        reason = "Upset the Olympic gods (in the heart of Greece)";
        }
        if (Roll == 5){
        death = true;
        win = (-1);
        reason = "Smitted by the pope (in the heart of The Vatican City)";
        laws += 1;
        }
        if (Roll == 6){
        reason = "Skiing accident (in the heart of Switzerland). Lost days to live.";
        if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "To unhealthy to be skiing.";
            } 
        }
        if (Roll == 7){
        death = true;
        win = (-1);
        reason = "Eiffel Tower fell on you (in the heart of France)";
        laws += 1;
        }
    }
    
}

function declareBankrupt(){
    if (bankruptChoiceMade == false){
        bankruptChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine(userName + ", Would you like to declare bankruptcy to gain 50,000 " + currencyType + " in welfare? (one time opportunity) ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            console.log("great!");
            doneBankrupt = true;
            laws += 1;
            money = (money + 50000);
        }
        else{
            console.log("Why not???");
        }
    }
}
function tattoos(){
    if (tattooChoiceMade == false){
        tattooChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine(userName + ", Would you like to offer your body for tattoo artist projects? ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            skipTattoo = true;
            console.log("great! you will now earn 5,000 " + currencyType + " for offering your body to tattoo artists!");
            doneTattoos = true;
            money = (money + 5000);
        }
        else{
            console.log("Bummer");
        }
    }
}

function medExp(){
    if (medChoiceMade == false){
        medChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine(userName + ", Would you like to test experimental medicine for additional money? ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            skipMedExp = true;
            laws += 1;
            console.log("great! you will now earn 10,000 " + currencyType + " for offering your safety in exchange for testing medical prototypes!");
            doneMeds = true;
            money = (money + 10000);
        }
        else{
            console.log("Bummer");
        }
    }
}

function kidnap(){
    if (kidnapChoiceMade == false){
        kidnapChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine("Hey " + userName + ", Would you like to participate in kidnapping civilians for ransom? *Cops do not like this* ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            console.log("great! you will now earn 50,000-150,000 " + currencyType + " in ransom for paticipating in underground kidnapping circles!");
            doneKidnap = true;
            skipKidnap = true;
            money = (money + 50000);
        }
        else{
            console.log("Bummer");
        }
    }
}

function bank(){
    if (bankChoiceMade == false){
        bankChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine("Hey " + userName + ", Would you like to hold employees at the local bank hostage for cash? *Cops do not like this* ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            doneBank = true;
            Roll = Randomizer.nextInt(1,8);
            if (Roll == 2 || Roll == 3 || Roll == 4){
                daysToLive = "scarce";
                console.log("Sustained Serious wounds in gunfight at bank! Days to live: " + daysToLive);
                laws += 3;
            }
            if (Roll == 1){
                win = (-1);
                death = true;
                reason = "Died in shootout with the police.";
                laws += 5;
            }
            else {
                console.log("Bank robbery successful! (Gained 500,000 " + currencyType + " in various jewels, bank certificates, and cash).");
                money = (money + 500000);
                laws += 10;
            }
        }
        else{
            console.log("Bummer");
        }
    }
}

function facebook(){
    if (facebookChoiceMade == false){
        facebookChoiceMade = true;
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine("Would you like to sell some of your belongings on facebook marketplace " + userName + "? ");
        if (decision == "Yes" || decision == "yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            doneFacebook = true;
            console.log("Great! I'm sure you'll get some sales!");
        }
        else{
            console.log("Bummer");
        }
    }
}

function facebookCheck(){
    if (doneFacebook == true){
        Roll = Randomizer.nextInt(1,130);
        if (Roll == 1){
            Roll = Randomizer.nextInt(1,33);
            if (Roll == 1){
                console.log("(*****Rarest possible death unlocked*****!) (Facebook marketplace) Sold belonging: soul");
                reason = "Lack of soul";
                death = true;
                win = -1;
                laws += 999;
            }
        }
        else if (Roll <= 2 || Roll >= 33){
            console.log("No sales hit on marketplace.");
        }
        else if (Roll == 3){
            console.log("(Facebook marketplace) Sold family heirloom! : grandpas watch ");
            laws += 1;
            money = (money + 1000);
        }
        else if (Roll == 4){
            console.log("(Facebook marketplace) Sold clothing! : left shoe ");
            money = (money + 1);
        }
        else if (Roll == 5){
            console.log("(Facebook marketplace) Sold appliance! : moms dishwasher ");
            money = (money + 15000);
        }
        else if (Roll == 6){
            console.log("(Facebook marketplace) Sold belonging! : favorite T-shirt");
            money = (money + 15);
        }
        else if (Roll == 7){
            console.log("(Facebook marketplace) Sold item! : (fake) celebrity signed basketball. Great forgery!");
            laws += 2;
            money = (money + 50000);
        }
        else if (Roll == 8){
            console.log("(Facebook marketplace) Sold belonging! : horrible ugly sweater from grandma");
            money = (money + 100000);
        }
        else if (Roll == 9){
            console.log("(Facebook marketplace) Sold item! : fountain of youth");
            laws += 1;
            money = (money + 20);
        }
        else if (Roll == 10){
            console.log("(Facebook marketplace) Sold item! : original darth vader helmet 1977 mint condition");
            money = (money + 5000);
        }
        else if (Roll == 11){
            console.log("(Facebook marketplace) Sold car! : Mr. bean 1984 austin mini coupe");
            money = (money + 60000);
        }
        else if (Roll == 12){
            console.log("(Facebook marketplace) Sold car! : neighbors car is also missing. How interesting.");
            laws += 2;
            money = (money + 20000);
            Roll = Randomizer.nextInt(1,2);
            if (Roll == 2){
                stoleNeighborCar = true;
            }
        }
        else if (Roll == 13){
            console.log("(Facebook marketplace) Sold furniture! : Hotel sofa");
            money = (money + 500);
        }
        else if (Roll == 14){
            console.log("(Facebook marketplace) Sold item! : Friends iphone.");
            laws += 2;
            money = (money + 1000);
        }
        else if (Roll == 15){
            console.log("(Facebook marketplace) Sold item! : buried treasure.");
            money = (money + 500);
            stoleFromPirates = true;
            laws += 1;
        }
        else if (Roll == 16){
            console.log("(Facebook marketplace) Sold clothing! : favorite NFL jersey.");
            money = (money + 2000);
        }
        else if (Roll == 17){
            console.log("(Facebook marketplace) Sold item! : traffic cone");
            laws += 2;
            money = (money + 50);
        }
        else if (Roll == 18){
            console.log("(Facebook marketplace) Sold item! : world's greatest grandpa coffee mug.");
            money = (money + 5);
        }
        else if (Roll == 19){
            console.log("(Facebook marketplace) Sold item! : lint roller");
            money = (money + 1);
        }
        else if (Roll == 20){
            console.log("(Facebook marketplace) Sold item! : taco bell sign (stolen).");
            laws += 3;
            money = (money + 50000);
        }
        else if (Roll == 21){
            console.log("(Facebook marketplace) Sold item! : 'mystery box' which is empty. Scammer. ");
            laws += 2;
            money = (money + 500);
        }
        else if (Roll == 22){
            console.log("(Facebook marketplace) Sold item! : stop sign (stolen).");
            laws += 2;
            money = (money + 5709);
        }
        else if (Roll == 23){
            console.log("(Facebook marketplace) Sold item! : 'used' fruit roll up.");
            laws += 1;
            money = (money + 2);
        }
        else if (Roll == 24){
            console.log("(Facebook marketplace) Sold item! : family computer.");
            money = (money + 100);
        }
        else if (Roll == 25){
            console.log("(Facebook marketplace) Sold item! : helicopter hat");
            money = (money + 5);
        }
        else if (Roll == 26){
            console.log("(Facebook marketplace) Sold item! : helicopter (stolen)");
            laws += 3;
            money = (money + 50000);
        }
        else if (Roll == 27){
            console.log("(Facebook marketplace) Sold item! : Mcdonald's szechuan sauce limited edition (1997)");
            money = (money + 75000);
        }
        else if (Roll == 28){
            console.log("(Facebook marketplace) Sold item! : Cool looking stick");
            money = (money + 1000000);
        }
        else if (Roll == 29){
            console.log("(Facebook marketplace) Sold item! : multiplatinum record of bohemian rhapsody");
            money = (money + 50000);
        }
        else if (Roll == 30){
            console.log("(Facebook marketplace) Sold item! : traffic barrier");
            money = (money + 500);
            laws += 2;
        }
        else if (Roll == 31){
            console.log("(Facebook marketplace) Sold item! : Stolen Police Cruiser");
            money = (money + 20000);
            stoleFromPolice = true;
            laws += 3;
        }
        else if (Roll == 32){
            console.log("(Facebook marketplace) Sold Possession! : Favorite Childhood Blanket.");
            money = (money + 20);
        }
        else if (Roll == 33){
            console.log("(Facebook marketplace) Sold item! : Fake Iphone");
            money = (money + 1000);
            laws += 2;
        }
    }
}

function stream(){
    if(streamChoiceMade == false){
        streamChoiceMade = true;
        decision = readLine(userName + ", Would you like to stream gambling and see if you can get Viral?");
        if (decision == "yes" || decision == "Yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            console.log("Great! Im sure everyone wants to watch you gamble!");
            doneStream = true;
        }
        else{
            console.log("Bummer");
        }
    }
}

function streamCheck(){
    if(doneStream == true && wentViral == false){
        Roll = Randomizer.nextInt(0,10);
        if(Roll == 10){
            console.log("Wow! You went viral on your most recent stream! You will start earning revenue based on your stream earnings. Congratulations!");
            var streamerName = readLine("What would you like your viral streaming name to be? ");
            Roll = Randomizer.nextInt(highestViewers, viewerCeiling);
            console.log("Recent " + streamerName + " stream viewers: " + Roll);
            wentViral = true;
            highestViewers = (Roll);
            viewerCeiling = (highestViewers + 100000);
        }
        else {
            console.log("Recent stream total viewers: " + Roll + ". Still not viral.");
        }
    }
    else if(doneStream == true && wentViral == true){
        Roll = Randomizer.nextInt(highestViewers, viewerCeiling);
        console.log("Recent stream viewers: " + Roll);
        highestViewers = (Roll);
        viewerCeiling = (highestViewers + 100000);
        if (Roll % 20 == 0){
            win = -1;
            death = true;
            reason = "Got swatted by an anti-gambling viewer on stream";
        }
    }
}

function streamRevenue(){
    if (wentViral == true && doneStream == true){
        revenue = (highestViewers*0.1);
        money = (money + revenue);
        money = money.toFixed(0);
        revenue = revenue.toFixed(0);
        console.log( revenue + " " + currencyType + " added from recent stream.");
    }
}

function football(){
    if(footballChoiceMade == false){
        footballChoiceMade = true;
        decision = readLine(userName + ", Are you athletic? ");
        if (decision == "yes" || decision == "Yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
            if (userLocation == "United States"){
                decision = readLine("Would you like to enter the NFL Draft?");
            }
            else{
                decision = readLine("Would you like to enter the NFL Draft? (they accept players from " + userLocation + ").");
            }
            if (decision == "yes" || decision == "Yes" || decision == "Yep" || decision == "yep" || decision == "Y" || decision == "y"){
                console.log("Great! get a video together and you can hopefully get in!");
                doneFootball = true;
            }
        } 
    }
}

function footballCheck(){
    if(doneFootball){
        Roll = Randomizer.nextInt(1,150);
        if (Roll == 1){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Cincinnati Bengals!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 2){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Pittsburgh Steelers!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 3){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Dallas Cowboys!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 4){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Kansas City Chiefs!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 5){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Cleveland Browns!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 6){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the New England Patriots!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 7){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Denver Broncos!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 8){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Atlanta Falcons!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 9){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the New York Jets!");
            inNFL = true;
            doneFootball = false;
        }
        if (Roll == 10){
            console.log("Congratulations! You are now signed into the NFL as a rookie for the Tennessee Titans!");
            inNFL = true;
            doneFootball = false;
        }
    }
    if (inNFL){
        laws += 3;
        console.log("Gained 200,000 " + currencyType + " from NFL game.");
        money = (money + 200000);
        Roll = Randomizer.nextInt(1,40);
        if (Roll == 1 || Roll == 2){
            if (Roll == 1){
                console.log("Uh oh! Broke leg in freak NFL accident!");
            }
            if (Roll == 2){
                console.log("Uh oh! took a big hit in freak NFL accident!");
            }
            if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "your health could not take the NFL injury";
            }   
        }
        if (Roll == 3){
            console.log("Uh oh! NFL accident in headlines!");
            reason = "Went into cardiac arrest on the field. No longer able to gamble";
            win = -1;
            death = true;
        }
    }
}

function tattooCheck() {
    if (doneTattoos && skipTattoo == false){
        money = (money + 5000);
        console.log ("5000 " + currencyType + " added for tattoo");
    }
    if (doneTattoos && skipTattoo == false) {
        Roll = Randomizer.nextInt(1, 40);
        if (Roll == 1) {
            death = true;
            win = (-1);
            reason = "Died to lead poisoning from poorly sourced tattoo ink";
        }
        if (Roll == 2 || Roll == 3 || Roll == 4){
            console.log("Uh Oh! Tattoo accident! (lost days to live).");
            if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "your health could not take the lead in your tattoos.";
            }
        }
    }
    skipTattoo = false;
}

function medExpCheck() {
    if (doneMeds && skipMed == false){
        money = (money + 10000);
        laws += 1;
        console.log ("10000 " + currencyType + " added for an additional experimental drug testing.");
    }
    if (doneMeds && skipMed == false) {
        Roll = Randomizer.nextInt(1, 20);
        if (Roll == 1) {
            death = true;
            win = (-1);
            reason = "OD on experimental pharmaceuticals";
        }
        if (Roll == 2 || Roll == 3 || Roll == 4 || Roll == 5 || Roll == 6 || Roll == 7){
            console.log("Took some wonky pharmaceuticals (lost days to live).");
            laws += 1;
            if (daysToLive == "AVG"){
                daysToLive = "Uncertain";
            }
            else if (daysToLive == "Uncertain"){
                daysToLive = "Numbered";
            }
            else if (daysToLive == "Numbered"){
                daysToLive = "Scarce";
            }
            else if (daysToLive == "Scarce"){
                win = -1;
                death = true;
                reason = "(Experimental) drug related death";
            }
        }
    }
    skipMed = false;
}

function copCheck(){
    if (doneKidnap && skipKidnap == false){
        Roll = Randomizer.nextInt(1,3);
        totalKidnappings += Roll;
        money = (money + (25000*Roll));
        console.log (25000*Roll + " " + currencyType + " added for " + Roll + " Kidnapping/s achieved");
    if (doneKidnap && win == 0 && skipKidnap == false){
        Roll = Randomizer.nextInt(1,50-totalKidnappings);
        if (Roll == 1){
            death = true;
            win = (-1);
            reason = "Police traced sloppy kidnappings to you";
        }
        else if (Roll < 10){
            console.log("Avoided police detection by turning in a relative with similar DNA to the police. They'll never find out about the kidnappings now!");
            totalKidnappings -= 10;
        }
    }
    }
    if (doneBankrupt && win == 0){
        Roll = Randomizer.nextInt(1,irsDodge);
        if (Roll == 1){
            death = true;
            win = (-1);
            reason = "Police found out that you weren't using Bankrupcy welfare ethically";
        }
        if (Roll <= 5){
            console.log("Threw IRS off the trail");
            irsDodge += 30;
        }
    }
    if (doneBank && win == 0){
        Roll = Randomizer.nextInt(1,30);
        if (Roll == 1){
            death = true;
            win = (-1);
            reason = "Police found out about the bank robbery.";
        }
    }
    if (doneTattoos && win == 0 && skipTattoo == false){
        Roll = Randomizer.nextInt(1,50);
        if (Roll == 1){
            death = true;
            win = (-1);
            reason = "Police mistook you for a wanted criminal (too many tattoos)";
            laws += 1;
        }
    }
    if (doneLoan && win == 0 && skipLoan == false){
        Roll = Randomizer.nextInt(1,40);
        if (Roll == 1){
            death = true;
            win = (-1);
            reason = "IRS traced loan to you and found your gambling in " + userLocation + " to be against the bank's loan permissions";
        }
    }
    skipKidnap = false;
    skipTattoo == false;
    skipLoan = false;
}

function randomLuck(){
    if (business > 0){
        money = (money + (100000*business));
        console.log("made money from business");
    }
    if (gainedStockKnowledge == true){
        Roll = Randomizer.nextInt(1,40);
        if (Roll == 1){
            console.log("Invested in the right stocks after newfound knowledge (gained 10,000,000 " + currencyType + ").");
            money = (money + 10000000);
        } 
    }
    Roll = Randomizer.nextInt(1,4);
    if (Roll == 1){
        console.log("Random luck!")
        Roll = Randomizer.nextInt(1,31);
        if (Roll == 1){
            console.log("Brokered a peace treaty in middle east over twitter. You were able to sell the Nobel Peace Prize for 72 " + currencyType + " on facebook marketplace.");
            money = (money + 72);
        }
        if (Roll == 2){
            console.log("Discovered new Element. Science thanks you! (gained 10,000 " + currencyType + ").");
            money = (money + 10000);
        }
        if (Roll == 3){
            console.log("Started a fake life married to a very successful entrepreneur and cashed out with a lucrative divorce. (Gained 1.2 million " + currencyType + ", several assets, and one step-son on the weekends).");
            money = (money + 1200000);
            laws += 3;
        }
        if (Roll == 4){
            console.log("Found some change on the street (gained 147 " + currencyType + ").");
            money = (money + 147);
        }
        if (Roll == 5){
            console.log("Stole from the homeless (gained 20 " + currencyType + ").");
            money = (money + 20);
            stoleFromHomeless = true;
            laws += 3;
        }
        if (Roll == 6){
            console.log("Woke up from blackout party night with extremely rare PSG 10 Shiny charizard in back pocket (Sold for 10,000 " + currencyType + "). ");
            money = (money + 10000);
            stoleFromPokemonCollector = true;
            laws += 2;
        }
        if (Roll == 7){
            console.log("Hospitalized after winning all you can eat contest with a winning number of 29 hot dogs in 5 minutes (Gained 500 " + currencyType + " and a distain for hot dogs).");
            money = (money + 500);
            ateTooManyHotDogs = true;
        }
        if (Roll == 8){
            console.log("Worked on the side for some extra cash (gained 800 " + currencyType + ").");
            money = (money + 800);
        }
        if (Roll == 9){
            console.log("filmed a hit netflix documentary about gambling addictions. You are a star! (gained 20,000 " + currencyType + ").");
            money = (money + 20000);
        }
        if (Roll == 10){
            console.log("Saw a prophet to determine this weekends winning lottery numbers (gained 2.5 million " + currencyType + " -prophet expenses).");
            money = (money + 2500000);
            laws += 3;
        }
        if (Roll == 11){
            console.log("Geolocated hidden oil reserve near hotel worth millions. Sold to United States Government (gained 9,900 " + currencyType + "and one pat on the back).");
            money = (money + 9900);
        }
        if (Roll == 12){
            console.log("Found cure to cancer left in pillbox but mistook it for more experimental drugs (gained 0 " + currencyType + " and one crazy night).");
        }
        if (Roll == 13){
            console.log("Tripped on buried treasure (Gained 900,000 " + currencyType + " and several cool (potentially haunted) pirate necklaces).");
            money = (money + 900000);
            stoleFromPirates = true;
            stoleFromGhostPirates = true;
            laws += 1;
        }
        if (Roll == 14){
            console.log("Sold successful company to shark tank. Who knew DoubleDeckerSofas(TM) would be such a hit!? (gained 125,000 " + currencyType + " and Mark Cuban's phone number).");
            money = (money + 125000);
            business = 1;
            markCuban = true;
        }
        if (Roll == 15){
            console.log("Went to hustlers university and actually learned something (Gained one successfull self sustaining buisness and 100,000 " + currencyType + ").");
            money = (money + 100000);
            business = 1;
        }
        if (Roll == 16){
            console.log("Found a dollar");
            money = (money + 1);
        }
        if (Roll == 17){
            console.log("accidentally interrupted drug trade (gained 10,000 in hush money).");
            money = (money + 10000);
            laws += 2;
        }
        if (Roll == 18){
            console.log("Shoplifted some groceries (gained 500 in groceries).");
            money = (money + 500);
            laws += 1;
        }
        if (Roll == 19){
            console.log("looted a crashed Amazon delivery truck (gained 5,000 " + currencyType + " in items and some cool toys).");
            money = (money + 5000);
            stoleFromAmazon = true;
        }
        if (Roll == 20){
            console.log("Successfully robbed a gas station (gained 1,700 " + currencyType + " and one of your favorite drink).");
            money = (money + 1700);
            laws += 5;
        }
        if (Roll == 21){
            console.log("Started a very successfull pyramid scheme! (gained 200,000 " + currencyType + " and several angry investors).");
            money = (money + 200000);
            laws += 3;
        }
        if (Roll == 22){
            console.log("Got hooked up by a nigerian prince. (gained 1,000,000 " + currencyType + " for a small 20 " + currencyType + " fee).");
            money = (money + 1000000);
            laws += 1;
        }
        if (Roll == 23){
            console.log("Used DNA test to discover a distant relative. Steve Jobs! (gained 50,000 " + currencyType + " in inheritance).");
            money = (money + 50000);
        }
        if (Roll == 24){
            console.log("Got really good at bingo and won against a LOT of senior citizens. (gained 50,000 " + currencyType + ").");
            money = (money + 50000);
            laws += 2;
        }
        if (Roll == 25){
            console.log("Mowed a few lawns for extra cash (gained 1,000 " + currencyType + ").");
            money = (money + 1000);
        }
        if (Roll == 26){
            console.log("Helped an elderly blind women cross the street (gained 10 " + currencyType + " and some kisses on the cheek).");
            money = (money + 10);
        }
        if (Roll == 27){
            console.log("Ended world hunger with revolutionary plant based food discovery! (gained 100,000 " + currencyType + " from all the grateful donors).");
            money = (money + 100000);
            laws -= 5;
        }
        if (Roll == 28){
            console.log("Invented the cure to cancer after a vision from some crazy hallucinogens. (gained 1,000,000 " + currencyType + " and many angry pharmaceutical CEOs).");
            money = (money + 1000000);
            madePharmaceuticalsMad = true;
            laws -= 5;
        }
        if (Roll == 29){
            console.log("Looted a lost and found box at DisneyLand (gained 2000 " + currencyType + " and some matching Minnie and Micky shirts.).");
            money = (money + 2000);
            laws += 2;
        }
        if (Roll == 30){
            console.log("Stole from your local library (gained 0 " + currencyType + " and some knowledge about investing.");
            gainedStockKnowledge = true;
            laws += 2;
        }
        if (Roll == 31){
            console.log("Met with one of your finance bros and went out for a drink (Lost 17 " + currencyType + " and got some knowledge about investing.");
            money = (money - 17);
            gainedStockKnowledge = true;
            laws += 1;
        }
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
    }
}

function bezos(){
    var questioningBezos = readLine("Just between you and me Mr. Bezos, is Mark Zuckerburg a robot or a lizard? I know he's one of them and I know you billionares have a group chat so don't lie to me. ");
    if (questioningBezos == "Robot" || questioningBezos == "robot" || questioningBezos == "He's a robot" || questioningBezos == "he's a robot"){
        console.log("Dang it. I knew my friends were right. I just lost like 20 bets. Thanks anyways.");
        console.log("(gained 500 USD in bribe money)");
        money = (money + 500);
    }
    else if (questioningBezos == "Lizard" || questioningBezos == "lizard" || questioningBezos == "He's a lizard" || questioningBezos == "he's a lizard"){
        console.log("Really? dude thats insane is he like an alien or something??? No wonder he's so smart. I have so many people to call. I just won like 20 bets!")
            console.log("(Gained 1,200 USD in bet money)");
            money = (money + 1200);
    }
    else if (questioningBezos == "I dont know what you're talking about" || questioningBezos == "idk" || questioningBezos == "Idk" || questioningBezos == "IDK" || questioningBezos == "how would I know?" || questioningBezos == "How would I know?" || questioningBezos == "no idea" || questioningBezos == "No idea" || questioningBezos == "no clue" || questioningBezos == "No clue"){
        console.log("Oh I know you know, but Ill let you go anyways. Thanks for nothing.");
        console.log("(Mark Cashapped you 1 billion USD in hush money)");
        money = (money + 1000000000);
        laws += 1;
    }
    else {
        console.log("That didn't make sense to me. Whatever, it was a good question and maybe a good answer.");
    }
}

function blackjack(){
    if (money < highScore && gameForeverDone == false){
    console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
    console.log("Dealing cards...");
    for (var i = 0; i < 2; i++){
        getCard();
        userHand[i] = getCard();
        
    }
    for (var i = 0; i < 2; i++){
        getCard();
        dealerHand[i] = getCard()
    }
    getTotalValue(dealerHand);
    if (getTotalValue(dealerHand) == 21){
        gameDone = true;
        money = (0);
        console.log("Dealer got blackjack");
    }
    if (getTotalValue(userHand) == 21 || userIsJeffBezos){
        gameDone = true;
        console.log("Blackjack!");
        money = (money * 10);
    }
    while (gameDone == false && gameForeverDone == false){
        userHandTotal = getTotalValue(userHand);
        console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand[0] + ",?");
        console.log("HAND TOTAL: " + userHandTotal);
        decision = readLine("would you like to hit, stay, or (if first turn) double down " + userName + "? ");
        if ((decision == "Double Down" || decision == "Double down" || decision == "double down" || decision == "double Down" || decision == "doubledown") && count == 1){
            gameDone = true;
            var nextCard = getCard();
            userHand.push(nextCard);
            userHandTotal = getTotalValue(userHand);
            if (userHandTotal == 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Blackjack!");
                gameDone = true;
                money = (money*20);
            }
            else if (userHandTotal > 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Bust!");
                gameDone = true;
                money = (0);
            } else {
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                dealerHandTotal = finalDealerHand(dealerHand);
                if (dealerHandTotal > userHandTotal){
                    console.log("dealer wins!");
                    money = (0);
                }
                else if (userHandTotal > dealerHandTotal){
                    console.log("you win!");
                    money = (money*20);
                } else {
                    console.log("Standoff. Entering game of russian roulette with the dealer...");
                    roulette();
                    calledFromBlackjack = true;
                }
            }
        }
        else if (decision == "hit" || decision == "Hit"){
            var nextCard = getCard();
            userHand.push(nextCard);
            userHandTotal = getTotalValue(userHand);
            if (userHandTotal == 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand[0] + ",?");
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Blackjack!");
                gameDone = true;
                money = (money*10);
            }
            if (userHandTotal > 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand[0] + ",?");
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Bust!");
                gameDone = true;
                money = (0);
            }
        }
        else if (decision == "stop" || decision == "Stop" || decision == "Cancel" || decision == "cancel" || decision == "done" || decision == "Done"){
            gameForeverDone = true;
        }
        else {
            gameDone = true;
            userHandTotal = getTotalValue(userHand);
            if (userHandTotal == 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Blackjack!");
                gameDone = true;
                money = (money*10);
            }
            else if (userHandTotal > 21){
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                console.log("Bust!");
                gameDone = true;
                money = (0);
            } else {
                console.log("Your cards: " + userHand + ". Dealer hand: " + dealerHand);
                console.log("HAND TOTAL: " + userHandTotal);
                dealerHandTotal = finalDealerHand(dealerHand);
                if (dealerHandTotal > userHandTotal){
                    console.log("dealer wins!");
                    money = (0);
                }
                else if (userHandTotal > dealerHandTotal){
                    console.log("you win!");
                    money = (money*10);
                } else {
                    console.log("Standoff. Entering game of russian roulette with the dealer...");
                    roulette();
                    calledFromBlackjack = true;
                }
            }
            
        }
        count = (count + 1);
        if (userIsJeffBezos && money >= highScore){
            gameForeverDone = true;
            win = 1;
        }
    }
    blackjackReset();
    console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
    }
    if (money >= highScore && userIsJeffBezos == false && gameForeverDone == false){
        gameForeverDone = true;
        addicted();
        if (win == 0){
            win = 1;
        }
        
    }
}

function getCard(){
    var card = Randomizer.nextInt(1,13);
    if (card >= 10){
        card = 10;
    }
    else if (card == 1){
        if (aceCount < 3){
        card = "ace";
        aceCount = (aceCount + 1);
        }
        else {
            card = Randomizer.nextInt(2,13);
            if (card >= 10){
                card = 10;
            }
        }
    }
    return(card);
}

function getTotalValue(x){
    var totalValue = 0;
    var numAces = 0;
    for (var i = 0; i < x.length ; i++){
        var currentValue = x[i];
        if (currentValue != "ace"){
            totalValue += currentValue;
        } else {
            numAces += 1;
        }
    }
    if (numAces == 1){
    if((totalValue + 11) <= 21){
        totalValue = (totalValue + 11);
    }
    else {
        totalValue = (totalValue + 1);
    }
    } else if (numAces == 2){
        if((totalValue + 12) <= 21){
            totalValue = (totalValue + 12);
        }
        else {
            totalValue = (totalValue + 2);
        }
    }
return(totalValue);
}

/*

fixing the aces bug

if (numAces == 1){
    if((totalValue + 11) <= 21){
        totalValue = (totalValue + 11);
    }
    else {
        totalValue = (totalValue + 1);
    }
} else if (numAces == 2){
    if((totalValue + 12) <= 21){
        totalValue = (totalValue + 12);
    }
    else {
        totalValue = (totalValue + 2);
    }
}
return(totalValue);
*/
function finalDealerHand(dealerHand){
    console.log("dealer hand: " + dealerHand);
    dealerHandTotal = getTotalValue(dealerHand);
    while (dealerHandTotal < 17 ){
        var nextCard = getCard();
        console.log("dealer got: " + nextCard);
        dealerHand.push(nextCard);
        console.log("dealer hand: " + dealerHand);
        dealerHandTotal = getTotalValue(dealerHand);
    }
    if (dealerHandTotal > 21){
        dealerHandTotal = 0;
        console.log("dealer busts!");
    }
    if (dealerHandTotal == 21){
        console.log("dealer gets blackjack!");
    }
    return(dealerHandTotal);
}

function blackjackReset(){
    aceCount = 0;
    gameDone = false;
    stayChoiceMade = false;
    userHand = [];
    userHandTotal = 0;
    dealerHand = [];
    dealerHandTotal = 0;
    ace = 1;
    count = 1;
}

function flipACoin(){
    if (money < highScore && gameForeverDone == false){
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        decision = readLine("heads or tails? ");
        if (decision == "heads" || decision == "Heads" || decision == "Head" || decision == "head"){
            decision = "heads";
        }
        else if (decision == "stop" || decision == "Stop" || decision == "Cancel" || decision == "cancel" || decision == "done" || decision == "Done"){
            gameForeverDone = true;
        }
        else {
            decision = "tails";
        }
        
        console.log("flipping coin...");
        Roll = Randomizer.nextInt(1,2);
        if (Roll == 1){
            Roll = "heads";
        }
        else {
            Roll = "tails"
        }
        console.log (Roll);
        if (userIsJeffBezos){
            Roll = decision;
        }
        if (decision == Roll){
            console.log("Winner! ");
            money = (money*10);
        }
        else{
            console.log("You loose.");
            money = (0);
        }
    }
    else if (money >= highScore && userIsJeffBezos == false && gameForeverDone == false){
        gameForeverDone = true;
        addicted();
        if (win == 0){
            win = 1;
        }
        
    }
    else if (userIsJeffBezos && money >= highScore){
            gameForeverDone = true;
            win = 1;
    }
    else {
        gameForeverDone = true;
        reason = "Glitch in flipping coin";
    }
}

function roulette(){
    if (money < highScore && gameForeverDone == false){
        console.log("Money: " + money + " " + currencyType + ". Days to live: " + daysToLive + " Hit it big chance: " + hitItBigChance);
        chamber = shuffleArray(chamber);
        console.log("Roulette time!");
        laws += 1;
        for (var i = 0; i < 50; i++){
            if(rouletteDone == false){
                if (rouletteTurn % 2 == 0){
                    if (userIsJeffBezos){
                        chamber = [0, 0, 0, 0, 0, 0];
                    }
                    decision = readLine(userName + ", Would you like to hit yourself, spin, quit, or pass (only available every other turn)?");
                    if ((decision == "pass" || decision == "Pass" || decision == "0" || decision == "no" || decision == "PASS" || decision == "p" || decision == "P") && passedLastTurn == false){
                        passedLastTurn = true;
                    }
                    else if (decision == "Spin" || decision == "spin" || decision == "Respin" || decision == "respin" || decision == "SPIN" || decision == "s" || decision == "S"){
                        passedLastTurn = false;
                        chamber = shuffleArray(chamber);
                        chamberRound = 0;
                        console.log("Spinning the chamber...");
                        if (chamber[chamberRound] == 1){
                            rouletteDone = true;
                            console.log("POW");
                            console.log("You lost " + userName + "!");
                            reason = "Spun the wheel and got unlucky in russian roulette.";
                            death = true;
                            win = -1;
                        }
                        else{
                            chamberRound = (chamberRound + 1);
                            console.log("It was a blank " + userName + "! Good Job!");
                        }
                    }
                    else if (decision == "Quit" || decision == "quit" || decision == "Q" || decision == "q"){
                        rouletteDone = true;
                        money = (0);
                        console.log("Wimp. Your money is now 0.");
                        
                    }
                    else {
                        passedLastTurn = false;
                        if(chamber[chamberRound] == 1){
                            rouletteDone = true;
                            console.log("POW");
                            console.log("You lost " + userName + "!");
                            reason = "Felt a little too lucky in a game of russian roulette.";
                            death = true;
                            win = -1;
                        }
                        else{
                            chamberRound = (chamberRound + 1);
                            console.log("It was a blank " + userName + "! Good Job!");
                        }
                    }
                    rouletteTurn += 1;
                }
                //DealerTurn
                else {
                    if (userIsJeffBezos){
                        chamber = [1, 1, 1, 1, 1, 1];
                    }
                    console.log("Dealers Turn!");
                    Roll = Randomizer.nextInt(1,3);
                    if (dealerPassedLastTurn == true){
                        Roll = Randomizer.nextInt(1,2);
                        if (Roll == 2){
                            Roll = 3;
                        }
                    }
                    if (Roll == 1){
                        console.log("Dealer Chose: hit");
                        dealerPassedLastTurn = false;
                        if(chamber[chamberRound] == 1){
                                rouletteDone = true;
                                console.log("POW");
                                console.log("Dealer Lost Roulette. Good Job!");
                                if (userIsJeffBezos){
                                    console.log("It was about time he died anyways. Just get some people to say it was natural causes.");
                                }
                                rouletteWin();
                            }
                            else{
                                chamberRound = (chamberRound + 1);
                                console.log("It was a blank! Dealer is alive.");
                            }
                    }
                    else if (Roll == 2 && dealerPassedLastTurn == false){
                        dealerPassedLastTurn = true;
                        console.log("Dealer Chose: pass");
                    }
                    else{
                        console.log("Dealer Chose: spin");
                        dealerPassedLastTurn = false;
                        chamber = shuffleArray(chamber);
                        chamberRound = 0;
                        console.log("Spinning the chamber...");
                        if (chamber[chamberRound] == 1){
                            rouletteDone = true;
                            console.log("POW");
                            console.log("Dealer lost Roulette. Good Job!");
                            if (userIsJeffBezos){
                                    console.log("How convienent Mr Bezos. I wont ask questions.");
                            }
                            rouletteWin();
                        }
                        else{
                            chamberRound = (chamberRound + 1);
                            console.log("It was a blank! Dealer is alive.");
                        }
                    }
                    rouletteTurn += 1;
                }
            }
        }
        rouletteReset();
    }
    else if (money >= highScore && userIsJeffBezos == false && gameForeverDone == false){
        gameForeverDone = true;
        addicted();
        if (win == 0){
            win = 1;
        }
    }
    else if (userIsJeffBezos && money >= highScore){
            gameForeverDone = true;
            win = 1;
    }
    else {
        gameForeverDone = true;
        reason = "Glitch in roulette";
    }
}

function rouletteReset(){
    chamber = [0, 0, 0, 0, 0, 1];
    passedLastTurn = false;
    dealerPassedLastTurn = false;
    chamberRound = 0;
    dealerInheritance = false;
    dealerAssets = 0;
    dealerRetirementSavings = false;
    dealerIsAMillionare = false;
    rouletteTurn = 0;
    rouletteDone = false;
    spin = false;
    dealerSpin = false;
    calledFromBlackjack = false;
}

function rouletteWin(){
    laws += 5;
    dealerInheritance = Randomizer.nextBoolean();
    dealerRetirementSavings = Randomizer.nextBoolean();
    dealerAssets = Randomizer.nextInt(1,500000);
    Roll = Randomizer.nextInt(1,5);
    if (Roll == 1){
        dealerIsAMillionare = true;
    }
    if (calledFromBlackjack){
        console.log("you won the game of blackjack! ");
        money = (money*10);
    }
    Roll = Randomizer.nextInt(1,100);
    if (Roll == 1 || userIsJeffBezos){
        Roll = Randomizer.nextInt(1000000000,50000000000);
        console.log("HOLY CRAP! That dealer was a billionare! you now have access to all his wealth! Congratulations " + userName + "! (gained " + Roll + " " + currencyType + ").");
        money = (money + Roll);
        dealerInheritance = false;
        dealerAssets = 0;
        dealerRetirementSavings = false;
        dealerIsAMillionare = false;
    }
    if (dealerIsAMillionare){
        Roll = Randomizer.nextInt(2000000,20000000);
        console.log("Wow! That dealer was a millionare! you now have access to all his wealth! (gained " + Roll + " " + currencyType + ").");
        money = (money + Roll);
        dealerInheritance = false;
        dealerAssets = 0;
        dealerRetirementSavings = false;
    }
    if (dealerInheritance){
        Roll = Randomizer.nextInt(500,500000);
        console.log("Gained " + Roll + " in dealer inheritance money.");
        money = (money + Roll);
    }
    if (dealerAssets > 0){
        console.log("Gained " + dealerAssets + " in dealer assets.");
        money = (money + dealerAssets);
    }
    if (dealerRetirementSavings){
        Roll = Randomizer.nextInt(500,1000000);
        console.log("Gained " + Roll + " in dealer retirement savings.");
        money = (money + Roll);
    }
}