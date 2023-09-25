import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apikey = 'e91327ccda5641dda5971a64e6dfac57';

  title = 'noticias';

  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    console.log(parametros, 'padre');
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      console.log(data);

    })
  }
}
