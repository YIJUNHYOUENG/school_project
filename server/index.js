const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const config = require('./config/key'); 
// application/x-www-form-urlencoded 분석 및 가져오기
app.use(bodyParser.urlencoded({extended: true}));

// application/json 분석 및 가져오기
app.use(bodyParser.json());

mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
    
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들은 db에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false , err})
        res.status(200).json({ success: true })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))