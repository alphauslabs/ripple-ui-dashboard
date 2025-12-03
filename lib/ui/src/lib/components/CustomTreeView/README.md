# CustomTreeView Component

The CustomTreeView component provides a hierarchical data visualization interface with expandable/collapsible nodes, checkbox selection, and visual connection lines. Built on react-accessible-treeview, it offers full accessibility support and is ideal for displaying nested cost structures, organizational hierarchies, and resource categorizations in cost management applications.

## Usage

```tsx
import { CustomTreeView, TreeNodeData } from '@alphaus/ripple-ui';

function CostCategoryTree() {
  const costCategories: TreeNodeData[] = [
    {
      name: 'AWS Services',
      children: [
        {
          name: 'Compute',
          value: '$2,450.50',
          children: [
            { name: 'EC2', value: '$1,890.25', isSelected: true },
            { name: 'Lambda', value: '$350.15' },
            { name: 'ECS', value: '$210.10' },
          ],
        },
        {
          name: 'Storage',
          value: '$1,125.30',
          children: [
            { name: 'S3', value: '$890.20', isSelected: true },
            { name: 'EBS', value: '$235.10' },
          ],
        },
      ],
    },
    {
      name: 'Azure Services',
      children: [
        {
          name: 'Virtual Machines',
          value: '$1,675.80',
          isSelected: false,
        },
        {
          name: 'Storage Accounts',
          value: '$456.25',
        },
      ],
    },
  ];

  const handleNodeSelect = (nodeId: string | number) => {
    console.log('Selected node:', nodeId);
  };

  return (
    <CustomTreeView
      data={costCategories}
      onNodeSelect={handleNodeSelect}
      className="border rounded-lg p-4"
    />
  );
}
```

## Props

### TreeViewProps

| Prop           | Type                       | Default | Description                        |
| -------------- | -------------------------- | ------- | ---------------------------------- |
| `data`         | `TreeNodeData[]`           | -       | Array of tree node data to display |
| `onNodeSelect` | `(nodeId: NodeId) => void` | -       | Callback when a node is selected   |
| `className`    | `string`                   | `''`    | Additional CSS classes to apply    |

### TreeNodeData

| Prop         | Type             | Default | Description                                |
| ------------ | ---------------- | ------- | ------------------------------------------ |
| `name`       | `string`         | -       | Display name for the node                  |
| `children`   | `TreeNodeData[]` | -       | Child nodes (for branch nodes)             |
| `isSelected` | `boolean`        | `false` | Whether the node is selected               |
| `value`      | `string`         | -       | Additional value to display under the name |

## Features

### Hierarchical Display

- **Nested Structure**: Support for unlimited nesting levels
- **Visual Connections**: Tree lines showing parent-child relationships
- **Expand/Collapse**: Interactive chevron icons for navigation
- **Indentation**: Clear visual hierarchy with proper indentation

### Selection Interface

- **Checkbox Integration**: Each node includes a checkbox for selection
- **Selection States**: Support for checked, unchecked, and indeterminate states
- **Visual Feedback**: Hover effects and clear selection indicators

### Accessibility

- **Keyboard Navigation**: Full keyboard support for tree navigation
- **Screen Reader Support**: Built on react-accessible-treeview
- **ARIA Labels**: Proper ARIA labeling for assistive technologies
- **Focus Management**: Clear focus indicators and logical tab order

## Examples

### Department Cost Breakdown

