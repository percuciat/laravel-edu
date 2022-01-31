@extends('layouts.main')
@section('content')
    Products
    <ul>
        @foreach($p as $product)
            <li>
                <a href="{{route('product.show', $product->id)}}">
                    <strong>{{$product->id}}</strong>
                    {{$product->name}}
                </a>
                <form action="{{route('product.destroy', $product->id)}}" method="post">
                    @csrf
                    @method('delete')
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </li>
        @endforeach
    </ul>
    <a href="{{ route('product.create') }}" class="btn btn-primary">create product</a>
@endsection
