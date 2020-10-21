"use strict";
console.log("Number 1")
// 1. Declare a variable named submissions that is initialized to an array with the following
// objects:


let submissions = [
    {
        name:"Jane",
        score:95,
        date: "2020-01-24",
        passed:true,
    },
    {
        name:"Joe",
        score:77,
        date: "2018-05-14",
        passed:true,
    },
    {
        name:"Jack",
        score:59,
        date: "2019-07-05",
        passed:false,
    },
    {
        name:"Jill",
        score:88,
        date: "2020-04-22",
        passed:true,
    },
];

console.log("Number 2")
// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.


const addSubmission = (array,newName,newScore,newDate)=>{
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60, 
    };
    array.push(newSubmission);
};

addSubmission(submissions,"Kris",99,"2020-10-21");
console.log(submissions);


// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.


const deleteSubmissionByIndex = (array,index)=>{
    return array.splice(index,1);
};
deleteSubmissionByIndex(submissions,4);
console.log(submissions);


// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.


const deleteSubmissionByName = (array,name) =>{
    let index = array.findIndex((item)=>{
        return item.name === name;
    });
    array.splice(index,1);
};
deleteSubmissionByName(submissions,"Joe")
console.log(submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission =(array,index,score)=>{
    array[index].score = score;
    array[index].passed = score >= 60;
};
editSubmission(submissions,0,59);
console.log(submissions);    
    
    
    // let updateScore = submissions.find(())


console.log("Number 6")
// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

const findSubmissionByName = (array,name)=>{
    return array.find((item) =>{
        return item.name === name;
    });
};
console.log(findSubmissionByName(submissions,"Jill"));


console.log("Number 7")
// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

const findLowestScore = (array)=>{
    let currentLowestObject =array[0];
    array.forEach((item)=>{
        if(item.score < currentLowestObject.score){
            currrentLowestObject = item;
        };
    });
    return currentLowestObject;
};
console.log(findLowestScore(submissions));


console.log("Number 8")
// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAverageScore = (array)=>{
    let total = 0;
    for(let sub of array){
        total += sub.score;
    };
    return total / array.length;
};
console.log(findAverageScore(submissions));

console.log("Number 9")
// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array)=>{
    return array.filter((test)=>{
        return test.passed === true;
    });
};
console.log(filterPassing(submissions));


console.log("Number 10")
// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array)=>{
    return array.filter((passed)=>{
        return passed.score >=90;
    });
};
filter90AndAbove(submissions);
console.log(filter90AndAbove(submissions));
