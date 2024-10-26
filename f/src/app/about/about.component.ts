import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { TypewritereffectService } from '../typewritereffect.service';
import { map } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { AsyncPipe} from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports:[MatDialogModule,
     AsyncPipe,],
     animations: [
      trigger('fadeInOut', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('600ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('600ms ease-out', style({ opacity: 0 }))
        ])
      ])
    ]
  })
export class AboutComponent {
  resumeUrl = "https://gregoryrpdfs.s3.us-east-2.amazonaws.com/Gregory+Reeves+SDE+Resume.pdf"
  certUrl = "https://gregoryrpdfs.s3.us-east-2.amazonaws.com/certificate.pdf"

  intro = ['Hello! My Name is'];
  myName = ['Gregory R.']
  jobTitle = ["I'm a Software Engineer",
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
goToLink(pdfUrl: string) {
  if (pdfUrl) {
    window.open(pdfUrl, '_blank');
  } else {
    console.error('PDF URL is not defined.');
  }
}

}
