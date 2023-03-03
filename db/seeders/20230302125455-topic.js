'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          title: 'Эльбрус',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Фильмы по картинкам',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
