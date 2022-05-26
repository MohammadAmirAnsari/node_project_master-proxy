const dotenv = require('dotenv');
dotenv.config();
var NODE_ENV = process.env.NODE_ENV;
console.log("NODE_ENV : ",NODE_ENV);
module.exports = {
    apps: [{
        name: "tracking_service",
        script: "/var/www/html/master-proxy/server.js",
        error_file: "/var/log/apache2/error_master_proxy.log",
        out_file: "/var/log/apache2/error_master_proxy.log",
        env: {
            "NODE_ENV": NODE_ENV,
        },
    }]
}