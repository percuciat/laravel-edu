@extends('layouts.main')
@section('content')
    <h2>Product</h2>
    <div class="card" style="width: 18rem;">
      {{--  <img src="..." class="card-img-top" alt="...">--}}
        <div class="card-body">
            <h5 class="card-title">{{$product->name}}</h5>
            <p class="card-text">{{$product->description}}</p>
            <hr>
            <p class="card-text">{{$product->content}}</p>
            <p class="card-text">price: {{$product->price}}$</p>
        </div>
    </div>
    <a href="{{route('product.edit', $product->id)}}">Edit</a>
@endsection
