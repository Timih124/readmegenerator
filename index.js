//referencing inquirer
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const axios = require("axios")

// array of questions for user to get asked to generate a radme
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install application?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the project used for?",
        name: "usage",
    },
    {
        type: "list",
        message: "Pick a license.",
        choices: ['MIT', 'GPL', 'AGPL'],
        name: "license",
    },
    // added badges for fun
    {
        type: "checkbox",
        message: "Pick a fun badge.",
        choices: ['commit', 'pull requests', 'npm', 'issues'],
        name: "badges",
    },
    {
        name:"input",
        message: "Who contributed to the project?",
        name: "contributing",
    },
    {
        name: "input",
        message: "How do you test your application?",
        name: "tests",
    },
    {
        name: "input",
        message: "what is Github Username?",
        name: "profile",
    },
    {
        name: "input",
        message: "what is your email?",
        name: "email",
    },

];

// function to write README file
function writeToFile(fileName, data) {

  axios.get("https://api.github.com/users/"+ data.profile).then(function(results){
   data.profile = results.data.html_url
    const content = generateMarkdown(data)
    fs.writeFile(fileName,content,function(error){
        if(error)throw error
        console.log("success")
    })
  })



}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data){
    writeToFile("./README.md",data)
})
}

// function call to initialize program
init();
