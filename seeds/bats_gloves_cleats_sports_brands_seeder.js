glovesData = require("../seed_data/gloves");
batsData = require("../seed_data/bats");
cleatsData = require("../seed_data/cleats");
sportsData = require("../seed_data/sports");
brandsData = require("../seed_data/brands");
athletesData = require("../seed_data/athletes");

exports.seed = function (knex) {
  return knex('brands')
    .del()
    .then(function () {
      return knex('brands').insert(brandsData);
    })
    .then(() => {
      return knex('gloves').del();
    })
    .then(() => {
      return knex('gloves').insert(glovesData);
    })
    .then(() => {
      return knex('bats').del();
    })
    .then(() => {
      return knex('bats').insert(batsData);
    })
    .then(() => {
      return knex('cleats').del();
    })
    .then(() => {
      return knex('cleats').insert(cleatsData);
    })
    .then(() => {
      return knex('sports').del();
    })
    .then(() => {
      return knex('sports').insert(sportsData);
    })
    .then(() => {
      return knex('athletes').del();
    })
    .then(() => {
      return knex('athletes').insert(athletesData);
    });
}