import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.css']
})
export class CountInputComponent implements OnInit {
  @Input()
counterValue = 0;
counteValue = 0;


increment(){
this.counterValue ++;
}

decrement(){
this.counteValue ++;
} 
  constructor() { }

  ngOnInit(): void {
  }

}