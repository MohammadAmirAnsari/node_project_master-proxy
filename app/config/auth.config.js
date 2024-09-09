module.exports = {
  secret: "1b698afd1ed669206934128d112ee480110012521fd9d7b44a3f7d311c62288167b9d1a507ffef196992b5969f1b131d08264d356a5f9fb460094a9dd1dbda2b",
  // jwtExpiration: 3600,         // 1 hour
  // jwtRefreshExpiration: 86400, // 24 hours

  /* for test */
  jwtExpiration: 7200,          // 2 hours
  // jwtExpiration: 864000,          // 1 day
  jwtRefreshExpiration: 864000,  // 1 day
};
