"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("likes", {
      like_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      post_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "posts",
          key: "post_id",
        },
      },
      liked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("likes");
  },
};
