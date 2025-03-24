import { CommonModule } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import ApexCharts from 'apexcharts';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-reports',
  imports: [SidebarComponent,CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css',]
})
export class ReportsComponent implements OnInit, OnDestroy  {

  private sidebarSubscription!: Subscription;
  isVisible = true;
  sidebarExpanded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private sidebarService: SidebarService
  ) {}

  ngOnInit() {

    this.sidebarService.show();

    if (isPlatformBrowser(this.platformId)) {
      // Importación dinámica SOLO en el navegador
      import('apexcharts').then((ApexCharts) => {
        this.renderCharts(ApexCharts.default);
      }).catch(err => {
        console.error('Error al cargar ApexCharts:', err);
      });
    }
  }

  ngOnDestroy() {
    this.sidebarService.hide();
    if(this.sidebarSubscription){
      this.sidebarSubscription.unsubscribe();
    }
  }



  renderCharts(ApexCharts: any) {
    // Gráfico de Barras (Gastos vs Ingresos)
    const barOptions = {
      chart: { type: 'bar', height: 350 },
      series: [
        { name: 'Gastos', data: [1200, 1800, 1400, 2000, 2300, 1900] },
        { name: 'Ingresos', data: [1500, 2100, 1600, 2500, 2700, 2400] }
      ],
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }
    };
    new ApexCharts(document.querySelector("#bar-chart"), barOptions).render();

    // Gráfico Circular (Distribución de Gastos por Categoría)
    const pieOptions = {
      chart: { type: 'pie', height: 350 },
      series: [30, 25, 20, 15, 10],
      labels: ['Comida', 'Transporte', 'Entretenimiento', 'Renta', 'Otros']
    };
    new ApexCharts(document.querySelector("#pie-chart"), pieOptions).render();

    // Gráfico de Líneas (Tendencia de Gastos e Ingresos)
    const lineOptions = {
      chart: { type: 'line', height: 350 },
      series: [
        { name: 'Gastos', data: [1000, 1200, 1400, 1800, 2000, 2200] },
        { name: 'Ingresos', data: [1300, 1500, 1700, 2000, 2200, 2500] }
      ],
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }
    };
    new ApexCharts(document.querySelector("#line-chart"), lineOptions).render();

    // Gráfico de Dispersión (Gastos por Día)
    const scatterOptions = {
      chart: { type: 'scatter', height: 350 },
      series: [
        { name: 'Gastos', data: [[1, 500], [2, 1500], [3, 700], [4, 900], [5, 1300], [6, 1100]] }
      ],
      xaxis: { type: 'numeric' }
    };
    new ApexCharts(document.querySelector("#scatter-chart"), scatterOptions).render();

    // Gráfico de Área (Ahorro Acumulado)
    const areaOptions = {
      chart: { type: 'area', height: 350 },
      series: [
        { name: 'Ahorro', data: [500, 700, 1200, 1800, 2500, 3200] }
      ],
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }
    };
    new ApexCharts(document.querySelector("#area-chart"), areaOptions).render();

    // Gráfico de Barras Apiladas (Gastos por Categoría y Mes)
    const stackedBarOptions = {
      chart: { type: 'bar', stacked: true, height: 350 },
      series: [
        { name: 'Comida', data: [400, 450, 500, 600, 700, 750] },
        { name: 'Transporte', data: [300, 350, 400, 450, 500, 550] },
        { name: 'Renta', data: [800, 850, 900, 950, 1000, 1050] }
      ],
      xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }
    };
    new ApexCharts(document.querySelector("#stacked-bar-chart"), stackedBarOptions).render();
  }
}