<html>
    <style>     
        .email {
          max-width: 480px;
          margin: 1rem auto;
          border-radius: 10px;
          border-top: #d74034 2px solid;
          border-bottom: #d74034 2px solid;
          box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          font-family: Arial, Helvetica, sans-serif;
        }
        .email .email-head {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding-bottom: 1rem;
        }
        .email .email-head .head-img {
          max-width: 240px;
          padding: 0 0.5rem;
          display: block;
          margin: 0 auto;
        }
    
        .email .email-head .head-img img {
          width: 100%;
        }
        .email-body .invoice-icon {
          max-width: 80px;
          margin: 1rem auto;
        }
        .email-body .invoice-icon img {
          width: 100%;
        }
    
        .email-body .body-text {
          padding: 2rem 0 1rem;
          text-align: center;
          font-size: 1.15rem;
        }
        .email-body .body-text.bottom-text {
          padding: 2rem 0 1rem;
          text-align: center;
          font-size: 0.8rem;
        }
        .email-body .body-text .body-greeting {
          font-weight: bold;
          margin-bottom: 1rem;
        }
    
        .email-body .body-table {
          text-align: left;
        }
        .email-body .body-table table {
          width: 100%;
          font-size: 1.1rem;
        }
        .email-body .body-table table .total {
          background-color: hsla(4, 67%, 52%, 0.12);
          border-radius: 8px;
          color: #d74034;
        }
        .email-body .body-table table .item {
          border-radius: 8px;
          color: #d74034;
        }
        .email-body .body-table table th,
        .email-body .body-table table td {
          padding: 10px;
        }
        .email-body .body-table table tr:first-child th {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        .email-body .body-table table tr td:last-child {
          text-align: right;
        }
        .email-body .body-table table tr th:last-child {
          text-align: right;
        }
        .email-body .body-table table tr:last-child th:first-child {
          border-radius: 8px 0 0 8px;
        }
        .email-body .body-table table tr:last-child th:last-child {
          border-radius: 0 8px 8px 0;
        }
        .email-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
        .email-footer .footer-text {
          font-size: 0.8rem;
          text-align: center;
          padding-top: 1rem;
        }
        .email-footer .footer-text a {
          color: #d74034;
        }
      </style>
    </head>
    <body>
      <div class="email">
        <div class="email-head">
           

            <div style="float: left">
                {{ __('Order Summary') }} 
            </div>

            <div style="float: right; text-align: right">
                ( {{ __('Invoice') }} #{{ $invoice->number }} )
            </div>
            <div style="clear: both;"></div>
        </div>
        <div class="email-body">

            <div style="margin-top: 20px;">{{ __('app.order_summary.greeting', ['name' => $invoice->customer->full_name]) }} ,</div>
            <p style="font-size:14px;">{{ __('app.order_summary.message_line_1', ['company_name' => get_company_name()]) }}</p>
 
              
          <div class="body-table">
            <table>
              <tr class="item">
                <th style="text-align: left;">{{ __('Description') }}</th>
                <th>{{ __('Amount') }}</th>
              </tr>
              @foreach($invoice->items as $item)
              <tr>
                <td>
                    <div>{{ $item->name }}</div>
                    <p style="font-size:12px; padding:0 10px 10px 0;"><?php echo display_html_content($item->description) ?></p>
                </td>
                <td>{{ format_money($item->sub_total) }}</td>
              </tr>
              @endforeach
             
              <tr class="total">
                <th>{{ __('Total') }}</th>
                <th>{{ format_money($invoice->total) }}</th>
              </tr>
              <tr class="total">
                <th>{{ __('Amount Paid') }}</th>
                <th>{{ format_money($invoice->amount_paid) }}</th>
              </tr>
            </table>
          </div>
          <div class="body-text bottom-text">
            {{ __('app.order_summary.footer_text') }}!
          </div>
        </div>
        <div class="email-footer">
          <div class="footer-text">
            &copy; <a href="{{ URL::to('/') }}"  target="_blank">{{ get_company_name() }}</a>
          </div>
        </div>
      </div>
    </body>
</html>