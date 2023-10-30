let Fortune_3 = ""
let Fortune_2 = 0
let Fortune_1 = ""
let Fortune_answer = game.askForString("Would you like a fortune? (Y/N)")
if (Fortune_answer == "y") {
    Fortune_1 = game.askForString("Do you like birds? (y/n)")
    Fortune_2 = game.askForNumber("How many times a day do you see clocks?")
    Fortune_3 = game.askForString("Do you think that toaster ovens are cool? (y/n)")
    if (Fortune_1 == "y" && Math.percentChance(60)) {
        game.splash("This Tuesday a large salad will fall from the sky.")
    } else if (Fortune_2 > 40 && Math.percentChance(50)) {
        game.splash("Some time this week a barbershop quartet made completely of angler fish will visit your house to bring good news.")
    } else if (Fortune_1 == "y") {
        game.splash("You will find a large toothpick outside your room tomorrow.")
    } else {
        game.splash("Every 2 years for the next 2 years, something will happen that may or may not have happened in your life before.")
    }
} else {
    game.splash("lame")
}
