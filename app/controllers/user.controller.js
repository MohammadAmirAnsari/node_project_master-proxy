const db = require("../models");
const { user: User, role: Role } = db;

exports.getAllUsers = (req, res) => {

  let limit = 15;   // number of records per page
  let offset = 0;
  User.findAndCountAll().then((data) => {
    let page = req.query.page;
    let pages = Math.ceil(data.count / limit);
    offset = limit * (page - 1);
    User.findAll({
      include: [
        { model: Role }
      ],
      attributes: ['id', 'email', 'full_name', 'status', 'createdAt'],
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
exports.getAllRoles = (req, res) => {
  let limit = 15;   // number of records per page
  let offset = 0;
  console.log("req.query : ", req.query);
  Role.findAndCountAll().then((data) => {
    let page = req.query.page || 1;
    let pages = Math.ceil(data.count / limit);
    offset = limit * (page - 1);
    Role.findAll({
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
exports.userActiveDeactive = (req, res) => {
  console.log(req.query)
};