```tsx
function DepartmentCostTree() {
  const departmentData: TreeNodeData[] = [
    {
      name: 'Engineering',
      value: '$15,450.00',
      children: [
        {
          name: 'Development',
          value: '$8,920.00',
          children: [
            { name: 'Frontend Team', value: '$3,240.00' },
            { name: 'Backend Team', value: '$4,180.00' },
            { name: 'DevOps Team', value: '$1,500.00' },
          ],
        },
        {
          name: 'QA',
          value: '$3,530.00',
          children: [
            { name: 'Manual Testing', value: '$1,890.00' },
            { name: 'Automation', value: '$1,640.00' },
          ],
        },
        {
          name: 'Infrastructure',
          value: '$3,000.00',
          isSelected: true,
        },
      ],
    },
    {
      name: 'Marketing',
      value: '$8,750.00',
      children: [
        { name: 'Digital Marketing', value: '$5,200.00' },
        { name: 'Analytics', value: '$2,100.00' },
        { name: 'Campaign Tools', value: '$1,450.00' },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Department Cost Breakdown</h3>
      <CustomTreeView
        data={departmentData}
        onNodeSelect={(nodeId) => {
          console.log('Department node selected:', nodeId);
        }}
      />
    </div>
  );
}
```

### Resource Hierarchy

```tsx
function ResourceHierarchy() {
  const resourceData: TreeNodeData[] = [
    {
      name: 'Production Environment',
      children: [
        {
          name: 'Web Tier',
          children: [
            { name: 'Load Balancer', value: 'ALB-prod-web', isSelected: true },
            {
              name: 'Web Servers',
              children: [
                { name: 'web-server-1', value: 'i-1234567890' },
                { name: 'web-server-2', value: 'i-0987654321' },
              ],
            },
          ],
        },
        {
          name: 'Database Tier',
          children: [
            { name: 'Primary DB', value: 'rds-prod-primary' },
            { name: 'Read Replica', value: 'rds-prod-replica' },
          ],
        },
      ],
    },
    {
      name: 'Development Environment',
      children: [
        { name: 'Dev Database', value: 'rds-dev-001' },
        {
          name: 'Test Instances',
          children: [
            { name: 'test-server-1', value: 'i-test001' },
            { name: 'test-server-2', value: 'i-test002' },
          ],
        },
      ],
    },
  ];

  return (
    <CustomTreeView
      data={resourceData}
      onNodeSelect={(nodeId) => {
        // Handle resource selection
        console.log('Resource selected:', nodeId);
      }}
      className="max-h-96 overflow-y-auto border rounded"
    />
  );
}
```

### Cost Allocation Tree

```tsx
function CostAllocationTree() {
  const allocationData: TreeNodeData[] = [
    {
      name: 'Total Cloud Costs',
      value: '$45,680.00',
      children: [
        {
          name: 'By Service Provider',
          children: [
            {
              name: 'Amazon Web Services',
              value: '$28,450.00',
              children: [
                { name: 'EC2', value: '$12,340.00', isSelected: true },
                { name: 'S3', value: '$8,920.00', isSelected: true },
                { name: 'RDS', value: '$4,650.00' },
                { name: 'Other', value: '$2,540.00' },
              ],
            },
            {
              name: 'Microsoft Azure',
              value: '$12,230.00',
              children: [
                { name: 'Virtual Machines', value: '$7,890.00' },
                { name: 'Storage', value: '$2,340.00' },
                { name: 'Networking', value: '$2,000.00' },
              ],
            },
            {
              name: 'Google Cloud',
              value: '$5,000.00',
              children: [
                { name: 'Compute Engine', value: '$3,200.00' },
                { name: 'Cloud Storage', value: '$1,800.00' },
              ],
            },
          ],
        },
        {
          name: 'By Environment',
          children: [
            { name: 'Production', value: '$32,580.00' },
            { name: 'Staging', value: '$8,450.00' },
            { name: 'Development', value: '$4,650.00' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Cost Allocation</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Export Report
        </button>
      </div>
      <CustomTreeView
        data={allocationData}
        onNodeSelect={(nodeId) => {
          // Handle cost category selection for detailed analysis
        }}
        className="bg-gray-50 p-4 rounded-lg"
      />
    </div>
  );
}
```

### Service Catalog Tree

