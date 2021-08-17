import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { DescListDialog } from '../../interfaces/interfaces';
import { ChatService } from '../../shared/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-dialogues',
  templateUrl: './list-dialogues.component.html',
  styleUrls: ['./list-dialogues.component.scss'],
})
export class ListDialoguesComponent implements OnInit, OnDestroy {
  listDialogues: DescListDialog[] = [];
  private subscriptions: Subscription[] = [];
  private lastUserDialogData: any;

  constructor(
    private messageService: MessageService,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.messageService.getListDialogues().subscribe(
      (data) => {
        this.listDialogues = data.map((item) => {
          item.display = false;
          return item;
        });
        this.chatService.isChatDisplayed$.next(this.listDialogues);
      },
      (error) => {
        console.log(error);
      }
    );

    const dialogSub = this.chatService.isChatDisplayed$.subscribe(
      (dialogData) => {
        this.lastUserDialogData = dialogData;
      }
    );
    this.subscriptions.push(dialogSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription?.unsubscribe());
  }

  getMessageDialog(userId: number) {
    this.chatService.changeStateOfChat(userId, this.lastUserDialogData);
  }
}
