{{-- <li class="nav-item">
    <a class="nav-link" href="{{ route('dashboard') }}">{{ __('Dashboard') }}</a>
 </li> --}}
 <li class="nav-item">
    <a class="nav-link" href="{{ route('customer.orders.index') }}">{{ __('Orders') }}</a>
 </li>
 <li class="nav-item">
    <a class="nav-link" href="{{ route('customer.orders.create') }}">
    {{ __('Create New Order') }}
    </a>
 </li>
 <li class="nav-item">
    <a class="nav-link" href="">
    {{ __('Payments') }}
    </a>
 </li>
 <li class="nav-item">
    <a class="nav-link" href="">
    {{ __('Wallet Transactions') }}
    </a>
 </li>
 <li class="nav-item">
    <a class="nav-link" href="">
    {{ __('Top Up Wallet') }}
    </a>
 </li>