<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable(false);
            $table->string('description')->nullable(true)->default(null);
            $table->decimal('price', 8, 2)->nullable(false)->default(0.00);
            $table->bigInteger('location_id')->nullable(false);
            $table->bigInteger('user_id')->nullable(true)->default(null);
            $table->bigInteger('client_id')->nullable(true)->default(null);
            $table->decimal('commission_line_1', 8, 2)->nullable(false)->default(0.00);
            $table->decimal('commission_line_2', 8, 2)->nullable(false)->default(0.00);
            $table->decimal('commission_line_3', 8, 2)->nullable(false)->default(0.00);
            $table->decimal('commission_line_4', 8, 2)->nullable(false)->default(0.00);
            $table->date('sold_at')->nullable(true);
            $table->softDeletes();
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
        Schema::dropIfExists('lands');
    }
}
