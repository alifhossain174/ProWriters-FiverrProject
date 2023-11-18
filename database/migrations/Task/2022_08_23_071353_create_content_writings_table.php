<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_writings', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('task_id');
            $table->foreign('task_id')
                ->references('id')
                ->on('tasks')->onDelete('cascade');

            $table->string('work_type_id')->nullable();

            $table->unsignedInteger('assignment_id')->nullable();
            $table->foreign('assignment_id')
                ->references('id')
                ->on('assignments');

            $table->unsignedInteger('subject_id')->nullable();
            $table->foreign('subject_id')
                ->references('id')
                ->on('subjects');

            $table->unsignedInteger('language_id')->nullable();
            $table->foreign('language_id')
                ->references('id')
                ->on('languages');

            $table->string('spacing_type_id')->nullable();

            $table->string('unit_name', 20)->nullable();
            $table->unsignedInteger('quantity')->nullable();

            $table->longText('content_goals')->nullable();

            $table->unsignedInteger('grammatical_person_id')->nullable();
            $table->foreign('grammatical_person_id')
                ->references('id')
                ->on('grammatical_people');

            $table->longText('target_audience')->nullable();
            $table->longText('target_keywords')->nullable();
            $table->longText('links_to_example_content')->nullable();
            $table->longText('style_and_tone')->nullable();
            $table->longText('structure_and_formatting_requirements')->nullable();
            $table->longText('referencing_and_linking_preferences')->nullable();
            $table->longText('things_to_avoid')->nullable();
            $table->longText('additional_notes')->nullable();

            // Cost Factors
            $table->decimal('per_word_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->unsignedInteger('number_of_words')->nullable();

            $table->decimal('assignment_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('subject_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('urgency_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('language_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('content_writings');
    }
};
