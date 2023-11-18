<li class="nav-item">
  <a class="nav-link" href="{{ route('dashboard') }}">{{ __('Dashboard') }}</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="{{ route('orders.index') }}">{{ __('Orders') }}</a>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="people" data-bs-toggle="dropdown" aria-expanded="false">{{ __('People') }}</a>

  <div class="dropdown-menu" aria-labelledby="people">
     <a class="dropdown-item" href="{{ route('customers.index') }}">{{ __('Customers') }}</a>
     <a class="dropdown-item" href="{{ route('users_list', ['type' => 'staff']) }}">{{ __('Writers') }}</a>
     <a class="dropdown-item" href="{{ route('users_list', ['type' => 'admin']) }}">{{ __('Admin Users') }}</a>                
  </div>
</li>

<li class="nav-item dropdown">

  <a class="nav-link dropdown-toggle" href="#" id="payments" data-bs-toggle="dropdown" aria-expanded="false">{{ __('Payments') }}</a>

  <div class="dropdown-menu" aria-labelledby="payments">
     <a class="dropdown-item" href="{{ route('pending_payment_approvals') }}"> {{ __('Pending Approval') }}</a>
     <a class="dropdown-item" href="{{ route('payments_list') }}">{{ __('Payments List') }}</a>
     <a class="dropdown-item" href="{{ route('wallet_transactions') }}">{{ __('Wallet Transactions') }}</a>
     <a class="dropdown-item" href="{{ route('wallet_adjustments') }}">{{ __('Wallet Adjustments') }}</a>
  </div>
</li>
<li class="nav-item dropdown">

  <a class="nav-link dropdown-toggle" href="#" id="managerial" data-bs-toggle="dropdown" aria-expanded="false">{{ __('Manage') }}</a>

  <div class="dropdown-menu" aria-labelledby="managerial">
     <a class="dropdown-item" href="{{ route('business.index') }}">{{ __('Business') }}</a>
     <a class="dropdown-item" href="{{ route('manage_website') }}">{{ __('Website') }}</a>
     <a class="dropdown-item" href="{{ route('settings_main_page') }}">{{ __('Settings') }}</a>
     <a class="dropdown-item" href="{{ route('bills_list') }}">{{ __('Bills from Writers') }}</a>
     <a class="dropdown-item" href="{{ route('job_applicants') }}">{{ __('Job Applicants') }}</a>
     <a class="dropdown-item" href="{{ route('coupons_list') }}">{{ __('Coupons') }}</a>      
  </div>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="reports" data-bs-toggle="dropdown" aria-expanded="false">{{ __('Reports') }}</a>
  <div class="dropdown-menu" aria-labelledby="reports">  
     <a class="dropdown-item" href="{{ route('income_statement') }}">{{ __('Income Statement') }}</a>
     <a class="dropdown-item" href="{{ route('total_wallet_balance') }}">{{ __('Total Wallet Balance') }}</a>
     <a class="dropdown-item" href="{{ route('activity_log') }}">{{ __('Activity Log') }}</a>
  </div>
</li>