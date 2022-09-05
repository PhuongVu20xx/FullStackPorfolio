<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;
    protected $table = 'information';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'info',
        'status',
    ];
}
