function getAverageAge(people){
    return Math.round(people.reduce((prev, people) => prev + people.age, 0) / people.length);

}

// do not modify code below this line

const examplePeopleArray = [
    {name: 'John', age: 10},
    {name: 'Jack', age: 20},
    {name: 'Jane', age: 25}

];

console.log(getAverageAge(examplePeopleArray));