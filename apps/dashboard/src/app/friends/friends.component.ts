import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyFriend, Friend } from '@humans/api-interfaces';
import { FriendsFacade } from '@humans/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'humans-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  friends$: Observable<Friend[]> = this.friendsFacade.allFriends$;
  selectedFriend$: Observable<Friend> = this.friendsFacade.selectedFriend$;
  form: FormGroup;

  constructor(
    private friendsFacade: FriendsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.friendsFacade.loadFriends();
    this.reset();
  }

  reset() {
    this.selectFriend(emptyFriend);
    this.form.reset();
  }

  selectFriend(friend: Friend) {
    this.friendsFacade.selectFriend(friend.id);
    this.form.patchValue(friend);
  }

  createFriend(friend: Friend) {
    this.friendsFacade.createFriend(friend);
    this.reset();
  }

  updateFriend(friend: Friend) {
    this.friendsFacade.updateFriend(friend);
    this.reset();
  }

  saveFriend(friend: Friend) {
    friend.id
      ? this.friendsFacade.updateFriend(friend)
      : this.friendsFacade.createFriend(friend);
  }

  deleteFriend(friend: Friend) {
    this.friendsFacade.deleteFriend(friend);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      description: ['', Validators.required],
      yearsKnown: [''],
      coolnessLevel: [''],
      closeFriend: [''],
    });
  }
}
