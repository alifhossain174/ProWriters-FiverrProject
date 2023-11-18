<?php

namespace App\Enums;

abstract class BidRequestStatusType
{
    public const OPEN      = 1;
    public const HIRED     = 2;
    public const ON_HOLD   = 3;
    public const CANCELLED = 4;

    public static function frontend()
    {
        return [
            'open'      => self::OPEN,
            'hired'     => self::HIRED,
            'on_hold'   => self::ON_HOLD,
            'cancelled' => self::CANCELLED,
        ];
    }

    public static function getList()
    {
        return [
            ['id' => self::OPEN, 'name' => __('Open'), 'css_badge_name' => 'primary'],
            ['id' => self::HIRED, 'name' => __('Hired'), 'css_badge_name' => 'success'],
            ['id' => self::ON_HOLD, 'name' => __('On Hold'), 'css_badge_name' => 'warning'],
            ['id' => self::CANCELLED, 'name' => __('Cancelled'), 'css_badge_name' => 'danger'],

        ];
    }

}
