<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_tags', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('product_id');
            $table->index('product_id', 'product_tag_product_idx');
            $table->foreign('product_id', 'product_tag_product_fk')->references('id')->on('products');

            $table->unsignedInteger('tag_id');
            $table->index('tag_id', 'product_tag_tag_idx');
            $table->foreign('tag_id', 'product_tag_tag_fk')->references('id')->on('tags');




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
        Schema::dropIfExists('product_tags');
    }
}
