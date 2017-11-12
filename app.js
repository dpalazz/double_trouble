$(() => {

  // **************************************************************************
  // * Global Variables (Consts, Lets, Functions, Arrays, etc.)
  // **************************************************************************
  const $modal = $("#modal");
  const $closeButton = $("#close");
  const $popper = $(".player");

  const $player1 = {
    pawnOnePosition: "safe",
    pawnTwoPosition: "safe"
  };

  const $player2 = {
    pawnOnePosition: "safe",
    pawnTwoPosition: "safe"
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

  const movePlayerPiece1 = (event) => {
    if ($(event.target).text() === "Player 1") {
      $("#player1-safe-1").css("background-color", "");
      $player1[Object.keys($player1)[0]] = "out";
      if ($arrayOfDieNums[0] === "1") {
        if ($("#one").css("background-color") === "rgb(255, 255, 0)") {
          $("#one").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#one").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "2") {
        if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
          $("#two").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#two").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "3") {
        if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
          $("#three").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#three").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "4") {
        if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
          $("#four").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#four").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "5") {
        if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
          $("#five").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#five").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "6") {
        if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
          $("#six").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#six").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "7") {
        if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
          $("#seven").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#seven").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "8") {
        if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
          $("#eight").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#eight").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "9") {
        if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
          $("#nine").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#nine").css("background-color", "green");
        }
      } else {
        console.log("I'm confused.");
      }
    } else if ($(event.target).text() === "Player 2") {
      $("#player2-safe-1").css("background-color", "");
      $player2[Object.keys($player2)[0]] = "out";
      if ($arrayOfDieNums[0] === "1") {
        if ($("#one").css("background-color") === "rgb(0, 128, 0)") {
          $("#one").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#one").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "2") {
        if ($("#two").css("background-color") === "rgb(0, 128, 0)") {
          $("#two").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#two").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "3") {
        if ($("#three").css("background-color") === "rgb(0, 128, 0)") {
          $("#three").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#three").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "4") {
        if ($("#four").css("background-color") === "rgb(0, 128, 0)") {
          $("#four").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#four").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "5") {
        if ($("#five").css("background-color") === "rgb(0, 128, 0)") {
          $("#five").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#five").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "6") {
        if ($("#six").css("background-color") === "rgb(0, 128, 0)") {
          $("#six").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#six").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "7") {
        if ($("#seven").css("background-color") === "rgb(0, 128, 0)") {
          $("#seven").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#seven").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "8") {
        if ($("#eight").css("background-color") === "rgb(0, 128, 0)") {
          $("#eight").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#eight").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "9") {
        if ($("#nine").css("background-color") === "rgb(0, 128, 0)") {
          $("#nine").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#nine").css("background-color", "yellow");
        }
      } else {
        console.log("I'm confused.");
      }
    } else {
      console.log("Something isn't right.");
    }
  };

  const movePlayerPiece2 = (event) => {
    if (($(event.target).text() === "Player 1") && ($player1[Object.keys($player1)[0]] === "out")) {
      $("#player1-safe-2").css("background-color", "");
      $player1[Object.keys($player1)[1]] = "out";
      if ($arrayOfDieNums[0] === "1") {
        if ($("#one").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#one").css("background-color") === "rgb(255, 255, 0)") {
          $("#one").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#one").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "2") {
        if ($("#two").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
          $("#two").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#two").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "3") {
        if ($("#three").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
          $("#three").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#three").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "4") {
        if ($("#four").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
          $("#four").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#four").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "5") {
        if ($("#five").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
          $("#five").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#five").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "6") {
        if ($("#six").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
          $("#six").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#six").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "7") {
        if ($("#seven").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
          $("#seven").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#seven").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "8") {
        if ($("#eight").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
          $("#eight").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#eight").css("background-color", "green");
        }
      } else if ($arrayOfDieNums[0] === "9") {
        if ($("#nine").css("background-color") === "rgb(0, 128, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player1-safe-2").css("background-color", "green");
        } else if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
          $("#nine").css("background-color", "green");
          $player2[Object.keys($player2)[0]] = "safe";
          $("#player2-safe-1").css("background-color", "yellow");
        } else {
          $("#nine").css("background-color", "green");
        }
      } else {
        console.log("I'm confused.");
      }
    } else if (($(event.target).text() === "Player 2") && ($player2[Object.keys($player2)[0]] === "out")) {
      $("#player2-safe-2").css("background-color", "");
      if ($arrayOfDieNums[0] === "1") {
        if ($("#one").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#one").css("background-color") === "rgb(0, 128, 0)") {
          $("#one").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#one").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "2") {
        if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#two").css("background-color") === "rgb(0, 128, 0)") {
          $("#two").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#two").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "3") {
        if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#three").css("background-color") === "rgb(0, 128, 0)") {
          $("#three").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#three").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "4") {
        if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#four").css("background-color") === "rgb(0, 128, 0)") {
          $("#four").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#four").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "5") {
        if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#five").css("background-color") === "rgb(0, 128, 0)") {
          $("#five").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#five").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "6") {
        if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#six").css("background-color") === "rgb(0, 128, 0)") {
          $("#six").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#six").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "7") {
        if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#seven").css("background-color") === "rgb(0, 128, 0)") {
          $("#seven").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#seven").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "8") {
        if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#eight").css("background-color") === "rgb(0, 128, 0)") {
          $("#eight").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#eight").css("background-color", "yellow");
        }
      } else if ($arrayOfDieNums[0] === "9") {
        if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
          alert("Oops, let's roll again. That space is already taken by your own game piece");
          $("#player2-safe-2").css("background-color", "yellow");
        } else if ($("#nine").css("background-color") === "rgb(0, 128, 0)") {
          $("#nine").css("background-color", "yellow");
          $player1[Object.keys($player1)[0]] = "safe";
          $("#player1-safe-1").css("background-color", "green");
        } else {
          $("#nine").css("background-color", "yellow");
        }
      } else {
        console.log("I'm confused.");
      }
    }
  };

  const movePiece = (event) => {
    if (($(event.target).text() === "Player 1") && ($player1[Object.keys($player1)[0]] === "out") && ($player1[Object.keys($player1)[1]] === "out")) {
      console.log("hiyapal");
    } else if (($(event.target).text() === "Player 1") && ($player1[Object.keys($player1)[0]] === "out") || ($(event.target).text() === "Player 2") && ($player2[Object.keys($player2)[0]] === "out")) {
      movePlayerPiece2(event);
    } else {
      movePlayerPiece1(event);
    }
  };


  // **************************************************************************
  // * Event Handlers
  // **************************************************************************

  // *************************
  // * For Instruction Modal
  // *************************
  const openModal = () => {
    $modal.css("display", "block");
  };

  const closeModal = () => {
    $modal.css("display", "none");
  };

  // *****************
  // * For the Start
  // *****************
  const startGame = () => {
    $(".col-1").children().css("background-color", "yellow");
    $(".col-6").children().css("background-color", "green");
  };

  // *****************
  // * For the Popper
  // *****************

  const $popPopper = (event) => {
    $("#popper-modal").css("display", "block");
    timer();
    generateRollNumber();
    movePiece(event);
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

  // ********
  // * Start
  // ********
  $("#start").on("click", startGame);

  // *****************
  // * For the Popper
  // *****************
  $(".player").on("click", $popPopper);


}); // Closes window.onload
