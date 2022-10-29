<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Computer;

class ComputerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $computers = Computer::all();
        return $computers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $computer = new Computer();
        $computer->gce_nombre_equipo = $request->gce_nombre_equipo;
        $computer->gce_board = $request->gce_board;
        $computer->gce_case = $request->gce_case;
        $computer->gce_procesador = $request->gce_procesador;
        $computer->gce_grafica = $request->gce_grafica;
        $computer->gce_ram = $request->gce_ram;
        $computer->gce_disco_duro = $request->gce_disco_duro;
        $computer->gce_teclado = $request->gce_teclado;
        $computer->gce_mouse = $request->gce_mouse;
        $computer->gce_pantalla = $request->gce_pantalla;
        $computer->gce_estado = $request->gce_estado;

        $computer->save();

        return $computer;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $computer = Computer::findOrFail($request->id);
        $computer->gce_nombre_equipo = $request->gce_nombre_equipo;
        $computer->gce_board = $request->gce_board;
        $computer->gce_case = $request->gce_case;
        $computer->gce_procesador = $request->gce_procesador;
        $computer->gce_grafica = $request->gce_grafica;
        $computer->gce_ram = $request->gce_ram;
        $computer->gce_disco_duro = $request->gce_disco_duro;
        $computer->gce_teclado = $request->gce_teclado;
        $computer->gce_mouse = $request->gce_mouse;
        $computer->gce_pantalla = $request->gce_pantalla;
        $computer->gce_estado = $request->gce_estado;

        $computer->save();

        return $computer;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $computer = Computer::findOrFail($request->id);
        $computer->delete();
        return $computer;

    }

    /* ACTUALIZAR ESTADO DEL COMPUTADOR*/
    public function updateStatus(Request $request)
    {
        $computer = Computer::findOrFail($request->id);

        $computer->update([
            'gce_estado' => $request->status
        ]);

        return $computer;

    }

    /* get One Computer By Id */
    public function getOne($id){

        $computer = Computer::findOrFail($id);
        return $computer;
    }
}
