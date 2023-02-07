import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    console.log(password.value);
    console.log(password && confirmPassword && password.value !== confirmPassword.value);
    
    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMatch: true } : null;
};