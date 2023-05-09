export default function (plop) {
    const namePrompt = {
        type: 'input',
        name: 'name',
        message: 'Function name',
        // add validate method to check if directory exists
    };
    plop.setWelcomeMessage(`Select which provider Dispatchly should generate a function for`)
    plop.setGenerator('gcp', {
        description: 'Generates a GCP Cloud Function to trigger Github Action Workflows',
        prompts: [namePrompt], // array of inquirer prompts
        actions: [{
            type: 'add',
            path: '{{name}}/index.js',
            templateFile: 'src/gcp/index.js'
        },{
            type: 'add',
            path: '{{name}}/package.json',
            templateFile: 'src/gcp/index.js'
        },{
            type: 'add',
            path: '{{name}}/README.md',
            templateFile: 'src/README.md'
        }]
    });
    plop.setGenerator('digital-ocean', {
        description: 'Generates a Digital Ocean Function to trigger Github Action Workflows',
        prompts: [namePrompt], // array of inquirer prompts
        actions: [{
            type: 'add',
            path: '{{name}}/index.js',
            templateFile: 'src/digital-ocean/index.js'
        },{
            type: 'add',
            path: '{{name}}/tests/function.js',
            templateFile: 'src/digital-ocean/tests/function.js'
        },{
            type: 'add',
            path: '{{name}}/package.json',
            templateFile: 'src/digital-ocean/index.js'
        },{
            type: 'add',
            path: '{{name}}/README.md',
            templateFile: 'src/README.md'
        }]
    });
};


