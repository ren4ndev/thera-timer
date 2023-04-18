import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) { }

  ngOnInit() {
  }

  login () {
    this.authService.login(this.username, this.password)
      .subscribe({
        error: (err) => {
          return console.log('Erro', err);
        },
        next: (response) => {
          const token = response.accessToken;
          this.tokenService.setToken(token);
          return console.log('Login feito com sucesso: ', token);
        }
      });
  }

}
