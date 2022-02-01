<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('art');
            $table->string('name');
            $table->text('description');
            $table->unsignedBigInteger('price');
            $table->bigInteger('discount')->nullable();
            $table->string('img')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->index('category_id', 'product_category_idx');
            /* связываем таблицу category с products */
            // ПРИ СВЯЗЫВАНИИ ТАБЛИЦЫ ТА ЧТО СВЯЗЫВАЕТСЯ (categories) ДОЛЖНА БЫТЬ ВЫШЕ чем (products) в ФАЙЛОВОЙ структуре
            $table->foreign('category_id', 'product_category_fk')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
