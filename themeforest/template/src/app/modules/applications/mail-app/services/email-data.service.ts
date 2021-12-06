import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { emailsData } from '../assets/mock.emails.data';

export interface EmailData {
  id;
  name: string;
  title: string;
  message: string;
  date;
  favorite;
  unread;
  attachment;
}

@Injectable({
  providedIn: 'root',
})
export class EmailDataService {
  emails: BehaviorSubject<EmailData[]>;
  emailsModifierSubject = new Subject();
  emailsData;

  constructor() {
    this.emailsData = emailsData;
    this.emails = new BehaviorSubject<EmailData[]>(this.emailsData);
    this.emailsModifierSubject
      .pipe(scan((fullArray, { modifier, payload }) => modifier(fullArray, payload), this.emails.value))
      .subscribe(this.emails);
  }

  getEmails(): Observable<EmailData[]> {
    return this.emails.asObservable();
  }

  toggleFavorite(id, payload) {
    const currentEmails: EmailData[] = this.emails.value.map(item => ({ ...item }));

    currentEmails.forEach(item => {
      if (item.id === id) {
        item.favorite = payload;
      }
    });
    this.emails.next(currentEmails);
  }

  deleteEmails(emails: EmailData[]) {
    let currentEmails: EmailData[] = this.emails.getValue();

    for (const email of emails) {
      currentEmails = currentEmails.filter(item => item !== email);
    }
    this.emails.next(currentEmails);
  }

  changeReadState(emails: EmailData[], state) {
    const currentEmails: EmailData[] = this.emailsData.map(item => ({ ...item }));

    for (const email of emails) {
      currentEmails.forEach(item => {
        if (item.id === email.id) {
          item.unread = state;
        }
      });
    }
    this.emails.next(currentEmails);
  }

  resetEmails() {
    this.emails.next(this.emailsData);
  }
}
