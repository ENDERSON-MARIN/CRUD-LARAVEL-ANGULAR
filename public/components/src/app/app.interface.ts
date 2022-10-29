export interface DataType<T> {
    data: T; response: boolean; status: number;
}

export interface Computer {
  gce_id?:           number;
  gce_nombre_equipo: string;
  gce_board:         string;
  gce_case:          string;
  gce_procesador:    string;
  gce_grafica:       string;
  gce_ram:           string;
  gce_disco_duro:    string;
  gce_teclado:       string;
  gce_mouse:         string;
  gce_pantalla:      string;
  gce_estado:        number;
  deleted_at?:       Date;
  created_at?:       Date;
  updated_at?:       Date;

}

