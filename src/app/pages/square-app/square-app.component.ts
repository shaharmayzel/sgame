import { Component, OnInit } from '@angular/core';
import { SquareService } from '../../services/square.service'
import { Observable } from 'rxjs';
// import service
@Component({
  selector: 'app-square-app',
  templateUrl: './square-app.component.html',
  styleUrls: ['./square-app.component.scss']
})
export class SquareAppComponent implements OnInit {
  squares: Observable<any[]>
  constructor(private squareService: SquareService) { }

  async ngOnInit(): Promise<void> {

    this.squares = this.squareService.squares

  }

}
