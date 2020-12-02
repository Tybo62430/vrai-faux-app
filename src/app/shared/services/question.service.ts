import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "../models/question.model";
import { Observable } from "rxjs";

const API: string = "http://localhost:3000/questions";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(API);
  }
}
