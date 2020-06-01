/* eslint-disable eol-last */
/* eslint-disable arrow-body-style */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      OnDelete: 'SET NULL',
      allowNull: true,
    });
  },
  // eslint-disable-next-line arrow-parens
  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
