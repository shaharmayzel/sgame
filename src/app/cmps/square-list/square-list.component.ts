import { Component, OnInit, Input } from '@angular/core';
import { Square } from 'src/app/models/square.model';


@Component({
  selector: 'app-square-list',
  templateUrl: './square-list.component.html',
  styleUrls: ['./square-list.component.scss']
})
export class SquareListComponent implements OnInit {
  @Input() squares: Square[]
  constructor() { }
  ngOnInit(): void { }

}
