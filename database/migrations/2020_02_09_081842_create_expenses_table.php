<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type')->nullable(true);
            $table->string('title')->nullable(false);
            $table->string('description')->nullable(true);
            $table->decimal('amount')->nullable(false);
            $table->bigInteger('land_id')->nullable(true);
            $table->bigInteger('user_id')->nullable(true);
            $table->date('paid_at')->nullable(false);
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
        Schema::dropIfExists('expenses');
    }
}
