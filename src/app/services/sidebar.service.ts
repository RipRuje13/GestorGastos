import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private visible = new BehaviorSubject<boolean>(false);
  isVisible$ = this.visible.asObservable();

  show(){
    this.visible.next(true);
  }

  hide(){
    this.visible.next(false);
  }

  constructor() { }
}
