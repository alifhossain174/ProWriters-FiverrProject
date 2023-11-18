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
        Schema::create('resume_writings', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('task_id');
            $table->foreign('task_id')
                ->references('id')
                ->on('tasks')->onDelete('cascade');

            $table->unsignedInteger('assignment_id')->nullable();
            $table->foreign('assignment_id')
                ->references('id')
                ->on('assignments');

            $table->unsignedInteger('quantity')->nullable();

            $table->longText('instruction')->nullable();

            $table->decimal('basic_price', config('database.decimal.total'), config('database.decimal.places'))->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resume_writings');
    }
};
