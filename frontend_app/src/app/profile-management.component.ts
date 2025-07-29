import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.css',
  standalone: true,
  imports: [CommonModule]
})
/**
 * ProfileManagementComponent
 * The main dashboard for profile management as per design notes.
 */
export class ProfileManagementComponent {
  activeTab: string = 'all';

  stats = [
    {
      iconColor: 'var(--accent)',
      value: 6,
      label: 'Total Profiles',
      subtext: '1 new profile(s)',
      subtextColor: 'var(--accent)'
    },
    {
      iconColor: 'var(--accent)',
      value: 5,
      label: 'Created Today',
      subtext: 'Last created 1d ago',
      subtextColor: 'var(--info-blue)'
    },
    {
      iconColor: 'var(--accent)',
      value: 3,
      label: 'Active Devices',
      subtext: '71% active rate',
      subtextColor: 'var(--accent)'
    }
  ];

  tabs = [
    { key: 'all', label: 'All' },
    { key: 'information', label: 'Information' },
    { key: 'schedule', label: 'Schedule' }
  ];

  profiles = [
    {
      name: 'Jane Doe',
      devices: 4,
      type: 'Templating',
      information: 'Schedule',
      status: 'Active',
      created: '2024-07-28',
    },
    {
      name: 'John Smith',
      devices: 2,
      type: 'Regular',
      information: 'None',
      status: 'Inactive',
      created: '2024-07-25',
    }
  ];

  // PUBLIC_INTERFACE
  setTab(tab: string) {
    this.activeTab = tab;
  }
}
