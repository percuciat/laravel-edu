<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTitleTypeToPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // меняем тип колонки
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('post_title')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // ВАЖНО!!! меняем тип колонки ОБРАТНО
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->text('post_title')->change();
        });
    }
}
