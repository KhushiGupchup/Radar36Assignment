import { Component } from '@angular/core';
import { CreateProjectComponent } from './create-project/create-project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateProjectComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'radar36-assignment';
}
