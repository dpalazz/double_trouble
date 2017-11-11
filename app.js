$(() => {
  // **************************************************************************
  // * Global Variables
  // **************************************************************************
  const $modal = $("#modal");
  const $closeButton = $("#close");
  const $popper = $(".player");

  let generateRollNumber = () => {
    let $rollNumber = $("<h1>").text(parseInt(Math.floor(Math.random() * (9-1) + 1)))
    .appendTo($("#roll-number-textbox"));
    setTimeout( () => {
        $("#roll-number-modal").css("display", "block");
        setTimeout($closeRollNumberModal, 1000);
    }, 2000);
  };

  const $closeRollNumberModal = () => {
    $("#roll-number-modal").css("display", "none");
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
  // * For the Popper
  // *****************
  const startGame = () => {
    $(".col-1").children().css("background-color", "yellow");
    $(".col-6").children().css("background-color", "green");
  };

  // *****************
  // * For the Popper
  // *****************
  const $popPopper = () => {
    $("#popper-modal").css("display", "block");
    setTimeout($closePopper, 1000);
    generateRollNumber();
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
