<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        // обращение к статическому методу через ::
       $p = Product::all();

        return view('products', compact('p'));
    }
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
        Product::create([
            'name' => 'test product',
            'art' => 17300,
            'description' => 'It is a good product',
            'description_new' => 'This is good product can help you to avoid a lot of mistakes at the kitchen.',
            'img' => '',
            'price' => 220,
            'discount' => 10
        ]);
        return 'Product successfully created';
    }
}
