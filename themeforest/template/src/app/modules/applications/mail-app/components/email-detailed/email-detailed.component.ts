import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmailDataService } from '../../services/email-data.service';
import { Location } from '@angular/common';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-email-detailed',
  templateUrl: './email-detailed.component.html',
  styleUrls: ['./email-detailed.component.scss'],
})
export class EmailDetailedComponent implements OnInit {
  emailData$;
  canSendMessage = false;
  emailAvaImg = `${environment.deployAssetsPath}/assets/images/24_mail_ava.png`;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private emailDataService: EmailDataService,
  ) {
    this.emailData$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.emailDataService.getEmails().pipe(map(emails => emails.find(email => email.id === id)));
      }),
    );
  }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
