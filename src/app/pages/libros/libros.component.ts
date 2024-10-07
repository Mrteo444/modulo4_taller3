import { Component, inject } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  servico=inject(LibrosService)

  libro:any


  ngOnInit(){
    this.servico.getLibros().subscribe(p=>{
      this.libro=p
    })
  }

}
