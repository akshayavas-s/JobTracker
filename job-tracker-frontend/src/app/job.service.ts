import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) { }

  addJob(job: Job): Observable<Job>{
    return this.http.post<Job>(`${this.baseUrl}/add`, job);
  }

  getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(`${this.baseUrl}/getAll`);
  }

  deleteJob(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
