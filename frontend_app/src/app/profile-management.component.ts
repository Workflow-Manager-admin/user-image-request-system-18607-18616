import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ProfileManagementComponent displays a highly modern, vibrant UI for managing profiles,
 * including a gradient header, stat cards, interactive tab filters, a search bar,
 * a prominent CTA, and a richly-styled data table.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProfileManagementComponent {
  /** Active tab key ('all', 'impromptu', 'schedule') */
  activeTab: string = 'all';

  /** Stat cards as defined in requirements */
  stats = [
    {
      value: 6,
      label: 'Total Profiles',
      subtext: '+2 from yesterday',
      iconColor: 'var(--accent)',
      subtextColor: 'var(--accent)'
    },
    {
      value: 3,
      label: 'Created Today',
      subtext: 'Last created 2h ago',
      iconColor: 'var(--accent)',
      subtextColor: 'var(--info-blue)'
    },
    {
      value: 5,
      label: 'Active Devices',
      subtext: '71.5% active rate',
      iconColor: 'var(--accent)',
      subtextColor: 'var(--accent)'
    }
  ];

  /** Tab filters as per design */
  tabs = [
    { key: 'all', label: 'All' },
    { key: 'impromptu', label: 'Impromptu' },
    { key: 'schedule', label: 'Schedule' },
  ];

  /** Mock profile data for the table */
  profiles = [
    {
      name: 'profile a',
      devices: 4,
      type: 'Impromptu',
      status: 'Active',
      created: '2024-07-29',
    },
    {
      name: 'profile b',
      devices: 2,
      type: 'Schedule',
      status: 'Inactive',
      created: '2024-07-28',
    },
    {
      name: 'profile c',
      devices: 3,
      type: 'Impromptu',
      status: 'Active',
      created: '2024-07-27',
    },
    {
      name: 'profile d',
      devices: 1,
      type: 'Schedule',
      status: 'Inactive',
      created: '2024-07-25',
    },
    {
      name: 'profile a',
      devices: 5,
      type: 'Impromptu',
      status: 'Active',
      created: '2024-07-24',
    },
    {
      name: 'profile a',
      devices: 6,
      type: 'Schedule',
      status: 'Inactive',
      created: '2024-07-23',
    },
    {
      name: 'profile b',
      devices: 2,
      type: 'Impromptu',
      status: 'Active',
      created: '2024-07-22',
    },
    {
      name: 'profile c',
      devices: 4,
      type: 'Schedule',
      status: 'Inactive',
      created: '2024-07-21',
    }
  ];

  searchFilter: string = '';

  // PUBLIC_INTERFACE
  setTab(tab: string) {
    this.activeTab = tab;
  }

  // (no longer needed: setSearchFilter function removed)

  // PUBLIC_INTERFACE
  get filteredProfiles() {
    let data = this.profiles;
    if (this.activeTab === 'impromptu') {
      data = data.filter((p) => p.type.toLowerCase() === 'impromptu');
    } else if (this.activeTab === 'schedule') {
      data = data.filter((p) => p.type.toLowerCase() === 'schedule');
    }
    if (this.searchFilter && this.searchFilter.trim().length > 0) {
      const q = this.searchFilter.trim().toLowerCase();
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.type && p.type.toLowerCase().includes(q))
      );
    }
    return data;
  }
}
