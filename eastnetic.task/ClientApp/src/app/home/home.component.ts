import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RectangleDimensionService } from './../services/rectangle-dimension.service';

const enum Status {
  OFF = 0,
  RESIZE = 1
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public width: number = 0;
  public height: number = 0;

  @ViewChild("box", { static: true }) public box: ElementRef;

  private boxPosition: { left: number, top: number };
  public mouse: { x: number, y: number }
  public status: Status = Status.OFF;

  constructor(private rectangleDimensionService: RectangleDimensionService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadBox();
  }

  initDimension() {
    this.rectangleDimensionService.getInitialDimension()
    .subscribe((res: RectangleDimension) => {
      console.log(res, "res");
      
      this.width = res.width;
      this.height = res.height;
    });
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  setStatus(event: MouseEvent, status: number) {

    if (status === 1)  event.stopPropagation();
    else this.loadBox();

    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };
    if (this.status === Status.RESIZE) this.resize();
  }

  private resize() {
    this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
    this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
  }

  initialDimension() {
    this.initDimension();
  }

  updateNewDimension() {
    const rectangle: RectangleDimension = {
      width: this.width,
      height: this.height
    };
    this.rectangleDimensionService.UpdateDimension(rectangle)
    .subscribe(res => alert("update successful"))
  }

}
