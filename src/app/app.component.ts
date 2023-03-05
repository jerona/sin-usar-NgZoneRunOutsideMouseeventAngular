import { Component, OnInit, NgZone, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('elementDiv') elementDiv: any;
  // private unlisten: Function | undefined;
  public title = 'AppComponent';

  constructor(/*private ngZone: NgZone, private renderer: Renderer2*/) {}
  ngOnInit() {}
  ngAfterViewInit() {
    /*this.ngZone.runOutsideAngular(() => {
      this.unlisten = this.renderer.listen(
        this.elementDiv.nativeElement,
        'mousemove',
        () => {
          this.actionEventMouseMove();
        }
      );
    });*/
  }

  ngOnDestroy() {
    // if (this.unlisten){this.unlisten();}
  }

  public chivatoRender = () => {console.log('$renderizado ' + this.title);};
  public actionEventClick = () => {console.log('$event click ' + this.title);};
  public actionEventMouseMove = (event: any) => {console.log('$event mousemove ' + this.title);};
}
