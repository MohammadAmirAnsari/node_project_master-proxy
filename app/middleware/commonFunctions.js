const db = require("../models");
const Roles = db.role;
const Permissions = db.permissions;

checkDuplicateRole = (req, res, next) => {
    let role_name = req.body.name || ""
    if(role_name == ""){
        res.status(400).send({
            status: false,
            message: "Name Is Required But Not Provided"
        });
        return;
    }
    Roles.findOne({
        where: {
            name: role_name.toLowerCase()
        }
    }).then(role => {
        if (role) {
            res.status(400).send({
                status: false,
                message: "Failed! Name is already in use!"
            });
            return;
        }
        next();
    });
}
checkDuplicatePermissions = (req, res, next) => {
    let title = req.body.title || ""
    if(title == ""){
        res.status(400).send({
            status: false,
            message: "Name Is Required But Not Provided"
        });
        return;
    }
    Permissions.findOne({
        where: {
            title: title.toLowerCase()
        }
    }).then(role => {
        if (role) {
            res.status(400).send({
                status: false,
                message: "Failed! Title is already in use!"
            });
            return;
        }
        next();
    });
}
const commonFunctions = {
    checkDuplicateRole: checkDuplicateRole,
    checkDuplicatePermissions: checkDuplicatePermissions,
  };
  
  module.exports = commonFunctions;