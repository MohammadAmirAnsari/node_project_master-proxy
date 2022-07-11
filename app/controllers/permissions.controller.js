const db = require("../models");
const { permissions: Permissions, permission_role: PermissionRole, role: Role } = db;
const { Op } = require("sequelize");
const Joi = require('joi');
exports.addPermissions = async (req, res) => {
    let pattern = "/^[a-zA-Z0-9_]*$/";
    try {
        const schema = Joi.object({
            title: Joi.string()
                .min(3)
                .max(132)
                .regex(/^[a-zA-Z0-9_]*$/)
                .required()
        });
        const value = await schema.validateAsync(req.body, { abortEarly: false });

        let title = req.body.title.toLowerCase();
        console.log("title , ", title);
        Permissions.create({
            title: title,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
            .then((user) => {
                res.status(200).json({ "status": true, "message": "Permissions Created Successfully" });
            }).catch(err => {
                res.status(500).send({ "status": false, message: err.message });
            });
    } catch (e) {
        console.log("e : ", e);
        res.status(400).json({
            status: false,
            message: "Permissions Not Created",
            errors: e.details,
        });
    }
}
exports.addRole = async (req, res) => {
    let pattern = "/^[a-zA-Z0-9_]*$/";
    try {
        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(32)
                .regex(/^[a-zA-Z0-9_]*$/)
                .required()
        });
        const value = await schema.validateAsync(req.body, { abortEarly: false });

        let role_name = req.body.name.toLowerCase();
        console.log("role_name , ", role_name);
        Role.create({
            name: role_name,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
            .then((user) => {
                res.status(200).json({ "status": true, "message": "Role Created Successfully" });
            }).catch(err => {
                res.status(500).send({ "status": false, message: err.message });
            });
    } catch (e) {
        console.log("e : ", e);
        res.status(400).json({
            status: false,
            message: "Role Not Created",
            errors: e.details,
        });
    }
}
exports.getInternalPermissions = async (roleId) => {
    return new Promise((resolve ,reject)=>{
        console.log("SHooo el wadee3");
        PermissionRole.findAll({
            where: {
                role_id: roleId
            }
        }).then(async (per_roles) => {
            let permissionsIds = [];
            for (i in per_roles) {
                permissionsIds.push(per_roles[i].permission_id);
                console.log(per_roles[i].permission_id)
            }
            Permissions.findAll({
                where: {
                    id: { [Op.in]: permissionsIds }
                }
            }).then(async (perm) => {
                let actions = [];
                for (p in perm) {
                    actions.push(perm[p].title);
                }
                let response = {
                    "rules": [
                        {
                            "action": actions,
                            "subject": ["all"]
                        }
    
                    ]
                }
                resolve(response) ;
            })
    
        })
       
    }
    );
 
}
exports.getPermissions = (req, res) => {
    PermissionRole.findAll({
        where: {
            role_id: req.roleId
        }
    }).then(per_roles => {
        let permissionsIds = [];
        for (i in per_roles) {
            permissionsIds.push(per_roles[i].permission_id);
            console.log(per_roles[i].permission_id)
        }
        Permissions.findAll({
            where: {
                id: { [Op.in]: permissionsIds }
            }
        }).then(perm => {
            let actions = [];
            for (p in perm) {
                actions.push(perm[p].title);
            }
            let response = {
                "rules": [
                    {
                        "action": actions,
                        "subject": ["all"]
                    }

                ]
            }
            res.status(200).json(response)
        })

    })
}
exports.getAllPermissions = (req, res) => {
    let limit = 15;   // number of records per page
    let offset = 0;
    Permissions.findAndCountAll().then((data) => {
        let page = req.query.page;
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        Permissions.findAll({
            // attributes: ['id', 'email', 'full_name', 'status', 'createdAt'],
            limit: limit,
            offset: offset,
            order: [
                ['id', 'DESC'],
            ],
        })
            .then((user) => {
                res.status(200).json({ 'data': user, '_meta': { 'totalCount': data.count, 'pages': pages, 'perPage': limit, 'currentPage': page } });
            });
    })
};
exports.getAllPermissionsWithoutPage = (req, res) => {
    Permissions.findAll({
        attributes: ['id', 'title'],

    })
        .then((user) => {
            res.status(200).json({ 'data': user });
        });
};
exports.getAllRolesWithoutPage = (req, res) => {
    Role.findAll({
        attributes: ['id', 'name'],

    })
        .then((user) => {
            res.status(200).json({ 'data': user });
        });
};
exports.getPermissionsByRoleId = (req, res) => {
    let role_id = req.query.role_id;
    PermissionRole.findAll({
        attributes: ['permission_id'],
        where: {
            role_id: role_id
        }
    }).then(per_roles => {
        res.status(200).json({ 'data': per_roles, 'status': true });
    })
}
exports.updatePermissionsRole = (req, res) => {
    let role_id = req.query.role_id;
    let payload = req.body;
    PermissionRole.destroy({
        where: {
            role_id: role_id
        }
    }).then(per_roles => {
        let insert_data = [];
        for (const i in payload) {
            insert_data.push({
                role_id: role_id,
                permission_id: payload[i],
                createdAt: new Date(),
                updatedAt: new Date()
            })
        }
        PermissionRole.bulkCreate(insert_data).then(() => {
            res.status(200).json({ 'message': "Permission Roles have been saved", 'status': true });
        });
    })
}