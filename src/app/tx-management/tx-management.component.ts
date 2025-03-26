import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tx-management',
  imports: [CommonModule,SidebarComponent],
  templateUrl: './tx-management.component.html',
  styleUrls: ['./tx-management.component.css']
})
export class TxManagementComponent implements OnInit, OnDestroy {
  
  private sidebarSubscription!: Subscription;
  isVisible = true;
  sidebarExpanded = false;

  constructor(private sidebarService: SidebarService){}

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
