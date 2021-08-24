import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsFacade } from './friends/friends.facade';

@NgModule({
  imports: [CommonModule],
  providers: [FriendsFacade],
})
export class CoreStateModule {}
