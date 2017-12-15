const express=require('express');
const mongoose=require('mongoose');

const DB_URL="mongodb://127.0.0.1:27017/reactDemo";
mongoose.connect(DB_URL);

mongoose.connection.on('connected',function(){
	console.log('mongo connect success!')
});

let User=mongoose.model('User',new mongoose.Schema({
	name: {type: String,require: true},
	age: {type: Number,require: true}
}));

User.create({
	name: 'css',
	age: 16
},function(err,doc){
	if(err){
		console.log(err);
	}else{
		console.log(doc);
	}
})

User.find({user: 'css'},function(err,doc){
	console.log(doc)
});

User.update({user: 'css'},{'$set': {age: 60}},function(err,doc){
	console.log(doc)
});

const app=express();

app.get('/data',function(req,res){
	res.send('999')
});


app.listen('8080',function(){
	console.log('server is listen 8080!');
});