<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    protected $table = 'education';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'school',
        'learn_time',
        'course',
        'info',
        'status',
    ];
}
