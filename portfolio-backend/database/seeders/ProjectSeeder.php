<?php

namespace Database\Seeders;

use App\Models\Project; // Pastikan ini ada
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use SebastianBergmann\Type\FalseType;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data untuk proyek pertama
        Project::firstOrCreate(
            ['title' => 'Guest Registration App'], // Kriteria untuk mencari (misal: berdasarkan judul)
            [
                'description' => 'A pure frontend application for recording guest data, featuring CSV export and local storage (LocalStorage).',
                'technologies' => 'React.js, Vite, CSS, LocalStorage, DownloadCSV',
                'image_url' => '/img/Catatan Tamu Web.png',
                'demo_link' => null,
                'github_link' => 'https://github.com/fandisamaga/tamu-penginapan',
                'featured' => false
            ]
        );

        // Data untuk proyek kedua
        Project::firstOrCreate(
            ['title' => 'Akademik Web'], // Kriteria untuk mencari
            [
                'description' => 'Built a monolithic web application for academic data management using Laravel with Blade-based frontend.',
                'technologies' => 'Laravel, Tailwind CSS, Vite, MariaDB',
                'image_url' => '/img/Akademik Web.png',
                'demo_link' => null,
                'github_link' => 'https://github.com/fandisamaga/akademik-sikad',
                'featured' => true
            ]
        );

        // Data untuk proyek ketiga
        Project::firstOrCreate(
            ['title' => 'Sales Web'], // Kriteria untuk mencari
            [
                'description' => 'Built a monolithic web application for sales data management, including products, customers, and sales transactions, using Laravel with Blade-based frontend.',
                'technologies' => 'Laravel, Tailwind CSS, Vite, MariaDB',
                'image_url' => '/img/Sales Web.png',
                'demo_link' => null,
                'github_link' => 'https://github.com/fandisamaga/web-Sales',
                'featured' => true
            ]
        );

        // Tambahkan proyek lain di sini dengan format yang sama
    }
}