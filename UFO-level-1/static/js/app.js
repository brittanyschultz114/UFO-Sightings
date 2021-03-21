// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)


// Select the button
var button = d3.select("#filter-btn")

// Select the form
var form = d3.select("form")

// Create event handlers 
button.on("click", runEnter)
form.on("submit",runEnter)

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
    d3.event.preventDefault()

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime")

  // Get the value property of the input element
    var inputValue = inputElement.property("value")

    // console.log(inputValue)
    // console.log(tableData)

    // Filter data based on datetime
    var filteredData = tableData.filter(date => date.datetime === inputValue)

    // console.log(filteredData)

    // Getting the body tag for the table
    var tableBody = d3.select("tbody")

    // Build the table in the html
    tableBody.html("")

    // Show filter data table
    filteredData.forEach(function(sighting) {
        var row = tableBody.append("tr")
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td")
            cell.text(value)
        })
    })

}