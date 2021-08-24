import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Friend } from '@humans/api-interfaces';

@Component({
  selector: 'humans-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.scss'],
})
export class FriendDetailsComponent {
  currentFriend: Friend;
  originalName: string;

  @Input() set friend(value: Friend | null) {
    if (value) this.originalName = value.name;
    this.currentFriend = Object.assign({}, value);
  }
  @Input()
  form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(friend: Friend) {
    this.saved.emit(friend);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
