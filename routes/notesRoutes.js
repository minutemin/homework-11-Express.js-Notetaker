// require router with express.Router
const router = require('express').Router();
// require path
const path = require('path');
// require fs
const fs = require('fs');
// require with db varible the database db.json
const db = require('../db/db.json');
//require uuid 
const { v4: uuidv4 } = require('uuid');


// write GET code from db to user
router.get('/api/notes', (req, res) => {
    res.json(db);
});
// router.get('/', (req, res) => {
//     readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
// });


// write POST code from user to db
router.post('/api/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    db.push(note);
    console.log(db);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
})


// write DELETE code to delete note from db

//export router module
module.exports = router;