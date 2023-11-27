function addIssue() {
    // Get form values
    let title = document.getElementById("issueTitle").value;
    let description = document.getElementById("issueDescription").value;

    // Create a new row in the table
    let table = document.getElementById("issueList");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // Populate the new row with issue details
    cell1.innerHTML = title;
    cell2.innerHTML = description;

    // Clear the form
    document.getElementById("issueForm").reset();
}
