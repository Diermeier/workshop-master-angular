import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({ required: true }) selected!: boolean
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatars!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();
  // avatarss = input.required<string>();
  // name = input<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  protected onSelectUserClick(){
    this.select.emit(this.user.id);
  }

  // selectedUser = DUMMY_USERS[randomIndex]

  // get selectedUserImagePath(){

  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // protected onSelectUserClick(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser = DUMMY_USERS[randomIndex]
  // }
}
