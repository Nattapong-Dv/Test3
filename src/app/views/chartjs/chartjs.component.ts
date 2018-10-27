import { Component } from '@angular/core';
import { Chart } from 'chart.js'
import { AngularFireDatabase } from 'angularfire2/database'
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  arraytoPassChartpm = [];
  arraytoPassCharttim = [];
  LineChart =[];

  constructor(private db: AngularFireDatabase) { 
    this.makeChart();
  }
  makeChart(){
    this.db.list('chart/data/Create_at').valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(date => {
      // console.log(date)
      this.arraytoPassCharttim.push(date);

    this.db.list('chart/data/pm10').valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(pm => {
      // console.log(pm)
      this.arraytoPassChartpm.push(pm);

      this.LineChart = new Chart('lineChart',{
        type: 'line',
        data: {
          labels: date,
          datasets: [{
            data: pm,
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          }]
        },
        options: {
          title: {
            text: 'PM10',
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 10,
                maxTicksLimit: 20,
                max: 100
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 15,
              }
            }]
          }
        }
      })
    })
  })
  }
}
