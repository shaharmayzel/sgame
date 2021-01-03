import { Component, OnInit, Input } from '@angular/core';
import { square } from 'src/app/models/square.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-square-list',
  templateUrl: './square-list.component.html',
  styleUrls: ['./square-list.component.scss']
})
export class SquareListComponent implements OnInit {
  @Input() squares: square[]
  constructor() { }
  ngOnInit(): void { }

}
