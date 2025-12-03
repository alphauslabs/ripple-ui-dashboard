import { PatchNotesData } from './types';

export const patchNotesData: PatchNotesData = [
  {
    version: '0.13.0',
    releaseDate: '2025-11-10',
    summary:
      "Enhanced table components, improved user experience features, and the What's New notification system.",
    sections: [
      {
        title: 'Enhanced Tables',
        items: [
          'Alternating row colors for improved readability',
          'Built-in hover effects and better styling',
          'Clickable chart interactions in dashboard',
          'Improved table header with sorting icons',
          'Column width validation and warnings',
        ],
      },
      {
        title: 'User Experience',
        items: [
          "What's New panel with automatic update notifications",
          'Enhanced MFA setup with multi-step navigation',
          'Improved QR code display and cleaner UI',
          'Better toast notifications positioned at bottom-right',
          'Search icon toggle in input components',
        ],
      },
      {
        title: 'Dashboard Improvements',
        items: [
          'GCP USD currency notice and descriptions',
          'Clickable invoice cost charts with better alignment',
          'Separated invoice cost store for better performance',
          'Enhanced billing group actions and modals integration',
        ],
      },
      {
        title: 'Bug Fixes',
        items: [
          'Fixed cost finalization crash when setting calculation status',
          'Added Previous button to Create Invoice modal',
          'Fixed infinite loading issues in invoice creation',
          'Improved export functionality',
          'Better pagination reset when changing filters',
        ],
      },
    ],
  },
  {
    version: '0.12.0',
    releaseDate: '2025-09-23',
    summary:
      'Enhanced billing groups management and improved invoice handling with better UI/UX across the platform.',
    sections: [
      {
        title: 'Invoice Improvements',
        items: [
          'Invoice preview now opens in a modal for easier viewing',
          'PDF export now validates and notifies you of missing previews',
          'Sort invoices across all filtered data, not just current page',
          'Enhanced invoice name display and sorting',
        ],
      },
      {
        title: 'Billing Groups',
        items: [
          'Advanced AWS account selection and management',
          'Improved filtering with clear filter options',
          'Selected items automatically displayed first in tables',
          'Unsaved changes warning when navigating away',
        ],
      },
      {
        title: 'UI/UX Improvements',
        items: [
          'Date range highlighting in date picker',
          'Improved modal designs across the application',
          'Better table organization and readability',
        ],
      },
    ],
  },
];
