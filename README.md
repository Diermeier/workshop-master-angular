# workshop-master-angular
https://www.udemy.com/course/the-complete-guide-to-angular-2/
https://github.com/mschwarzmueller/angular-complete-guide-course-resources.git

# Deploy
```
npm start
```
# New Component
```
ng generate component #name#
```
# TypeScript
StringInterpolation (Von HTMl auf TypeScript Properties zugreifen): 
```html
<span>{{ ... }}</span>
```
## DataBinding (Attribut in eckige Klammern packen)
```html
<img [src]="'path/' + user.value" />
```
```ts
get selectedUserImagePath(){
	return 'assets/users/' + this.selectedUser.avatar
}
```

## Event
```ts
<button (click)="onSelectUserClick()" />

onSelectUserClick(){
	console.log("blub")
}
```

## Property Inputs
// Damit eine Angular-Komponente Attribute anbieten kann gibt es 2 Wege via "Dekorator" und "input.Required"

// Variante A: Via Decorator
```
@Input({required: true}) avatar!: string;
@Input({required: true}) name!: string;
```
//Variante B: Via input-method
```
avatars = input.required<string>();
name = input<string>();
```

## Condittional CSS Styling

The value of 'selected' must be a boollean.

```html
<button [class.active]="selected" (click)="...">
	...
</button>
```

## Two-Way-Binding
TypScript:
```ts
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
})
```

HTML:
```html
<input type="text" id="title" name="title" [(ngModel)]="enteredSummary"/>
```

## Shared-Component -> Kinder durchreichen
```html
<div>
    <ng-content />
</div>
```

## DependencyInjection-Component
```ts
@Injectable({ providedIn: 'root' })
excport class MyService {
	// ...
}
```

# Other
Properties VS. Attribut - Binding
https://jakearchibald.com/2024/attributes-vs-properties/

Binding VS. Signals + Computed
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/43788538

DatePipe-Formats
https://v17.angular.io/api/common/DatePipe

