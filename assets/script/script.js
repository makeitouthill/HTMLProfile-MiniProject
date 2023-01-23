const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'city',
    },
    {
      type: 'input',
      message: 'What is your Github user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Tell us something about yourself?',
        name: 'username',
      },
  ])
  .then((response) => {
    console.log(response)
    const filename = `${data.name.toLowerCase().split('').join()}.json`;

    fs.writeFile(filename, JSON.stringify(response, null, '/t'), (err) =>
    err ? console.log(err) : console.log("Success")
    );

    
  });