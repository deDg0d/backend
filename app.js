const express = require('express')
var bodyParser = require('body-parser')
const app = express()


const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('veiw engine' , 'ejs');
app.use('/assets', express.static('assets'))


app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact',function(req,res){


    res.render( 'contact.ejs',{qs :req.query})
})
app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body)

    res.render( 'contact-succes.ejs',{data :req.body})
})

app.get('/profile/:name',function(req,res){
    const data = {age:29 , job : 'ninja',
    hobbies : ['eating','fighting','fishing']} 
 res.render('profile.ejs' , {person : req.params.name,
 data:data
});

})


app.listen(8000)
console.log('server running')



  
    

    // const myReadStream = fs.createReadStream(__dirname +'/index.html','utf8');
    
    // myReadStream.pipe(res);
