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
        Schema::create('academic_writings', function (Blueprint $table) {

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

            $table->unsignedInteger('academic_level_id')->nullable();
            $table->foreign('academic_level_id')
                ->references('id')
                ->on('academic_levels');

            $table->string('spacing_type_id')->nullable();

            $table->unsignedInteger('paper_format_id')->nullable();
            $table->foreign('paper_format_id')
                ->references('id')
                ->on('paper_formats');

            $table->string('unit_name', 20)->nullable();
            $table->unsignedInteger('quantity')->nullable();

            $table->unsignedInteger('number_of_sources')->nullable();
            $table->longText('instruction')->nullable();

            $table->decimal('per_word_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->unsignedInteger('number_of_words')->nullable();
            $table->decimal('assignment_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('academic_level_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('subject_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
            $table->decimal('urgency_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('academic_writings');
    }
};
