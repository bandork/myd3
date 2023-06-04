import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-myd3chart',
  templateUrl: './myd3chart.component.html',
  styleUrls: ['./myd3chart.component.css']
})
export class Myd3chartComponent implements AfterViewInit{

  @ViewChild('canvas') canvas!: ElementRef;
  ngAfterViewInit() {
    const data = [ 2, 4, 2, 6, 8 ]
    this.drawBarChart(data)
  }

  drawBarChart(data: number[])  {
    const canvasHeight = 400
    const canvasWidth = 600
    const scale = 20

    const svgCanvas = d3.select(this.canvas.nativeElement)
    .append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight)
    .style("border", "1px solid black");

    svgCanvas.selectAll("rect")
    .data(data).enter()
         .append("rect")
         .attr("width", 40)
         .attr("height", (datapoint) => datapoint * scale)
         .attr("fill", "orange")
         .attr("x", (datapoint, iteration) => iteration * 45)
         .attr("y", (datapoint) => canvasHeight - datapoint * scale);

    svgCanvas.selectAll("text")
    .data(data).enter()
        .append("text")
        .attr("x", (dataPoint, i) => i * 45 + 10)
        .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
        .text(dataPoint => dataPoint);
  }
}
