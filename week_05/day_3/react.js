function generateCalendar() {
    // Get the reference to the calendar container
    var calendarContainer = document.getElementById("calendar");
  
    // Create a new date object
    var date = new Date();
  
    // Get the current month and year
    var month = date.getMonth();
    var year = date.getFullYear();
  
    // Get the number of days in the current month
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Create the calendar grid
    var calendarGrid = document.createElement("table");
    var calendarBody = document.createElement("tbody");
  
    // Create a row for the days of the week
    var daysOfWeekRow = document.createElement("tr");
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var i = 0; i < daysOfWeek.length; i++) {
      var dayOfWeekCell = document.createElement("th");
      dayOfWeekCell.textContent = daysOfWeek[i];
      daysOfWeekRow.appendChild(dayOfWeekCell);
    }
    calendarBody.appendChild(daysOfWeekRow);
  
    // Create rows for each day of the month
    var currentDate = 1;
    while (currentDate <= daysInMonth) {
      var weekRow = document.createElement("tr");
  
      for (var i = 0; i < 7; i++) {
        var dayCell = document.createElement("td");
        if (currentDate <= daysInMonth) {
          dayCell.textContent = currentDate;
          currentDate++;
        }
        weekRow.appendChild(dayCell);
      }
  
      calendarBody.appendChild(weekRow);
    }
  
    // Append the calendar body to the grid and the grid to the container
    calendarGrid.appendChild(calendarBody);
    calendarContainer.appendChild(calendarGrid);
  }
  
  // Call the generateCalendar function to generate the calendar
  generateCalendar();
  