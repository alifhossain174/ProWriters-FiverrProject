<?php

return [
    'credit_limit_note' => 'Even if you have zero or negative balance in your wallet, you can still use it to place credit order. You are allowed to have negative balance up to :amount, which you can adjust by paying later',
    'credit_limit_crossed' => 'Insufficient credit to place the order. Your credit limit is :amount',

    'author'    => [
        'discussions'          => [
            'title'     => 'Discussions',
            'sub_title' => 'Discuss with client if you have any confusion',
        ],
        'internal_discussions' => [
            'title'     => 'Internal Discussions',
            'sub_title' => 'Discuss with admin if you have any confusion',
        ],
    ],
    'notifications' => [
        'task_in_progress'                => 'The task :number is in progress',
        'new_order'                       => 'A new order has been placed. Invoice Number : :number',
        'new_bid_request'                 => 'A new bid request has been placed. Bid Request Number : :number',
        'self_assigned_task'              => 'author: has assigned him/her a new task',
        'new_comment_on_task'             => ':author has posted a comment on :task',
        'work_submitted_for_qa'           => 'Works for :number has been uploaded. Please check the work and provide your feedback',
        'task_approved_by_qa'             => 'Work for :number has been approved by the editor and sent to the customer for review',
        'task_rejected_by_qa'             => 'Work for :number has been rejected by the editor and sent back to the author',
        'submitted_for_customer_approval' => 'Files for your task :number is ready for download. Please download the files and submit your feedback',
        'revision_request'                => 'The customer has requested for a revision for task :number',
        'customer_accepted_work'          => 'The customer has accepted the delivered work for :number .The status of the task is now complete',

        'new_bill'                => 'You have a new payment request of total :total from :author',
        'payout_processed_line_1' => 'We sent you money!',
        'payout_processed_line_2' => 'We just processed your payout for :amount against :bill_number',

        'customer_payment_approved' => 'Your payment of :amount via :payment_method, reference number :reference_number has been approved',

        'customer_payment_disapproved' => 'Your payment of :amount via :payment_method, reference number :reference_number has been disapproved. Should you have any query please do not hesitate to contact us',

        'payment_pending_for_approval' => 'A new payment of :amount is pending for your approval',
        
        'new_author_application' => 'A new author has submitted an application. The tracking number is :number',
    ],
    'order_summary'                => [
        'greeting'       => 'Dear :name',
        'message_line_1' => 'Thank you for choosing :company_name, Here\'s a summary of your order :',
        'footer_text'    => 'Thank you for your order',
    ],
    'activity_log'                 => [
        'author_started_working' => 'has started working on',
        'admin_assigned_task'        => 'has assigned task to :author',
    ],
    'email_subjects'               => [
        'new_task_comment'                => ':number - New comment',
        'submitted_for_qa'                => ':number - Is ready for QA',
        'qa_approved'                     => ':number - The editor has approved the work',
        'qa_rejected'                     => ':number - The editor has rejected the work',
        'submitted_for_customer_approval' => ':number - Is ready for download',
        'revision_request'                => ':number - Request for a revision',
        'customer_accepted_work'          => ':number - The customer has approved the work',
        'payout_processed'                => 'You have received your payment',
        'customer_payment_approved'       => 'Your payment has been approved',
        'customer_payment_disapproved'    => 'Your payment has been disapproved',

        'payment_pending_for_approval' => ':number - A new payment is pending for your approval',

    ],
    'cookie' => [
        'message' => 'This website uses cookies to ensure you get the best experience on our website',
        'ok_button_text' => 'Got it!'
    ]
];
