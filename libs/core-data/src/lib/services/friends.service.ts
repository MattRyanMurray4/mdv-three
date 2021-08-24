import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '@humans/api-interfaces';
import { mapTo } from 'rxjs/operators';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private model = 'friends';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Friend[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Friend>(this.getUrlById(id));
  }

  create(friend: Friend) {
    return this.httpClient.post<Friend>(this.getUrl(), friend);
  }

  update(friend: Friend) {
    return this.httpClient.patch<Friend>(this.getUrlById(friend.id), friend);
  }

  delete(friend: Friend) {
    return this.httpClient
      .delete<Friend>(this.getUrlById(friend.id))
      .pipe(mapTo(friend));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
