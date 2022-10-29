import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataType, Computer } from './app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  BASE_URL: string = 'http://localhost:8000/api/computers';

  constructor(private http: HttpClient) {}

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.BASE_URL);
  }
  getComputerByID(id: string): Observable<Computer> {
    return this.http.get<Computer>(`${this.BASE_URL}/${id}`);
  }
  createComputer(computer: Computer): Observable<Computer> {
    return this.http.post<Computer>(`${this.BASE_URL}`, computer);
  }

  deleteComputer(id: number): Observable<Computer> {
    return this.http.delete<Computer>(`${this.BASE_URL}/${id}`);
  }

  updateComputer(id: number, computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(`${this.BASE_URL}/${id}`, computer);
  }

  changeStatusComputer(id: number, status: number): Observable<Computer> {
    return this.http.patch<Computer>(`${this.BASE_URL}/${id}`, Number(status));
  }
}
