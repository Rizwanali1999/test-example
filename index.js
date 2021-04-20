const express = require('express')
const app = express()

var handlebars = require('express3-handlebars')
            .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/requ', (req, res) => {
    res.send("<h1>We are at /requ</h1>")
})

var fortunes = [
    "Conquer your fears or they will kill you", 
    "Rivers need springs",
    "Do not fear what you don't know",
];
app.get('/about', (req, res) => {
    // res.send("<h1>Welcome to mypage</h1>")
        var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
        res.render('about', { fortune: randomFortune });
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.use((req, res) => {
    res.status(400)
        // .send("This ia custom 404 page")
        .render('404')
})

app.listen(3200, () => {
    console.log("Server is running...")
})
