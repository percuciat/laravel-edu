@extends('layouts.main')
@section('content')
    Posts
    <ul>
        @foreach($posts as $post)
            <li>
                <h2>{{$post->title }}</h2>
                <div class="post-card">
                    {{$post->content}}
                </div>
            </li>
        @endforeach
    </ul>
@endsection
