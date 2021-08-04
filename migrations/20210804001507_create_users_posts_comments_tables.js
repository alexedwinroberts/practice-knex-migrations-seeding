
exports.up = function(knex) {
    return knex.schema
    .createTable('users', table =>{
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('username').notNullable();
    })
    .createTable('posts', table => {
        table.increments('id').primary();
        table
            .integer('author_id')
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT");
        table.string('post_body').notNullable;
    })
    .createTable('comments', table => {
        table.increments('id').primary();
        table
            .integer('post_id')
            .notNullable()
            .references("id")
            .inTable("posts")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT");
        table
            .integer('commenter_id')
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("RESTRICT")
            .onDelete("RESTRICT");
        
        table.string('comment_body').notNullable;
    })
};

exports.down = function(knex) {
  
};
