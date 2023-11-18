<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ layoutDirection() }}">
  <head>  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">    
    <title>@yield('title') - {{  get_company_name()  }}</title>
    <link rel="shortcut icon" href="{{ get_company_favicon() }}" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">   
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.15.0/css/all.css">
    
    @if(layoutDirection() == 'rtl')
    <link href="{{ asset('css/auth/authentication-rtl.css') }}" rel="stylesheet">
    @else 
    <link href="{{ asset('css/auth/authentication.css') }}" rel="stylesheet">
    @endif    
  </head>
    <body>
      <nav class="navbar navbar-expand-md shadow-sm navbar-background">
        <div class="container">  
      
           <a class="navbar-brand" href="{{ url('/') }}">                    
           <img class="logo" src="{{ get_company_logo() }}" alt="{{ config('app.name', 'ProWriter') }}">
           </a>
           
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <i class="fas fa-bars"></i>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
               <ul class="navbar-nav me-auto">      
                 
              </ul>
              <ul class="navbar-nav ml-auto">
                 <li class="nav-item dropdown language-dropdown">
                    <a class="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                       <div class="d-inline-flex mr-0 mr-md-3">
                          <div class="flag-icon-holder">
                             <i class="flag-icon flag-icon-{{ countryCode(app()->getLocale()) }}"></i>
                          </div>
                       </div>
                       {{-- <span class="profile-text font-weight-medium d-none d-md-block">{{ (App::getlocale() == 'ar') ? __('Arabic') : __('English') }}</span> --}}
                    </a>
                    <div class="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                       @foreach (getLanguages() as $language)
                       <a class="dropdown-item language-item" href="{{ switchLang($language->iso_code) }}" >
                        <div class="d-flex justify-content-around">                  
                             <i class="flag-icon flag-icon-{{ $language->country_code }}"></i>                    
                           <span>{{ $language->name }}</span>
                        </div>
                       </a>
                       @endforeach                     
                    </div>
                 </li>
                
      
          
              </ul>
             
           </div>
        </div>
      </nav>
        @yield('content')
        @stack('scripts')   
  </body>
</html>