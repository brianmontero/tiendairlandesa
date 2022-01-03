import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantity: number = 0;
  sw: boolean;
  username: any;

  constructor(private cart: CartService, private auth: AuthService, private router: Router) {
    this.auth.authState().subscribe(r => {
      if (r === null) {
        this.sw = false;
      }
      else {
        this.sw = true;
        this.username = r.displayName;
      }
    })
  }
      
  ngOnInit(): void {
    this.cart.getTotalPrice().subscribe(r => this.quantity = r.length);
  }

  async logout() {
    try {
      await this.auth.logout();
      await this.router.navigate(['/']);
      window.location.reload();
    }
    catch (e) {
      alert(e);
    }
  }

  search(searchValue: string) {
    this.router.navigate(['/busqueda', searchValue]);
  }

}
