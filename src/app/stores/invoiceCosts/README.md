# Invoice Costs Store

This store manages data from the `/cost/v1/invoicecosts:read` API endpoint.

## API Endpoint

- **URL**: `https://api.alphaus.cloud/m/blue/cost/v1/invoicecosts:read`
- **Method**: POST
- **Description**: Retrieves invoice cost data with detailed breakdowns by vendor (AWS, Azure, GCP)

## Data Structure

Each API response contains:

- **Main section**: Total aggregated data across all vendors
- **Vendor sections**: Individual breakdowns for AWS, Azure, and GCP
- **Third profit items**: Additional profit components (Support Fee, Agency Fee, etc.)
- **Total details**: Cost breakdowns including SPP discounts and unblended profits

## Usage

```typescript
import { useInvoiceCostStore } from '@stores/invoiceCosts';

const MyComponent = () => {
  const { data, isLoading, error, fetchInvoiceCosts } = useInvoiceCostStore();

  // Fetch data
  const loadData = async () => {
    await fetchInvoiceCosts({
      startTime: '2025-04',
      endTime: '2025-09',
      toCurrency: 'usd',
    });
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data.map((item) => (
        <div key={item.result.yearMonth}>
          {item.result.yearMonth}: ${item.result.profitCost}
        </div>
      ))}
    </div>
  );
};
```

## Store Actions

- `fetchInvoiceCosts(params)` - Fetch invoice costs data
- `setLoading(boolean)` - Set loading state
- `setError(string | null)` - Set error state
- `clearData()` - Clear stored data
- `resetState()` - Reset to initial state

## Store State

- `data: InvoiceCostResponse[]` - Array of API responses
- `isEmpty: boolean` - Whether data array is empty
- `isLoading: boolean` - Loading state
- `error: string | null` - Error message if any
- `lastFetched: string | null` - ISO timestamp of last successful fetch
