<?php

namespace App\Models\Billing;

use App\Models\User;
use App\Models\Billing\BillItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bill extends Model
{
    use SoftDeletes;

    protected $casts = [
        'paid' => 'date',
    ];

    protected $fillable = [
        'uuid',
        'number',
        'invoice_number',
        'author_id',
        'total',
        'name',
        'address',
        'note',
        'paid',
        'payment_reference',
        'paid_by_user_id'
    ];

    public function scopeArchiveForAdmin($query, $withArchive)
    {
        if (!filter_var($withArchive, FILTER_VALIDATE_BOOLEAN)) {
            return $query->whereNull('is_archived_for_admin');
        }
        return $query;
    }
    
    public function scopeArchiveForAuthor($query, $withArchive)
    {
        if (!filter_var($withArchive, FILTER_VALIDATE_BOOLEAN)) {
            return $query->whereNull('is_archived_for_author');
        }
        return $query;
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

    public function items()
    {
        return $this->hasMany(BillItem::class);
    }

    public function from()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    // static function statistics()
    // {
    //     $bills['unpaid'] = [
    //         'total' => 0,
    //         'count' => 0
    //     ];
    //     $bills['paid'] = [
    //         'total' => 0,
    //         'count' => 0
    //     ];

    //     $select = DB::raw("(CASE WHEN paid IS NULL THEN 'unpaid' ELSE 'paid' END) as status, count(*) as count, SUM(total) AS total");

    //     $records = Bill::select($select)->groupBy('paid')->get();

    //     if ($records->count() > 0) {
    //         foreach ($records as $row) {
    //             $bills[$row->status]['total'] = $row->total;
    //             $bills[$row->status]['count'] = $row->count;
    //         }
    //     }

    //     return $bills;
    // }
}
