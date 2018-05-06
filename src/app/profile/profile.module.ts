import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from '../profile/edit-profile';
import { ChangePasswordComponent } from '../profile/change-password';
import { ProfileComponent } from '../profile/profile';
import { ContactInfoComponent } from '../profile/contact-info';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [EditProfileComponent, ChangePasswordComponent,
  ProfileComponent, ContactInfoComponent],
  exports: [
    EditProfileComponent, ChangePasswordComponent,
    ProfileComponent, ContactInfoComponent
  ]
})
export class ProfileModule {}
