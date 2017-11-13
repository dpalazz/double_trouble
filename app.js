$(() => {

  // **************************************************************************
  // * Global Variables (Consts, Lets, Functions, Arrays, etc.)
  // **************************************************************************
  const $modal = $("#modal");
  const $closeButton = $("#close");
  const $popper = $(".player");
  const $player1 = {
    pawnOnePosition: "safe",
    pawnOneLocation: [],
  };
  const $player1moves = () => {
    $("#player1-safe-1").css("background-color", "");
    $player1[Object.keys($player1)[0]] = "out";
    if ($arrayOfDieNums[0] === "1") {
      $("#one").css("background-color", "green");
      $player1.pawnOneLocation.push("1");
    } else if ($arrayOfDieNums[0] === "2") {
      $("#two").css("background-color", "green");
      $player1.pawnOneLocation.push("2");
    } else if ($arrayOfDieNums[0] === "3") {
      $("#three").css("background-color", "green");
      $player1.pawnOneLocation.push("3");
    } else if ($arrayOfDieNums[0] === "4") {
      $("#four").css("background-color", "green");
      $player1.pawnOneLocation.push("4");
    } else if ($arrayOfDieNums[0] === "5") {
      $("#five").css("background-color", "green");
      $player1.pawnOneLocation.push("5");
    } else if ($arrayOfDieNums[0] === "6") {
      $("#six").css("background-color", "green");
      $player1.pawnOneLocation.push("6");
    } else if ($arrayOfDieNums[0] === "7") {
      $("#seven").css("background-color", "green");
      $player1.pawnOneLocation.push("7");
    } else if ($arrayOfDieNums[0] === "8") {
      $("#eight").css("background-color", "green");
      $player1.pawnOneLocation.push("8");
    } else if ($arrayOfDieNums[0] === "9") {
      $("#nine").css("background-color", "green");
      $player1.pawnOneLocation.push("9");
    } else {
      console.log("I'm confused.");
    }
  }
  const $player2 = {
    pawnOnePosition: "safe",
    pawnOneLocation: [],
  };
  const $player2moves = () => {
    $("#player2-safe-1").css("background-color", "");
    $player2[Object.keys($player2)[0]] = "out";
    if ($arrayOfDieNums[0] === "1") {
      $("#one").css("background-color", "yellow");
      $player2.pawnOneLocation.push("1");
    } else if ($arrayOfDieNums[0] === "2") {
      $("#two").css("background-color", "yellow");
      $player2.pawnOneLocation.push("2");
    } else if ($arrayOfDieNums[0] === "3") {
      $("#three").css("background-color", "yellow");
      $player2.pawnOneLocation.push("3");
    } else if ($arrayOfDieNums[0] === "4") {
      $("#four").css("background-color", "yellow");
      $player2.pawnOneLocation.push("4");
    } else if ($arrayOfDieNums[0] === "5") {
      $("#five").css("background-color", "yellow");
      $player2.pawnOneLocation.push("5");
    } else if ($arrayOfDieNums[0] === "6") {
      $("#six").css("background-color", "yellow");
      $player2.pawnOneLocation.push("6");
    } else if ($arrayOfDieNums[0] === "7") {
      $("#seven").css("background-color", "yellow");
      $player2.pawnOneLocation.push("7");
    } else if ($arrayOfDieNums[0] === "8") {
      $("#eight").css("background-color", "yellow");
      $player2.pawnOneLocation.push("8");
    } else if ($arrayOfDieNums[0] === "9") {
      $("#nine").css("background-color", "yellow");
      $player2.pawnOneLocation.push("9");
    } else {
      console.log("I'm confused.");
    }
  };
  let $arrayOfDieNums = [];
  const generateRollNumber = () => {
    const $rollNumber = $("<h1>").text(parseInt(Math.floor(Math.random() * (9-1) + 1)))
    .addClass("die-num")
    .appendTo($("#roll-number-textbox"));
    $arrayOfDieNums.push($(".die-num").text());
    setTimeout( () => {
      $("#roll-number-modal").css("display", "block");
      setTimeout($closeRollNumberModal, 1000);
    }, 2000);
  };
  const $closeRollNumberModal = () => {
    $("#roll-number-modal").css("display", "none");
    $("#roll-number-textbox").text("");
    $arrayOfDieNums = [];
  };
  const movePlayerPiece = (event) => {
    if ($(event.target).text() === "Player 1") {
      $player1moves();
    } else if ($(event.target).text() === "Player 2") {
      $player2moves();
    } else {
      console.log("Something isn't right.");
    }
  };
  const gameInPlay = (event) => {
    if (($(event.target).text() === "Player 1")) {
      if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 2) {
        if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
          $("#two").css("background-color", "green");
          $player1.pawnOneLocation.push("2");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#two").css("background-color", "green");
          $player1.pawnOneLocation.push("2");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 3) {
        if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
          $("#three").css("background-color", "green");
          $player1.pawnOneLocation.push("3");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#three").css("background-color", "green");
          $player1.pawnOneLocation.push("3");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 4) {
        if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
          $("#four").css("background-color", "green");
          $player1.pawnOneLocation.push("4");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#four").css("background-color", "green");
          $player1.pawnOneLocation.push("4");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 5) {
        if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
          $("#five").css("background-color", "green");
          $player1.pawnOneLocation.push("5");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#five").css("background-color", "green");
          $player1.pawnOneLocation.push("5");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 6) {
        if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
          $("#six").css("background-color", "green");
          $player1.pawnOneLocation.push("6");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#six").css("background-color", "green");
          $player1.pawnOneLocation.push("6");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 7) {
        if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
          $("#seven").css("background-color", "green");
          $player1.pawnOneLocation.push("7");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#seven").css("background-color", "green");
          $player1.pawnOneLocation.push("7");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 8) {
        if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
          $("#eight").css("background-color", "green");
          $player1.pawnOneLocation.push("8");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#eight").css("background-color", "green");
          $player1.pawnOneLocation.push("8");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 9) {
        if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
          $("#nine").css("background-color", "green");
          $player1.pawnOneLocation.push("9");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#nine").css("background-color", "green");
          $player1.pawnOneLocation.push("9");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 10) {
        if ($("#ten").css("background-color") === "rgb(255, 255, 0)") {
          $("#ten").css("background-color", "green");
          $player1.pawnOneLocation.push("10");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#ten").css("background-color", "green");
          $player1.pawnOneLocation.push("10");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 11) {
        if ($("#eleven").css("background-color") === "rgb(255, 255, 0)") {
          $("#eleven").css("background-color", "green");
          $player1.pawnOneLocation.push("11");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#eleven").css("background-color", "green");
          $player1.pawnOneLocation.push("11");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 12) {
        if ($("#twelve").css("background-color") === "rgb(255, 255, 0)") {
          $("#twelve").css("background-color", "green");
          $player1.pawnOneLocation.push("12");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#twelve").css("background-color", "green");
          $player1.pawnOneLocation.push("12");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 13) {
        if ($("#thirteen").css("background-color") === "rgb(255, 255, 0)") {
          $("#thirteen").css("background-color", "green");
          $player1.pawnOneLocation.push("13");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#thirteen").css("background-color", "green");
          $player1.pawnOneLocation.push("13");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 14) {
        if ($("#fourteen").css("background-color") === "rgb(255, 255, 0)") {
          $("#fourteen").css("background-color", "green");
          $player1.pawnOneLocation.push("14");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
        } else {
          $("#fourteen").css("background-color", "green");
          $player1.pawnOneLocation.push("14");
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) >= 15) {
        $winnerWinner();
      } else {
        console.log("WRONG!");
      }
    } else if (($(event.target).text() === "Player 2")) {
      if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 2) {
        $("#two").css("background-color", "yellow");
        $player2.pawnOneLocation.push("2");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 3) {
        $("#three").css("background-color", "yellow");
        $player2.pawnOneLocation.push("3");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 4) {
        $("#four").css("background-color", "yellow");
        $player2.pawnOneLocation.push("4");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 5) {
        $("#five").css("background-color", "yellow");
        $player2.pawnOneLocation.push("5");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 6) {
        $("#six").css("background-color", "yellow");
        $player2.pawnOneLocation.push("6");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 7) {
        $("#seven").css("background-color", "yellow");
        $player2.pawnOneLocation.push("7");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 8) {
        $("#eight").css("background-color", "yellow");
        $player2.pawnOneLocation.push("8");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 9) {
        $("#nine").css("background-color", "yellow");
        $player2.pawnOneLocation.push("9");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 10) {
        $("#ten").css("background-color", "yellow");
        $player2.pawnOneLocation.push("10");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 11) {
        $("#eleven").css("background-color", "yellow");
        $player2.pawnOneLocation.push("11");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 12) {
        $("#twelve").css("background-color", "yellow");
        $player2.pawnOneLocation.push("12");
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 13) {
        $("#thirteen").css("background-color", "yellow");
        $player2.pawnOneLocation.push("13");
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 14) {
        $("#fourteen").css("background-color", "green");
        $player1.pawnOneLocation.push("14");
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) >= 15) {
        $winnerWinner();
      } else {
        console.log("Somethin' ain't right, kid.");
      }
    }
  };
  // ******************************************************
// if ($("#one").css("background-color") === "rgb(255, 255, 0)") {
//   $("#one").css("background-color", "green");
//   $player1.pawnOneLocation.push("1");
//   $("#player2-safe-1").css("background-color", "yellow");
//   $player2.pawnOneLocation.push("");
//
//     } else {
//       $("#one").css("background-color", "green");
//       $player1.pawnTwoLocation.push("1");
//     }
  // ******************************************************
  const makeMoves = (event) => {
    console.log("makeMoves() ran");
    console.log($player1);
    console.log($player2);
    if (($(event.target).text() === "Player 1") && ($player1[Object.keys($player1)[0]] === "out") || ($(event.target).text() === "Player 2") && ($player2[Object.keys($player2)[0]] === "out")) {
      console.log("gamepiece out");
      gameInPlay(event);
    } else {
      console.log("gamepiece safe");
      movePlayerPiece(event);
    }
  };
  // **************************************************************************
  // * Event Handlers
  // **************************************************************************
  // ************************
  // * For Instruction Modal
  // ************************
  const openModal = () => {
    $modal.css("display", "block");
  };
  const closeModal = () => {
    $modal.css("display", "none");
  };
  // ************************
  // * For the Start
  // ************************
  const startGame = () => {
    $(".col-1").children().css("background-color", "yellow");
    $(".col-6").children().css("background-color", "green");
  };
  // ************************
  // * For the Popper
  // ************************
  const $popPopper = (event) => {
    $("#popper-modal").css("display", "block");
    timer();
    generateRollNumber();
    makeMoves(event);
  };
  const $closePopper = () => {
    $("#popper-modal").css("display", "none");
    clearTimeout(timer);
  };
  const timer = () => {
    setTimeout($closePopper, 1000);
  }
  // **************************************************************************
  // * Event Listeners
  // **************************************************************************
  // ************************
  // * For Instruction Modal
  // ************************
  $("#openModal").on("click", openModal);
  $closeButton.on('click', closeModal);
  // ************************
  // * Start
  // ************************
  $("#start").on("click", startGame);
  // ************************
  // * For the Popper
  // ************************
  $(".player").on("click", $popPopper);

}); // Closes window.onload
