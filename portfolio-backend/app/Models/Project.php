<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'technologies',
        'image_url',
        'demo_link',
        'github_link',
        'featured'
    ];

    protected $casts = [
        'featured' => 'boolean',
    ];
}