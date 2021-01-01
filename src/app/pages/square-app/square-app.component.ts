import { Component, OnInit } from '@angular/core';
import { square } from 'src/app/models/square.model';
import { SquareService } from '../../square.service'
// import service
@Component({
  selector: 'app-square-app',
  templateUrl: './square-app.component.html',
  styleUrls: ['./square-app.component.scss']
})
export class SquareAppComponent implements OnInit {
  squares: square[] = []
  constructor(private squareService: SquareService) {}

  async ngOnInit(): Promise<void> {

    this.squares = await this.squareService.query()
    console.log(this.squares);
  }

}
