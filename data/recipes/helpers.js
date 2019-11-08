const db = require('../db-config.js')

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

//`getRecipes()`: should return a list of all recipes in the database.
function getRecipes(){
    return db
    .select('*')
    .from('recipes')
}

//`getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db
   .select('ingredients.name', 'quantity')
   .from('recipes_and_ingredients')
   .join('ingredients','recipe_and_ingredients.ingredients_id', 'ingredients.id')
   .where('recipe_id', id)
};

//`getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db
    .select('step_number', 'instructions')
    .from('recipes_steps')
    .join('recipes', 'recipes_steps,recipe_id','recipes.id')
    .where('recipe_id', id)
};