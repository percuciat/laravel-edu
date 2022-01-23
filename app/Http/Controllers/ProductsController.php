<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function products()
    {
        // обращение к статическому методу через ::
        $products = Product::where('discount', -5)->get();
        foreach ($products as $p) {
            dump($p['name']);
        }
        return 'Products controller Hello';
    }
}
