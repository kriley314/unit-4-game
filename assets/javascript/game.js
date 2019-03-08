// Javascript file to drive the unit-4 Game - Crystals into a random number..
//
$(document).ready(function() {

// Crystals have random numbers between 1 and 12..
// The target value is a random number between 19 and 120..

// Gonna declare a few global variables..

var nTargetValue;
var nWorkingTotal;

var nRubyValue;
var nSapphireValue;
var nCrystalValue;
var nJewelValue;

var nNumberOfWins = 0;
var nNumberOfLosses = 0;

function ResetForNewGame() {
  // Initialize everything for a new game..
//debugger;
  // Setup the Target value - Range 19-120..  So..  Let's generate a random number from 0-101 (inclusive
  // so multiply by 102) and add 19..
  nTargetValue = ( Math.floor( Math.random() * 102 )) + 19;

  // Start the working total at 0..
  nWorkingTotal = 0;

  // Generate values for our crystals - 1-12..  As one would guess, 0-11 and add 1.
  // I am going to add one bit..  I am going to make sure no 2 "precious stone" values
  // match..
  nRubyValue = ( Math.floor( Math.random() * 12 )) + 1;

  while ( true ) {
    nSapphireValue = ( Math.floor( Math.random() * 12 )) + 1;
    if ( nSapphireValue != nRubyValue ) {
      break;
    }
  }

  while ( true ) {
    nCrystalValue = ( Math.floor( Math.random() * 12 )) + 1;
    if (( nCrystalValue != nRubyValue     ) &&
        ( nCrystalValue != nSapphireValue )) {
      break;
    }
  }

  while ( true ) {
    nJewelValue = ( Math.floor( Math.random() * 12 )) + 1;
    if (( nJewelValue != nRubyValue     ) &&
        ( nJewelValue != nSapphireValue ) &&
        ( nJewelValue != nCrystalValue  )) {
      break;
    }
  }

  // Make sure the screen values are updated to reset..
  $("#yourScore").text( nWorkingTotal );
  $("#TargetBox").text( "Random Number: " + nTargetValue );

  // Start out letting console know where eveyrthing stands..
  console.log( "Initial Conditions: Target: " + nTargetValue );
  console.log( "Jewels left to right: " + nRubyValue + " : " + nSapphireValue + " : " + nCrystalValue + " : " + nJewelValue );
}

ResetForNewGame();

$(".bRuby").on("click", function() {
  // Call the function that handles everything with the Ruby dec amount..
  PlayGame( nRubyValue );
});

$(".bSapphire").on("click", function() {
  // Call the function that handles everything with the Ruby dec amount..
  PlayGame( nSapphireValue );
});
  
$(".bCrystal").on("click", function() {
  // Call the function that handles everything with the Ruby dec amount..
  PlayGame( nCrystalValue );
});
  
$(".bJewel").on("click", function() {
  // Call the function that handles everything with the Ruby dec amount..
  PlayGame( nJewelValue );
});

// Here is the function that does everything.
//  1.  Inc the nWorking total by the amount passed in
//  2.  Is the nWorkingTotal less than the target value?  If so, we are done here..
//  3.  Does the nWorkingTotal equal the nTargetValue?  If so, we won..  Output
//      a message saying you won..  Increment the wins total..  And.. Call the
//      ResetForNewGame function.
//  4.  Is the nWorkingTotal > nTargetValue?  If so, we lost..  Output a
//      message saying you lost..  Increment the losses total..  And.. Call the
//      ResetForNewGame function.
function PlayGame( nIncValue ) {
  // If we are starting out..  Tell the user to be careful..
  $("#snarkyMsg").text( "Careful.." );

  // Next, increment the working total by the amount passed in..
  nWorkingTotal += nIncValue;

  // Start checking things..
  if ( nWorkingTotal < nTargetValue ) {
    // We need to update the nWorkingTotal on the screen..
    $("#yourScore").text( nWorkingTotal );
    return;
  }

  // Once we get past here, we know THIS game is over so we will do something 
  // but in all cases make the call to reset for a new game.

  // Did we win?
  if ( nWorkingTotal === nTargetValue ) {
    // We WON!!  Increment the number of wins and output it to the screen.
    $("#wins").text( "Wins: " + ++nNumberOfWins );

    // Output the We Won message..
    $("#snarkyMsg").text( "Winner!" );
  } else {
    // We lost..  :(  Increment the loss total and output it.
    $("#losses").text( "Losses: " + ++nNumberOfLosses );

    // Output the you lost message..
    $("#snarkyMsg").text( "Lost.. Sigh.." );
  }

  ResetForNewGame();
}

});
