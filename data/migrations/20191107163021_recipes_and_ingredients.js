
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes_and_ingredients', table => {
        table
        .increments()

        table
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table
        .float('quantity')

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_and_ingredients')
};
