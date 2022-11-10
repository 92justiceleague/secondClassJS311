let express = require('express')

let app = express ()

app.use(express.json())

let PORT = 7000;

app.get("/hello" , function (req, res){

    let query = req.query;
    let greeting = "hello";
    if(query.name){
        greeting = "hello there " +query.name;
    }
    console.log("Query: ", query);
        res.send(greeting) //sends back string
})


app.post("/bye", function(){
    let payload = req.body;
    console.log("Request body =", payload);
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