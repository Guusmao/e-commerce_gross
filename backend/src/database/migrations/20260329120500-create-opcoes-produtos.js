'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('opcoes_produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'produtos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shape: {
        type: Sequelize.ENUM('quadrado', 'circulo'),
        defaultValue: 'quadrado',
      },
      radius: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      type: {
        type: Sequelize.ENUM('texto', 'cor'),
        defaultValue: 'texto',
      },
      valores_do_produto: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('opcoes_produtos');
    // Como o Enum foi criado, é bom fazer um raw query para remover os types criados nativamente pelo PG se não for limpá-los, mas o dropTable cuida na maior parte.
  }
};
