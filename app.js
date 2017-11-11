$(() => {
  // **************************************************************************
  // * Global Variables
  // **************************************************************************
  const $modal = $("#modal");
  const $closeButton = $("#close");
  const $popper = $(".player");

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
  const popPopper = (event) => {
    // console.log($(".player"));
    $(event.target).css("background", "white");
    // setTimeout(popPopper() {$(."player").css("display", "none")}, 4000);
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
  $(".player").on("click", popPopper);





}); // Closes window.onload
