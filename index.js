const express = require('express')
const Joi = require('joi')

const app = express()

app.use(express.json())

const courses = [
    {
        id: 1,
        name : "Networks"
    },
    {
        id: 2,
        name : "OS"
    },
    {
        id: 3,
        name : "DSA"
    }
]


app.get('/', (req, res)=> {
    res.send("Hello there")
})

app.get('/api/courses', (req, res)=> {
    res.send(courses)
})

app.post('/api/courses', (req, res)=> {

    const {error} = validateCourse(course)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    
    const course = {
        id : courses.length+1,
        name: req.body.name
    }

    courses.push(course)
    res.send(course)
})

app.get('/api/courses/:id', (req, res)=> {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send("The course with the given ID was not found!")
    res.send(course)
})

app.patch('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if(!course) res.status(404).send("The course with the given id was not found!")
    
       const {error} = validateCourse(course)
        if (error) {
            res.status(400).send(error.details[0].message)
            return;
        }

        course.name = req.body.name
        res.send(course)
    
})


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}`))

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema)
}