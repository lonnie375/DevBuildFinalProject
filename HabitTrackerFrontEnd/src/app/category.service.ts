import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(cb:any){
    this.http.get<Category>('https://localhost:7198/category').subscribe(cb);
  }

  getOneCategory(cb:any, cat: any){
    this.http.get<Category>(`https://localhost:7198/category/${cat}`).subscribe(cb);
  }
}
