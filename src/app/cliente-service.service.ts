import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './model/cliente';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => lista de pelicula
  getClienteList(): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + "/clientes")
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Crear Cliente
  createCliente(Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl + '/clientes', JSON.stringify(Cliente), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

  // HttpClient API get() method => detalle pelicula
  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + '/clientes/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
