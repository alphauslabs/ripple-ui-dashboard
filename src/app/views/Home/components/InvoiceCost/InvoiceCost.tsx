import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DatePicker,
  DatePickerTrigger,
  DatePickerContent,
  Spinner,
} from '@project-ed/lib/ui';
import { InfoIcon, InvoiceIcon } from '@project-ed/lib/icons';
import useDashboardStore from '@stores/dashboard';
import { useInvoiceCostStore } from '@stores/invoiceCosts';
import { parseDateRange } from '@project-ed/lib/utils';
import { useHostStore } from '@stores/host';

import { ITabsValues } from '../../../../../shared';
import InvoiceCostTable from './InvoiceCostTable';
import InvoiceCostChart from './InvoiceCostChart';
import InvoiceCostModal from './InvoiceCostModal';
import { useTranslation } from 'react-i18next';
import { InvoiceCostProps, DataRow, IModalData } from '@stores/dashboard/types';

export default function InvoiceCost({ selectedDate }: InvoiceCostProps) {
  const SelectedTabs: ITabsValues[] = ['Total', 'AWS', 'Azure', 'GCP'];
  const { t } = useTranslation();
  const { currency } = useDashboardStore();
  const {
    data: invoiceCost,
    isEmpty: invoiceCostIsEmpty,
    isLoading: isInvoiceCostLoading,
    fetchInvoiceCosts,
  } = useInvoiceCostStore();

  // State for modal
  const [modalData, setModalData] = useState<IModalData>({
    isOpen: false,
    data: null,
  });

  const handleActionClick = (row: DataRow) => {
    console.log(row);
    console.log(`Action clicked for ${row.name}`);
    setModalData({ isOpen: true, data: row });
  };

  const closeDialog = () => {
    setModalData({ isOpen: false, data: null });
  };

  useEffect(() => {
    const { startDate, endDate } = parseDateRange(selectedDate);

    console.log('Invoice Cost date range parsed:', {
      selectedDate,
      startDate,
      endDate,
    });

    fetchInvoiceCosts({
      startTime: startDate,
      endTime: endDate,
      toCurrency: currency.toLocaleLowerCase(),
    });
  }, [selectedDate, currency]);

  return (
    <div
      className="flex flex-col rounded-lg shadow-sm bg-white"
      data-test="invoice-cost-section"
    >
      <InvoiceCostModal modalData={modalData} closeDialog={closeDialog} />
      <div className="flex p-4 justify-between items-center">
        <div className="flex gap-2">
          <h2 className="text-2xl" data-test="invoice-cost-title">
            {t('Invoice cost vs profit')}
          </h2>
        </div>
        {isInvoiceCostLoading && <Spinner size="sm" />}
      </div>
      <Tabs defaultValue={SelectedTabs[0]} className="w-full">
        <TabsList data-test="invoice-cost-tabs-list">
          {SelectedTabs.map((item, index) => (
            <TabsTrigger
              key={index}
              value={item}
              data-test={`invoice-cost-tab-${item.toLowerCase()}`}
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent className="p-4" value={SelectedTabs[0]}>
          {isInvoiceCostLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : invoiceCostIsEmpty ? (
            <EmptyState />
          ) : (
            <>
              <InvoiceCostChart
                prefix="Total"
                data={invoiceCost}
                onDataClick={handleActionClick}
              />
              <InvoiceCostTable
                prefix="Total"
                data={invoiceCost}
                onActionClick={handleActionClick}
              />
            </>
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[1]}>
          {isInvoiceCostLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : invoiceCostIsEmpty ? (
            <EmptyState />
          ) : (
            <>
              <InvoiceCostChart
                prefix="AWS"
                data={invoiceCost}
                onDataClick={handleActionClick}
              />
              <InvoiceCostTable
                prefix="AWS"
                data={invoiceCost}
                onActionClick={handleActionClick}
              />
            </>
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[2]}>
          {isInvoiceCostLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : invoiceCostIsEmpty ? (
            <EmptyState />
          ) : (
            <>
              <InvoiceCostChart
                prefix="Azure"
                data={invoiceCost}
                onDataClick={handleActionClick}
              />
              <InvoiceCostTable
                prefix="Azure"
                data={invoiceCost}
                onActionClick={handleActionClick}
              />
            </>
          )}
        </TabsContent>
        <TabsContent className="p-4" value={SelectedTabs[3]}>
          {isInvoiceCostLoading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="md" />
            </div>
          ) : invoiceCostIsEmpty ? (
            <EmptyState />
          ) : (
            <>
              <InvoiceCostChart
                prefix="GCP"
                data={invoiceCost}
                onDataClick={handleActionClick}
              />
              <InvoiceCostTable
                prefix="GCP"
                data={invoiceCost}
                onActionClick={handleActionClick}
              />
            </>
          )}
        </TabsContent>
      </Tabs>
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
    <div
      className="py-4 px-[120px] lg:px-[220px] xl:px-[390px] flex flex-col gap-4"
      data-test="invoice-cost-empty-state"
    >
      <InvoiceIcon width="48" height="48" color="#1D55CE" />
      <p className="text-xl font-medium">
        {t('Invoice data unavailable')}
      </p>{' '}
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
