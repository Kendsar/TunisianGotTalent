import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  `]
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
