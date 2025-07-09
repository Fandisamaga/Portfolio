<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

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