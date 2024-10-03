import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { TypewritereffectService } from '../typewritereffect.service';
import { map } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports:[MatDialogModule],
})
export class AboutComponent {
  intro = ['Hello! My Name is'];
  myName = ['Gregory R. III']
  jobTitle = ["I'm a Software Developer",
    "I Can Construct",
    "Full-Stack Applications"]
  private typewriterService = inject(TypewritereffectService);

  typedIntro$ = this.typewriterService
    .getTypewriterEffect(this.intro)
    .pipe(map((text) => text));

  typedName$ = this.typewriterService
  .getTypewriterEffect(this.myName)
  .pipe(map((text) => text));

  typedJobTitle$ = this.typewriterService
  .getTypewriterEffect(this.jobTitle)
  .pipe(map((text) => text));

// Dialog for read more----------------------------------------------------------------
  readonly dialog = inject(MatDialog);

openDialog() {
  const dialogRef = this.dialog.open(DialogComponent, {
    height: '14em',
    width: '45em',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

// function to open the links------------------------------------------------
goToLink(url: string) {
  window.open(url, '_blank');
    }
}
