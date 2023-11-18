<li class="nav-item">
    <a class="nav-link" href="{{ route('dashboard') }}">
    {{ __('Dashboard') }}
    </a>
 </li>
 @if(strtolower(settings('enable_browsing_work')) == 'yes')
 <li class="nav-item">
    <a class="nav-link" href="{{ route('browse_work') }}">
    {{ __('Browse Work') }}
    </a>
 </li>
 @endif
 <li class="nav-item">
    <a class="nav-link" href="{{ route('tasks_list') }}">
    {{ __('Tasks') }}
    </a>
 </li>
 <li class="nav-item dropdown">
    <a id="payments" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
    {{ __('Payments') }} <span class="caret"></span>
    </a>
    <div class="dropdown-menu" aria-labelledby="payments">
       <a class="dropdown-item" href="{{ route('request_for_payment') }}">{{ __('Request for payment') }}</a>
       <a class="dropdown-item" href="{{ route('my_requests_for_payment') }}">{{ __('Payment requests') }}</a>      
    </div>
 </li>