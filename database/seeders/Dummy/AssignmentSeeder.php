<?php

namespace Database\Seeders\Dummy;

use App\Enums\ServiceType;
use App\Models\Business\Assignment;
use App\Models\Business\Urgency;
use Illuminate\Database\Seeder;

class AssignmentSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createAcademicAssignments();
        $this->createContentAssignments();
        $this->createResumeAssignments();
    }

    private function createAcademicAssignments()
    {
        $records = [
            'Essay',
            'UK Essay',
            'Coursework',
            'Term Paper',
            'Research Paper',
            'Case study',
            'Capstone Project',
            'Outline',
            'Report',
            'Book report',
            'Book review',
            'Movie review',
            'Research summary',
            'Thesis',
            'Discussion board post',
            'Lab report',
            'Article',
            'Article critique',
            'Annotated bibliography',
            'Reaction paper',
        ];

        foreach ($records as $name) {
            $data[] = [
                'service_id' => ServiceType::ACADEMIC_WRITING,
                'name'       => $name,
            ];
        }
        Assignment::insert($data);
    }

    private function createContentAssignments()
    {
        $records = [
            'Article',
            'Product Description',
            'Press Release',
            'Blog Post',
            'News Article',
            'Website Content',
            'Product review',
            'Facebook Post',
            'Twitter Post',
            'LinkedIn Post',
            'Email Newsletter',
            'White Paper',
        ];

        foreach ($records as $name) {
            $data[] = [
                'service_id' => ServiceType::CONTENT_WRITING,
                'name'       => $name,
            ];
        }
        Assignment::insert($data);
    }

    private function createResumeAssignments()
    {
        $urgencies = Urgency::orderBy('id', 'DESC')->limit(3)->pluck('id')->toArray();
        sort($urgencies);

        $records = [
            [
                'service_id'                => ServiceType::RESUME_WRITING,
                'name'                      => 'Starter - Professional Growth',
                'price'                     => 149,
                'description'               => 'An expertly written and keyword-optimized resume that sets you apart',
                'deliverables'              => '<ul><li>Professionally written - By experts that know your industry.</li><li>Formatted for success - Formatting that will get an employer\'s attention.</li><li>Keyword optimized - Your resume will be optimized to pass through Applicant Tracking Systems.</li></ul>',
                'author_level_id'       => 1,
                'author_payment_amount' => 100,               
                'urgency_id'                => $urgencies[0],

            ],
            [
                'service_id'                => ServiceType::RESUME_WRITING,
                'name'                      => 'Premium - Career Evolution',
                'price'                     => 219,
                'description'               => 'Everything you need to apply to jobs, including a resume and cover letter.',
                'deliverables'              => '<ul><li>Professionally written - By experts that know your industry.</li><li>Formatted for success - Formatting that will get an employer\'s attention.</li><li>Keyword optimized - Optimized to pass through Applicant Tracking Systems.</li><li>Cover letter - Employers are 40% more likely to read a resume with a cover letter.</li><li>60-day interview guarantee.</li></ul>',
                'author_level_id'       => 2,
                'author_payment_amount' => 180,                
                'urgency_id'                => $urgencies[1],
            ],
            [
                'service_id'                => ServiceType::RESUME_WRITING,
                'name'                      => 'Ultimate - Executive Priority',
                'price'                     => 349,
                'description'               => 'Resume, cover letter, and LinkedIn profile, created by an executive writer.',
                'deliverables'              => '<ul><li>Professionally written - By experts that know your industry.</li><li>Formatted for success - Formatting that will get an employer\'s attention.</li><li>Keyword optimized - Your resume will be optimized to pass through Applicant Tracking Systems.</li><li>Cover letter - Employers are 40% more likely to read a resume with a cover letter.</li><li>60-day interview guarantee.</li><li>LinkedIn Makeover - 97% of employers use LinkedIn; we\'ll rewrite your profile.</li></ul>',
                'author_level_id'       => 3,
                'author_payment_amount' => 200,                
                'urgency_id'                => $urgencies[2],
            ],

        ];

        Assignment::insert($records);
    }
}
