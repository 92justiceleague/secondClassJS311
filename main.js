let express = require('express')

let app = express ()

let PORT = 8000;

app.get("/hello" , function (req, res){
    res.send("hello") //send back hello string
})


app.post("/bye", function(){
    res.send ("later gator");
})

app.listen(PORT, function(){}{
    console.log("application start on port", PORT);
})


//res.send()
//res.json()
//res.sendStatus()
//res.status()