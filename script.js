
    //Write your code here
function insert_Row() {
const table = document.getElementById("sampleTable");
const newRow = table.insertRow(0);

newRow.insertCell(0).textContent = "New Cell1";
newRow.insertCell(1).textContent = "New Cell2";
}



