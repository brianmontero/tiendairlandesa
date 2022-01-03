import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  getDataVar: any;
  data: any;
  idArr: any[] = [];

  constructor(private firestore: AngularFirestore, private toastr: ToastrService) { }

  async addId(uid: string, obj: any) {

    const doc = await this.firestore.collection('favorites').doc(uid).get();
    doc.subscribe(async res => {
      if (!res.exists) {
        this.toastr.success('', 'Producto agragado a favoritos');
        return this.firestore.collection('favorites').doc(uid).set({
          ['obj']: firebase.firestore.FieldValue.arrayUnion(obj)
        })
      }
      else {
        this.data = await res.data();
        
        if (this.data.obj.length != 3) {
          this.toastr.success('', 'Producto agragado a favoritos');
          return this.firestore.collection('favorites').doc(uid).update({
            ['obj']: firebase.firestore.FieldValue.arrayUnion(obj)
          })
        }
        else {
          this.toastr.error('', 'Ya tienes tres favoritos, no puedes agregar más');
        }
      }     
    }
  )}

  deleteId(uid: string, obj: any) {
    return this.firestore.collection('favorites').doc(uid).update({
      'obj': firebase.firestore.FieldValue.arrayRemove(obj)
    });
  }

}
