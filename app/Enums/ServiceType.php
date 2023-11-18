<?php

namespace App\Enums;

abstract class ServiceType
{
    const CONTENT_WRITING  = 1;
    const ACADEMIC_WRITING = 2;
    const RESUME_WRITING   = 3;

    public static function get()
    {
        return [
            self::ACADEMIC_WRITING => __('Academic Writing'),
            self::CONTENT_WRITING  => __('Content Writing'),
            self::RESUME_WRITING   => __('Resume Writing'),
        ];
    }

    public static function getForFrontEnd()
    {
        return [
            'academic_writing' => self::ACADEMIC_WRITING,
            'content_writing'  => self::CONTENT_WRITING,
            'resume_writing'   => self::RESUME_WRITING,
        ];
    }

    public static function icons()
    {
        return [
            self::ACADEMIC_WRITING => asset('images/service-types/writing.png'),
            self::CONTENT_WRITING  => asset('images/service-types/problem-solving.png'),
            self::RESUME_WRITING   => asset('images/service-types/resume.png'),
        ];
    }

}
