import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(user: string, password: string) {
    return this.auth.signInWithEmailAndPassword(user, password);
  }

  register(user: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(user, password);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  authState() {
    return this.auth.authState;
  }

  logout() {
    return this.auth.signOut();
  }
}
