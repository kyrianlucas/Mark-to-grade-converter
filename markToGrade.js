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
