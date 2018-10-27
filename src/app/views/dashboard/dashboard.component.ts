import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  DataAll: Observable<any[]>;
  arraytoPassChartpm = [];
  arraytoPassCharttim = [];
  LineChart =[];
  
  today: number = Date.now()

  
  constructor(public db: AngularFireDatabase) {
    this.DataAll = db.list('Data', ref => ref.limitToLast(1)).valueChanges();
    console.log(this.db.list('Data', ref => ref.limitToLast(1)).valueChanges());
  }

  ngOnInit(): void {
    this.makeChart();
  }

  // mainChart

  makeChart(){
    this.db.list('chart/data/Create_at', ref => ref.limitToLast(50)).valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(date => {
      this.arraytoPassCharttim.push(date);

    this.db.list('chart/data/pm10', ref => ref.limitToLast(50)).valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(pm => {
      this.arraytoPassChartpm.push(pm);

    this.db.list('chart/data/temp', ref => ref.limitToLast(50)).valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(temp => {
      this.arraytoPassChartpm.push(temp);

    this.db.list('chart/data/hum', ref => ref.limitToLast(50)).valueChanges().pipe(map(res => {
      return res.map(eachlLabel => eachlLabel)
    })).subscribe(hum => {
      this.arraytoPassChartpm.push(hum);

      this.LineChart = new Chart('lineChart',{
        type: 'line',
        data: {
          labels: date,
          datasets: [{
            data: pm,
            label: "PM10",
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
          },
          {
            data: temp,
            label: "Temperature",
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
          },
          {
            data: hum,
            label: "Humidity",
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
                autoSkipPadding: 10,
                type: 'time',
                beginAtZero: true,
                maxTicksLimit: 20,
              }
            }]
          }
        }
      })
    })
  })
  })
  })
  }
}

