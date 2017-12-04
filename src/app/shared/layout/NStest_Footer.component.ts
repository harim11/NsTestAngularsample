import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './NStest_Footer.component.html'
})
export class NsTestFooterComponent {
  today: number = Date.now();
}
