var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var _journals = {}

function hasJournalEntries(user) {
    return (user in _journals) && _journals[user].length > 0;    
}

app.delete('/journals/:user', (req, res) => {
    let user = req.params.user;
    if (hasJournalEntries(user)) {
        _journals[user] = [];
    }
    res.status(200).end();
})

app.post('/journals/:user', (req, res) => {
    let user = req.params.user;
    let action = req.body.action;
    if (!hasJournalEntries(user)) {
        _journals[user] = [];
    }
    _journals[user].push(action);
    setTimeout(() => {
        res.status(201).send(`New action for ${user}: ${action}`);
    }, 1000);

})

app.get('/journals/:user', (req, res) => {
    let user = req.params.user;
    if (!hasJournalEntries(user)) {
        res.json({[user]: "did nothing today!"})
    } else {
        res.json(_journals[user]);
    }
    
})

app.get('/journals', (req, res) => {
    var journal = {};
    for(key in _journals) {
        journal[key] = hasJournalEntries(key) ? "Did nothing today!" : _journals[key];
    }
    res.json(journal);
})


app.listen(3000, () => console.log("Testing app for SPOT developer meeting listening on port 3000!"));
