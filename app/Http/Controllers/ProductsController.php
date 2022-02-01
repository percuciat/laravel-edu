<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        // обращение к статическому методу через ::
       $p = Product::all();
       $categories = Category::find(1);
        dd($categories->products);
        return view('product.index', compact('p'));
    }

    public function create()
    {
        return view('product.create');
    }

    public function store()
    {
        $dataProduct = request()->validate([
            'name' => 'required|string',
            'art' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string',
            'price' => 'required|numeric'
        ]);
        Product::create($dataProduct);
        return redirect()->route('product.index');
    }

    public function show(Product $product)
    {
        return view('product.show', compact('product'));
        /* что делает laravel под капотом $product = Product::findOrFail($id);*/
    }

    public function edit(Product $product)
    {
        return view('product.edit', compact('product'));
        /* что делает laravel под капотом $product = Product::findOrFail($id);*/
    }

    public function update(Product $product)
    {
        $dataProduct = request()->validate([
            'name' => 'string',
            'art' => 'string',
            'description' => 'string',
            'content' => 'string',
            'price' => 'numeric'
        ]);
        $product->update($dataProduct);
        return redirect()->route('product.show', $product->id);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('product.index');
    }
}
