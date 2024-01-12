import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  isToggled: boolean = false;

  toggleButton() {
    this.isToggled = !this.isToggled;
  }
}
