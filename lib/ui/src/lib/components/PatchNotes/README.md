# Patch Notes Component

A reusable component for displaying release notes and patch updates in a user-friendly modal interface.

## Overview

The Patch Notes system provides an organized way to display version history and updates to users. It consists of:

- **PatchNotes Component**: A modal-based UI component in `lib-ui`
- **Patch Notes Data**: Structured data in `lib-constants`
- **i18n Support**: Translations in English and Japanese

## Features

- 📋 **Version List View**: Browse all available versions
- 🔍 **Detailed Version View**: Expand any version to see detailed changes
- 🌐 **Internationalization**: Full support for English and Japanese
- 🎨 **Design System Compliant**: Uses Ripple UI design tokens
- 📱 **Responsive**: Works well on all screen sizes
- 🔖 **Categorized Updates**: Organized by feature type (Features, Bug Fixes, etc.)

## Usage

### In the Host App (Profile Page)

```tsx
import { PatchNotes } from '@project-ed/lib/ui';
import { useState } from 'react';

function Profile() {
  const [patchNotesModal, setPatchNotesModal] = useState(false);

  return (
    <>
      <Button onClick={() => setPatchNotesModal(true)}>Patch Notes</Button>

      <PatchNotes
        isVisible={patchNotesModal}
        onClose={() => setPatchNotesModal(false)}
      />
    </>
  );
}
```

### In Any Other Component

```tsx
import { PatchNotes } from '@project-ed/lib/ui';

<PatchNotes isVisible={isOpen} onClose={handleClose} />;
```

## Adding New Patch Notes

To add a new version's patch notes, edit the data file:

**File**: `lib/constants/src/lib/patchNotes/data.ts`

```typescript
export const patchNotesData: PatchNotesData = [
  {
    version: '0.12.0', // New version at the top
    releaseDate: '2025-12-01',
    summary: 'Brief summary of this release',
    sections: [
      {
        title: 'New Features',
        items: ['Feature 1 description', 'Feature 2 description'],
      },
      {
        title: 'Bug Fixes',
        items: ['Fix 1 description', 'Fix 2 description'],
      },
    ],
  },
  // ... existing versions
];
```

### Section Title Icons

The component automatically adds emojis based on section titles:

- 🎉 **New Features**
- ✨ **Improvements**
- 🐛 **Bug Fixes**
- 🔧 **Technical Improvements**
- 📊 **Dashboard Enhancements**
- 📄 **Invoices Improvements**

## Data Structure

### PatchNote Interface

```typescript
interface PatchNote {
  version: string; // Semantic version (e.g., "0.11.0")
  releaseDate: string; // ISO date string (e.g., "2025-11-10")
  summary?: string; // Optional brief summary
  sections: PatchNoteSection[];
}
```

### PatchNoteSection Interface

```typescript
interface PatchNoteSection {
  title: string; // Section heading
  items: string[]; // List of changes/updates
}
```

## Translation Keys

### English (`en_host.ts`)

```typescript
{
  patch_notes: 'Patch Notes',
  whats_new: "What's New",
  release_notes: 'Release Notes',
  version: 'Version',
  release_date: 'Release Date',
  view_details: 'View Details',
  no_patch_notes: 'No patch notes available',
  latest_updates: 'Latest Updates',
  all_versions: 'All Versions',
}
```

### Japanese (`ja_host.ts`)

```typescript
{
  patch_notes: 'パッチノート',
  whats_new: '新機能',
  release_notes: 'リリースノート',
  version: 'バージョン',
  release_date: 'リリース日',
  view_details: '詳細を表示',
  no_patch_notes: 'パッチノートがありません',
  latest_updates: '最新の更新',
  all_versions: '全バージョン',
}
```

## Component Props

| Prop        | Type         | Required | Description                 |
| ----------- | ------------ | -------- | --------------------------- |
| `isVisible` | `boolean`    | Yes      | Controls modal visibility   |
| `onClose`   | `() => void` | Yes      | Called when modal is closed |

## Design System Compliance

The component uses the following design tokens:

### Colors

- `tangBlue-60`: Accent color for list bullets
- `neutral-5, 10, 30, 70, 80, 90, 100`: Text and border colors
- `info` Badge variant: Version badges

### Components Used

- `Modal`: Base modal container
- `Button`: Navigation and action buttons
- `Card`: Version list items
- `Badge`: Version indicators

## File Structure

```
ripple-ui/
├── lib/
│   ├── constants/
│   │   └── src/lib/patchNotes/
│   │       ├── types.ts          # TypeScript interfaces
│   │       ├── data.ts           # Patch notes data
│   │       └── index.ts          # Exports
│   └── ui/
│       └── src/lib/components/PatchNotes/
│           ├── PatchNotes.tsx    # Component implementation
│           ├── README.md         # This file
│           └── index.ts          # Exports
├── apps/
│   └── host/
│       └── src/app/views/Profile/
│           └── Profile.tsx       # Integration example
```

## Best Practices

1. **Keep summaries concise**: Aim for 1-2 sentences that capture the essence of the release
2. **Use clear, user-friendly language**: Avoid technical jargon when possible
3. **Group related items**: Organize updates into logical sections
4. **Add new versions at the top**: Most recent version should be first in the array
5. **Follow semantic versioning**: Use MAJOR.MINOR.PATCH format
6. **Update both languages**: Always provide translations for both English and Japanese

## Maintenance

When creating a new release:

1. Update version numbers using the version script:

   ```bash
   npm run version:patch  # or minor/major
   ```

2. Add corresponding patch notes to `lib/constants/src/lib/patchNotes/data.ts`

3. Ensure translations are complete in both `en_host.ts` and `ja_host.ts`

4. Test the component in development:

   ```bash
   nx serve-host host
   ```

5. Navigate to Profile → Patch Notes to verify the display

## Future Enhancements

Potential improvements for future versions:

- [ ] "What's New" badge for new releases
- [ ] "Last viewed" tracking to highlight new updates
- [ ] Search/filter functionality for specific versions
- [ ] Export patch notes as PDF or markdown
- [ ] Link to detailed release notes in GitHub
- [ ] Animated transitions between views
- [ ] RSS/Atom feed for patch notes

## Related Documentation

- [Development Guide](../../../../../../../docs/DEVELOPMENT_GUIDE.md)
- [Versioning Guide](../../../../../../../docs/VERSIONING.md)
- [Release Notes](../../../../../../../docs/release-notes/)
- [Design System](../../../constants/src/lib/tailwind/tailwind-config.ts)
