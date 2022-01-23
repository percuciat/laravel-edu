<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    // READ
    public function posts()
    {
        // обращение к статическому методу через ::
        $post = Post::find(1);
        $s = 'alalala';
        dd($post['likes']);
        return 'Posts controller Hello';
    }

    // CREATE
    public function create()
    {
        /*  $posts = Post::all();
          foreach ($posts as $item) {
              Post::create([
                  'title' => 'test sign',
                  'content' => 'test bla bla',
                  'img' => '',
                  'likes' => 22,
                  'is_published' => 1
              ]);
          }*/
        Post::create([
            'title' => 'test sign',
            'content' => 'test bla bla',
            'description' => 'new Description',
            'img' => '',
            'likes' => 22,
            'is_published' => 1
        ]);
        return 'Posts successfully created';
    }

    // UPDATE
    public function update()
    {
        $updatedPost = Post::find(4);
        $updatedPost->update([
            'title' => 'updated Title',
            'content' => 'updated Content',
            'likes' => 1000
        ]);
        return 'Posts successfully updated';
    }

    // DELETE
    public function delete()
    {
        /*
         * восстановить с учетом soft delete
         * $updatedPost = Post::withTrashed()->find(5);
        $updatedPost->restore();
         *  */
        $updatedPost = Post::find(5);
        $updatedPost->delete();
        return 'Posts successfully deleted';
    }

    // firstOrCreate
    public function firstOrCreate()
    {

        $newPost = [
            'title' => 'NEW Created TITLE',
            'content' => 'NEW test bla bla',
            'img' => '',
            'likes' => 220,
            'is_published' => 1
        ];

        Post::firstOrCreate([
            'title' => 'NEW Created TITLE',
        ], $newPost);

        return 'Posts successfully added';
    }

    // updateOrCreate
    public function updateOrCreate()
    {

        $newPost = [
            'title' => 'UPDATED TITLE',
            'content' => 'UPDATED test content',
            'img' => '',
            'likes' => 290,
            'is_published' => 1
        ];

        Post::updateOrCreate([
            'title' => 'NEWE UPDATED TITLE',
        ], $newPost);

        return 'Posts successfully updated';
    }
}
