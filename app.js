$(() => {

  // **************************************************************************
  // * Global Variables (Consts, Lets, Functions, Arrays, etc.)
  // **************************************************************************
  const $modal = $("#modal");
  const $closeButton = $("#close");
  const $popper = $(".player");
  let $arrayOfDieNums = [];
  let $arrayOfGreenGameCircles = [];
  let $arrayOfYellowGameCircles= [];
  const $player1 = {
    pawnOnePosition: "safe",
    pawnOneLocation: [],
  };
  const $player2 = {
    pawnOnePosition: "safe",
    pawnOneLocation: [],
  };
  const logStuff = () => {
    console.log($arrayOfDieNums);
    console.log($arrayOfGreenGameCircles);
    console.log($arrayOfYellowGameCircles);
    console.log(parseInt($player2.pawnOneLocation));
    console.log(parseInt($player1.pawnOneLocation));
  }
  const $winnerWinner = (event) => {
    console.log($event.target + " won the game!");
  }
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
  const $player1moves = () => {
    $("#player1-safe-1").css("background-color", "");
    $player1[Object.keys($player1)[0]] = "out";
    if ($arrayOfDieNums[0] === "1") {
      if ($("#one").css("background-color") === "rgb(255, 255, 0)") {
        $("#one").css("background-color", "green");
        $player1.pawnOneLocation.push("1");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#one"));
      } else {
        $("#one").css("background-color", "green");
        $player1.pawnOneLocation.push("1");
        $arrayOfGreenGameCircles.push($("#one"));
      }
    } else if ($arrayOfDieNums[0] === "2") {
      if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
        $("#two").css("background-color", "green");
        $player1.pawnOneLocation.push("2");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#two"));
      } else {
        $("#two").css("background-color", "green");
        $player1.pawnOneLocation.push("2");
        $arrayOfGreenGameCircles.push($("#two"));
      }
    } else if ($arrayOfDieNums[0] === "3") {
      if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
        $("#three").css("background-color", "green");
        $player1.pawnOneLocation.push("3");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#three"));
      } else {
        $("#three").css("background-color", "green");
        $player1.pawnOneLocation.push("3");
        $arrayOfGreenGameCircles.push($("#three"));
      }
    } else if ($arrayOfDieNums[0] === "4") {
      if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
        $("#four").css("background-color", "green");
        $player1.pawnOneLocation.push("4");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#four"));
      } else {
        $("#four").css("background-color", "green");
        $player1.pawnOneLocation.push("4");
        $arrayOfGreenGameCircles.push($("#four"));
      }
    } else if ($arrayOfDieNums[0] === "5") {
      if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
        $("#five").css("background-color", "green");
        $player1.pawnOneLocation.push("5");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#five"));
      } else {
        $("#five").css("background-color", "green");
        $player1.pawnOneLocation.push("5");
        $arrayOfGreenGameCircles.push($("#five"));
      }
    } else if ($arrayOfDieNums[0] === "6") {
      if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
        $("#six").css("background-color", "green");
        $player1.pawnOneLocation.push("6");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#six"));
      } else {
        $("#six").css("background-color", "green");
        $player1.pawnOneLocation.push("6");
        $arrayOfGreenGameCircles.push($("#six"));
      }
    } else if ($arrayOfDieNums[0] === "7") {
      if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
        $("#seven").css("background-color", "green");
        $player1.pawnOneLocation.push("7");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#seven"));
      } else {
        $("#seven").css("background-color", "green");
        $player1.pawnOneLocation.push("7");
        $arrayOfGreenGameCircles.push($("#seven"));
      }
    } else if ($arrayOfDieNums[0] === "8") {
      if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
        $("#eight").css("background-color", "green");
        $player1.pawnOneLocation.push("8");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#eight"));
      } else {
        $("#eight").css("background-color", "green");
        $player1.pawnOneLocation.push("8");
        $arrayOfGreenGameCircles.push($("#eight"));
      }
    } else if ($arrayOfDieNums[0] === "9") {
      if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
        $("#nine").css("background-color", "green");
        $player1.pawnOneLocation.push("9");
        $("#player2-safe-1").css("background-color", "yellow");
        $player2.pawnOneLocation.push("");
        $player2.pawnOnePosition = "safe";
        $arrayOfGreenGameCircles.push($("#nine"));
      } else {
        $("#nine").css("background-color", "green");
        $player1.pawnOneLocation.push("9");
        $arrayOfGreenGameCircles.push($("#nine"));
      }
    } else {
      console.log("I'm confused.");
    }
  };
  const $player2moves = () => {
    $("#player2-safe-1").css("background-color", "");
    $player2[Object.keys($player2)[0]] = "out";
    if ($arrayOfDieNums[0] === "1") {
      if ($("#one").css("background-color") === "rgb(0, 128, 0)") {
        $("#one").css("background-color", "yellow");
        $player2.pawnOneLocation.push("1");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#one"));
      } else {
        $("#one").css("background-color", "yellow");
        $player1.pawnOneLocation.push("1");
        $arrayOfYellowGameCircles.push($("#one"));
      }
    } else if ($arrayOfDieNums[0] === "2") {
      if ($("#two").css("background-color") === "rgb(0, 128, 0)") {
        $("#two").css("background-color", "yellow");
        $player2.pawnOneLocation.push("2");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#two"));
      } else {
        $("#two").css("background-color", "yellow");
        $player2.pawnOneLocation.push("2");
        $arrayOfYellowGameCircles.push($("#two"));
      }
    } else if ($arrayOfDieNums[0] === "3") {
      if ($("#three").css("background-color") === "rgb(0, 128, 0)") {
        $("#three").css("background-color", "yellow");
        $player2.pawnOneLocation.push("3");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#three"));
      } else {
        $("#three").css("background-color", "yellow");
        $player2.pawnOneLocation.push("3");
        $arrayOfYellowGameCircles.push($("#three"));
      }
    } else if ($arrayOfDieNums[0] === "4") {
      if ($("#four").css("background-color") === "rgb(0, 128, 0)") {
        $("#four").css("background-color", "yellow");
        $player2.pawnOneLocation.push("4");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#four"));
      } else {
        $("#four").css("background-color", "yellow");
        $player2.pawnOneLocation.push("4");
        $arrayOfYellowGameCircles.push($("#four"));
      }
    } else if ($arrayOfDieNums[0] === "5") {
      if ($("#five").css("background-color") === "rgb(0, 128, 0)") {
        $("#five").css("background-color", "yellow");
        $player2.pawnOneLocation.push("5");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#five"));
      } else {
        $("#five").css("background-color", "yellow");
        $player2.pawnOneLocation.push("5");
        $arrayOfYellowGameCircles.push($("#five"));
      }
    } else if ($arrayOfDieNums[0] === "6") {
      if ($("#six").css("background-color") === "rgb(0, 128, 0)") {
        $("#six").css("background-color", "yellow");
        $player2.pawnOneLocation.push("6");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#six"));
      } else {
        $("#six").css("background-color", "yellow");
        $player2.pawnOneLocation.push("6");
        $arrayOfYellowGameCircles.push($("#six"));
      }
    } else if ($arrayOfDieNums[0] === "7") {
      if ($("#seven").css("background-color") === "rgb(0, 128, 0)") {
        $("#seven").css("background-color", "yellow");
        $player2.pawnOneLocation.push("7");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#seven"));
      } else {
        $("#seven").css("background-color", "yellow");
        $player2.pawnOneLocation.push("7");
        $arrayOfYellowGameCircles.push($("#seven"));
      }
    } else if ($arrayOfDieNums[0] === "8") {
      if ($("#eight").css("background-color") === "rgb(0, 128, 0)") {
        $("#eight").css("background-color", "yellow");
        $player2.pawnOneLocation.push("8");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#eight"));
      } else {
        $("#eight").css("background-color", "yellow");
        $player2.pawnOneLocation.push("8");
        $arrayOfYellowGameCircles.push($("#eight"));
      }
    } else if ($arrayOfDieNums[0] === "9") {
      if ($("#nine").css("background-color") === "rgb(0, 128, 0)") {
        $("#nine").css("background-color", "yellow");
        $player2.pawnOneLocation.push("9");
        $("#player1-safe-1").css("background-color", "green");
        $player1.pawnOneLocation.push("");
        $player1.pawnOnePosition = "safe";
        $arrayOfYellowGameCircles.push($("#nine"));
      } else {
        $("#nine").css("background-color", "yellow");
        $player2.pawnOneLocation.push("9");
        $arrayOfYellowGameCircles.push($("#nine"));
      }
    } else {
      console.log("I'm confused.");
    }
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
      logStuff();
      if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 2) {
        if ($("#two").css("background-color") === "rgb(255, 255, 0)") {
          $("#two").css("background-color", "green");
          $player1.pawnOneLocation.push("2");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#two"));
        } else {
          $("#two").css("background-color", "green");
          $player1.pawnOneLocation.push("2");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#two"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 3) {
        if ($("#three").css("background-color") === "rgb(255, 255, 0)") {
          $("#three").css("background-color", "green");
          $player1.pawnOneLocation.push("3");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#three"));
        } else {
          $("#three").css("background-color", "green");
          $player1.pawnOneLocation.push("3");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#three"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 4) {
        if ($("#four").css("background-color") === "rgb(255, 255, 0)") {
          $("#four").css("background-color", "green");
          $player1.pawnOneLocation.push("4");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#four"));
        } else {
          $("#four").css("background-color", "green");
          $player1.pawnOneLocation.push("4");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#four"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 5) {
        if ($("#five").css("background-color") === "rgb(255, 255, 0)") {
          $("#five").css("background-color", "green");
          $player1.pawnOneLocation.push("5");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#five"));
        } else {
          $("#five").css("background-color", "green");
          $player1.pawnOneLocation.push("5");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#five"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 6) {
        if ($("#six").css("background-color") === "rgb(255, 255, 0)") {
          $("#six").css("background-color", "green");
          $player1.pawnOneLocation.push("6");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#six"));
        } else {
          $("#six").css("background-color", "green");
          $player1.pawnOneLocation.push("6");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#six"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 7) {
        if ($("#seven").css("background-color") === "rgb(255, 255, 0)") {
          $("#seven").css("background-color", "green");
          $player1.pawnOneLocation.push("7");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#seven"));
        } else {
          $("#seven").css("background-color", "green");
          $player1.pawnOneLocation.push("7");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#seven"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 8) {
        if ($("#eight").css("background-color") === "rgb(255, 255, 0)") {
          $("#eight").css("background-color", "green");
          $player1.pawnOneLocation.push("8");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#eight"));
        } else {
          $("#eight").css("background-color", "green");
          $player1.pawnOneLocation.push("8");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#eight"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 9) {
        if ($("#nine").css("background-color") === "rgb(255, 255, 0)") {
          $("#nine").css("background-color", "green");
          $player1.pawnOneLocation.push("9");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#nine"));
        } else {
          $("#nine").css("background-color", "green");
          $player1.pawnOneLocation.push("9");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#nine"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 10) {
        if ($("#ten").css("background-color") === "rgb(255, 255, 0)") {
          $("#ten").css("background-color", "green");
          $player1.pawnOneLocation.push("10");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#ten"));
        } else {
          $("#ten").css("background-color", "green");
          $player1.pawnOneLocation.push("10");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#ten"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 11) {
        if ($("#eleven").css("background-color") === "rgb(255, 255, 0)") {
          $("#eleven").css("background-color", "green");
          $player1.pawnOneLocation.push("11");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#eleven"));
        } else {
          $("#eleven").css("background-color", "green");
          $player1.pawnOneLocation.push("11");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#eleven"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 12) {
        if ($("#twelve").css("background-color") === "rgb(255, 255, 0)") {
          $("#twelve").css("background-color", "green");
          $player1.pawnOneLocation.push("12");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#twelve"));
        } else {
          $("#twelve").css("background-color", "green");
          $player1.pawnOneLocation.push("12");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#twelve"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 13) {
        if ($("#thirteen").css("background-color") === "rgb(255, 255, 0)") {
          $("#thirteen").css("background-color", "green");
          $player1.pawnOneLocation.push("13");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#thirteen"));
        } else {
          $("#thirteen").css("background-color", "green");
          $player1.pawnOneLocation.push("13");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#thirteen"));
        }
      } else if (parseInt($player1.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 14) {
        if ($("#fourteen").css("background-color") === "rgb(255, 255, 0)") {
          $("#fourteen").css("background-color", "green");
          $player1.pawnOneLocation.push("14");
          $("#player2-safe-1").css("background-color", "yellow");
          $player2.pawnOneLocation.push("");
          $player2.pawnOnePosition = "safe";
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#fourteen"));
        } else {
          $("#fourteen").css("background-color", "green");
          $player1.pawnOneLocation.push("14");
          $arrayOfGreenGameCircles[($arrayOfGreenGameCircles.length - 1)].css("background-color", "");
          $arrayOfGreenGameCircles.push($("#fourteen"));
        }
      } else if (parseInt($player1.pawnOneLocation)) + parseInt($arrayOfDieNums[0]) >= 15) {
        $winnerWinner();
      } else {
        console.log("WRONG!");
      }
    } else if (($(event.target).text() === "Player 2")) {
      logStuff();
      if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 2) {
        if ($("#two").css("background-color") === "rgb(0, 128, 0)") {
          $("#two").css("background-color", "yellow");
          $player2.pawnOneLocation.push("2");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#two"))
        } else {
          $("#two").css("background-color", "yellow");
          $player2.pawnOneLocation.push("2");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#two"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 3) {
        if ($("#three").css("background-color") === "rgb(0, 128, 0)") {
          $("#three").css("background-color", "yellow");
          $player2.pawnOneLocation.push("3");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#three"))
        } else {
          $("#three").css("background-color", "yellow");
          $player2.pawnOneLocation.push("3");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#three"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 4) {
        if ($("#four").css("background-color") === "rgb(0, 128, 0)") {
          $("#four").css("background-color", "yellow");
          $player2.pawnOneLocation.push("4");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#four"))
        } else {
          $("#four").css("background-color", "yellow");
          $player2.pawnOneLocation.push("4");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#four"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 5) {
        if ($("#five").css("background-color") === "rgb(0, 128, 0)") {
          $("#five").css("background-color", "yellow");
          $player2.pawnOneLocation.push("5");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#five"))
        } else {
          $("#five").css("background-color", "yellow");
          $player2.pawnOneLocation.push("5");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#five"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 6) {
        if ($("#six").css("background-color") === "rgb(0, 128, 0)") {
          $("#six").css("background-color", "yellow");
          $player2.pawnOneLocation.push("6");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#six"))
        } else {
          $("#six").css("background-color", "yellow");
          $player2.pawnOneLocation.push("6");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#six"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 7) {
        if ($("#seven").css("background-color") === "rgb(0, 128, 0)") {
          $("#seven").css("background-color", "yellow");
          $player2.pawnOneLocation.push("7");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#seven"))
        } else {
          $("#seven").css("background-color", "yellow");
          $player2.pawnOneLocation.push("7");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#seven"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 8) {
        if ($("#eight").css("background-color") === "rgb(0, 128, 0)") {
          $("#eight").css("background-color", "yellow");
          $player2.pawnOneLocation.push("8");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#eight"))
        } else {
          $("#eight").css("background-color", "yellow");
          $player2.pawnOneLocation.push("8");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#eight"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 9) {
        if ($("#nine").css("background-color") === "rgb(0, 128, 0)") {
          $("#nine").css("background-color", "yellow");
          $player2.pawnOneLocation.push("9");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#nine"))
        } else {
          $("#nine").css("background-color", "yellow");
          $player2.pawnOneLocation.push("9");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#nine"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 10) {
        if ($("#ten").css("background-color") === "rgb(0, 128, 0)") {
          $("#ten").css("background-color", "yellow");
          $player2.pawnOneLocation.push("10");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#ten"))
        } else {
          $("#ten").css("background-color", "yellow");
          $player2.pawnOneLocation.push("10");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#ten"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 11) {
        if ($("#eleven").css("background-color") === "rgb(0, 128, 0)") {
          $("#eleven").css("background-color", "yellow");
          $player2.pawnOneLocation.push("11");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#eleven"))
        } else {
          $("#eleven").css("background-color", "yellow");
          $player2.pawnOneLocation.push("11");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#eleven"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 12) {
        if ($("#twelve").css("background-color") === "rgb(0, 128, 0)") {
          $("#twelve").css("background-color", "yellow");
          $player2.pawnOneLocation.push("12");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#twelve"))
        } else {
          $("#twelve").css("background-color", "yellow");
          $player2.pawnOneLocation.push("12");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#twelve"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 13) {
        if ($("#thirteen").css("background-color") === "rgb(0, 128, 0)") {
          $("#thirteen").css("background-color", "yellow");
          $player2.pawnOneLocation.push("13");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#thirteen"))
        } else {
          $("#thirteen").css("background-color", "yellow");
          $player2.pawnOneLocation.push("13");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#thirteen"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) === 14) {
        if ($("#fourteen").css("background-color") === "rgb(0, 128, 0)") {
          $("#fourteen").css("background-color", "yellow");
          $player2.pawnOneLocation.push("14");
          $("#player1-safe-1").css("background-color", "green");
          $player1.pawnOneLocation.push("");
          $player1.pawnOnePosition = "safe";
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#fourteen"))
        } else {
          $("#fourteen").css("background-color", "yellow");
          $player2.pawnOneLocation.push("14");
          $arrayOfYellowGameCircles[($arrayOfYellowGameCircles.length - 1)].css("background-color", "");
          $arrayOfYellowGameCircles.push($("#fourteen"))
        }
      } else if (parseInt($player2.pawnOneLocation) + parseInt($arrayOfDieNums[0]) >= 15) {
        $winnerWinner();
      } else {
        console.log("Somethin' ain't right, kid.");
      }
    }
  };
  const makeMoves = (event) => {
    if (($(event.target).text() === "Player 1") && ($player1[Object.keys($player1)[0]] === "out") || ($(event.target).text() === "Player 2") && ($player2[Object.keys($player2)[0]] === "out")) {
      console.log("gameInPlay() ran");
      gameInPlay(event);
    } else {
      console.log("movePlayPiece() ran");
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
