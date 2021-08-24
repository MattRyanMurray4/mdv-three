import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Friend } from '@humans/api-interfaces';
import { FriendsService, NotifyService } from '@humans/core-data';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FriendsFacade {
  private _allFriendsSource$ = new BehaviorSubject<Friend[]>([]);
  allFriends$: Observable<Friend[]> = this._allFriendsSource$.asObservable();
  private _selectedFriendSource = new BehaviorSubject<Friend>({} as Friend);
  selectedFriend$: Observable<Friend> =
    this._selectedFriendSource.asObservable();

  constructor(
    private friendsService: FriendsService,
    private notify: NotifyService
  ) {}

  loadFriends() {
    this.friendsService
      .all()
      .pipe(
        tap((friends) => this._allFriendsSource$.next(friends)),
        take(1)
      )
      .subscribe();
  }

  selectFriend(friendId: string) {
    return this.friendsService
      .find(friendId)
      .pipe(
        tap((friendId) => this._selectedFriendSource.next(friendId)),
        take(1)
      )
      .subscribe(() => {
        this.loadFriends();
      });
  }

  createFriend(friend: Friend) {
    return this.friendsService
      .create(friend)
      .pipe(
        tap((friend) => this._selectedFriendSource.next(friend)),
        take(1)
      )
      .subscribe(() => {
        this.loadFriends();
        this.notify.notification(`Created ${friend.name} successful!`);
      });
  }

  updateFriend(friend: Friend) {
    return this.friendsService
      .update(friend)
      .pipe(
        tap((friend) => this._selectedFriendSource.next(friend)),
        take(1)
      )
      .subscribe(() => {
        this.loadFriends();
        this.notify.notification(`Updated ${friend.name} successful!`);
      });
  }

  deleteFriend(friend: Friend) {
    return this.friendsService
      .delete(friend)
      .pipe(
        tap((friend) => this._selectedFriendSource.next(friend)),
        take(1)
      )
      .subscribe(() => {
        this.loadFriends();
        this.notify.notification(`Deleted ${friend.name} successful!`);
      });
  }
}
