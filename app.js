//imports
const express = require('express') 
const app = express()
const port = 3000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})

app.get('/resume', (req, res) => {
    res.render('resume')
})

app.get('/Facts', (req, res) => {
    res.render('Facts')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/game', (req, res) => {
    res.render('game')
})





//listen on port 3000
app.listen(port, () => console.info(' listening on port ${port}'))