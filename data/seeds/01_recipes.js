
exports.seed = function(knex) {
      return knex('recipes').insert([
        { name: 'Chicken Livers Melt Bagels'},
        { name: 'Cauliflower Stew'},
        { name: 'Baked Porridge Oats'}
      ]);
}

