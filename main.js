document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById("image-name").classList.remove("hidden");
    }, 10000);
});




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
const staffList = [
    { name: 'John Doe', salary: 50000 },
    { name: 'Jane Smith', salary: 60000 },
    { name: 'David Johnson', salary: 55000 },
    { name: 'Emily Davis', salary: 70000 }
];

function displayStaffList(staff) {
    const staffListElement = document.getElementById("staff-list");
    staffListElement.innerHTML = '';
    staff.forEach(staffMember => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${staffMember.name}, Salary: ${staffMember.salary}`;
        staffListElement.appendChild(listItem);
    });
}

function sortByName() {
    const sortedStaff = [...staffList].sort((a, b) => a.name.localeCompare(b.name));
    displayStaffList(sortedStaff);
}

function sortBySalary() {
    const sortedStaff = [...staffList].sort((a, b) => a.salary - b.salary);
    displayStaffList(sortedStaff);
}

displayStaffList(staffList);
