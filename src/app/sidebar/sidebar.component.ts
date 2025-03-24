import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isExpanded = false;
  isVisible = false;
  private subscription!: Subscription;

  constructor(private sidebarService: SidebarService){
    this.sidebarService.isVisible$.subscribe(visible =>{
      this.isVisible = visible;
    });
  }

   ngOnInit() {
    this.subscription = this.sidebarService.isVisible$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidebar(){
    this.isExpanded = !this.isExpanded;
  }
}
