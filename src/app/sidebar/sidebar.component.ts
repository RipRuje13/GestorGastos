import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isExpanded = false;
  isVisible = false;
  private subscription!: Subscription;

  @Output() toggle = new EventEmitter<boolean>();

  constructor(private sidebarService: SidebarService){}

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
    this.toggle.emit(this.isExpanded);
  }
}
