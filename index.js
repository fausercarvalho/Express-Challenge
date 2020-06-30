const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

const PORT = 8080

app.get('/students', (req, res) => {
    let search = req.query.search
    if (search != undefined) {
        res.send(student.find(element => element.name===search))
    } else {
        res.send(students)
    }
})

app.get('/students/:studentId', (req, res) => {
    res.send(students.find(element => element.id==req.params.studentId));
})

app.get('/grades/:studentId', (req, res) => {
    res.send(grades.filter(element => element.studentId==req.params.studentId));
})

app.post('/grades', (req, res) => {
    if (req.body.studentId != undefined && req.body.class != undefined) {
        grades.push(req.body);
        res.send({
            'Status': 'Success',
        });
    }
})

app.post('/register', (req, res) => {
    if (req.body.username != undefined && req.body.email != undefined) {
        newStudent = req.body
        newStudent.id =nextId
        nextId = nextId + 1
        students.push(newStudent)
        res.send({
            'Status': 'Success',
        })
    }
})

let students = []
let grades = []
let nextId = 1

app.listen(PORT)
