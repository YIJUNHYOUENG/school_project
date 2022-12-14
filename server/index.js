const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const { User } = require('./models/User');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key'); 
const { auth } = require('./middleware/auth');

// application/x-www-form-urlencoded 분석 및 가져오기
app.use(bodyParser.urlencoded({extended: true}));

// application/json 분석 및 가져오기
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
    
app.get('/', (req, res) => {
    const user = new User(req.body)
    res.status(200).json({ loginTrue: true })
})

app.post('/register', (req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들은 db에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false , err})
        res.status(200).json({ success: true })
    })

})

app.post('/login', (req, res) => {

    // 요청된 이메일을 db에 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당되는 유저가 없습니다."
            })
        }
    
        // 요청된 이메일이 db에 있다면 비번이 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다!" })

            // 비번까지 맞다면 토큰을 생성하기
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다.
                res.cookie('x_auth', user.token)    
                .status(200)
                .json({ loginSuccess: true, userId: user._id })
            })
        })
    })
})

app.get('/auth', auth, (req, res) => {
    
    // 여기까지 미들웨어를 통과했다는 얘기는 authentication 이 True 라는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin: res.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/logout', auth, (req, res) => {

    User.findOneAndUpdate({ _id: req.user._id }, 
    { token: "" }
    , (err, user) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).send({ success: true })
    }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))