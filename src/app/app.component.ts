import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fir1 = false;
  public fir3 = false;
  public fir5 = false;
  fir(){
    setTimeout(() => {
      this.fir1 = true
    }, 500)
  }
  fir2(){
    setTimeout(() => {
      this.fir3 = true
    }, 500)
  }
  fir4(){
    setTimeout(() => {
      this.fir5 = true
    }, 500)
  }
}