```tsx
function ServiceCatalogTree() {
  const catalogData: TreeNodeData[] = [
    {
      name: 'Approved Services',
      children: [
        {
          name: 'Compute Services',
          children: [
            {
              name: 'EC2 t3.micro',
              value: 'Approved for dev/test',
              isSelected: true,
            },
            { name: 'EC2 m5.large', value: 'Approved for production' },
            { name: 'Lambda', value: 'Approved for all environments' },
          ],
        },
        {
          name: 'Storage Services',
          children: [
            { name: 'S3 Standard', value: 'Approved with lifecycle policy' },
            { name: 'S3 IA', value: 'Approved for archival' },
          ],
        },
        {
          name: 'Database Services',
          children: [
            { name: 'RDS MySQL', value: 'Approved with backup policy' },
            { name: 'DynamoDB', value: 'Approved for NoSQL use cases' },
          ],
        },
      ],
    },
    {
      name: 'Restricted Services',
      children: [
        { name: 'GPU Instances', value: 'Requires special approval' },
        { name: 'Dedicated Hosts', value: 'Executive approval required' },
      ],
    },
  ];

  return (
    <CustomTreeView
      data={catalogData}
      onNodeSelect={(nodeId) => {
        // Handle service selection for provisioning
      }}
    />
  );
}
```

## Styling

The component uses Tailwind CSS classes for styling. Key style features include:

- **Indentation**: Dynamic padding based on tree level
- **Connection Lines**: Visual lines showing relationships
- **Hover Effects**: Interactive feedback on hover
- **Responsive Design**: Adapts to container width

### Custom Styling

```tsx
function StyledTreeView() {
  return (
    <CustomTreeView
      data={data}
      className="custom-tree-view border-2 border-blue-200 rounded-xl p-6 bg-blue-50"
      onNodeSelect={handleSelect}
    />
  );
}

// Custom CSS for additional styling
// .custom-tree-view .group:hover {
//   background-color: #dbeafe;
// }
```

## Accessibility

The CustomTreeView component provides comprehensive accessibility:

- **Keyboard Navigation**: Arrow keys, Enter, Space for full keyboard control
- **Screen Reader Support**: Proper tree role and node descriptions
- **Focus Management**: Clear focus indicators and logical focus order
- **ARIA Attributes**: Complete ARIA tree implementation

### Keyboard Shortcuts

| Key     | Action                 |
| ------- | ---------------------- |
| `↓` `↑` | Navigate between nodes |
| `→`     | Expand collapsed node  |
| `←`     | Collapse expanded node |
| `Enter` | Select/activate node   |
| `Space` | Toggle checkbox        |
| `Home`  | Go to first node       |
| `End`   | Go to last node        |

## Best Practices

### Data Structure

- Keep tree depth reasonable (max 4-5 levels) for usability
- Provide meaningful names and values
- Use consistent data structure throughout
- Consider lazy loading for large trees

### Performance

- Implement virtualization for very large trees
- Use React.memo for complex node renderers
- Consider pagination for trees with many siblings
- Cache processed tree data when possible

### User Experience

- Provide clear visual hierarchy
- Use consistent iconography
- Implement search/filter functionality for large trees
- Show loading states for dynamic content

## Cost Management Use Cases

The CustomTreeView component is particularly useful for:

- **Cost Center Hierarchy**: Visualize organizational cost allocation
- **Service Category Breakdown**: Navigate complex service taxonomies
- **Resource Organization**: Display cloud resource hierarchies
- **Budget Structure**: Show nested budget categories and allocations
- **Department Allocation**: Visualize cost distribution across departments
- **Project Cost Tracking**: Organize costs by project and sub-components

## Related Components

- [Checkbox](../Checkbox/README.md) - Used for node selection
- [Table](../Table/README.md) - Alternative tabular data display
- [Accordion](../Accordion/README.md) - Simple collapsible content
- [Collapsible](../Collapsible/README.md) - Basic expand/collapse functionality
