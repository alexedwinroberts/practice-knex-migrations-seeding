# Practicing Migrations and Seeds
***

A simple node/express application to practice knex migrations and seeding.

***

## Details

The migration and seeds will create 3 database tables: Users, Posts and Comments. 
Posts has a many-one relationship with Users.
Comments has a many-one relationship with Users and a many-one relationship with Posts.

When the migration and seed scripts have been run, GET `localhost:8080/posts` will return the posts that have been populated in the database.
