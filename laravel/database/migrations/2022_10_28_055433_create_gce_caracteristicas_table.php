<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGceCaracteristicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gce_caracteristicas', function (Blueprint $table) {
            $table->increments('gce_id');
            $table->string('gce_nombre_equipo')->nullable();
            $table->string('gce_board')->nullable();
            $table->string('gce_case')->nullable();
            $table->string('gce_procesador')->nullable();
            $table->string('gce_grafica')->nullable();
            $table->string('gce_ram')->nullable();
            $table->string('gce_disco_duro')->nullable();
            $table->string('gce_teclado')->nullable();
            $table->string('gce_mouse')->nullable();
            $table->string('gce_pantalla')->nullable();
            $table->integer('gce_estado')->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gce_caracteristicas');
    }
}
