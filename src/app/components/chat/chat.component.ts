import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChatService } from '../../shared/chat.service';
import { Observable, Subscription } from 'rxjs';
import { DescMessage } from '../../interfaces/interfaces';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private lastUserDialogData: any;

  textChat: string = '';

  @ViewChild('chat') set scrollView(chat: ElementRef) {
    if (chat) {
      const chat_div = chat.nativeElement;
      console.log(chat_div.scrollHeight, chat_div.offsetHeight);
      chat_div.scrollTop = Math.max(
        0,
        chat_div.scrollHeight - chat_div.offsetHeight
      );
    }
  }

  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    const dialogSub = this.isChatDisplayed().subscribe((dialogData) => {
      this.lastUserDialogData = dialogData;
    });
    this.subscriptions.push(dialogSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription?.unsubscribe());
  }

  isChatDisplayed(): Observable<any> {
    return this.chatService.isChatDisplayed$;
  }

  messagesForChat(): Observable<DescMessage[]> {
    return this.chatService.currentDialog$;
  }

  handleClickEmoji() {
    console.log(231321312);
  }
  sendMessage(userId: number) {
    this.messageService.sendMessage(userId, this.textChat).subscribe((data) => {
      console.log(data);
    });
    this.textChat = '';
  }

  closeChat(id: number): void {
    this.chatService.changeStateOfChat(id, this.lastUserDialogData);
  }
}
