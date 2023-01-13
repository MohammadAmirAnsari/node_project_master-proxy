const express = require("express");
const cors = require("cors");
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
let masterActiveUsers = {};
const app = express();
var fileupload = require("express-fileupload");
const MASTER_URL = process.env.MASTER_URL
var connectedClient = {};
const corsOptions = {
  origin: MASTER_URL
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Master Proxy." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/master-service.routes')(app);
require('./app/routes/permissions.routes')(app);
require('./app/routes/inventory.routes')(app);
require('./app/routes/printing.routes')(app);
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: MASTER_URL,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  let user_id = socket.handshake.query.user_id;
  if (user_id != undefined && user_id != "") {
    masterActiveUsers[socket.handshake.query.user_id] = socket.id;
  }



  console.log("user_id : ", user_id);
  console.log("masterActiveUsers : ", masterActiveUsers);
  socket.on('disconnect', () => {
    if (user_id != undefined && user_id != "") {
      delete masterActiveUsers[user_id]
    }
    console.log('user disconnected');
    console.log("After Delete masterActiveUsers : ", masterActiveUsers);
  });
  socket.on('chat message', (data) => {
    console.log("msg : ", data);
    if (data.user_id != undefined && masterActiveUsers[data.user_id] != undefined) {
      console.log("Push To : ", data.user_id, masterActiveUsers[data.user_id]);
      io.to(masterActiveUsers[data.user_id]).emit('chatMessage', data.msg);
    }
    
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}