import { CanActivateFn, Router } from '@angular/Router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  
  if (authService.isLoggedIn()) {
    // User is authenticated, allow access

      return true;
    } else {
      // User is not authenticated, redirect to login page
      router.navigate(['/login']);
      return false;
    }
};
