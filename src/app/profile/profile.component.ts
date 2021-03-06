import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, 
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { 

    }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      //this.router.navigate(['/events']);
      this.toastr.success('Profile Saved');
    } 
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  validateFirstName() {
    return this.firstName.untouched || this.firstName.valid;
  }

  validateLastName() {
    return this.lastName.untouched || this.lastName.valid;
  }

}
