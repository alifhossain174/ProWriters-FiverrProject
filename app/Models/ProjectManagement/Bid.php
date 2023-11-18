<?php

namespace App\Models\ProjectManagement;

use App\Enums\BidRequestStatusType;
use App\Models\User;
use Illuminate\Support\Str;
use App\Models\ProjectManagement\Task;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectManagement\BidRequest;
use App\Models\ProjectManagement\TaskStatus;

class Bid extends Model
{
    protected $fillable = [
        'uuid',
        'bid_request_id',
        'author_id',
        'total',
        'author_payment_amount',
        'platform_commission_rate',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = Str::orderedUuid();
        });
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function bidRequest()
    {
        return $this->belongsTo(BidRequest::class, 'bid_request_id', 'id');
    }

    public static function handleSuccessfulPaymentForBid($bid_id, $task_id)
    {
        $bid  = self::find($bid_id);
        $task = Task::with('urgency')->where('id', $task_id)->get()->first();

        // Get the datetime based on the urgency
        $urgency = $task->urgency;

        // Set urgency

        // Update Task Information
        $task->author_id             = $bid->author_id;
        $task->total                     = $bid->total;
        $task->author_payment_amount = $bid->author_payment_amount;
        $task->task_status_id            = TaskStatus::NEW;
        $task->dead_line                 = get_urgency_date($urgency->type, $urgency->value, 'Y-m-d H:i:s');
        $task->dead_line_for_author  = get_urgency_date($urgency->type_for_writer, $urgency->value_for_writer, 'Y-m-d H:i:s');
        $task->revisions_allowed         = 5;
        $task->save();

        // Close bid
        BidRequest::where('id', $bid->bid_request_id)->update(['bid_request_status_id' => BidRequestStatusType::HIRED]);
    }

}
