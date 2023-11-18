<?php

namespace App\Http\Controllers\Freelancer;

use App\Http\Controllers\Controller;
use App\Models\ProjectManagement\Bid;
use App\Models\ProjectManagement\BidRequest;
use App\Rules\MoneyFormat;
use Illuminate\Http\Request;

class BidController extends Controller
{

    public function create(BidRequest $bidRequest)
    {
        return inertia()->modal('Freelancer/BidRequests/Create', [
            'data' => [
                'title'                    => __('Bid for this job'),
                'platform_commission_rate' => settings('commission_rate_from_bid'),
                'bidRequest_uuid'          => $bidRequest->uuid,
            ],
        ])->baseRoute('freelancer.bidRequests.show', $bidRequest->uuid);
    }

    public function store(Request $request, BidRequest $bidRequest)
    {
        if ($bidRequest->is_closed) {
            return redirect()->back()->withFail(__('The client is not accepting bids anymore'));
        }

        $request->validate([
            'total' => ['required', new MoneyFormat],
        ], [], [
            'total' => __('Bidding amount'),
        ]);
        $commission_rate = settings('commission_rate_from_bid');

        $commission = ($request->total * $commission_rate) / 100;

        Bid::create([
            'total'                     => $request->total,
            'freelancer_payment_amount' => $request->total - $commission,
            'platform_commission_rate'  => $commission_rate,
            'bid_request_id'            => $bidRequest->id,
            'freelancer_id'             => auth()->user()->id,
        ]);

        return redirect()->route('freelancer.bidRequests.show', $bidRequest->uuid)->withSuccess(__('Successfully submitted'));
    }

    public function destroy(Bid $bid)
    {
        $bid_request_uuid = $bid->bidRequest->uuid;
        $bid->delete();

        return redirect()->route('freelancer.bidRequests.show', $bid_request_uuid)->withSuccess(__('Successfully withdrawn'));
    }

}
