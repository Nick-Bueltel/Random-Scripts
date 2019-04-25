//4.24.19 
// arrays stuff 

var classMates = ['Gideon','Jeremy', 'Omar', 'Codee', 'Nick', 'Rain', 'BUT Sam is fine','Ricardo', 'Crysta', 'Brandon', 'Jenny', 'Joseph', 'Hayden', 'Aaron', 'Dana', 'Chris', 'Andrew' ];
function upperCaseArray(array){
var caseClass = [];
for(let i = 0; i < classMates.length; i++){
    caseClass = array[i].toUpperCase();
    console.log(caseClass);
    
    }    
}

upperCaseArray(classMates);


