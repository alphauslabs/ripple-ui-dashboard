import { Button, Spinner } from '@project-ed/lib/ui';
import React, { useEffect } from 'react';
import { InvoiceIcon } from '@project-ed/lib/icons';
import BillingTable from './BillingTable';
import { useTranslation } from 'react-i18next';
import useDashboardStore from '@stores/dashboard';
import { parseDateRange } from '@project-ed/lib/utils';
import { TopTenBillingsProps } from '@stores/dashboard/types';
import { useHostStore } from '@stores/host';

export default function TopTenBillings({ selectedDate }: TopTenBillingsProps) {
  const { t } = useTranslation();
  const {
    currency,
    topTenBilling,
    topTenBillingIsEmpty,
    getTopTenBilling,
    isTopTenBillingLoading,
  } = useDashboardStore();

  useEffect(() => {
    const { startDate, endDate } = parseDateRange(selectedDate);

    console.log('Top Ten Billing date range parsed:', {
      selectedDate,
      startDate,
      endDate,
    });

    getTopTenBilling(startDate, endDate, currency.toLocaleLowerCase());
  }, [selectedDate, currency]);

  return (
    <div className="flex flex-col rounded-lg shadow-sm bg-white pb-8">
      <div className="flex p-4 justify-between items-center">
        <div className="flex gap-2">
          <h2 className="text-2xl text-neutral-10">
            {t('Top 10 billing group profit margin')}
          </h2>
        </div>
        {isTopTenBillingLoading && <Spinner size="sm" />}
      </div>
      <div className="px-4">
        {isTopTenBillingLoading ? (
          <div className="flex items-center justify-center py-8">
            <Spinner size="md" />
          </div>
        ) : topTenBillingIsEmpty ? (
          <EmptyState />
        ) : (
          <BillingTable data={topTenBilling} />
        )}
      </div>
    </div>
  );
}

const EmptyState = () => {
  const { t } = useTranslation();
  const { hostNavigate } = useHostStore();

  const handleCreateBillingGroup = () => {
    hostNavigate('/billinggroups/create');
  };

  const handleViewDocumentation = () => {
    window.open('https://docs.alphaus.cloud', '_blank');
  };

  return (
    <div className="py-4 px-[120px] lg:px-[220px] xl:px-[390px] flex flex-col gap-4">
      <InvoiceIcon width="48" height="48" color="#1D55CE" />
      <p className="text-xl font-medium">{t('Invoice data unavailable')}</p>
      <p className="text-base font-normal">
        {t('Invoice data unavailable description')}
      </p>
      <div className="flex gap-4">
        <Button variant="default" onClick={handleCreateBillingGroup}>
          {t('Create billing group')}
        </Button>
        <Button variant="outline" onClick={handleViewDocumentation}>
          {t('View documentation')}
        </Button>
      </div>
    </div>
  );
};
