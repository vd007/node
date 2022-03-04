const { json, urlencoded } = require('body-parser');
const express = require('express')
const fs = require("fs")
const bodyParser = require("body-parser");
const { Server } = require('http');
const { profile } = require('console');
const app = express()
const port = process.env.PORT || 8500;
require('./db/connection')
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


 

 app.post('/users',jsonParser,function(req,res){
                         
  users = [{
    "name":"Rahul",
    "email":"arvindchoupal1000@gmail.com",
    "last name":"sharma",
    "id":"555512131",
    "hobbies":["Painting","Cricket","Gardening","Theater","Fashion","Makeup"],
    "longitude":"85.9148","latitude":"26.191700",
   "profilePicture":"https://i.pinimg.com/236x/70/ae/fa/70aefa95a59e8e1db42c9badcb80bd4e--sexy-men-hot-men.jpg",
   "reviews":[{"name:":"arvind","review":"good person","pic":"https://cdnb.artstation.com/p/assets/images/images/023/806/749/large/kotori-natume-01-30.jpg?1580397256&dl=1"},{"name:":"deep","review":"bad person","pic":"https://media1.popsugar-assets.com/files/thumbor/5fvpmG5AeEtgueGHm4BXirq9rkU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/11/06/006/n/3019466/e7f759b66f97efe9_thumb_temp257110631353958535/i/Hot-Guys-Mustaches.jpg"}],
   "status":"active",
   "date": "2022228"
},
{
    "name":"kian",
    "email":"arvindchoupal1000@gmail.com",
    "last name":"sharma",
    "id":"5133335",
    "hobbies":["Painting","Cricket","Music","poetry","Yoga","Gym","Fashion"],
    "longitude":"23.22","latitude":"65.22",
   "profilePicture":"https://cdnb.artstation.com/p/assets/images/images/023/806/749/large/kotori-natume-01-30.jpg?1580397256&dl=1",
   "reviews":[{"arvind":"good man"}],
   "status":"background",
   "date": "2022226"
},
{
    "name":"deepak",
    "email":"arvindchoupal100@gmail.com",
    "id":"553353",
    "last name":"sharma",
    "hobbies":["Painting","Reading","Cricket"],
    "longitude":"87.0866176","latitude":"26.2352105",
    "profilePicture":"https://media1.popsugar-assets.com/files/thumbor/5fvpmG5AeEtgueGHm4BXirq9rkU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/11/06/006/n/3019466/e7f759b66f97efe9_thumb_temp257110631353958535/i/Hot-Guys-Mustaches.jpg",
    "reviews":[{"arvind":"good man"}],
    "status":"background",
    "date": "2022225"
}
,{
    "name":"Arvind Sharma",
    "email":"arvindchoupal1999@gmail.com",
    "id":"105589096226399471403",
    "last name":"sharma",
    "hobbies":["Painting","Reading","Cricket"],
    "longitude":"87.066176","latitude":"26.2352105",
    "profilePicture":"https://media1.popsugar-assets.com/files/thumbor/5fvpmG5AeEtgueGHm4BXirq9rkU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/11/06/006/n/3019466/e7f759b66f97efe9_thumb_temp257110631353958535/i/Hot-Guys-Mustaches.jpg",
    "reviews":[{"arvind":"god man"}],
    "status":"inactive",
    "date": "2022227"
}
,
{
  
  "name": 'Technicl Sharma',
  "email": 'buytcc.meesho@gmail.com',
  "photo": "null",
  "date": "2022230",
  "id": '111665561450424432552',
  "hobbies": [ 'Painting', 'Crafting', 'Gardening', 'Guitar', 'Cycling' ]
}



]
  res.send(users)                              
})


app.post('/newuser',jsonParser,function(req,res){
  console.log(req.body)                            
  
  res.send("user registerd")                               
})

app.post('/location',jsonParser,function(req,res){
  console.log(req.body)                             //recived longititude and lattitude 
  
  res.send("location updated")                                  
})

app.post('/newreview',jsonParser,function(req,res){
  console.log(req.body)                             //recived longititude and lattitude 
  
  res.send({"response":"your review is added"})                                  
})

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})