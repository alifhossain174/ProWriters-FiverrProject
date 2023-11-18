<?php

namespace App\Listeners;

use App\Events\FreelancerApplicationApprovedEvent;
use App\Mail\ApplicationApproved;
use Illuminate\Support\Facades\Mail;

class FreelancerApplicationApprovedListener
{

    /**
     * Handle the event.
     *
     * @param  \App\Events\FreelancerApplicationApprovedEvent  $event
     * @return void
     */
    public function handle(FreelancerApplicationApprovedEvent $event)
    {
        $user = $event->user;

        $mail = Mail::to($user->email);

        if ($user->language) {
            $mail->locale($user->language);
        }

        $mail->send(new ApplicationApproved($user, $event->password));
    }
}
