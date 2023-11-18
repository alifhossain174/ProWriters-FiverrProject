<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthorLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author_levels', function (Blueprint $table) {
            
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->boolean('is_popular')->nullable();
            $table->boolean('is_default')->nullable();
            $table->unsignedInteger('numeric_value')->nullable();
            $table->decimal('customer_price_per_word_writing', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();
            $table->decimal('author_price_per_word_writing', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();

            $table->decimal('customer_price_per_word_editing', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();
            $table->decimal('author_price_per_word_editing', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();

            $table->decimal('customer_price_per_word_proofreading', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();
            $table->decimal('author_price_per_word_proofreading', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();
            $table->integer('number_of_tasks_at_a_time')->nullable();            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('author_levels');
    }
}
