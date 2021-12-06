import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { chatData, ChatData, ChatPreview } from '../assets/chat-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  chatMessages: BehaviorSubject<ChatData[]>;
  constructor() {
    this.chatMessages = new BehaviorSubject<ChatData[]>(chatData);
  }

  getChatData(): Observable<ChatData[]> {
    return this.chatMessages.asObservable();
  }

  getChatsPreview(): Observable<ChatPreview[]> {
    return this.chatMessages.asObservable().pipe(
      map((chats: ChatData[]) => {
        return chats.map(chat => {
          const innerChat: any = chat;
          const lastMessage = innerChat.messages.length
            ? innerChat.messages[innerChat.messages.length - 1].message
            : '';
          return {
            avatar: innerChat.avatar,
            name: innerChat.name,
            post: innerChat.post,
            lastMessage,
          } as ChatPreview;
        });
      }),
    );
  }

  getChatDetails(id): Observable<ChatData> {
    return this.chatMessages.asObservable().pipe(map(chats => chats[id]));
  }
}
