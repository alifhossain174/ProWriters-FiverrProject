<?php

namespace App\Listeners;

use App\Events\FreelancerApplicationReceivedEvent;
use App\Notifications\NewFreelancerApplication;

class FreelancerApplicationReceivedListener
{

    /**
     * Handle the event.
     *
     * @param  \App\Events\FreelancerApplicationReceivedEvent  $event
     * @return void
     */
    public function handle(FreelancerApplicationReceivedEvent $event)
    {
        send_notification_to_admins(new NewFreelancerApplication($event->applicant));

        // Send Notification Email to Company
        send_notification_to_company(new NewFreelancerApplication($event->applicant));
    }
}
