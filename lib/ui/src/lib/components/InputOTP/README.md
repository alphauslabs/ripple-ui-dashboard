# InputOTP Component

The InputOTP component provides a secure one-time password input interface for multi-factor authentication and verification workflows. Built with accessibility and security in mind, it supports various input patterns and validation requirements, essential for secure access to cost management systems and sensitive financial data.

Each slot ships with a neutral white background (`bg-neutral-100`) and a subtle focus state (`bg-neutral-95`) to preserve readability while aligning with the global Ripple design system.

## Usage

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@alphaus/ripple-ui';
import { useState } from 'react';

const [otp, setOtp] = useState('');

<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>;
```

## Components

### InputOTP

The main container component that manages OTP input state and validation.

#### InputOTP Props

| Prop                 | Type                      | Default | Description                        |
| -------------------- | ------------------------- | ------- | ---------------------------------- |
| `maxLength`          | `number`                  | -       | Maximum number of characters       |
| `value`              | `string`                  | -       | Current OTP value                  |
| `onChange`           | `(value: string) => void` | -       | Change handler                     |
| `pattern`            | `string`                  | -       | RegEx pattern for input validation |
| `disabled`           | `boolean`                 | `false` | Whether the input is disabled      |
| `autoFocus`          | `boolean`                 | `false` | Auto focus on the first slot       |
| `containerClassName` | `string`                  | -       | CSS class for the container        |
| `className`          | `string`                  | -       | CSS class for the input            |

### InputOTPGroup

Groups related OTP slots together.

#### InputOTPGroup Props

| Prop        | Type              | Default | Description             |
| ----------- | ----------------- | ------- | ----------------------- |
| `className` | `string`          | -       | CSS class for the group |
| `children`  | `React.ReactNode` | -       | Group content (slots)   |

### InputOTPSlot

Individual input slot for a single character.

#### InputOTPSlot Props

| Prop        | Type     | Default | Description                  |
| ----------- | -------- | ------- | ---------------------------- |
| `index`     | `number` | -       | Zero-based index of the slot |
| `className` | `string` | -       | CSS class for the slot       |

### InputOTPSeparator

Visual separator between OTP groups.

#### InputOTPSeparator Props

| Prop        | Type     | Default | Description                 |
| ----------- | -------- | ------- | --------------------------- |
| `className` | `string` | -       | CSS class for the separator |

## Examples

### Basic 6-Digit OTP

```tsx
const [otp, setOtp] = useState('');

<div className="space-y-2">
  <label className="text-sm font-medium">Enter verification code</label>
  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  <p className="text-sm text-gray-500">
    Check your authenticator app for the 6-digit code
  </p>
</div>;
```

### 4-Digit PIN Entry

```tsx
const [pin, setPin] = useState('');

<div className="space-y-2">
  <label className="text-sm font-medium">Security PIN</label>
  <InputOTP maxLength={4} value={pin} onChange={setPin} pattern="[0-9]*">
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
  </InputOTP>
</div>;
```

### 8-Digit Backup Code

```tsx
const [backupCode, setBackupCode] = useState('');

<div className="space-y-2">
  <label className="text-sm font-medium">Backup Recovery Code</label>
  <InputOTP maxLength={8} value={backupCode} onChange={setBackupCode}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
      <InputOTPSlot index={6} />
      <InputOTPSlot index={7} />
    </InputOTPGroup>
  </InputOTP>
  <p className="text-sm text-gray-500">Enter one of your saved backup codes</p>
</div>;
```

### With Form Validation

```tsx
const [otp, setOtp] = useState('');
const [isValid, setIsValid] = useState(true);
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  if (otp.length !== 6) {
    setIsValid(false);
    return;
  }

  setIsLoading(true);
  try {
    await verifyOTP(otp);
    // Success handling
  } catch (error) {
    setIsValid(false);
  } finally {
    setIsLoading(false);
  }
};

<div className="space-y-4">
  <div className="space-y-2">
    <label className="text-sm font-medium">Two-Factor Authentication</label>
    <InputOTP
      maxLength={6}
      value={otp}
      onChange={(value) => {
        setOtp(value);
        setIsValid(true);
      }}
      disabled={isLoading}
      className={!isValid ? 'border-red-500' : ''}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    {!isValid && (
      <p className="text-sm text-red-500">
        Invalid verification code. Please try again.
      </p>
    )}
  </div>

  <button
    onClick={handleSubmit}
    disabled={otp.length !== 6 || isLoading}
    className="w-full px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
  >
    {isLoading ? 'Verifying...' : 'Verify Code'}
  </button>
</div>;
```

### Auto-Submit on Complete

```tsx
const [otp, setOtp] = useState('');

const handleOTPChange = (value) => {
  setOtp(value);

  if (value.length === 6) {
    // Auto-submit when complete
    setTimeout(() => {
      handleVerification(value);
    }, 500);
  }
};

<InputOTP maxLength={6} value={otp} onChange={handleOTPChange} autoFocus>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>;
```

## Patterns and Validation

### Numeric Only

```tsx
<InputOTP maxLength={6} pattern="[0-9]*" value={otp} onChange={setOtp}>
  {/* slots */}
</InputOTP>
```

### Alphanumeric

```tsx
<InputOTP maxLength={8} pattern="[A-Za-z0-9]*" value={code} onChange={setCode}>
  {/* slots */}
</InputOTP>
```

### Letters Only

```tsx
<InputOTP
  maxLength={4}
  pattern="[A-Za-z]*"
  value={letters}
  onChange={setLetters}
>
  {/* slots */}
</InputOTP>
```

## Accessibility

- **Keyboard Navigation**: Full support for arrow keys, backspace, and delete
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Automatic focus progression between slots
- **High Contrast**: Clear visual indicators for active and filled states
- **Reduced Motion**: Respects user preferences for animation

## Security Considerations

1. **Auto-Clear**: Clear input after failed attempts
2. **Paste Support**: Allow pasting of codes for better UX
3. **No Autocomplete**: Prevents browser from saving OTP values
4. **Time Limits**: Implement appropriate timeouts for security
5. **Rate Limiting**: Protect against brute force attempts

## Best Practices

1. **Clear Instructions**: Provide clear guidance on where to find the code
2. **Resend Option**: Include ability to request a new code
3. **Fallback Methods**: Offer alternative verification methods
4. **Progress Indication**: Show verification progress to users
5. **Error Handling**: Provide helpful error messages and recovery options

## Cost Management Use Cases

- **Multi-Factor Authentication**: Secure access to billing and cost management systems
- **Financial Transaction Verification**: Verify high-value transactions or budget changes
- **Admin Access**: Additional security for administrative functions
- **API Key Generation**: Verify identity when generating new API keys
- **Account Recovery**: Secure account recovery processes
- **Audit Trail Access**: Verify identity when accessing sensitive audit logs
- **Budget Approval**: Multi-step approval process for large budget allocations
