import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
  public user : string = '';
  public message : string = '';
  public time : string = '';
  isSender:boolean = false;
}
