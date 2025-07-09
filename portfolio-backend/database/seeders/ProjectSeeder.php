<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        Project::create([
            'title' => 'E-Commerce Website',
            'description' => 'A full-stack e-commerce website built with Laravel and React. Features include user authentication, product catalog, shopping cart, and payment integration.',
            'technologies' => 'Laravel, React, MySQL, Bootstrap',
            'image_url' => 'https://via.placeholder.com/400x300',
            'demo_link' => 'https://demo-ecommerce.com',
            'github_link' => 'https://github.com/yourusername/ecommerce-project',
            'featured' => true
        ]);

        Project::create([
            'title' => 'Task Management App',
            'description' => 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress.',
            'technologies' => 'PHP, JavaScript, MySQL, CSS',
            'image_url' => 'https://via.placeholder.com/400x300',
            'demo_link' => null,
            'github_link' => 'https://github.com/yourusername/task-manager',
            'featured' => false
        ]);

        Project::create([
            'title' => 'Weather Dashboard',
            'description' => 'A responsive weather dashboard that displays current weather and forecasts for multiple cities using external weather API.',
            'technologies' => 'HTML, CSS, JavaScript, Weather API',
            'image_url' => 'https://via.placeholder.com/400x300',
            'demo_link' => 'https://weather-dashboard-demo.com',
            'github_link' => 'https://github.com/yourusername/weather-dashboard',
            'featured' => false
        ]);
    }
}