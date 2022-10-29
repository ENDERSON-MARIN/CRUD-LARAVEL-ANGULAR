<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Computer extends Model
{
    use HasFactory, SoftDeletes;

    protected $table='gce_caracteristicas';

    protected $primaryKey= 'gce_id';

    public $timestamps=true;

    protected $dates = ['deleted_at'];

    protected $fillable=[

    	'gce_id',
        'gce_nombre_equipo',
    	'gce_board',
    	'gce_case',
    	'gce_procesador',
        'gce_grafica',
        'gce_ram',
        'gce_disco_duro',
        'gce_teclado',
        'gce_mouse',
        'gce_pantalla',
        'gce_estado'
    ];


}
