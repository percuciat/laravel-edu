@extends('layouts.main')
@section('content')
    <h2>Create product</h2>
    <form action="{{route('product.store')}}" method="post">
        @csrf
        <div class="mb-3">
            <label for="nameId" class="form-label">Name</label>
            <input type="text" name="name" class="form-control"
                   id="nameId" aria-describedby="nameId">
        </div>
        <div class="mb-3">
            <label for="articleId"
                   class="form-label">Article name</label>
            <input type="text" name="art" class="form-control"
                   id="articleId">
        </div>
        <div class="mb-3">
            <label for="descriptionId"
                   class="form-label">Description</label>
            <input type="text" name="description" class="form-control"
                   id="descriptionId">
        </div>
        <div class="mb-3">
            <label for="contentId"
                   class="form-label">Content</label>
            <textarea class="form-control" name="content" id="contentId"
                      rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="priceId"
                   class="form-label">Price</label>
            <input type="number" name="price" class="form-control"
                   id="priceId">
        </div>
        <button type="submit" class="btn btn-primary">Add product</button>
    </form>
@endsection
