var express       = require("express"),
bodyParser     = require("body-parser"),
methodOverride = require("method-override"),
mongoose       = require("mongoose"),
request        = require('request')

const { response } = require("express");
var app = express();

var server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb+srv://audumber:Ramdas3000@cluster0-bj3vd.mongodb.net/test?retryWrites=true&w=majority");
// mongoose.connect("mongodb://127.0.0.1:27017/yoso")
app.use(methodOverride("_method"));//using method-override + what to look for in url *the parentheses as above*



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true})); //required for forms that post data via request
app.use(require("express-session")({ //require inline exp session
secret: "be rich forever", //used to encode and decode data during session (it's encrypted)
resave: false,          // required
saveUninitialized: false   //required
}));



// const {MongoClient} = require('mongodb');
var MongoClient = require('mongodb').MongoClient; 
const url = "mongodb+srv://audumber:Ramdas3000@cluster0-bj3vd.mongodb.net/qclick?retryWrites=true&w=majority";
const client = new MongoClient(url);

//-------------------------------------------------------------------------------------------------------------------------

var LAT = [];
var LON = [];
var NAME =[]


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbase = db.db("qclick");
  dbase.collection("tollplaza").find({}, { projection: { _id: 0, name : 1, lat:1 , lon : 1} }).toArray(function(err, result) {
    if (err) throw err;
    
    console.log(result);
    db.close();

	for(var j = 0 ; j<result.length ; j++){
      LAT.push(parseFloat(result[j].lat));
	  LON.push(parseFloat(result[j].lon));
	  NAME.push(result[j].name);
	}


  });
});




app.get("/maps" , function(request,response) {

response.render("map" , {LAT:LAT , LON:LON , NAME:NAME});
});

app.get("/cal" , function(request,response) {

	response.render("cal" , {LAT:LAT , LON:LON , NAME:NAME});
	});

app.get("/search" , function(request,response) {
    var srch = "";
	response.render("search" , {LAT:LAT , LON:LON , NAME:NAME , srch:srch});
});

app.post("/gettoll" , function(request,response){
    var srch = request.body;
	console.log(srch);
	response.render("search" , {LAT:LAT , LON:LON , NAME:NAME , srch:srch});

})

//------------------------------------------------------trial
// app.get("/audu" , function(request,response) {

// 	response.render("audu");
// 	});

// 	var visitors = {};
// 	io.on('connection', function(socket){
// 		socket.on('new_user', function(data){
// 			if(parseInt(Object.keys(visitors).length) > 0)
// 				socket.emit('already', {visitors: visitors});
// 			visitors[socket.id] = data.pos;
// 			io.emit('connected', { pos: data.pos, users_count: Object.keys(visitors).length });
// 			console.log('someone CONNECTED:');
// 			console.log(visitors);
// 		});
// 		socket.on('disconnect', function(){
// 			if(visitors[socket.id]){
// 				var todel = visitors[socket.id];
// 				delete visitors[socket.id];
// 				io.emit('disconnected', { del: todel, users_count: Object.keys(visitors).length }); 	
// 			}
// 			console.log('someone DISCONNECTED:');
// 			console.log(visitors);
// 		});
// 	}); 


// 	var socket = io();
// 	socket.emit('new_user', {pos: pos});
// 	$(document).ready(function(){
// 		check_pos = setInterval(function(){ //create a loop and wait for the response
// 			if(typeof pos != 'undefined'){ //while the position is not defined the loop is checking every half seconds
// 				socket.emit('new_user', {pos: pos});
// 				clearInterval(check_pos);
// 			}
// 		}, 500);
// 		socket.on('already', function(data){
// 			$.each( data.visitors, function( key, pos ) {
// 				addMarker(pos);
// 			});
// 		});
// 		socket.on('connected', function(data){
// 			$("#users_count").html("<strong>" + data.users_count +"</strong>" + " connected users");
// 			$("#users_count").css({'visibility': 'visible'});
// 			addMarker(data.pos);
// 		});
// 		socket.on('disconnected', function(data){
// 			//we can now delete this position:
// 			var markerId = getMarkerUniqueId(data.del.lat, data.del.lng); // get marker id by using clicked point's coordinate
// 			var marker = markers[markerId]; // find marker
// 			removeMarker(marker, markerId); // remove it
// 			$("#users_count").html("<strong>" + data.users_count +"</strong>" + " connected users");
// 		});
// 	});








// --------------------------------------------------------------------CONNECTION
server.listen(3001,function(err){
	if(err){
		console.log("server connection error!!")
		console.log("Reconnecting . . . ")
	}else{
		console.log("connecting . . . ")
		console.log("connected successfully")
	}
})


// app.listen(process.env.PORT, process.env.IP, function(){
// console.log("server started...")
// });