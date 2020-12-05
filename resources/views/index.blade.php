<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ACRE | Real Estate</title>

        <link href="{{ mix('css/all.css') }}" rel="stylesheet">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased">

        <!-- React root DOM -->
        <div id="root"></div>

        <script src="{{ mix('/js/app.js') }}" defer></script>

    </body>
</html>
