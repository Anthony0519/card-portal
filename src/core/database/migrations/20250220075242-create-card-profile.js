'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cardProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      card_holder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      masked_pan: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      expiration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      batch: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      date_issued: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cardProfiles');
  }
};
