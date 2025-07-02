const express = require('express')

const app = express();

const middileware=((req,res,next)=>{
    console.log(req.originalUrl);
    console.log(req.method);
    next()
    
})

const blockGetMethod = (req, res, next) => {
    if (req.method === 'GET') {
        return res.status(403).send("GET Requests Are Blocked");
    }
    next();
};

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(401).json({ message: "Missing credentials" });
    } else {
        res.status(201).json({ message: "Login successful" });
    }
});

app.put('/user/:id', (req, res) => {
    const { name } = req.body;
    res.send(`User with ID ${req.params.id} updated to ${name}`);
});

app.get('/',blockGetMethod,(req,res)=>{
    res.send("Hello Wolrd")
})


app.listen(3000,()=>{
console.log("Server is Runing");
})

