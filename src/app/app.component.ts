import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  listNoticias:any[] = []
  loading:boolean = false

  title = 'noticias';

  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    // console.log(parametros, 'padre');
    this.loading = true
    this.listNoticias = []
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      console.log(data);
      this.listNoticias = data.articles
      this.loading = false
    },err=>{
      console.log(err);
      this.loading = false
    })
  }
}
