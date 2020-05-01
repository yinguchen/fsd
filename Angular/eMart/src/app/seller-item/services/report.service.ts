import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../model/report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  getByEmail(email: any) {
    throw new Error("Method not implemented.");
  }
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:8855/report/reports";
   }
   getAll() : Observable<Report []>{
    return this.httpClient.get<Report []>(this.baseUrl);
   }
   getById(email:string) : Observable<Report >{ 
    return this.httpClient.get<Report>(`${this.baseUrl}/${email}`);
   }
   add(user:Report) : Observable<Report >{
     return this.httpClient.post<Report >(this.baseUrl,user);
   }
  }
 
