const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Name of your Project Title:'
      },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter steps required to install: ',
      default: 'npm install'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions for usage:' ,
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter credits:',
      },
      {
        type: 'list',
        choices: ['mit', 'apache', 'apple'],
        name: 'license',
        message: 'Enter License:',
      },

  ])
  .then((data) => {

    console.log(data);
    console.log(generateMD(data));
   

    fs.writeFile("README.md", generateMD(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  promptUser();

const generateMD = (answers) =>
`# ${answers.title}

![WeatherDash](https://img.shields.io/github/languages/top/archanagottipaty/WeatherDash)

## **Table of contents**

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licences Used](#licences-used)


## Description

${answers.description}

## Installation

\`\`\`
${answers.installation}
\`\`\`

## Usage

${answers.usage}

## Credits

${answers.credits}

## Licences-used

${answers.licence}





`
