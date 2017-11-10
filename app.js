$(() => {
  // **************************************************************************
  // * Global Variables
  // **************************************************************************

  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // **************************************************************************
  // * Event Handlers
  // **************************************************************************

  // *************************
  // * For Instruction Modal
  // *************************
  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
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
  const popPopper = () => {
    $(".popper").css("background-color", "black");
  };

  // **************************************************************************
  // * Event Listeners
  // **************************************************************************

  // ************************
  // * For Instruction Modal
  // ************************
  $("#openModal").on("click", openModal);
  $closeBtn.on('click', closeModal);

  // ********
  // * Start
  // ********
  $("#start").on("click", startGame);

  // *****************
  // * For the Popper
  // *****************
  $(".popper").on("click", popPopper);





}); // Closes window.onload
