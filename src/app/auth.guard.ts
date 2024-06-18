import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
   const auth: AuthService = inject(AuthService);
     if (isAdmin) {
       return true;
    } else {
       return false;
     } 
};
