<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteColumnDescriptionToPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // добавить новое поле для Удаления миграции
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // ВАЖНО!!! добавить новое поле для Откатывания миграции (чтобы
    // вернуть как было)
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->text('description')->nullable()->after('title');
        });
    }
}
