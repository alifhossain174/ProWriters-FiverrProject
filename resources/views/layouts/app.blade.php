<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ get_layout_direction() }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base_url" content="{{ URL::to('/') }}">
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">   
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css">    
    <?php 
    $css = new \App\Services\CSSGeneratorService();   
    ?>
      <style>
        <?php echo $css->forApplication(); ?>    
    </style>      
    @vite(['resources/js/app.js'])   
    @inertiaHead
    @routes
  </head>
  <body>
    @inertia
    <script type="text/javascript">
      window.currencyConfig = {!! currencyConfig() !!};
      window.recaptcha = {
         site_key : "{!! settings('recaptcha_site_key') !!}",
         is_enabled : "{!! settings('recaptcha_enable') !!}",
      };
      window._asset = '{{ asset('') }}';
    </script>    
    @include('layouts.client_side_translation')
  </body>
</html>