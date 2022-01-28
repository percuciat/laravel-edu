<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous">
    <title>Laravel site</title>
</head>
<body>
<div id="root">
    <header class="header">
        <nav>
            <ul>
                <li><a href="{{route('home.index')}}">Main</a></li>
                <li><a href="{{route('post.index')}}">Posts</a></li>
                <li><a href="{{route('product.index')}}">Products</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        @yield('content')
    </div>

</div>
</body>
</html>
