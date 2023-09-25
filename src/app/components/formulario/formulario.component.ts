import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  categoriaSeleccionada: string = 'general';
  paisSeleccionado: string = 'co';

  @Output() parametrosSeleccionado = new EventEmitter<any>();

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'busines', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'entretenimiento ' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'ciencia' },
    { value: 'sport', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnologia' },
  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' },
    { value: 'co', nombre: 'Colombia' },
  ];

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    this.parametrosSeleccionado.emit(PARAMETROS)
  }
}
