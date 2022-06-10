import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  @Output()
  reloadData = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickButton(): void {
    this.reloadData.emit(true);
  }

}
