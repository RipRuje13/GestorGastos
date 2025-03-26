import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  private sidebarSubscription!: Subscription;
  isVisible = true;
  sidebarExpanded = false;

  constructor( private sidebarService: SidebarService){}

  ngOnInit() {
    this.sidebarService.show();
  }

  ngOnDestroy() {
    this.sidebarService.hide();
    if(this.sidebarSubscription){
      this.sidebarSubscription.unsubscribe();
    }
  }

  onSidebarToggle(expanded: boolean){
    this.sidebarExpanded = expanded;
  }

}
