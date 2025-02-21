'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('requestedCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      branch_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      card_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      initiator: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      card_charges: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      batch: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      date_requested: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
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
    await queryInterface.dropTable('requestedCards');
  }
};
