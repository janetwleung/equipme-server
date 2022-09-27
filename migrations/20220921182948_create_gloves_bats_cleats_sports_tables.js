exports.up = function (knex) {
    return knex.schema
        .createTable('brands', (table) => {
            table.increments('id').primary();
            table.string("brand").notNullable();
        })
        .createTable('gloves', (table) => {
            table.increments('id').primary();
            table.string("brand").notNullable();
            table.string("category").notNullable();
            table.string('name').notNullable();
            table.string("image1").notNullable();
            table.string("image2").notNullable();
            table.string("description", 2000).notNullable();
            table.string("price").notNullable();
            table.string("size").notNullable();
            table.string("pocket").notNullable();
            table.string("color").notNullable();
            table.string("position").notNullable();
            table.string("sport").notNullable();
            table.string("left").notNullable();
            table.string("right").notNullable();
            table.string("whereToBuy").notNullable();
            table.string("uuid").notNullable();
            table
                .integer('brand_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('brands')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('bats', (table) => {
            table.increments('id').primary();
            table.string("brand").notNullable();
            table.string("category").notNullable();
            table.string('name').notNullable();
            table.string("image1").notNullable();
            table.string("image2").notNullable();
            table.string("description", 2000).notNullable();
            table.string("price").notNullable();
            table.string("age").notNullable();
            table.string("length").notNullable();
            table.string("whereToBuy").notNullable();
            table.string("uuid").notNullable();
            table
                .integer('brand_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('brands')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('cleats', (table) => {
            table.increments('id').primary();
            table.string("brand").notNullable();
            table.string("category").notNullable();
            table.string('name').notNullable();
            table.string("image1").notNullable();
            table.string("image2").notNullable();
            table.string("description", 2000).notNullable();
            table.string("whereToBuy").notNullable();
            table.string("price").notNullable();
            table.string("uuid").notNullable();
            table
                .integer('brand_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('brands')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('sports', (table) => {
            table.increments('id').primary();
            table.string('sport').notNullable();
            table.string("image").notNullable();
            table.string("hoverImage").notNullable();
            table.string("formInput1").notNullable();
            table.string("formInput2").notNullable();
            table.string("formInput3").notNullable();
            table.string("formInput4").notNullable();
        })
        .createTable('athletes', (table) => {
            table.increments('id').primary();
            table.string("name").notNullable();
            table.string("number").notNullable();
            table.string("position").notNullable();
            table.string("image").notNullable();
            table.string("image1").notNullable();
            table.string("image2").notNullable();
            table.string("description", 1000).notNullable();
            table.string("glove_uuid").notNullable();
            table.string("bat_uuid").notNullable();
            table.string("cleat_uuid").notNullable();
            table
                .integer('sport_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('sports')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .integer('glove_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('gloves')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .integer('bat_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('bats')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .integer('cleat_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cleats')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
  };

  
  exports.down = function (knex) {
    return knex.schema.dropTable('athletes').dropTable('gloves').dropTable('bats').dropTable('cleats').dropTable('sports').dropTable('brands');
  };
