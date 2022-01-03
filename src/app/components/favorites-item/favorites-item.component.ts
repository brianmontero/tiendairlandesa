import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.css']
})
export class FavoritesItemComponent implements OnInit {

  @Input() list: Products;
  userUID: string;

  constructor(private auth: AuthService, private firestore: CollectionsService) { }

  ngOnInit(): void {
    this.auth.authState().subscribe(res => this.userUID = res.uid);
  }

  async deleteItem(item: any, e: any) {
    e.stopPropagation();
    await this.firestore.deleteId(this.userUID, item);
    window.location.reload();
  }

}
