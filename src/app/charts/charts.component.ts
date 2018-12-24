import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import $ from 'jquery'
declare var $: $
import Chart from 'chart.js';
import 'chartjs-color';
import 'chartjs-color-string';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chart: any;

  A4 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  B4 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  C5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  D5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  E5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  F5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  G5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];
  A5 = [12, 19, 3, 5, 2, 3,5,7,8,6,11,12,13];

  constructor() { }
  ngOnInit() { }

  runChartJS() {
    var ctx = document.getElementById("myChart")
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330', '360'],
        datasets: [{
          label: 'A4',
          data: this.A4,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'B4',
          data: this.B4,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'D5',
          data: this.D5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'E5',
          data: this.E5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'F5',
          data: this.F5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'G5',
          data: this.G5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'A5',
          data: this.A5,
          backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(128, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 127, 255, 0.6)',
            'rgba(0, 0, 255, 0.6)',
            'rgba(127, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 128, 0.6)',
            'rgba(255, 0, 0, 0.6)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 128, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(128, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 128, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(255, 0, 128, 1)',
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  onChartClick(event) {
    console.log(event);
  }
}
