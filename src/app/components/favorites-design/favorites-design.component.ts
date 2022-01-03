import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favorites-design',
  templateUrl: './favorites-design.component.html',
  styleUrls: ['./favorites-design.component.css']
})
export class FavoritesDesignComponent implements OnInit {

  products: Products[] = [];
  userUID: string;

  constructor(private auth: AuthService, private firestore: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.auth.authState().subscribe(res => {
      this.firestore.collection('favorites').doc(res.uid).get().subscribe((doc: any) => {
        this.products = doc.data().obj;
      });
    });
  }

  showItem(value: number) {
    this.router.navigate(['/product', value]);
  }

  goToStore() {
    this.router.navigate(['/']);
  }

}
