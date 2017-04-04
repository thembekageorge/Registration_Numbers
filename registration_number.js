
document.getElementById("addButton").addEventListener("click", regNum);
function regNum() {
 var registrationNumber = document.getElementById('numberplate').value;
 document.getElementById('display').innerHTML = registrationNumber;
}
