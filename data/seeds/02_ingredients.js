
exports.seed = function(knex) {
      return knex('ingredients').insert([
        { name: 'Chicken Livers'},
        { name: 'Chicken Thighs'},
        { name: 'Liver'},
        { name: 'Bagels'},
        { name: 'Thyme'},
        { name: 'Oxo Cubes, Peeled'},
        { name: 'Califlower'},
        { name: 'Cold Water'},
        { name: 'Sweet Potatoes'},
        { name: 'Porridge Oats'},
        { name: 'Chicken Stock'},
        { name: 'Lettuces'},
        { name: 'Orange Juice'},
      ]);
    };
