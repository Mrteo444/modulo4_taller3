import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  private API_LIBROS=" http://localhost:3000/libros"

  postLibros(libro:JSON):Observable<any>{
    return this.http.post(this.API_LIBROS,libro);
  }

  ////eliinar drop 

  droplibros(id:string):Observable<any>{
    return this.http.delete(`${this.API_LIBROS}/${id}`);
  }

  ///editar 


  putlibros(auto:any):Observable<any>{
    return this.http.put(`${this.API_LIBROS}/${auto.id}`,auto);
  }

  
  ///leer una solo paersona get 

  getlibro(id:string):Observable<any>{

    return this.http.get(this.API_LIBROS+"/"+id)
  }


  //leees datos get 
  getLibros():Observable<any>{
    return this.http.get(this. API_LIBROS);
  }
}
