import { environment } from 'src/environments/environment';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Message{
  author: string,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // public messages: Subject<Message>;
  // constructor(private wsService: WebsocketService) { 

  // this.messages = <Subject<Message>>wsService
  // .connect(environment.CHAT_URL)
  // .map((response: MessageEvent): Message => {
  //   let data = JSON.parse(response.data);
  //   return {
  //     author: data.author,
  //     message: data.message
  //   }
  // })
  // }
  
}
