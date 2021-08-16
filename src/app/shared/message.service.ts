import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../const';
import CONFIG from '../config/config';
import { DescListDialog, DescMessage } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  token: string = '';

  getToken() {
    return localStorage.getItem('tokenUserViewka') || '';
  }

  getListDialogues() {
    return this.httpClient.get<DescListDialog[]>(
      `${BASE_URL}${CONFIG.GET_LIST_DIALOGUES}`,
      {
        headers: { token: this.getToken() },
      }
    );
  }

  getMessageDialog(userId: number) {
    return this.httpClient.get<DescMessage[]>(
      `${BASE_URL}${CONFIG.GET_MESSAGE_DIALOG}`,
      {
        headers: { token: this.getToken(), id: String(userId) },
      }
    );
  }
}
