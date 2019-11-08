
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes_steps', table => {
    table
    .increments();

    table
    .integer('step_number')
    .unsigned()
    .notNullable();

    table
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('recipes.id');

    table
    .text('instructions', 256)
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_steps')
};
