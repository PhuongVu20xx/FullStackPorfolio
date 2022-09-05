<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'project';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'working_days',
        'verts',
        'edges',
        'faces',
        'tris',
        'solfware',
        'thumbnail',
        'information',
        'status',
    ];
}
