import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  constructor(private ruta:ActivatedRoute,private servici:LibrosService){ }


  libros:any


  ngOnInit() {
    this.ruta.params.subscribe(params => {
      let id = params['idlibro1'];

      this.servici.getlibro(id).subscribe(libro=> {
        this.libros = libro;
      });
    });
  } 

}
