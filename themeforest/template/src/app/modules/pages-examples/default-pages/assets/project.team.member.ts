import { environment } from '../../../../../environments/environment';

export interface ProjectTeamMember {
  name;
  position;
  avatar;
}

export const exampleProjectTeam: ProjectTeamMember[] = [
  {
    name: 'Peter Jackson',
    position: 'IOS Developer',
    avatar: `${environment.deployAssetsPath}/assets/images/11.png`,
  },
  {
    name: 'Lora Melbourn',
    position: 'Android Developer',
    avatar: `${environment.deployAssetsPath}/assets/images/12.png`,
  },
  {
    name: 'Cat Mew',
    position: 'Project Manager',
    avatar: `${environment.deployAssetsPath}/assets/images/14.png`,
  },
  {
    name: 'Liza Orly',
    position: 'Developer',
    avatar: `${environment.deployAssetsPath}/assets/images/15.png`,
  },
  {
    name: 'Michael Bro',
    position: 'Designer',
    avatar: `${environment.deployAssetsPath}/assets/images/photo_notification.jpg`,
  },
];
