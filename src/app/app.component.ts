import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { AuthInterceptorService } from './services/auth.interceptor.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  providers: [
    AuthService,
    TokenService,
    AuthInterceptorService
  ],
  imports: [
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
})
export class AppComponent {
  constructor() {}
}
