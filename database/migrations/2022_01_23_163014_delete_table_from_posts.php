<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteTableFromPosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('posts');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    // ВАЖНО!!! указать способ восстановления таблицы с момента
    // последнего изменения
    public function down()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->text('post_title');
            $table->text('content');
            $table->string('img')->nullable();
            $table->timestamp('publish_at')->nullable();
            $table->unsignedBigInteger('likes')->nullable();
            $table->boolean('is_published')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
