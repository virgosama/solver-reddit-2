import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {
  @Input()
  replies: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
