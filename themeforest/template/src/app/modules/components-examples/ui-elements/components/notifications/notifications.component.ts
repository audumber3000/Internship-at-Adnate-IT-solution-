import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  imageTitle = 'Felicia Garden';
  imageDescription = 'Hello, just simple notification. Explore this to learn more';
  image = `${environment.deployAssetsPath}/assets/images/photo_notification.jpg`;
  notificationTypes = NotificationType;
  @ViewChild('imageNotification', { static: false }) imageNotification: TemplateRef<any>;

  notificationOptions = {
    position: [],
  };

  defaultNotificationSettings = {
    type: 'success',
    title: 'This is just a title',
    content: 'This is just some content',
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    theClass: 'default-notification',
  };

  imageNotificationSettings = {
    type: 'success',
    title: 'Laura Monti',
    content: 'This is just some content',
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    theClass: 'image-notification',
  };

  coloredNotificationSettings = {
    type: 'success',
    title: 'This is just a title',
    content: 'This is just some content',
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
    animate: 'fromRight',
    theClass: 'colored-notifications',
  };

  progressBarNotificationSettings = {
    type: 'success',
    title: 'This is just a title',
    content: 'This is just some content',
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'fromRight',
    theClass: 'colored-notifications',
  };

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {}

  openDefaultNotification(position, animation) {
    console.log('position', position);
    this.notificationOptions = {
      position,
    };
    this.notificationService.create(
      'Alert Panel Title!',
      'Learning day desirous informed expenses material returned six the.\n' +
        ' She enabled invited exposed him another.',
      NotificationType.Success,
      { ...this.defaultNotificationSettings, ...{ animate: animation } },
    );
  }

  openImageNotification(position, animation) {
    console.log('position', position);
    this.notificationOptions = {
      position,
    };
    this.notificationService.html(
      this.imageNotification,
      NotificationType.Bare,
      { ...this.imageNotificationSettings, ...{ animate: animation } },
      null,
    );
  }

  openColoredNotification(type: NotificationType, position) {
    console.log('position', position);
    this.notificationOptions = {
      position,
    };
    this.notificationService.create(
      'Alert Panel Title',
      'Learning day desirous informed expenses material returned six the.\n' +
        ' She enabled invited exposed him another.',
      type,
      this.coloredNotificationSettings,
    );
  }

  openProgressNotification(type: NotificationType, position) {
    console.log('position', position);
    this.notificationOptions = {
      position,
    };
    this.notificationService.create(
      'Alert Panel Title',
      'Learning day desirous informed expenses material returned six the.\n' +
        ' She enabled invited exposed him another.',
      type,
      this.progressBarNotificationSettings,
    );
  }
}
