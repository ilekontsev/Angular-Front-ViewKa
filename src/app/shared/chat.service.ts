import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DescMessage } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public isChatDisplayed$: BehaviorSubject<any> = new BehaviorSubject<boolean>(
    false
  );
  public currentDialog$: BehaviorSubject<DescMessage[]> = new BehaviorSubject<any>(null);
  constructor() {}
}
