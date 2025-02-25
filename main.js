/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Kyrian Ogbudimkpa.
*/


function convertMarksToGrade(){
    const mark = document.getElementById("marks").value;
let grade;

if(mark > 90 && mark <= 100) {
    grade = 'A';
} else if(mark > 80 && mark <= 90){
    grade = 'B';
} else if (mark > 70 && mark <= 80) {
    grade = 'C';
} else if (mark > 50 && mark <= 70) {
    grade = 'D'
} else if (mark <= 50){
    grade = 'F';
} else {
    grade = 'Invalid mark';
}

document.getElementById("result").innertext = `Grade: ${grade}`;
}




// javascript for the staff list page
var dataSet = [   
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
    ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
    ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];

function displayStaffList(staff) {
    const staffListElement = document.getElementById("staff-list");
    staffListElement.innerHTML = '';

    // Create table element
    const table = document.createElement("table");

    // Create table header
    const headers = ["Name", "Position", "Office", "Extension", "Start Date", "Salary"];
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows
    staff.forEach(staffMember => {
        const row = document.createElement("tr");
        staffMember.forEach(detail => {
            const cell = document.createElement("td");
            cell.textContent = detail;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    staffListElement.appendChild(table);
}

function sortByName() {
    const sortedStaff = [...dataSet].sort((a, b) => a[0].localeCompare(b[0]));
    displayStaffList(sortedStaff);
}

function sortBySalary() {
    const sortedStaff = [...dataSet].sort((a, b) => {
        const salaryA = parseInt(a[5].replace(/[$,]/g, ''));
        const salaryB = parseInt(b[5].replace(/[$,]/g, ''));
        return salaryA - salaryB;
    });
    displayStaffList(sortedStaff);
}

displayStaffList(dataSet);


$(document).ready(function() {
    // Named function for converting Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Named function for converting Celsius to Kelvin
    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    // function for converting Fahrenheit to Celsius and displaying the result
    $('#convertToCelsius').click(function() {
        const fahrenheit = parseFloat($('#temperature').val());
        if (isNaN(fahrenheit)) {
            $('#conversion-result').text('Please enter a valid number for temperature.');
            return;
        }

        const celsius = fahrenheitToCelsius(fahrenheit);
        $('#conversion-result').text(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`);
    });

    // function for converting Fahrenheit to Kelvin and displaying the result
    $('#convertToKelvin').click(function() {
        const fahrenheit = parseFloat($('#temperature').val());
        if (isNaN(fahrenheit)) {
            $('#conversion-result').text('Please enter a valid number for temperature.');
            return;
        }

        const celsius = fahrenheitToCelsius(fahrenheit);
        const kelvin = celsiusToKelvin(celsius);
        $('#conversion-result').text(`${fahrenheit}°F is equal to ${kelvin.toFixed(2)} K.`);
    });
});


 
//function for the markToGrade Page
function convertMarksToGrade() {
    const markInput = document.getElementById("marks").value;
    const validationMessage = document.getElementById("validation-message");
    const result = document.getElementById("result");

    validationMessage.innerText = "";
    result.innerText = "";

    let marks;
    try {
        marks = parseInt(markInput);
        if (isNaN(marks)) {
            throw new Error("Marks must be a number.");
        }
        if (marks < 0) {
            throw new Error("Marks must be a nonnegative number.");
        }
        if (marks > 100) {
            throw new Error("Marks must be less than or equal to 100.");
        }
    } catch (error) {
        validationMessage.innerText = error.message;
        return;
    }

    let grade;
    if (marks > 90) {
        grade = 'A';
    } else if (marks > 80) {
        grade = 'B';
    } else if (marks > 70) {
        grade = 'C';
    } else if (marks > 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    result.innerText = `Grade: ${grade}`;
}
