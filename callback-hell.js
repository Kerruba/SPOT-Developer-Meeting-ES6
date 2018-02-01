var request = require('request');
// var fetch = require('node-fetch');

request.delete('http://localhost:3000/journals/Luca', (err, response, body) => {
    console.log('Reset all the content');
    if (err) {
        return console.error('An error occurred:', err);
    }

    request.get('http://localhost:3000/journals/Luca', (err, response, body) => {
        if (err) {
            return console.error('An error occurred:', err);
        }
        console.log('Journal entries for Luca', body);
            // Start to create some task for Luca
            request.post('http://localhost:3000/journals/Luca', {form:{action:'Prepare some slides'}}, (err, httpResponse, body) => {
                if (err) {
                    return console.error('An error occurred:', err);
                }
                console.log('Added a new task');
                // Add a new task
                request.post('http://localhost:3000/journals/Luca', {form:{action: 'Repeat the slides'}}, (err, httpResponse, body) => {
                    if (err) {
                        return console.error('An error occurred:', err);
                    }
                    console.log('Added a new task');
                    request.get('http://localhost:3000/journals/Luca', (err, response, body) => {
                        if (err) {
                            return console.error('An error occurred:', err);
                        }
                        console.log('Got all tasks for Luca')
                        console.log(body);
                    });
                });
            });
        });
    });
