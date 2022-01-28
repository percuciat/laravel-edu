@extends('layouts.main')
@section('content')
    Products
    <ul>
        @foreach($p as $product)
            <li>{{$product->name}}</li>
        @endforeach
    </ul>
@endsection
