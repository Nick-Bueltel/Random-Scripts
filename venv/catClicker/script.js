var elem = document.getElementById('my-elem');
var countingCats = 0; 
elem.addEventListener('click', function(){
countingCats = countingCats + 1;
    window.alert(countingCats);
  if(countingCats === 10){
    window.alert("why are we still here?");
  } else if(countingCats === 15){
    window.alert("just to suffer?");
  }
}, false);

var counter = countingCats; 