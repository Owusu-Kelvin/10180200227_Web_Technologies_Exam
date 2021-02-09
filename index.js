const express = require('express');
const collectionComplaint = require('./models/collectionComplaint');
var mongoose= require('mongoose');

const app= express();

app.use(express.static(__dirname+ '/views'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/home', (req, res)=>{
    res.render('home.ejs', {});
});

app.get('/', (req, res)=>{
    res.render('home.ejs', {});
});

app.get('/complaint', (req, res)=>{

    res.render('complaint.ejs', {});
});

app.get('/display', (req, res)=>{
    //res.render('display.ejs', {});

    collectionComplaint.find({}, function(err, Complaints){
    res.render('display.ejs', {
        collectionComplaint: Complaints
    }) 
    })
});


app.post('/complaint', (req, res)=>{
    const complaints = collectionComplaint({
    fname : req.body.fname,
    lname : req.body.lname,
    email : req.body.email,
    complaint : req.body.complaintMessage
    })

complaints.save().then((document) => {
 console.log(document);
});

    res.render('complaint.ejs', {});
});



mongoose.connect('mongodb+srv://acity:webtech@exams.xrbci.mongodb.net/kelvin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
        console.log('server started');
    }).catch(() => {
        console.log('error');
})


app.listen(7000)