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

  const movePiece = (event) => {
    if ($(event.target).text() === "Player 1") {
      $("#player1-safe-1").css("background-color", "");
      if ($arrayOfDieNums[0] === "1") {
        $("#one").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "2") {
        $("#two").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "3") {
        $("#three").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "4") {
        $("#four").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "5") {
        $("#five").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "6") {
        $("#six").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "7") {
        $("#seven").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "8") {
        $("#eight").css("background-color", "green");
      } else if ($arrayOfDieNums[0] === "9") {
        $("#nine").css("background-color", "green");
      } else {
        console.log("I'm confused.");
      }
    } else if ($(event.target).text() === "Player 2") {
      $("#player2-safe-1").css("background-color", "");
      if ($arrayOfDieNums[0] === "1") {
        $("#one").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "2") {
        $("#two").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "3") {
        $("#three").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "4") {
        $("#four").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "5") {
        $("#five").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "6") {
        $("#six").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "7") {
        $("#seven").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "8") {
        $("#eight").css("background-color", "yellow");
      } else if ($arrayOfDieNums[0] === "9") {
        $("#nine").css("background-color", "yellow");
      } else {
        console.log("I'm confused.");
      }
    } else {
      console.log("Ummm");
    }
  };

  // const checkArrayOfNum = () => {
  //
  // }

  // **************************************************************************
  // * Game Play
  // **************************************************************************

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
    setTimeout($closePopper, 1000);
    generateRollNumber();
    movePiece(event);
  };

  const $closePopper = () => {
    $("#popper-modal").css("display", "none");
  };



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
