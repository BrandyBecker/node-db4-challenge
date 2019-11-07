exports.seed = function(knex) {
      return knex('recipes_and_ingredients').insert([
        { recipes_id: '1', ingredients_id:'1', quantity:'7oz'},
        { recipes_id: '1', ingredients_id:'2', quantity:'3'},
        { recipes_id: '1', ingredients_id:'3', quantity:'10oz'},
        { recipes_id: '1', ingredients_id:'4', quantity:'4'},
        { recipes_id: '2', ingredients_id:'5', quantity:'490g'},
        { recipes_id: '2', ingredients_id:'6', quantity:'2'},
        { recipes_id: '2', ingredients_id:'7', quantity:'130g'},
        { recipes_id: '2', ingredients_id:'8', quantity:'133ml'},
        { recipes_id: '3', ingredients_id:'9', quantity:'3'},
        { recipes_id: '3', ingredients_id:'10', quantity:'460g'},
        { recipes_id: '3', ingredients_id:'11', quantity:'2 cups'},
        { recipes_id: '3', ingredients_id:'12', quantity:'4 heads'},
        { recipes_id: '3', ingredients_id:'13', quantity:'16 fl oz'}
      ]);
};
