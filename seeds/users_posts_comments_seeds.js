// import seed data files, arrays of objects
const userData = require("../seed_data/users");


exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(() => {
      return knex("posts").del();
    })
    .then(() => {
      return knex("users").del();
    })
    .then(function () {
      return knex("users").insert(userData);
    });

    // .then(function () {
    //   return knex("posts").insert(postData);
    // })
    // .then(function () {
    //   return knex("comments").insert(commentData);
    // })

};
