import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from '../../pages/libros/libros.component';
import { LibrosService } from '../../service/libros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servico=inject(LibrosService)

  libro:any


  ngOnInit(){
    this.servico.getLibros().subscribe(p=>{
      this.libro=p
    })
  }

  eliminar(id:string){
    this.servico.droplibros(id).subscribe()
    location.href='libros'

  }

}
