import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@humans/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendsComponent } from './friends/friends.component';
import { FriendDetailsComponent } from './friends/friend-details/friend-details.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { CoreStateModule } from '@humans/core-state';
import { CoreDataModule } from '@humans/core-data';
import { UiLibraryModule } from '@humans/ui-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendDetailsComponent,
    FriendsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreStateModule,
    CoreDataModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
