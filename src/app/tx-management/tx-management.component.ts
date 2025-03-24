import { Component } from '@angular/core';
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
export class TxManagementComponent {
  
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

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;  // Alternar el estado
  }

}
