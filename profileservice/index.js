const express = require('express')
const app = express();
const port = 3000

module.exports = app

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory')

db.serialize(() => {
    db.run('CREATE TABLE profile (info TEXT)')
    const statement = db.prepare('INSERT INTO profile VALUES (?)')
    for (let i = 0; i < 10; i++) {
        statement.run(`Ipsum ${i}`)
    }

    statement.finalize()

    db.each('SELECT rowid AS id, info FROM profile', (err, row) => {
        console.log(`${row.id}: ${row.info}`)
    })
})

const state = function(req, res, next) {
    console.log('State page accessed')
    res.send('Profile service online!')
}


app.get('/state', state)

app.use(express.static('public'))
app.listen(port, () => {
    console.log(`Profile service running on port ${port}`)
})

process.on('exit', function() {
    db.close()
    console.log('DB connection closed')
    console.log('Exiting profile service')
})
