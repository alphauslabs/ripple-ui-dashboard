export default {
  invoicePreviewModal: {
    title: 'Invoice Preview',
    openInNewWindow: 'Open in New Window',
  },
  InvoiceListing: {
    Title: 'Invoice listing',
    SearchPlaceHolder: 'Try: billing group name',
    ButtonTitle: 'Bulk actions',
    ButtonItems: {
      Generate: 'Generate invoice',
      Publish: 'Publish invoice to wave',
      Setting: 'Reseller charges',
      Exchange: 'Common exchange rate settings',
      Export: 'Export invoice as pdf',
      ExportAllPdf: 'Export all invoices as PDF',
    },
    ButtonSubmenuItems: {
      Selected: 'Selected billing groups',
      All: 'All billing groups',
      PublishSelected: 'Publish selected',
      UnpublishSelected: 'Unpublish selected',
      PublishAll: 'Publish all invoices',
      UnpublishAll: 'Unpublish all invoices',
    },
    Status: {
      All: 'All',
      NotCreated: 'Not created',
      Created: 'Created',
    },
    EmptyState: {
      Title: 'Invoice data unavailable',
      ActionButton: 'Create billing group',
      MoreButton: 'View documentation',
      Subtitle:
        'Invoice data is tied to billing group. If there is no billing group created then there will be no data shown. Please create a billing group in the billing group listing page to get started.',
    },
    NoDataForMonth: {
      Title: 'No invoices for this month',
      Subtitle:
        'There are no invoices available for the selected month. Try selecting a different month or create new billing groups.',
      ActionButton: 'Create billing group',
      MoreButton: 'View documentation',
    },
    NoMatchingResults: {
      Title: 'No results match your filters',
      Subtitle:
        'Try adjusting your search criteria or filters to find the invoices you are looking for.',
      ActionButton: 'Clear all filters',
      MoreButton: 'Reset search only',
    },
    ApiError: {
      Title: 'Unable to load invoice data',
      Subtitle:
        'There was an error loading the invoice data. Please try again or contact support if the problem persists.',
      ActionButton: 'Retry',
      MoreButton: 'Contact support',
    },
    Table: {
      Name: 'Invoice name',
      Company: 'Company',
      Currency: 'Currency',
      Invoice: 'Invoice',
      Finalization: 'Finalization',
      Wave: 'WavePro',
      Statuses: 'Statuses',
      WaveStatus: 'Wave Status',
      Dates: 'Dates',
      Created: 'Created',
      Updated: 'Updated',
      BillingAmount: 'Billing Amount',
      CreatedStatus: 'Created',
      NotCreatedStatus: 'Not Created',
      NotPublishedStatus: 'Not Published',
      PublishedStatus: 'Published Status',
      Total: 'Total',
      ActionMenu: {
        Generate: 'Generate invoice',
        Finalize: 'Finalize cost',
        ViewBillingGroup: 'View billing group detail',
        EditBillingGroup: 'Edit billing group',
        Export: 'Export selected invoice as PDF',
        Publish: 'Publish invoice to wave',
        Delete: 'Delete billing group',
        ResellerChargesSettings: 'Reseller charges settings',
        CommonExchangeRateSettings: 'Common exchange rate settings',
        Preview: 'Preview',
        PublishToWave: 'Publish to Wave',
        UnpublishFromWave: 'Unpublish from Wave',
      },
      Action: 'Action',
      InvoiceBillingGroupTooltip: 'Invoice and billing group is the same item.',
    },
    CommonExchangeRate: {
      SetRateFor: 'Set exchange rate for {{date}}',
      BillingGroupName: 'Billing group name',
      AllResellerCharges:
        'This exchange rate only applies to the all reseller charges settings regardless of the billing group or payer account.',
      ExchangeRates: 'Exchange Rates',
    },
    ResellerCharges: {
      UseDefaultSettings: 'Use default settings for each billing group',
      OverrideAllSettings: 'Override all selected billing group settings',
      UpdateCommonExchangeRate: 'Update common exchange rate',
    },
    MoreFilters: {
      Apply: 'Apply',
      ClearAll: 'Clear all',
      MoreFilters: 'More filters',
      MoreFiltersTitle: 'More Filters',
      InvoiceStatus: 'Invoice status',
      Created: 'Created',
      NotStarted: 'Not Started',
      Error: 'Error',
      InProgress: 'In Progress',
      FinalizationStatus: 'Finalization status',
      Success: 'Success',
      Checking: 'Checking',
      Preparing: 'Preparing',
      Running: 'Running',
      Completed: 'Completed',
      Currency: 'Currency',
      WavePublishStatus: 'Wave publish status',
      Published: 'Published',
      NotPublished: 'Not Published',
      Preview: 'Preview',
      Vendors: 'Vendors',
    },
    ConfirmModal: {
      UpdateResellerChargesTitle: 'Update reseller charges settings',
      UpdateResellerChargesDetail:
        'Are you sure you want to update reseller charges settings for selected billing groups?',
      Cancel: 'Cancel',
      YesConfirm: 'Yes, confirm',
    },
    WaveConfirmModal: {
      PublishSelectedTitle: 'Publish Selected Invoices to Wave',
      PublishSelectedDetail:
        'Are you sure you want to publish {{count}} selected invoices to Wave? They will be visible in Wave.',
      UnpublishSelectedTitle: 'Unpublish Selected Invoices from Wave',
      UnpublishSelectedDetail:
        'Are you sure you want to unpublish {{count}} selected invoices from Wave? They will not be visible in Wave.',
      PublishAllTitle: 'Publish All Invoices to Wave',
      PublishAllDetail:
        'Are you sure you want to publish all {{count}} invoices to Wave? They will be visible in Wave.',
      UnpublishAllTitle: 'Unpublish All Invoices from Wave',
      UnpublishAllDetail:
        'Are you sure you want to unpublish all {{count}} invoices from Wave? They will not be visible in Wave.',
      Cancel: 'Cancel',
      YesPublish: 'Yes, publish',
      YesUnpublish: 'Yes, unpublish',
      Publishing: 'Publishing...',
      Unpublishing: 'Unpublishing...',
      InvoiceNotCreated: 'Some invoices have not been created yet',
      RemoveInvalidItems:
        'Please remove invoices that have not been created before publishing to Wave',
      CannotPublishAllUseSelected:
        'Cannot publish all invoices because some are not ready. Please use "Publish Selected" to choose only the invoices that are created.',
    },
    ResellerChargesModal: {
      SaveChanges: 'Save changes',
      RevertToDefaultSettings: 'Revert to default settings',
      BillingGroupName: 'Billing group name',
      BillingGroupsSelected: '{count} billing groups selected',
      ChangeSettingsDescription:
        'You can make changes to the billing group reseller charges settings or current month exchange rate if required.',
      ResellerChargesSettings: 'Reseller charges settings',
    },
    CreateInvoiceModal: {
      CreateInvoice: 'Create Invoice',
      CreateInvoiceConfirmation:
        'Are you sure you want to create invoices for {{vendors}} for the selected billing groups?',
      BillingGroupsSelected: '{{count}} billing groups selected',
      CreateInvoicesFor: 'Create invoices for {{date}}',
      BillingGroupName: 'Billing group name',
      SelectVendorsDescription:
        'Select the vendors for which you want to create invoices for the selected billing groups.',
      SelectVendors: 'Select Vendors',
      FinalizationNotSuccessful:
        'Some billing groups have unsuccessful finalization status',
      RemoveInvalidItems:
        'Please remove billing groups with unsuccessful finalization before creating invoices',
    },
    CommonExchangeRateModal: {
      BillingGroupsSelected: '{{count}} billing groups selected',
      UpdateConfirmation:
        'Are you sure you want to update common exchange rate for selected billing groups?',
    },
    Messages: {
      PopupBlockedError: 'Popup blocked. Please allow popups for this site.',
      InvoicePreviewError: 'Error displaying invoice preview',
      InvoicePreviewLoadFailed: 'Failed to load invoice preview',
      InvoiceCreateFailed: 'Failed to create invoices for {{vendor}}',
      ExchangeRateUpdated: 'Common exchange rate for {{count}} groups updated',
      ExchangeRateUpdateFailed:
        "Common exchange rate for {{count}} groups couldn't be updated",
      InvoicePdfExportFailed: 'Failed to export invoice PDF',
      ResellerChargesUpdated: 'Reseller charges settings updated',
      ResellerChargesUpdateFailed: "Reseller charges settings can't be updated",
      FinalizationNotSuccessful:
        'Cannot create invoices. Finalization must be successful before creating invoices.',
      InvoiceNotCreated:
        'Cannot publish to Wave. Invoices must be created before publishing to Wave.',
      SomeInvoicesNotFinalized:
        'Some selected billing groups have not completed finalization successfully. Only billing groups with successful finalization can create invoices.',
      SomeInvoicesNotCreated:
        'Some selected invoices have not been created yet. Only created invoices can be published to Wave.',
    },
    Toast: {
      MissingPreviewAll:
        'Cannot download preview: {{count}} invoice{{plural}} do not have a preview available.',
      MissingPreviewSelected:
        'Cannot download preview: {{count}} selected invoice{{plural}} do not have a preview available.',
      MissingCreatedSelected:
        'Cannot download preview: {{count}} selected invoice{{plural}} have not been created.',
      SkippedInvoices:
        '{{count}} invoice{{plural}} skipped due to not being created.',
    },
  },
};
