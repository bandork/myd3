import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-myd3',
  templateUrl: './myd3.component.html',
  styleUrls: ['./myd3.component.css']
})
export class Myd3Component implements AfterViewInit {  
  @ViewChild('myd3Div') myd3Div!: ElementRef;
  @ViewChild('temperatures') temperatures!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;
  ngAfterViewInit() {
    d3.selectAll("p").style("color", "pink");

    this.myd3Div.nativeElement.innerHTML = 'Whale!';
    d3.select(this.myd3Div.nativeElement).style("color", "orange");

    var temperatureData = [ 8, 5, 13, 9, 12 ]
    var u = d3.select(this.temperatures.nativeElement)
        .selectAll("h2")
        .data(temperatureData);
        
    u
    .enter()
    .append("h2");

    u.text((datapoint) => datapoint + " degrees") ;

    d3.select(this.temperatures.nativeElement).selectAll("h2")
        .style("color", function() {
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            }
        );

  u.exit().remove();

  d3.select(this.temperatures.nativeElement).selectAll("h2")
    .transition().duration(2000).delay(20)
    .style("background-color", "red");

  }
}
