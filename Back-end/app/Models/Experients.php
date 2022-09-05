<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experients extends Model
{
    use HasFactory;
    protected $table = 'ixperients';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'work_place',
        'work_time',
        'position',
        'experient',
        'status',
    ];
}
