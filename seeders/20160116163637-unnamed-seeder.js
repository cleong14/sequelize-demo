'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        username: 'janedoe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};