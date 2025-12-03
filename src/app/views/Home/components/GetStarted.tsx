import {
  Button,
  ProgressBar,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Modal,
} from '@project-ed/lib/ui';
import useGetStartedStore from '@stores/getStarted';
import { Tasks } from '@stores/getStarted/types';
import { X, Check } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHostStore } from '@stores/host';

function GetStartedCardModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // const navigate = useNavigate();
  const {
    readGetStartedStatus,
    areAllTasksCompleted,
    getStartedStatus,
    setGetStartedStatus,
  } = useGetStartedStore();

  const { email, hostNavigate } = useHostStore();

  const navigateAndCompleteTask = (path: string, taskKey: Tasks) => {
    hostNavigate(path);
    setGetStartedStatus(taskKey, true, email);
  };

  return (
    <Modal
      isVisible={open}
      onClose={onClose}
      customTitle="Get started with Ripple"
      width="w-1/2"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b px-6">
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 mt-1 ${
                  getStartedStatus.linkPayerAccount
                    ? 'bg-green-100'
                    : 'bg-gray-200'
                } rounded-full p-1`}
              >
                {getStartedStatus.linkPayerAccount ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Link your payer account</p>
                <p className="text-sm text-gray-500">
                  This link will enable us to receive the monthly cost usage
                  data from CSP
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <div className="py-3">
              <p className="text-sm text-gray-700 mb-3">
                Connect your payer account to automatically import cost data
                from your Cloud Service Provider.
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() =>
                  navigateAndCompleteTask(
                    '/billinggroups/create',
                    'linkPayerAccount'
                  )
                }
              >
                Go to Billing groups
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b px-6">
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 mt-1 ${
                  getStartedStatus.setupBillingGroup
                    ? 'bg-green-100'
                    : 'bg-gray-200'
                } rounded-full p-1`}
              >
                {getStartedStatus.setupBillingGroup ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Set up a billing group</p>
                <p className="text-sm text-gray-500">
                  Billing group is the container that stores all invoice
                  settings that generate the invoice for a particular company
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <div className="py-3">
              <p className="text-sm text-gray-700 mb-3">
                Create a billing group to organize invoice settings for a
                specific company or department.
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() =>
                  navigateAndCompleteTask(
                    '/billinggroups/create',
                    'setupBillingGroup'
                  )
                }
              >
                Go to Billing groups
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b px-6">
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 mt-1 ${
                  getStartedStatus.setupFinalizationAutomation
                    ? 'bg-green-100'
                    : 'bg-gray-200'
                } rounded-full p-1`}
              >
                {getStartedStatus.setupFinalizationAutomation ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">
                  Set up finalization calculation reminder
                </p>
                <p className="text-sm text-gray-500">
                  Every month Ripple will need to finalize the invoice
                  calculation from the CSP. Set a date so that Ripple does it
                  for you automatically
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <div className="py-3">
              <p className="text-sm text-gray-700 mb-3">
                Choose a date each month when Ripple should automatically
                finalize invoice calculations.
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() =>
                  navigateAndCompleteTask(
                    '/costfinalization',
                    'setupFinalizationAutomation'
                  )
                }
              >
                Go to Cost Finalization
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="px-6">
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 mt-1 ${
                  getStartedStatus.setupExchangeRateAutomation
                    ? 'bg-green-100'
                    : 'bg-gray-200'
                } rounded-full p-1`}
              >
                {getStartedStatus.setupExchangeRateAutomation ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Set up exchange rate automation</p>
                <p className="text-sm text-gray-500">
                  There will be 3 levels of exchange rate you will need to
                  update every month. Payer level, Billing Group level and
                  Reseller price settings
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <div className="py-3">
              <p className="text-sm text-gray-700 mb-3">
                Configure automatic exchange rate updates for all three levels:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-700 mb-3">
                <li>Payer level</li>
                <li>Billing Group level</li>
                <li>Reseller price settings</li>
              </ul>
              <Button
                size="sm"
                className="w-full"
                onClick={() =>
                  navigateAndCompleteTask(
                    '/billinggroups',
                    'setupExchangeRateAutomation'
                  )
                }
              >
                Go to Billing groups
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Modal>
  );
}

export function GetStarted() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { areAllTasksCompleted, readGetStartedStatus, getStartedStatus } =
    useGetStartedStore();
  const { email } = useHostStore();

  useEffect(() => {
    readGetStartedStatus(email);
  }, [readGetStartedStatus, email]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Don't render the component if all tasks are completed
  if (areAllTasksCompleted()) {
    return null;
  }

  // Calculate the number of completed tasks for the progress bar
  const completedTasks = Object.values(getStartedStatus).filter(Boolean).length;
  const totalTasks = Object.keys(getStartedStatus).length;

  return (
    <>
      <div className="flex justify-between rounded-lg shadow-sm p-4 bg-white">
        <div className="font-normal flex flex-col gap-2">
          <p className="text-2xl text-neutral-1200">
            {t('Get started with Ripple')}
          </p>
          <p className="text-base text-neutral-1100">
            {t('Follow these steps to get you set up with Ripple')}
          </p>
        </div>
        <div className="flex items-center w-fit gap-4">
          <div className="w-[280px]">
            <ProgressBar
              variant="info"
              label={t('Progress')}
              value={completedTasks}
              max={totalTasks}
              valueFormat="fraction"
            />
          </div>
          <Button variant="default" onClick={openModal}>
            {t('View progress')}
          </Button>
        </div>
      </div>

      <GetStartedCardModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
