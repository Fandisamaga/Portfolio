<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // INI BARIS PENTING YANG HILANG
        // Panggil seeder proyek Anda di sini
        $this->call([
            ProjectSeeder::class,
        ]);


        // Bagian ini boleh Anda hapus jika tidak memerlukan user
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}