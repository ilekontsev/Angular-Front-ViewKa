import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DescListDialog, DescMessage } from '../interfaces/interfaces';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public isChatDisplayed$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public currentDialog$: BehaviorSubject<DescMessage[]> =
    new BehaviorSubject<any>(null);

  constructor(private messageService: MessageService) {}

  changeStateOfChat(id: number, lastUserDialogData: DescListDialog[]) {
    const index = lastUserDialogData.findIndex(
      (data: { id: number }) => data.id === id
    );
    lastUserDialogData[index].display = !lastUserDialogData[index].display;
    if (lastUserDialogData[index].display) {
      this.messageService.getMessageDialog(id).subscribe((data) => {
        this.currentDialog$.next(data);
      });
    }
    this.isChatDisplayed$.next(lastUserDialogData);
  }
}
