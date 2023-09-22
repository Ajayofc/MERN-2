// sample notes express server

// import express

const express = require('express');

const app = express();

NOTES = [
    {
        "id":1,
        "title":"First Note",
        "description":"This is the first note"
    },
    {
        "id":2,
        "title":"Second Note",
        "description":"This is the second note"
    },
    {
        "id":3,
        "title":"Third Note",
        "description":"This is the third note"
    }
]
app.get('/',firstRoute)

function firstRoute(req,res){
    res.send('Hello World');
}

app.get('/notes',(req,res)=>{
    res.send(NOTES);
})

app.get('/notes/:id',(req,res)=>{
    const id = req.params.id;
    for (var i=0;i<NOTES.length;i++){
        if (NOTES[i].id == id){
            res.send(NOTES[i]);
        }
    }
})

app.listen(3000,printMessage)

function printMessage(){
    console.log('Server is running on port 3000');
}