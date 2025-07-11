<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException; // Tambahkan ini

class ProjectController extends Controller
{
    public function index()
    {
        try {
            $projects = Project::orderBy('created_at', 'desc')->get();

            return response()->json([
                'success' => true,
                'data' => $projects
            ]);

        } catch (QueryException $e) {
            // Jika terjadi error spesifik pada query database, kita akan menampilkannya
            return response()->json([
                'success' => false,
                'message' => 'Terjadi error pada query database.',
                'error_detail' => $e->getMessage() // Ini akan menampilkan pesan error asli dari database
            ], 500);

        } catch (\Exception $e) {
            // Jika terjadi error umum lainnya
            return response()->json([
                'success' => false,
                'message' => 'Terjadi error umum pada server.',
                'error_detail' => $e->getMessage()
            ], 500);
        }
    }

    // --- Biarkan method (fungsi) lain di bawah ini tidak berubah ---

    public function show(Project $project)
    {
        return response()->json([
            'success' => true,
            'data' => $project
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'required|string',
            'image_url' => 'nullable|url',
            'demo_link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'featured' => 'boolean'
        ]);

        $project = Project::create($validated);

        return response()->json([
            'success' => true,
            'data' => $project
        ], 201);
    }
}