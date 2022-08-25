//  Functions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: "How do you make a log to the console?", 
        answers: [
            { text: "console('log')", correct: false },
            { text: "console.log()" , correct: true },
            { text: "log('console')", correct: false },
            { text: "alert('Console Log')", correct: false }
        ]
    },
    { 
        question: "Which of the following function of Array object calls a function for each element in the array?", 
        answers: [
            { text: "concat()", correct: false },
            { text: "filter()", correct: false },
            { text: "forEach()", correct: true },
            { text: "split()", correct: false }
        ]
    },
    { 
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 9?", 
        answers: [
            { text: "if (i != 9)", correct: true },
            { text: "if i =! 9", correct: false },
            { text: "if (i <> 9)", correct: false },
            { text: "if (i !=== 9)", correct: false }
        ]
    },
    { 
        question: "What is the correct way to write a JavaScript array?", 
        answers: [
            { text: "var vegetable = (0:'kale', 1:'lettuce', 2:'spinach')", correct: false },
            { text: "var vegetable = ['kale', 'lettuce', 'spinach']", correct: true },
            { text: "var vegetable = (kale, lettuce, spinach)", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "How do you round the number 102.456, to the nearest integer?",
        answers: [
            { text: "Math.random(102.456)", correct: false },
            { text: "Math.rnd(102.456)", correct: false },
            { text: "round(102.456)", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
]