var unorderedList = document.getElementById('numberplates');

function display() {
    'use strict';
    var plate = document.getElementById("numberplate").value;
    if (plate.length > 0 && plate !== null) {
        var li = document.createElement('li');
        li.textContent = plate;
        unorderedList.appendChild(li);
    }
    document.getElementById('numberplate').value = "";
}

function filter() {
    'use strict';

    var option = document.getElementById("whichTown").value;
    var allTowns = document.getElementById("all").innerHTML;
    var capetown = document.getElementById("capetown").innerHTML;
    var bellville = document.getElementById("bellville").innerHTML;
    var paarl = document.getElementById("paarl").innerHTML;

    var list = document.getElementsByTagName("li");

    for (var i =0; i<list.length; i++){

  var currentPlate = list[i];
  var plate = list[i].textContent.toUpperCase();

  if(option === allTowns){

    currentPlate.style.display = "inline-block"
  } else if(option === capetown && plate.startsWith("CA")){
    currentPlate.style.display = "inline-block";
  }else if(option === bellville && plate.startsWith("CY")){
    currentPlate.style.display = "inline-block";
  } else if(option === paarl && plate.startsWith("CJ")){
    currentPlate.style.display = "inline-block";
  } else {
    currentPlate.style.display = "none";
  }
}
  document.getElementById('whichTown').value = "";
}
