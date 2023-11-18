<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdditionalServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('additional_services', function (Blueprint $table) {
            $table->increments('id');        
            $table->enum('type', ['fixed', 'percentage', 'per_unit', 'per_entered_quantity'])->default('fixed');
            $table->string('name');            
            $table->text('description')->nullable();
            $table->decimal('price', config('database.decimal.total'), config('database.decimal.places'))->default(0)->nullable();                                    
            $table->string('per_entered_quantity_label')->nullable();
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
        Schema::dropIfExists('additional_services');
    }
}
