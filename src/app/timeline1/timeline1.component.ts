import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-timeline1',
  templateUrl: './timeline1.component.html',
  styleUrls: ['./timeline1.component.css']
})
export class Timeline1Component implements AfterViewInit{
  
  @ViewChild('canvas') canvas!: ElementRef;
  async ngAfterViewInit() {
    d3.csv("/assets/civilization timelines - civilization timelines.csv").then(csv => {
      var data = csv.map(d=>{
        return {
          ...d,
          start: +d!['start']!,
          end: +d!['end']!
        }
        }).sort((a,b)=>  a.start-b.start);

      this.renderData(data as TimelineData[]);
    });
  }
  renderData(data: TimelineData[]) {
  var u = d3.select(this.canvas.nativeElement)
    .selectAll('div')
    .data(data);
  
  u
    .enter()
      .append('div')
      .text(d => d.civilization)
  }
}

export interface TimelineData {
  civilization: string,
  start: number,
  end: number
}
