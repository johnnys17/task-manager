// Task Priority Manager - practicing javascript variables, conditionals, and functions

/* This program manages a task by storing its name and time, assigning priority with functions and conditionals
and displaying
a plan */

const task = {
    name: 'Write Blog Post',
    time: 3.5
};

const missingTask = undefined;


// function to assign task priority on time
function getPriority(hours){
    if (hours <= 2){
        return "Low";
    }   else if (hours <= 4) {
        return "Medium";
    }   else {
        return "High";
    }
}


// Validate task time with a function expression
const isValidTime = function(value) {
    return typeof value === "number" && value > 0 ? true : false;
};


// calculate task time facts with an arrow function
const calculateTimeFacts = (hours, multiplier = 2) => {
    let totalTime = hours * multiplier;
    totalTime += 1;
    return totalTime;
};


// round total time fro display
const roundedTime = Math.ceil(calculateTimeFacts(task.time));


/* display the task plan
with formatted output
using a function */
const displayPlan = () => {
    console.log(`Task: ${task.name.toUpperCase()}`);
    console.log(`Estimated time: ${task.time} hours`);
    switch (getPriority(task.time)) {
        case "Low":
            console.log("Priority Low - take it easy!");
            break;
        case "Medium":
            console.log("Priority: Medium - plan accordingly!");
            break;
        case "High":
            console.log("Priority: High - get it done!");
            break;
    }
    console.log("Valid time: " + isValidTime(task.time));
    console.log(`Total Time(Hours) ${roundedTime}`);
};


displayPlan();

// Check for missing data
console.log("Missing task: " + missingTask);

