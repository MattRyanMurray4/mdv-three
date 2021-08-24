import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Friend } from '@humans/api-interfaces';

@Component({
  selector: 'humans-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent {
  @Input() friends: Friend[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
