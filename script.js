// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', function (event) {
    console.log($(this).siblings("textarea")[0].value);
    localStorage.setItem(event.target.closest("div").id, $(this).siblings("textarea")[0].value);


  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var timeBlockEls = $('.time-block')
  var currentTime = dayjs().hour()
  console.log(currentTime)
  timeBlockEls.each(function () {
    console.log($(this))
    // localStorage.setItem(timeBlockEls, $(this).siblings("textarea")[0].value);
    // parse integer out of the string
    var timeBlockHour = parseInt($(this).attr("id").split('-')[1])

    // var textAreaEl = JSON.parse($(this).attr("id").split('-')[0])
    //localStorage.setItem(hourId, $(this).siblings("textarea")[0].value)
    var hourId = document.getElementsByClassName(".time-block")
    //localStorage.setItem(hourId, textAreaEl)
    localStorage.setItem(hourId, $(this).siblings("textarea")[0]);
    localStorage.getItem(hourId, $(this).siblings("textarea")[0]);

    if (timeBlockHour > currentTime) {
      console.log('future')
      $(this).addClass("future")
    } else if (timeBlockHour < currentTime) {
      $(this).addClass("past")
      console.log('past')
    } else {
      $(this).addClass("present")
      console.log('present')
    }
  })



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  function showCurrentDate() {
    var currentDate = (dayjs().format('dddd MMMM DD, YYYY'));
    var currentDay = $("#currentDay");
    currentDay.text(currentDate);
  }
  showCurrentDate();
});
