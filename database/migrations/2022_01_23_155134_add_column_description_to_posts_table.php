<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnDescriptionToPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // добавить новое поле для Накатываения миграции
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->text('description')->nullable()->after('title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // ВАЖНО!!! добавить новое поле для Откатывания миграции
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('description');
        });
    }
}
