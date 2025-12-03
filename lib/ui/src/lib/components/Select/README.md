# Select Component

The Select component provides a dropdown selection interface for choosing from predefined options. It's essential for filtering cost data, selecting billing periods, and configuring account settings.

## Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@alphaus/ripple-ui';

// Basic select
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>;
```

## Props

| Prop            | Type                      | Default | Description                |
| --------------- | ------------------------- | ------- | -------------------------- |
| `value`         | `string`                  | -       | Selected value             |
| `onValueChange` | `(value: string) => void` | -       | Change handler             |
| `placeholder`   | `string`                  | -       | Placeholder text           |
| `disabled`      | `boolean`                 | `false` | Whether select is disabled |
| `required`      | `boolean`                 | `false` | Whether select is required |

## Basic Examples

### Cloud Provider Selection

```tsx
<Select value={provider} onValueChange={setProvider}>
  <SelectTrigger>
    <SelectValue placeholder="Select cloud provider" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="aws">Amazon Web Services</SelectItem>
    <SelectItem value="azure">Microsoft Azure</SelectItem>
    <SelectItem value="gcp">Google Cloud</SelectItem>
  </SelectContent>
</Select>
```

### Billing Period Selection

```tsx
<Select value={period} onValueChange={setPeriod}>
  <SelectTrigger>
    <SelectValue placeholder="Select billing period" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="2024-01">January 2024</SelectItem>
    <SelectItem value="2024-02">February 2024</SelectItem>
    <SelectItem value="2024-03">March 2024</SelectItem>
  </SelectContent>
</Select>
```

## Grouped Options

### Region Selection with Groups

```tsx
<Select value={region} onValueChange={setRegion}>
  <SelectTrigger>
    <SelectValue placeholder="Select region" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>US Regions</SelectLabel>
      <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
      <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
      <SelectItem value="us-west-1">US West (N. California)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>EU Regions</SelectLabel>
      <SelectItem value="eu-west-1">EU West (Ireland)</SelectItem>
      <SelectItem value="eu-central-1">EU Central (Frankfurt)</SelectItem>
      <SelectItem value="eu-north-1">EU North (Stockholm)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Asia Pacific</SelectLabel>
      <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
      <SelectItem value="ap-northeast-1">Asia Pacific (Tokyo)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Cost Management Examples

### Service Category Selection

```tsx
<Select value={category} onValueChange={setCategory}>
  <SelectTrigger>
    <SelectValue placeholder="Select service category" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Compute</SelectLabel>
      <SelectItem value="ec2">EC2 Instances</SelectItem>
      <SelectItem value="lambda">Lambda Functions</SelectItem>
      <SelectItem value="ecs">ECS Containers</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Storage</SelectLabel>
      <SelectItem value="s3">S3 Storage</SelectItem>
      <SelectItem value="ebs">EBS Volumes</SelectItem>
      <SelectItem value="efs">EFS File System</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Database</SelectLabel>
      <SelectItem value="rds">RDS Database</SelectItem>
      <SelectItem value="dynamodb">DynamoDB</SelectItem>
      <SelectItem value="redshift">Redshift</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Currency Selection

```tsx
<Select value={currency} onValueChange={setCurrency}>
  <SelectTrigger>
    <SelectValue placeholder="Select currency" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="usd">
      <div className="flex items-center gap-2">
        <span className="font-mono">$</span>
        <span>USD - US Dollar</span>
      </div>
    </SelectItem>
    <SelectItem value="eur">
      <div className="flex items-center gap-2">
        <span className="font-mono">€</span>
        <span>EUR - Euro</span>
      </div>
    </SelectItem>
    <SelectItem value="gbp">
      <div className="flex items-center gap-2">
        <span className="font-mono">£</span>
        <span>GBP - British Pound</span>
      </div>
    </SelectItem>
    <SelectItem value="jpy">
      <div className="flex items-center gap-2">
        <span className="font-mono">¥</span>
        <span>JPY - Japanese Yen</span>
      </div>
    </SelectItem>
  </SelectContent>
</Select>
```

### Budget Period Type

```tsx
<Select value={budgetType} onValueChange={setBudgetType}>
  <SelectTrigger>
    <SelectValue placeholder="Select budget period" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="monthly">Monthly</SelectItem>
    <SelectItem value="quarterly">Quarterly</SelectItem>
    <SelectItem value="annual">Annual</SelectItem>
    <SelectItem value="custom">Custom Period</SelectItem>
  </SelectContent>
</Select>
```

## Form Integration

### Complete Form Example

```tsx
<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    <div>
      <Label htmlFor="customer-select">Customer</Label>
      <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
        <SelectTrigger id="customer-select">
          <SelectValue placeholder="Select a customer" />
        </SelectTrigger>
        <SelectContent>
          {customers.map((customer) => (
            <SelectItem key={customer.id} value={customer.id}>
              {customer.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <div>
      <Label htmlFor="account-select">Account</Label>
      <Select value={selectedAccount} onValueChange={setSelectedAccount}>
        <SelectTrigger id="account-select">
          <SelectValue placeholder="Select an account" />
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.id} value={account.id}>
              <div className="flex justify-between w-full">
                <span>{account.name}</span>
                <span className="font-mono text-sm text-muted-foreground">
                  {account.id}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <div>
      <Label htmlFor="period-select">Billing Period</Label>
      <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <SelectTrigger id="period-select">
          <SelectValue placeholder="Select billing period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2024-01">January 2024</SelectItem>
          <SelectItem value="2024-02">February 2024</SelectItem>
          <SelectItem value="2024-03">March 2024</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <Button type="submit" className="w-full">
      Generate Report
    </Button>
  </div>
</form>
```

## States

### Disabled State

```tsx
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

### Error State

```tsx
<div className="space-y-2">
  <Label htmlFor="error-select">Required Field</Label>
  <Select value={value} onValueChange={setValue}>
    <SelectTrigger id="error-select" className="border-red-500">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-sm text-red-600">This field is required</p>
</div>
```

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation with arrow keys
- Focus management when opening/closing
- Search functionality for large option lists
- Proper labeling with associated labels

## Best Practices

- Use clear, descriptive option labels
- Group related options when appropriate
- Provide placeholder text to guide users
- Use consistent option ordering (alphabetical, by frequency, etc.)
- Consider search functionality for large option lists

## Related Components

- [Input](../Input/README.md) - For text input fields
- [ComboBox](../ComboBox/README.md) - For searchable selections
- [Label](../Label/README.md) - For form labels
