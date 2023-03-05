import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, AfterViewInit {
  public title = 'HelloComponent';
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  public chivatoRender = () => {
    console.log('$renderizado ' + this.title);
  };

  public actionOnClickEvent = () => {
    console.log('$event click ' + this.title);
  };
}
