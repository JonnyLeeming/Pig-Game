# Pig-Game

This game is based off a game called 'pass the pigs' where the dice are replaced with mini pigs: https://www.amazon.co.uk/Pass-the-Pigs-Dice-Game/dp/B000246JEK 
In the proper game there is a scoring system based on how the pigs land when the user rolls them, for example, on their legs or snout.

The aim of the game is to get a score of 100 before your opponent.

When the user rolls the dice a random number between 1 and 6 is generated, corralating to the dice number you have rolled.
This is then displayed to the user and if it is a 1 then they lose whatever their current score is and it is now the other players' turn.

If it is not 1 then the player's score accumalates. To avoid the risk of losing their score the user has the ability to hold their score which when chosen adds whatever
their current score is in the round to their total score. If the player chooses to hold their score andtotal score is greater or equal to 100 then they are the winner
and the game finishes, otherwise the game switches hands and it is now the other players' turn.

When the game is finished there is the ability to start a new game which sets all scores and values back to their initial states.
