import enError from './en_error';
import enValidator from './en_validator';
import enNotification from './en_notification';
import enComponent from './component';
import enBillinggroups from './en_billinggroups';
import enDashboard from './en_dashboard';
import enInvoices from './en_invoices';
import { en_costfinalization } from './en_costfinalization';
import { currencyLangEn } from '../../currency';

export default {
  ...enError,
  ...enValidator,
  ...enNotification,
  ...enComponent,
  ...enBillinggroups,
  ...enDashboard,
  ...currencyLangEn,
  ...enInvoices,
  ...en_costfinalization,

  // Adjustment Entry Tab Labels (used by ButtonTab component)
  'all entries': 'All Entries',
  'auto adjust': 'Auto Adjust',
  'split upfront ri': 'Split Upfront RI',
  'split upfront sp': 'Split Upfront SP',

  // New Common message. shared messageで使用する。
  Name: 'Name',
  Length: 'Length',
  Expire: 'Expire',
  'Billing Group': 'Billing Group',
  'Billing Groups': 'Billing Groups',
  'Created date': 'Created Date',
  'Update date': 'Updated On',
  'Wave for Reseller': 'Wave for Reseller',

  // common
  Version: 'Version',
  'User name': 'User Name',
  'Billing group id': 'Billing Group ID',
  'Billing group name': 'Billing Group Name',
  //'Billing group (Name/ID)': 'Billing group (Name/ID)',
  //'Add billing group': 'Add billing group',
  'Company name': 'Company Name',
  'Resource type': 'Resource Type',
  Cancel: 'Cancel',
  Update: 'Update',
  'Delete billing group': 'Delete Billing Group',
  //'Edit billing group': 'Edit billing group',
  'Edit tag settings': 'Edit Tag Settings',
  'Phone number': 'Phone Number',
  'e.g. : 03-0000-0000': 'e.g. : 000-000-0000',
  'Phone number value is invalid.': 'Phone number value is invalid.',
  'Postal code': 'Postal Code',
  'Street address': 'Company Address',
  'Address name': 'Addressee',
  'Billing title': 'Billing Title',
  'Invoice language': 'Invoice Language',
  'Aggregation type': 'Aggregation Type',
  Currency: 'Currency',
  'How to request support': 'Support Calculation Method',
  'Agency fee claim method': 'Agency Fee Calculation Method',
  'Agent fee (fixed)': 'Agent fee (fixed)',
  'Billing agent service calculation target':
    'Billing agent service calculation target',
  'Subject to billing agency service': 'Usage Subject to Agency Fee',
  'Claim proxy service calculation method':
    'Claim proxy service calculation method',
  'Change invoice setting': 'Change invoice setting',
  //ATTENTION: 'ATTENTION',
  //'Recalculate contact': 'Recalculate contact',
  //'Contact for recalculation is complete.': 'Contact for recalculation is complete.',
  'Discount target': 'Usage Subject to Discount',
  'Discount calculation method': 'Discount calculation method',
  'Sale tax': 'Sale Tax',
  'Report billing finalization': 'Request a batch calculation',
  Save: 'Save',
  Close: 'Close',
  'Billing amount': 'Billing Amount',
  'Support fee': 'Support Fee',
  'Support rate': 'Support Rate',
  'Invoice number': 'Invoice Number',
  'Updated at': 'Updated On',
  'Sales tax rate percent': 'Tax Rate (%)',
  'Substitution fee percent': 'Agency fee (%)',
  'Misc.': 'Misc.',
  Download: 'Download',
  Export: 'Export',
  'Exporting...': 'Exporting...',
  'Billing group': 'Billing Group',
  account_name: 'Account Name',
  account_customer: 'Account Customer',
  account_id: 'Account ID',
  azure_customer_id: 'Azure Customer ID',
  Service: 'Service',
  Action: 'Action',
  instance_type: 'Instance Type',
  Family: 'Family',
  'Unused usage quantity': 'Unused usage quantity',
  Region: 'Region',
  'Payer account': 'Payer Account',
  'Search ri': 'Search reserved instance',
  'Add account': 'Register',
  'Delete payer account': 'Delete Payer Account',
  //'Add payer account': 'Add payer account',
  'S3 bucket registration information': 'S3 Bucket Registration Info',
  'S3 bucket': 'S3 Bucket',
  Prefix: 'Prefix',
  'Report name': 'Report Name',
  //'Updated information': 'Updated information (Month - update date)',
  'Role ARN': 'Role ARN ',
  'Register / change S3 bucket':
    'Register S3 Bucket if unregistered, otherwise Update S3 Bucket',
  //'Register S3 bucket': 'Register S3 bucket',
  //'S3 bucket has been registered.': 'S3 bucket has been registered.',
  'Digit rounding': 'Digit Rounding',
  // 'Consumption tax concentration level': 'Consumption tax concentration level', // コメントされてる
  'Round up': 'Round up',
  'Round down': 'Round down',
  'Round off': 'Round off',
  Rounding: 'Standard Rounding',
  'Billing group unit': 'Billing group unit',
  'Account unit': 'Account unit',
  'Service unit': 'Service unit',
  'Change this invoice setting': 'Change this invoice setting',
  'Changed invoice setting.': 'Changed invoice setting.',
  'Email address': 'Email Address',
  'Not been set.': 'Not been set.',
  'Change password': 'Change Password',
  'Delete account': 'Delete Account',
  'Change the password': 'Save',
  'Automatically generate passwords': 'Use automatically generated password',
  'Delete the above account.': 'Delete the above account.',
  'This operation can not be canceled.': "This operation can't be canceled.",
  'Delete the account': 'Delete the account',
  'Size flexible': 'Size flexible',
  'Payer account name': 'Payer account name',
  'Deleted account': 'Deleted account',
  'Added account': 'Added account',
  Account: 'Accounts',
  account: 'Account',
  'Create invoice': 'Create Invoice',
  All: 'All ',
  Reset: 'Reset',
  'Show 25 items': 'Show 25 items',
  'Show 50 items': 'Show 50 items',
  'Show 100 items': 'Show 100 items',
  'Show 150 items': 'Show 150 items',
  'Show 200 items': 'Show 200 items',
  'Show all items': 'Show all items',
  Remark: 'Remarks',
  'Conversion rate setting': 'Exchange Rate Settings',
  Change: 'Change',
  Edit: 'Edit',
  Premium: 'Premium',
  Discount: 'Discount',
  'Setting per service': 'Setting per service',
  'Calculation target': 'Calculation target',
  //'CSV download': 'CSV download',
  'Please enter a display name.': 'Please enter a display name.',
  'Please enter your password.': 'Please enter your password.',
  'Please enter your e-mail address.': 'Please enter your e-mail address.',
  //'Enter your {number} digit Payer account ID.': 'Enter your {number} digit Payer account ID.',
  //'Enter your 12 digit AWS account ID.': 'Enter your 12 digit AWS account ID.',
  //'Both discount rate and premium rate {rangeMin} ~ {rangeMax}. You can specify in the range of. (unit:%)':
  //  'Both discount rate and premium rate <strong>{rangeMin}~{rangeMax}</strong>. You can specify in the range of. (unit:%)',
  'Exchange rate': 'Exchange rate',
  'Master exchange rate': 'Master exchange rate',
  'Reserved Instances': 'Reserved Instances',
  'Cost Management': 'Cost Management',
  'Billing statement': 'Billing statement',
  'You can specify whether to display the Reserved Instances page.':
    'You can specify whether to display the Reserved Instances page.',
  'You can specify whether to show or hide the Usage Detail page.':
    'You can specify whether to show or hide the Usage Detail page.',
  'Please enter the billing group name.':
    'Please enter the billing group name.',
  'Please enter your company name.': 'Please enter your company name.',
  'Updated billing group information.': 'Updated billing group information.',
  'Discount rate percent': 'Discount Rate (%)',
  'Support discount fee percent': 'Support discount fee (%)',
  Support: 'Support',
  'Billing agency': 'Agency Fee Settings',
  'Set an 8- to 32-character password that combines letters, numbers, and symbols.':
    'Set an 8- to 32-character password that combines letters, numbers, and symbols.',
  Status: 'Status',
  Required: 'Required',
  'This input is Required.': 'This input is Required.',
  //'Enable setting': 'Enable setting',
  JPY: 'JPY',
  USD: 'USD',
  jpy: 'JPY',
  usd: 'USD',
  '¥{jpy}/$1': '¥{jpy}/$1',

  'Change settings': 'Change settings',
  'Changed the setting.': 'Changed the setting.',
  Notes: 'Notes',
  //Expire: 'Expire',
  Scope: 'Scope',
  //'Access to Wave': 'Access to Wave',
  'E-mail': 'E-mail',
  'Project code': 'Project Code',
  Remarks: 'Remarks',
  not_created: 'Not Created',
  Created: 'Created',
  Preview: 'Preview',
  Published: 'Published',
  'This email is exists': 'This email is exists',
  Plan: 'Plan',
  'Change plan': 'Change plan',
  'Target billing group': 'Target billing group',
  Tag: 'Tag',
  tag: 'Tag',
  'Payer account ID': 'Payer account ID',
  Recommendation: 'Recommendation',
  Cost: 'Cost',
  'Password changed.': 'Password changed.',
  'Please enter the {name}.': 'Please enter the {name}.',
  'Please enter {min}-{max} characters.':
    'Please enter {min}-{max} characters.', //全てこのKeyに直す
  'Within any characters': 'Within {count} characters',
  'Please enter within any characters.':
    'Please enter within {count} characters.',
  'Please enter within {count} characters.':
    'Please enter within {count} characters.', //全てこのKeyに直す
  //'Please enter within 20 characters.': 'Please enter within 20 characters.',
  'Please enter within 40 characters.': 'X/40',
  'Please enter within 60 characters.': 'X/60',
  'Payment option': 'Payment option',
  Back: 'Back',
  Logout: 'Logout',
  'Register Exchange Rate': 'Register Exchange Rate',
  'Dashboard graph': 'Dashboard graph',
  'Display the entire monthly usage trend on the dashboard.':
    'Display the entire monthly usage trend on the dashboard.',
  'Account graph': 'Account graph',
  'Display monthly usage trend on account report.':
    'Display monthly usage trend on account report.',
  'Account budget': 'Account budget',
  'Enable budget notification settings on an account basis.':
    'Enable budget notification settings on an account basis.',
  //'Cloud vendor': 'Cloud vendor',
  //'Subscription ID': 'Subscription ID',
  //'Please Enter your Microsoft Azure Subscription ID.':
  //  'Please Enter your Microsoft Azure Subscription ID.',
  'Please Enter your Microsoft Azure payer account ID.':
    'Please Enter your Microsoft Azure payer account ID.',
  'Purchase date': 'Purchase date',
  'Organize invoices': 'Organize invoices',
  'Combine billing for each cloud vendor into a single bill.':
    'Combine billing for each cloud vendor into a single bill.',
  'Error Occurred': 'Error Occurred',
  'Revert to billing group settings': 'Revert to billing group settings',
  'Not supported yet.': 'Not supported yet.',

  // COMPONENTS
  // ---CustomDataTable - Details---
  'Support cost of calculation target': 'Support cost of calculation target',
  'Substitution fee': 'Agency Fee',
  'Setting discount and premium rates for each account':
    'Premium & Discount Rate Settings',
  'Reflecting settings': 'Reflecting settings',
  'Bulk discount and premium rate': 'Base Premium Rate',
  'Individual service settings': 'Individual Service Settings',
  'Discount rate': 'Discount Rate',
  'Usage fee subject to discount': 'Usage Subject to Discount',
  Or: 'Or',
  '(Fixed)': '(Fixed)',
  'Corporate intelligence': 'Corporate Info',
  'Addressed to': 'Addressed to',
  'Invoice details': 'Invoice Details',
  '{type} are enabled. Discount setting for Cloud service usage fee will use the amount in {type}, thus setting in this section will be ignored.':
    '{type} are enabled. Discount setting for Cloud service usage fee will use the amount in {type}, thus setting in this section will be ignored.',
  'Account setting': '"Account setting"',
  'Batch setting': '"Batch setting"',
  'Check accounts': 'Check accounts',
  'Account Name / ID': 'Account Name / ID',

  Details: 'Details',
  'Option Setting': 'Vendor-Specific Options',
  'Creation date and time': 'Creation Date and Time',
  // 'Download date': 'Download date', // コメントされてる
  'Registered account': 'Registered Account',
  'Number of accounts': 'Number of accounts',
  'Account not registered.': 'No accounts registered.',
  '1 dollar': '1 dollar',
  Yen: 'Yen',

  // ---CustomDataTable - Filters---
  'All instance types': 'All instance types',

  'Add filter': 'Add filter',

  // ---MultipleSelector---
  'Tag value': 'Tag value',
  'No data.': 'No data.',
  'Active tag': 'Active tag',

  // ------ServiceRateSetting------
  Uniformity: 'Uniformity',
  'Do you want to reset the batch settings?':
    'Do you want to reset the batch settings?',
  'To reset': 'Reset',
  //'If you want to change the discount rate and premium rate for each account, please enable the setting.':
  //  'If you want to change the discount rate and premium rate for each account, please enable the setting.',
  //'Allow setting per account': 'Allow setting per account',
  //'Allows you to set discount / premium of service for each account.':
  //  'Allows you to set discount / premium of service for each account.',
  //'Setting permission': 'Setting permission',
  //'Setting of collective discount rate and collective premium rate':
  //  'Setting of collective discount rate and collective premium rate',
  //'Setting up individual service': 'Setting up individual service',
  //'In addition to batch setting, you can set for each service. If you set it separately, the settings for each service will take precedence.':
  //  'In addition to batch setting, you can set for each service. If you set it separately, the settings for each service will take precedence.',
  //'Changed the setting of the service.': 'Changed the setting of the service.',
  //'Service setting failed.': 'Service setting failed.',

  Delete: 'Delete',
  'Do you want to delete the service settings?':
    'Do you want to delete the service settings?',
  'To delete': 'Delete',

  'Add to': 'Add to',
  'Add service': 'Add service',

  // --------uikit---------
  'Setting value': 'Setting value',
  'Invoice value': 'Invoice value',
  'Please select': 'Please select',

  //  LAYOUTS
  // --------Header---------
  'There is no new notification.': 'There is no new notification.',
  'Mark all as read': 'Mark all as read',

  'Sub user management': 'Sub-user Management',
  Documentation: 'Documentation',

  // --------Calculations status---------
  //'View Batch Calculation': 'View Batch Calculation',
  //preparing: 'Preparing',
  //running: 'Running',
  //checking: 'Checking',
  //done: 'Done',
  //error: 'Error',
  //'Batch calculation failed.': 'Batch calculation failed.',
  //'The team is currently fixing the problem.': 'The team is currently fixing the problem.',
  //'Customer Support is currently reviewing the completed calculation.':
  //  'Customer Support is currently reviewing the completed calculation.',

  // --------Navigation---------
  Dashboard: 'Dashboard',
  'Cost finalization': 'Cost finalization',
  'Cost Forecast': 'Cost Forecast',
  'Coverage Ratio': 'Coverage Ratio',
  'Budgets and forecasts': 'Budgets and forecasts',
  'Budget Configurations': 'Budget Configurations',
  'Collapse sidebar': 'Collapse sidebar',
  'Expand sidebar': 'Expand sidebar',
  Invoices: 'Invoices',
  'Invoice templates': 'Invoice templates',
  'Invoice recalculation summary': 'Chargebacks',
  'RI Management': 'RI Management',
  'RI Utilization': 'RI Utilization',
  'RI Recommendation': 'RI Recommendation',
  'RI Unused': 'RI Unused',
  'Recommendation (BETA)': 'Recommendation (BETA)',
  'Right Sizings': 'Right Sizings',

  'Account and Group': 'Account and Group',
  //'Billing Group': 'Billing Group',
  //'Wave for Reseller': 'Wave for Reseller',
  'RI Marketplace': 'RI Marketplace',
  'Spot History': 'Spot History',
  Tools: 'Tools',
  Preferences: 'Preferences',
  'User Setting': 'User Settings',
  'Identity Provider Setting': 'Identity Provider Settings',
  'Notification Setting': 'Notification Settings',
  'Payer Account Setting': 'Payer Account Settings',
  'Invoice Setting': 'Invoice Settings',

  // --------Lib---------
  // upfrontType
  'Standard 1 year Partial upfront': 'Standard 1 year Partial upfront',
  'Standard 1 year Full upfront': 'Standard 1 year Full upfront',
  'Standard 1 year No upfront': 'Standard 1 year No upfront',
  'Standard 3 years Partial upfront': 'Standard 3 years Partial upfront',
  'Standard 3 years Full upfront': 'Standard 3 years Full upfront',
  'Standard 3 years No upfront': 'Standard 3 years No upfront',
  'Convertible 1 year Partial upfront': 'Convertible 1 year Partial upfront',
  'Convertible 1 year Full upfront': 'Convertible 1 year Full upfront',
  'Convertible 1 year No upfront': 'Convertible 1 year No upfront',
  'Convertible 3 years Partial upfront': 'Convertible 3 years Partial upfront',
  'Convertible 3 years Full upfront': 'Convertible 3 years Full upfront',
  'Convertible 3 years No upfront': 'Convertible 3 years No upfront',
  'Standard 1 year Medium': 'Standard 1 year Medium',
  'Standard 1 year Heavy': 'Standard 1 year Heavy',
  'Standard 3 years Medium': 'Standard 3 years Medium',
  'Standard 3 years Heavy': 'Standard 3 years Heavy',
  'Convertible 1 year Medium': 'Convertible 1 year Medium',
  'Convertible 1 year Heavy': 'Convertible 1 year Heavy',
  'Convertible 3 years Medium': 'Convertible 3 years Medium',
  'Convertible 3 years Heavy': 'Convertible 3 years Heavy',

  //word
  'Uniform%': 'Uniform%',
  Developer: 'Developer',
  Business: 'Business',
  Enterprise: 'Enterprise',
  'Enterprise On-Ramp': 'Enterprise On-Ramp',
  'Account-based support plan': 'Account-based support plan',
  'Percentage of usage fee': 'Percentage of usage',
  'No Support': 'No Support',
  'Developer (AWS fee table)': 'Developer',
  'Business (AWS fee table)': 'Business',
  'Enterprise (AWS tariff table)': 'Enterprise',
  'Fixed fee': 'Fixed fee',
  Automatic: 'Automatic',
  'Percentage to usage fee': 'Percentage to usage fee',
  'Percentage to usage fee (%)': 'Percentage to usage fee (%)',
  'Percentage or fixed amount, whichever is greater':
    'Percentage or fixed amount, whichever is greater',
  'Account summary': 'Account summary',
  'Tag aggregation': 'Tag aggregation',
  'Cloud usage fee only': 'Cloud usage fee only',
  'Cloud usage fee + Maintenance service':
    'Cloud usage fee + Maintenance service',
  'Subtotal (usage fee + billing agency service) discounted':
    'Subtotal (usage fee + billing agency service) discounted',
  'Discount from usage fee': 'Discount from usage fee',
  'Apply before discount': 'Apply before discount',
  'Apply after discount': 'Apply after discount',
  'Account totalization': 'Account totalization',
  'Marketplace Fee': 'Marketplace Fee',
  'RI Upfront Fee': 'RI Upfront Fee',
  'Support Fee': 'Support Fee',
  'Domain Name Fee': 'Domain Name Fee',
  'Other Fees': 'Other Fees',
  'Price table': 'Price table',
  Item: 'Item',
  //'Any items': '{count} items',
  //'Unit cost': 'Unit cost',
  // Quantity: 'Quantity',
  // Total: 'Total',
  //'Add item': 'Add item',

  percent: 'Percent',

  //  PAGES
  // --------Account---------
  // AccountManagement
  'Search account': 'Search account',
  'Edit account': 'Edit Account',
  'Please enable settings from environment setting':
    'Please enable settings from environment setting',
  // 'View reports': 'View reports', //コメントされてる
  'Login information is missing. Please create a user from Wave for Reseller.':
    'Login information is missing. Please create a user from Wave for Reseller.',

  //'Display account name': 'Display account name',
  //'AWS account ID': 'AWS account ID',
  //'Add the account': 'Add the account',
  'Please select a billing group.': 'Select Billing Groups.',
  //'Please enter your AWS account.': 'Please enter your AWS account.',
  //'Please enter your 12 digit ID.': 'Please enter your 12 digit ID.',
  //'Please select a payer account.': 'Please select a payer account.',
  //'Customer ID already exists.': 'Customer ID already exists.',

  'Account edit': 'Edit Account',
  'Account display name': 'Account Name',
  Memo: 'Remarks',
  'Update account information': 'Save',
  'Account information updated.': 'Account information updated.',

  'Set discount / premium rate for each account':
    'Set discount / premium rate for each account',

  // -------Auth-------
  Login: 'Login',
  Password: 'Password',
  Username: 'Username',
  'Please enter your user ID.': 'Please enter your user ID.',
  'Failed to login, please check your username and password.':
    'Failed to login, please check your username and password.',

  // -------BillingGroups-------
  // Management
  'Search billing groups': 'Search billing groups...',
  'Select resource type': 'Select resource type',
  'Select vendors': 'Select vendors',
  'AWS invoice setting': 'AWS invoice setting',
  'AZURE invoice setting': 'AZURE invoice setting',

  'You can specify any billing group ID. It is also possible to generate ID automatically.':
    'You can specify any billing group ID. It is also possible to generate ID automatically.',
  //'Automatically generate ID': 'Automatically generate ID',
  'Registration billing group': 'Registration billing group',
  'Please enter a billing group ID.': 'Please enter a billing group ID.',
  'Added billing group.': 'Added billing group.',

  'Delete the above billing group.': 'Delete the above billing group.',
  'Delete this billing group': 'Delete this billing group',
  'Deleted billing group': 'Deleted billing group',

  'Update billing group information': 'Update billing group information',

  'Support percent': 'AWS support (%)',

  'Changed the setting': 'Changed the setting',
  'If exchange rate has already been set':
    'If exchange rate has already been set',
  'It is necessary to reset the invoice from "Invoicing page".':
    'It is necessary to reset the invoice from "Invoicing page".',

  'Update tag settings': 'Update tag settings',

  //'The billing group with the same payer account will also be recalculated.':
  //  'The billing group with the same payer account will also be recalculated.',

  'Resource setting': 'Resource Settings',
  'Basic information': 'Basic Info',
  'Free format setting': 'Free format setting',

  Others: 'Others',
  //'Select account': 'Select account',
  //'Selected account(s)': 'Selected account(s)',
  'Select tag': 'Select Tags',
  'Supported only AWS': 'Supported only AWS',
  'Selected resources to include in billing group': 'Selected Resources',
  'Include untagged resources': 'Include untagged resources',
  'Add tags': 'Add tags',
  'Add tag': 'Add tag',
  'You can add tags to combine with "AND".':
    'You can add tags to combine with "AND".',
  'Tag to remove': 'Tag to remove',
  'Remove tag': 'Remove tag',
  'Resource allocation': 'Resource allocation',
  'Set resource amount': 'Set resource amount',
  'Automatically allocated according to usage fee':
    'Automatically allocated according to usage fee',
  '{number}% of resources are already allocated to other billing groups.':
    '{number}% of resources are already allocated to other billing groups.',
  'Can be set from $0.01 to $10,000,000':
    'Can be set from $0.01 to $10,000,000',
  Remaining: 'Remaining',
  'Support fee setting': 'Support Fee Settings',
  'Discount setting': 'Discount Settings',
  //'Confirm the settings': 'Confirm the settings',
  'Create billing group': 'Create billing group',
  'Creating billing group...': 'Creating billing group...',
  'Billing group created': 'Billing group created',
  'Failed to create billing group': 'Failed to create billing group',
  'Save settings': 'Save',
  Confirm: 'Confirm',

  // -------Custom fields-------
  'Custom fields': 'Custom Fields',
  'Field name': 'Field Name',
  'You can set up to {number} custom fields. The set field can be added as a column to the CSV of the billing group.':
    'You can set up to {number} custom fields. The set field can be added as a column to the CSV of the billing group.',
  'Create new custom field': 'Create Custom Field',
  'Custom field created.': 'Custom field created.',
  'Custom field updated.': 'Custom field updated.',
  'Add custom fields': 'Add Custom Fields',
  'Add new custom field': 'Add new custom field',
  'Add field(s)': 'Add',
  'Select custom field(s)': 'Select custom field(s)',
  'Delete field': 'Delete field',
  'Delete custom field': 'Delete custom field',
  'Deleted custom field.': 'Deleted custom field.',
  'Add a custom field to the billing group.':
    'Add a custom field to the billing group.',
  'The added custom field will be displayed in the billing group details and billing group CSV data.':
    'The added custom field will be displayed in the billing group details and billing group CSV data.',
  'There are no custom fields to add.': 'There are no custom fields to add.',
  'Create a custom field from Preferences> Billing group settings.':
    'Create a custom field from Preferences> Billing group settings.',
  'This field name already exists. Set another field name.':
    'This field name already exists. Set another field name.',

  // -------Project-------
  Project: 'Project',
  'Project description': 'Project Description',
  'Project ID': 'Project ID',
  'Add project': 'Create Project',
  'Add the project': 'Create',
  'Creating project...': 'Creating project...',
  'Created a new project.': 'Created a new project.',
  'Edit project': 'Edit Project',
  'Update project': 'Update Project',
  'Delete project': 'Delete Project',
  'Delete this project': 'Delete this project',
  'Search project': 'Search project',
  Label: 'Label',
  Total: 'Total',
  Profit: 'Profit',
  'Profit rate': 'Profit rate',
  Stock: 'Stock',
  'Stock cost': 'Stock cost',
  Sales: 'Sales',
  //'Sales amount': 'Sales amount',
  '(Total/Details)': '(Total/Details)',
  'Currency type': 'Currency type',
  'Updated project.': 'Updated project.',
  'Delete the above project.': 'Delete the above project.',
  'Deleted project.': 'Deleted project.',
  'Please enter a project code.': 'Please enter a project code.',
  'Please enter a label.': 'Please enter a label.',
  'You can only use letters, numbers, _ (underscore) and -(hyphen).':
    'You can only use letters, numbers, _ (underscore) and -(hyphen).',
  'This project code is already exist.': 'This project code is already exist.',

  // -------QR Code-------
  Configured: 'Configured',
  'QR Code': 'QR Code',
  'QR Code setting': 'QR Code Settings',
  'Update QR Code': 'Update QR Code',
  'Updated QR Code': 'Updated QR Code',
  'Please press the "Update QR Code" button to update.':
    'Please press the "Update QR Code" button to update.',
  'Unsupported file type. (Only {type})':
    'Unsupported file type. (Only {type})',
  'Remove file': 'Remove file',
  'QR Code image': 'QR Code image',
  'Drop the {title} file {supported} file here, or click to upload.':
    'Drop the {title} file {supported} file here, or click to upload.',

  // -------Dashboard-------
  //'Billing finalization reported':
  //  'Billing finalization reported, and you will receive a notification shortly once Ripple calculation is done.',

  //'Final contact has been completed': 'Final contact has been completed',
  //'Please check whether each payer account has received the AWS invoice email.':
  //  'Please check whether each payer account has received the AWS invoice email.',
  //'Please check whether each payer account has received the Azure invoice email.':
  //  'Please check whether each payer account has received the Azure invoice email.',
  'Report finalization': 'Report finalization',
  "Last month's Revenue": 'Transaction Volume',
  "Last month's Cost": 'Procurement Cost',
  "Last month's Profit": 'Margin',
  'Revenue Breakdown': 'Transaction Breakdown',

  // -------Error-------
  'You do not have access': 'You do not have access',
  'Access is not allowed.': 'Access is not allowed.',

  'This page does not exist': 'This page does not exist',

  // -------Invoice-------
  // ExchangeSetting
  'Search Exchange Rate': 'Search Exchange Rate',
  Month: 'Month',
  Year: 'Year',

  //'Set month': 'Set month',
  //'Please enter exchange rate.': 'Please enter Exchange Rate.',
  Register: 'Register',
  'Registered Exchange Rate.': 'Registered Exchange Rate.',

  // ManagementInvoice
  'Search invoice': 'Search Invoice',
  'Recreate invoice': 'Recreate Invoice',
  'Confirmation of billing statement': 'Confirmation of billing statement',

  'There is a difference between the invoice setting data and the contents of the invoice. Please re-create the invoice.':
    'There is a difference between the invoice setting data and the contents of the invoice. Please re-create the invoice.',

  'Check invoice': 'Check Invoice',
  Mismatch: 'Data Mismatch',

  'Invoice setting': 'Invoice Settings',
  //'Invoice creation': 'Invoice creation',
  //'Create for selected items': 'Create for selected items',
  //'Bulk create for all items': 'Bulk create for all items',
  //'Bulk download': 'Bulk download',

  //'Please create an "exchange rate" to create an invoice.':
  //  'Please create an "exchange rate" to create an invoice.',
  //'Exchange rate setting': 'Exchange rate setting',

  //'You can download the CSV by selecting from CSV format of Account Unit, Account / Service Unit.':
  //  'You can download the CSV by selecting from CSV format of Account Unit, Account / Service Unit.',
  //'Download format': 'Download format',
  //'CSV does not exist. You can download from here only if you have created the invoice batch creation.':
  //  'CSV does not exist. You can download from here only if you have created the invoice batch creation.',
  //'Account / service unit': 'Account / service unit',
  //'Tag unit': 'Tag unit',

  'Support fee (%)': 'Support Fee (%)',
  'Support fee (fixed)': 'Support Fee (fixed)',
  'Support maintenance service Calculation target':
    'Support maintenance service Calculation target',
  Other: 'Other',

  //'Bulk invoice creation': 'Bulk invoice creation',
  //'Create invoice(s).': 'Create invoice(s).',
  //'Quantity to create: ': 'Quantity to create: ',
  //'Create invoices for all billing groups. The creation may take several minutes.':
  //  'Create invoices for all billing groups. The creation may take several minutes.',
  //'Create a batch': 'Create a batch',

  'Your invoice has been created.': 'Your invoice has been created.',

  'Batch change invoice settings': 'Batch change invoice settings',
  'Content change item': 'Content change item',
  'Show All': 'Show All',
  'Reduce the display': 'Reduce the display',
  'Billing method': 'Billing method',
  'Billing agent fee': 'Billing agent fee',
  'Method of calculation': 'Method of calculation',
  'Service charge percent': 'Service charge (%)',
  'Fee (fixed)': 'Fee (fixed)',
  'Account calculation method': 'Account calculation method',
  Target: 'Target',

  'AWS invoice total (purchase)': 'AWS invoice total (purchase)',
  'Invoice total (sales)': 'Invoice total (sales)',

  //'Request creation of bulk invoice PDF': 'Request creation of bulk invoice PDF',
  'Download bulk PDF': 'Download bulk PDF',
  //'You can download the invoice from the button below.':
  //  'You can download the invoice from the button below.',
  //'[Attention] Due to Ripple specifications, the billing date will be the execution date of the batch PDF creation request.':
  //  '[Attention] Due to Ripple specifications, the billing date will be the execution date of the batch PDF creation request.',
  //'PDF has not been created. Depending on the number of billing groups, PDF creation can take an hour or more.':
  //  'PDF has not been created. Depending on the number of billing groups, PDF creation can take an hour or more.',
  'AWS setting is common.': 'AWS setting is common.',
  'Changing the exchange rate is not supported.':
    'Changing the exchange rate is not supported.',
  'Set to 0 to use the master exchange rate.':
    'Set to 0 to use the master exchange rate.',
  'The following billing groups do not have exchange rates set. Create an invoice using the master exchange rate.':
    'The following billing groups do not have exchange rates set. Create an invoice using the master exchange rate.',
  //'Cloud vendors': 'Cloud vendors',
  //'Checking exchange rate settings...': 'Checking exchange rate settings...',
  //'Checking configuration data...': 'Checking configuration data...',
  //'Creating invoice...': 'Creating invoice...',
  'An error occurred while checking data.':
    'An error occurred while checking data.',
  'No graph data. Try updating the date range.':
    'No graph data. Try updating the date range.',

  'Request failed.': 'Request failed.',
  //'Request completed.': 'Request completed.',
  //'Requested a batch PDF creation of invoices. When the creation is completed, an email will be sent to the registered Email address. You can download the batch PDF from the URL in the email. Depending on the number of billing groups, PDF creation may take an hour or more.':
  //  'Requested a batch PDF creation of invoices. When the creation is completed, an email will be sent to the registered Email address. You can download the batch PDF from the URL in the email. Depending on the number of billing groups, PDF creation may take an hour or more.',
  //'In addition, due to the specifications of Ripple, the billing date is the execution date of the batch PDF creation request.':
  //  'In addition, due to the specifications of Ripple, the billing date is the execution date of the batch PDF creation request.',

  // Recalculations
  'Search for lump sum': 'Search for lump sum',
  Type: 'Type',
  Description: 'Description',
  Amount: 'Amount',
  'Duty free': 'Duty free',
  'Fee type': 'Fee type',

  //'Operation method: After selecting the fee to be applied, execute from the action button.':
  //  'Operation method: After selecting the fee to be applied, execute from the action button.',
  //'Not applied': 'Not applied',
  //Applied: 'Applied',

  'Select the data selected in the following month':
    'Select the month the fee should be applied to:',
  'Do not include selected data in the following month':
    'Do not include selected data in the following month',
  'Change exchange rate': 'Change Exchange Rate',
  'Duty-free setting': 'Duty-Free',
  'Make the selected item unapplied.': 'Make the selected item unapplied.',
  'Selected items': 'Selected Items',
  'There are no selected items.': 'There are no selected items.',
  Run: 'Apply',
  'Changed the setting of temporary money data.':
    'Changed the setting of temporary money data.',

  // Invoice templates
  'Template name': 'Template Name',
  'Search invoice templates': 'Search invoice templates',
  'Edit template': 'Edit Template',
  'Delete template': 'Delete Template',
  //'Add invoice template': 'Add invoice template',
  //'Template setting': 'Template setting',
  'Connected billing group': 'Connected Billing Group(s)',
  'Billing group setting': 'Billing Group Settings',
  //'No billing group has been set.': 'No billing group has been set.',
  'No billing groups.': 'No billing groups.',
  //'Selected billing group': 'Selected billing group',
  'Creating template...': 'Creating template...',
  'Template created.': 'Template created.',
  'Creating a template failed.': 'Creating a template failed.',
  //'Editing the template failed.': 'Editing the template failed.',
  'Deleting the template failed.': 'Deleting the template failed.',
  'Used in {number} billing groups.': 'Used in {number} billing groups.',
  'Select template': 'Select template',

  // -------ReservedInstance-------
  // Purchased
  Moved: 'Moved',
  'Active RI': 'Active RI',
  Expired: 'Expired',
  'RI edit': 'RI edit',
  Rollback: 'Rollback',
  Quantity: 'Quantity',
  'RI status': 'RI status',
  Original: 'Original',
  Changed: 'Changed',

  'RI Details': 'RI Details',
  'Upfront value': 'Upfront value',
  'Original account ID': 'Original account ID',

  'Move Reserved Instance': 'Move Reserved Instance',
  'Specify the account ID of the move destination.':
    'Specify the account ID of the move destination.',
  'Specify the number of Reserved Instances to move.':
    'Specify the number of Reserved Instances to move.',
  'Maximum number of movable': 'Maximum number of movable',
  'Move count': 'Move count',
  Moving: 'Moving',
  'The RI move is complete.': 'The RI move is complete.',

  'Return Reserved Instance': 'Return Reserved Instance',
  From: 'From',
  To: 'To',
  'Revert this Reserved Instance change.':
    'Revert this Reserved Instance change.',
  'Revert change': 'Revert change',
  'Changed back': 'Changed back',

  // Recommendation
  // Conditions
  Class: 'Class',
  Term: 'Term',
  Standard: 'Standard',
  Convertible: 'Convertible',
  standard: 'Standard',
  convertible: 'Convertible',
  'All Upfront': 'All Upfront',
  'Partial Upfront': 'Partial Upfront',
  'No Upfront': 'No Upfront',
  '1 year': '1 year',
  '3 years': '3 years',
  '1yr': '1 year',
  '3yr': '3 years',

  'Reduction cost': 'Reduction cost',
  'Reduction rate': 'Reduction rate',

  'Instance details': 'Instance details',

  'On demand cost': 'On demand cost',
  'Discounted cost': 'Discounted cost',
  'Average monthly discounted cost': 'Average monthly discounted cost',
  'Average yearly discounted cost': 'Average yearly discounted cost',

  // Utilization
  'Occupancy rate': 'Occupancy rate',

  'Availability zone': 'Availability zone',
  'Total uptime': 'Total uptime',

  // Savings Plans
  'Savings Plans': 'Savings Plans',
  Commitment: 'Commitment',
  'Instance Family': 'Instance Family',
  'Upfront Cost': 'Upfront Cost',
  'Monthly Recurring Charges': 'Monthly Recurring Charges',
  'Purchase term': 'Purchase Term',
  'Active SP': 'Active SP',
  'Search savings plan type': 'Search savings plan type',
  'EC2 Instance on ': 'EC2 Instance on ',
  Compute: 'Compute',
  Hour: 'Hour',
  hrs: 'hrs',
  Day: 'Day',
  'Account name': 'Account Name',
  'Account ID': 'Account Id',
  '2yr': '2 year',
  EC2InstanceSavingsPlans: 'EC2 Instance',
  ComputeSavingsPlans: 'Compute',

  // 'Application rate': 'Application rate', // コメントされてる

  // -------Settings-------
  // InvoiceSetting
  // InvoiceSetting - BasicSetting
  'Basic setting': 'Basic Settings',

  'Please select fractional part rounding method.':
    'Please select fractional part rounding method.',
  'Allocation settings for untagged resources':
    'Allocation Settings for Untagged Resources',
  'Automatically allocate according to usage fee':
    'Automatically allocate according to usage fee',
  'Manually set the allocation ratio': 'Manually set the allocation ratio',
  // 'Please select consumption tax consolidation level.':
  //   'Please select consumption tax consolidation level.', // コメントされてる

  // InvoiceSetting - Appearance
  'Beginning of the month': 'Beginning of the month',
  'End of the month': 'End of the month',
  '{day} of the current month': '{day} of the current month',
  'Beginning of the next month': 'Beginning of the next month',
  'End of the next month': 'End of the next month',
  '{day} of the next month': '{day} of the next month',
  'Beginning of the second month': 'Beginning of the second month',
  'End of the the second month': 'End of the the second month',
  '{day} of the second month': '{day} of the second month',

  // InvoiceSetting - ServiceSetting

  // PayerSetting
  'Search for payer account': 'Search for payer account',
  Vendor: 'Provider',

  'Please Enter your Subscription ID.': 'Please Enter your Subscription ID.',
  'Please enter your account ID.': 'Please enter your account ID.',
  'Please enter your account name.': 'Please enter your account name.',
  'Added payer account.': 'Added payer account.',

  'Delete the above payer account.': 'Delete the above payer account.',
  'Delete this payer account': 'Delete this payer account',
  'Payer account deleted.': 'Payer account deleted.',
  'Payment account not registered.': 'Payment account not registered.',

  // UserSetting
  //'Lang Setting': 'Language',
  'Language changed': 'Language changed',
  Language: 'Language',
  ja: 'Japanese',
  en: 'English',

  'Notification settings': 'Notification Settings',
  'Notification Settings': 'Notification Settings',
  'Change notification settings': 'Change notification settings',
  'Changed notification settings.': 'Changed notification settings.',

  'Current password': 'Current Password',
  'Please enter your password again for confirmation.':
    'Please enter your password again for confirmation.',
  'It does not match the new password. Input correctly.':
    'It does not match the new password. Input correctly.',
  'Please enter your current password.': 'Please enter your current password.',
  'Please enter a new password.': 'Please enter a new password.',
  'Set a password with 8 characters to 30 characters.':
    'Set a password with 8 characters to 30 characters.',
  'New password': 'New Password',
  'New password (confirmation)': 'Confirm Password',
  'Please enter the correct password.': 'Please enter the correct password.',
  'An error has occurred.': 'An error has occurred.',

  Notification: 'Notification',
  'Create notification settings': 'Create notification settings',

  Profile: 'Profile',

  'Partner Earned Rate Credit': 'Partner Earned Rate Credit',
  'rate applied across all usage and will apply to all Billing Groups.':
    'rate applied across all usage and will apply to all Billing Groups.',
  'Auto apply Recalculations to invoice settings':
    'Auto apply Recalculations to invoice settings',
  Discounts: 'Discounts',
  'Software Licences': 'Software Licences',
  'Enable setting': 'Enable setting',

  // Billing Group setting
  'Billing group Setting': 'Billing Group Settings',

  // -------WaveForReseller-------
  'Search users': 'Search users',
  //'E-mail/Login ID': 'E-mail/Login ID',
  //'Created date': 'Created date',
  //'Update date': 'Update date',
  //'Password update date': 'Password update date',
  //'Trial Period': 'Trial Period',
  //'E-mail address change': 'Change email',
  //'Change Wave Visibility': 'Change Wave Visibility',
  Activate: 'Activate',
  Deactivate: 'Deactivate',
  Verify: 'Verify',
  'Not set': 'Not set',

  //'Add Wave account': 'Add Wave account',

  'Reseller account': 'Reseller account',
  //'Download reseller info(.txt)': 'Download reseller info(.txt)',
  'Display items': 'Display items',
  'Change display columns': 'Display Settings',
  'Login failed.': 'Login failed.',

  'Activate Reseller for Wave account': 'Activate Reseller for Wave account',
  'Activate account': 'Activate account',
  //'Notify changes': 'Notify changes',

  'Notify of password change': 'Notify user by email',
  'Please set a password of 8 to 18 characters.':
    'Please set a password of 8 to 18 characters.',

  'Add Reseller for Wave account': 'Add Reseller for Wave account',
  //'The same email address can not be registered more than once.':
  //  'The same email address can not be registered more than once.',
  'Setting Wave Display Menu': 'Setting Wave Display Menu',
  //'Notify the registered e-mail address': 'Notify the registered e-mail address',

  'Register account': 'Register account',
  // 'RI Page': 'RI Page', //コメントされてる
  // 'Invoice Page': 'Invoice Page', //コメントされてる
  'Please enter the correct email address.':
    'Please enter the correct email address.',

  'Update email address': 'Update Email Address',
  'New mail address': 'Email Address',
  'Notify of change of email address': 'Notify at new email address',
  'Update the email address': 'save',
  'Email address updated.': 'Email address updated.',

  'Change Wave menu visibility': 'Change Wave menu visibility',
  'Resellers can enable / disable certain functionalities for their Wave customers':
    'Resellers can enable / disable certain functionalities for their Wave customers',
  'Representation project': 'Configurations',
  'Make settings for enabling / disabling invoice page display.':
    'Make settings for enabling / disabling invoice page display.',
  'Update wave display menu': 'Update wave display menu',
  'Wave display menu updated.': 'Wave display menu updated.',

  'Expiration date': 'Expiration date',
  'Trial plan sets the expiration date. * Add the number of days entered from the current expiration date.':
    'Trial plan sets the expiration date. * Add the number of days entered from the current expiration date.',
  'Please select a plan.': 'Please select a plan.',
  'Changed plan': 'Changed plan',

  // Export Original cost
  'Export original cost (.csv)': 'Export Original Cost',
  'Register exchange rate for original cost CSV in JPY.':
    'Register exchange rate for original cost CSV in JPY.',
  'Exporting original cost': 'Export Original Cost',
  'Export in JPY': 'Export in JPY',
  'Export in USD': 'Export in USD',
  'Rounding Figures': 'Rounding Settings',
  'Search invoice ID': 'Search invoice ID',
  'Selected Invoice ID': 'Selected Invoice ID',
  'Change before': 'Change before',
  'Exporting data in American dollars or Japanese yen. Exporting Japanese data you need to fill in  exchange rate in each invoice.':
    'Exporting data in American dollars or Japanese yen. Exporting Japanese data you need to fill in  exchange rate in each invoice.',
  'Please fill in exchange rate in each invoice id.':
    'Please set the exchange rates for each invoice.',

  // API access tokens
  //'API access tokens': 'API access tokens',
  //'Search token': 'Search token',
  //'Generating token...': 'Generating token...',
  //'Generate a token. Take care when handling the token.':
  //  'Generate a token. Take care when handling the token.',
  //'Generated token': 'Generated token',
  //'Delete token': 'Delete token',
  //'Deleting...': 'Deleting...',
  //'Deleted token': 'Deleted token',
  //'Client ID': 'Client ID',
  //'Client Secret': 'Client Secret',

  // Untagged Groups
  'Untagged Groups': 'Untagged Groups',
  'Untagged group name': 'Untagged Group Name',
  'Group name': 'Group Name',
  'Search Untagged group': 'Search Untagged group',
  'Create Untagged group': 'Create Untagged group',
  'Untagged group created.': 'Untagged group created.',
  'Creating the untagged group failed.': 'Creating the untagged group failed.',
  'Edit untagged group': 'Edit Untagged Group',
  'Changed untagged group setting.': 'Changed untagged group setting.',
  'Changing the untagged group setting failed.':
    'Changing the untagged group setting failed.',
  'Delete untagged group': 'Delete Untagged Group',
  'Deleted untagged group.': 'Deleted Untagged Group.',
  'Deleting the untagged group failed.': 'Deleting the untagged group failed.',
  'Target untagged group': 'Target untagged group',
  'Resource percentage': 'Usage Percentage',
  'Manually allocate resources': 'Manually allocate resources',
  'Allocate resources': 'Allocate resources',
  'Resource Available': 'Resource Available',
  'Type of allocation': 'Type of allocation',
  'Number of selected accounts': 'Number of selected accounts',
  'Fixed fee is processed first.': 'Fixed fee is processed first.',

  //rimarket
  Seller: 'Seller',
  'Upfront Price': 'Upfront Price',
  'Effective Rate': 'Effective Rate',
  'Hourly Rate': 'Hourly Rate',
  'Availability Zone': 'Availability Zone',
  'Payment Option': 'Payment Option',
  'Offering Class': 'Offering Class',
  'Quantity Available': 'Quantity Available',
  label_Platform: 'Platform',
  label_Reserve_Capacity: 'Reserve Capacity',
  label_Tenancy: 'Tenancy',
  label_Offering_Class: 'Offering Class',
  label_Instance_Type: 'Instance Type',
  label_Payment_Option: 'Payment Option',
  label_Availability_Zone: 'Zone',
  'Search MarketPlace': 'Search RI MarketPlace',

  //spot
  REGION: 'REGION',
  PRODUCT: 'PRODUCT',
  'INSTANCE TYPE': 'INSTANCE TYPE',
  'DATE RANGE': 'DATE RANGE',
  'si.date': 'Date',
  'si.availability_zone': 'Availability Zone',
  'si.price': 'Price',
  'si.no_data': 'NO DATA',
  search_instance: 'Search Instance Type',

  // MFA
  'Multi-factor authentication': 'Multi-Factor Authentication',

  // Azure Option setting
  'Option Settings': 'Vendor-Specific Options',
  resource_group: 'Resource Group',
  apply_campaign_pricing: 'Apply Campaign Pricing',
  apply_pc_earned_credit: 'Apply Partner Earned Credit',

  Modifiers: 'Cost Modifiers',
  'Feature Management': 'Wave/Aqua Default Settings',
  'Enter your username here': 'Enter your username here',
  'Enter your password here': 'Enter your password here',
  'Forgot password?': 'Forgot password?',
  'Forgot password is only available in production environment':
    'Forgot password is only available when API environment is set to production',
  copy_right: 'Copyright © 2024 Alphaus Inc. All rights reserved',
  term_of_service: 'Terms of service',
  privacy_policy: 'Privacy policy',
  information_security_policy: 'Information security policy',

  // Cost Finalization
  'Original invoice listing': 'Original invoice listing',
  'Bulk set exchange rate': 'Bulk set exchange rate',
  'Export as CSV': 'Export as CSV',
  'Invoice ID': 'Invoice ID',
  'Payer ID': 'Payer ID',
  'Unblended cost': 'Unblended cost',
  'Not available': 'Not available',
  'This vendor is not supported yet': 'This vendor is not supported yet',
  CONFIRMED: 'CONFIRMED',
  UNCONFIRMED: 'UNCONFIRMED',
  'Invoice unavailable': 'Invoice unavailable',
  'There is no invoice for the selected month':
    'There is no invoice for the selected month',
  'Loading invoice data...': 'Loading invoice data...',
  'Pick a date': 'Pick a date',
  'Place Holder for Original Invoice Listing':
    'Placeholder for Original Invoice Listing',
  Search: 'Search',
  'Select month': 'Select month',
  Confirmed: 'Confirmed',
  Unconfirmed: 'Unconfirmed',
  'Azure invoice is not confirmed yet, please try later':
    'Azure invoice is not confirmed yet, please try later',
  "Before you proceed please confirm you've already received Google Cloud invoices for each payer account":
    "Before you proceed please confirm you've already received Google Cloud invoices for each payer account",
  'Please verify information before proceeding':
    'Please verify information before proceeding',
  'Amazon Web Services': 'Amazon Web Services',
  'Google Cloud': 'Google Cloud',
  'Microsoft Azure': 'Microsoft Azure',
  'Reseller Charge Setting': 'Reseller Charge Setting',
  Apply: 'Apply',
  'Clear all': 'Clear all',
  'List of invoice IDs being finalized from the selected month':
    'List of invoice IDs being finalized from the selected month',
  'No invoice data available for the selected month':
    'No invoice data available for the selected month',
  Retry: 'Retry',

  // Table Pagination
  'Showing {{startItem}} - {{endItem}} of {{totalItems}} results':
    'Showing {{startItem}} - {{endItem}} of {{totalItems}} results',
  'Records per page:': 'Records per page:',

  // Status Type Translations (for various status enums)
  StatusTypes: {
    NotStarted: 'NOT STARTED',
    Preparing: 'PREPARING',
    Running: 'RUNNING',
    Checking: 'CHECKING',
    Success: 'SUCCESS',
    Error: 'ERROR',
    Confirmed: 'CONFIRMED',
    Unconfirmed: 'UNCONFIRMED',
    Created: 'CREATED',
    NotCreated: 'NOT CREATED',
    InProgress: 'IN PROGRESS',
    Completed: 'COMPLETED',
    Preview: 'PREVIEW',
    Published: 'PUBLISHED',
    NotPublished: 'NOT PUBLISHED',
  },

  // General UI
  Loading: 'Loading',

  // Error Boundary
  'Module unavailable': 'Module unavailable',
  '{{appName}} is unavailable': '{{appName}} is unavailable',
  'This service is currently experiencing technical difficulties.':
    'This service is currently experiencing technical difficulties.',
  Refresh: 'Refresh',
  'Report Issue': 'Report Issue',

  // Timezone
  UTC: 'UTC',
  JST: 'JST',
};
