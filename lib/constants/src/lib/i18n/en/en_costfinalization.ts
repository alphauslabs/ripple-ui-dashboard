export const en_costfinalization = {
  CostFinalization: {
    // Page titles and headers
    PageTitle: 'Cost finalization',
    OriginalInvoiceListingTitle: 'Original invoice listing',
    ModalTitle: 'Cost finalization for {{vendor}}',
    ReturnButtonText: 'Return to Cost Finalization',

    // Feature availability
    FeatureNotAvailable:
      'This feature is not yet available for this cloud provider.',

    // Dashboard
    LastFinalizationDate: 'Last finalization date',
    AutomationStatus: 'Automation status',
    Progress: 'Progress',

    // Status types specific to cost finalization
    StatusTypes: {
      // Calculation statuses
      Preparing: 'Preparing',
      Running: 'Running',
      Checking: 'Checking',
      Success: 'Success',
      Error: 'Error',

      // Invoice statuses
      Confirmed: 'Confirmed',
      Unconfirmed: 'Unconfirmed',

      // General statuses
      Created: 'Created',
      InProgress: 'In Progress',
      Completed: 'Completed',
      NotStarted: 'Not Started',
      Preview: 'Preview',
      Published: 'Published',
      NotPublished: 'Not Published',
    },

    // Actions
    Actions: {
      Finalize: 'Finalize',
      Cancel: 'Cancel',
      Retry: 'Retry',
      View: 'View',
      Edit: 'Edit',
      ConfirmAndFinalize: 'Confirm and finalize',
      ChangeAutomationDate: 'Change automation date',
      Save: 'Save',
      StartFinalization: 'Start finalization',
    },

    // Messages
    Messages: {
      FinalizationInProgress: 'Finalization is in progress...',
      FinalizationComplete: 'Finalization completed successfully',
      FinalizationError: 'An error occurred during finalization',
      NoDataAvailable: 'No data available for finalization',
      LoadingInvoiceData: 'Loading invoice data...',
      StillChecking: 'Finalization completed but still checking',
      StillCheckingSpecific:
        '{{vendor}} cost finalization for {{month}} completed but still checking',
      MultipleStillChecking:
        '{{count}} {{vendor}} cost finalizations still checking',
      NoInvoiceDataAvailable:
        'No invoice data available for the selected month',
      PlaceholderOriginalInvoiceListing:
        'Place Holder for Original Invoice Listing',
      NotAvailable: 'Not available',
      ComingSoon: 'Coming soon',
    },

    // Banner messages
    BannerMessages: {
      InformationalBanner:
        "To generate invoices with accurate cost data, Ripple must finalize costs with each CSP. Please set up an automation to notify Ripple when it's time to finalize these costs. As a guide, AWS and GCP release data usually on the 5th day of the month, Azure on the 9th day.",
      TooltipInfo:
        'Ripple finalizes cost on the 5th for AWS and GCP, and on the 9th for Azure.',
      AwsInstructions: {
        Step1:
          "Please confirm you've already received AWS invoices for each payer account",
        Step2:
          'Make sure all the accounts are mapped to the respective billing groups',
        Step3:
          'Make sure that the CUR has been registered before initiating invoice finalization for this month',
        Step4:
          'There is a chance that your cost and usage data is not reflected, if CUR was registered after the invoice of this month being finalized',
      },
      AzureMessage: 'Azure invoice is not confirmed yet, please try later',
      GcpMessage:
        "Before you proceed please confirm you've already received Google Cloud invoices for each payer account",
      DefaultMessage: 'Please verify information before proceeding',
    },

    // Form labels and instructions
    FormLabels: {
      SelectMonthToFinalize: 'Select the month to be finalized',
      SelectResourcesToCalculate: 'Select resources to be calculated',
      ListOfInvoiceIds:
        'List of invoice IDs being finalized from the selected month',
      Required: '*',
    },

    // Date picker placeholders
    DatePickerPlaceholders: {
      SelectMonth: 'Select Month',
      SelectDate: 'Select Date',
    },

    // Resource selection
    ResourceSelection: {
      Account: 'Account',
      Tags: 'Tags',
      TagsDescription:
        'Tags (Tags option only applies when you have tags billing group type)',
    },

    // Table headers
    TableHeaders: {
      InvoiceId: 'Invoice ID',
      PayerId: 'Payer ID',
      Cost: 'Cost',
    },

    // Dropdown menu items
    DropdownItems: {
      FinalizeCost: 'Finalize cost',
    },

    // Invoice listing related
    InvoiceListing: {
      Search: 'Search',
      SelectMonth: 'Select month',
      InvoiceUnavailable: 'Invoice unavailable',
      NoInvoiceForSelectedMonth: 'There is no invoice for the selected month',
      LoadingInvoiceData: 'Loading invoice data...',
      NotAvailable: 'Not available',
      VendorNotSupported: 'This vendor is not supported yet',
      Status: 'Status',
    },

    // Automation modal
    AutomationModal: {
      Title: 'Price finalization automation settings for {{vendor}}',
      BannerDescription:
        "To generate invoices with accurate cost data, Ripple must finalize costs with each CSP. Please set up an automation to notify Ripple when it's time to finalize these costs. As a guide, AWS and GCP release data usually on the 5th day of the month, Azure on the 9th day.",
    },

    // Automation schedule UI
    AutomationSchedule: {
      MonthlyFinalizationDay: 'Monthly finalization day',
      EditingSchedule: 'Editing Schedule',
      EditingScheduleDescription:
        'You are currently editing the schedule for this vendor.',
      DayOfMonth: 'Day of month',
      SpecialOptions: 'Special options',
      EndOfMonth: 'End of month',
      DayOfMonthLabel: 'Day of month',
      Time: 'Time',
      Cancel: 'Cancel',
      Save: 'Save',
      Close: 'Close',
      ProcessWillRun: 'Process will run on',
    },

    // Vendor names
    VendorNames: {
      AWS: 'AWS',
      Azure: 'Azure',
      GCP: 'GCP',
    },
  },
};
