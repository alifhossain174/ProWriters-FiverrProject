<?php

namespace App\Enums;

abstract class InvoiceStatusType
{
    const UNPAID         = 1;
    const PAID           = 2;
    const PARTIALLY_PAID = 3;
    const OVERDUE        = 4;
    const FORWARDED      = 5;

    public static function get()
    {
        return [
            [
                'name'        => 'Unpaid',
                'description' => 'No payments have been made against them',
            ],
            [
                'name'        => 'Paid',
                'description' => 'Invoice has been paid by the customer in full',
            ],
            [
                'name'        => 'Partial',
                'description' => 'If the balance is not paid in full but a partial payment has been received, it will be marked as partially paid.',
            ],

            [
                'name'        => 'Overdue',
                'description' => 'When the full total balance due of an invoice has not been received by its due date, the invoice will be marked as Overdue.',
            ],
            [
                'name'        => 'Forwarded',
                'description' => 'An invoice will be marked as forward when any past due balances has been added to the new invoice.',
            ],

        ];
    }

    public static function colors()
    {
        return [
            self::UNPAID         => '#ee2b8b',
            self::PAID           => '#b4bd00',
            self::PARTIALLY_PAID => '#fa7901',
            self::OVERDUE        => '#ed1b24',
            self::OVERDUE        => '#00adee',

        ];
    }

    public static function getColorByStatus($status)
    {
        return self::colors()[$status];
    }
}
