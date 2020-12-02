import { Component, OnInit } from "@angular/core";
import { Question } from "../shared/models/question.model";
import { QuestionService } from "../shared/services/question.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"],
})
export class GamePage implements OnInit {
  check: boolean = false;
  questions: Question[] | null = null;
  lifes: number[] = null;
  score: number = null;
  question: Question | null = null;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.questionService.findAll().subscribe((questions: Question[]) => {
      this.questions = questions;
      this.question = questions[0];
    });
    this.lifes = [0, 1, 2];
    this.score = 0;
  }

  checkResponse(boolean: boolean) {
    this.check = true;
    if (this.question.value == boolean) {
      console.log("bonne reponse");
      this.score++
    } else {
      console.log("mauvaise reponse");
      this.lifes.pop()
    }
  }
}
