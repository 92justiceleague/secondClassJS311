let express = require('express')

let app = express ()

let PORT = 8001;

app.get("/hello" , function (req, res){
    res.send("hello") //send back hello string
})


app.post("/bye", function(){
    res.send ("later gator");
})

app.get("/bye", function(){
    res.send("afterwhile crocodile!");
})

app.listen(PORT, function(){
    console.log("application start on port", PORT);
})


//res.send()
//res.json()
//res.sendStatus()
//res.status()