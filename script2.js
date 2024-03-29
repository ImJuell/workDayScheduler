// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?
   $('.saveBtn').on('click', function () {
       localStorage.setItem($(this).parent().attr('id'), $(this).siblings(".description").val())
   })


   // TODO: Add code to apply the past, present, or future class to each time
   // block by comparing the id to the current hour. HINTS: How can the id
   // attribute of each time-block be used to conditionally add or remove the
   // past, present, and future classes? How can Day.js be used to get the
   // current hour in 24-hour time?
   currentTime = dayjs().format("H")
  

   console.log(currentTime)

   hours= ["#hour-9","#hour-10","#hour-11","#hour-12","#hour-1","#hour-2","#hour-3","#hour-4","#hour-5"]

   for (let i=0;i<hours.length;i++ ){
       time = parseInt($(hours[i]).attr("id").substring(5))
       if (time == currentTime){
          $(hours[i]).addClass("present");
      } else if (time < currentTime){
          $(hours[i]).addClass("past");
      } else if (time > currentTime){
          $(hours[i]).addClass("future");
      }
   }


   // TODO: Add code to get any user input that was saved in localStorage and set
   // the values of the corresponding textarea elements. HINT: How can the id
   // attribute of each time-block be used to do this?
   
   $("#hour-9 textarea").text(localStorage.getItem("hour-9"));
   $("#hour-10 textarea").text(localStorage.getItem("hour-10"));
   $("#hour-11 textarea").text(localStorage.getItem("hour-11"));
   $("#hour-12 textarea").text(localStorage.getItem("hour-12"));
   $("#hour-1 textarea").text(localStorage.getItem("hour-1"));
   $("#hour-2 textarea").text(localStorage.getItem("hour-2"));
   $("#hour-3 textarea").text(localStorage.getItem("hour-3"));
   $("#hour-4 textarea").text(localStorage.getItem("hour-4"));
   $("#hour-5 textarea").text(localStorage.getItem("hour-5"));

   // TODO: Add code to display the current date in the header of the page.
   $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
