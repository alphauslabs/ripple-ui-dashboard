import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@project-ed/lib/ui';
import { useTranslation } from 'react-i18next';

export function Settings() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[28px] text-neutral-1200">{t('Settings')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('Display Preferences')}</CardTitle>
            <CardDescription>
              {t('Customize your dashboard view')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('Dark Mode')}</p>
                <p className="text-sm text-neutral-500">
                  {t('Toggle dark/light theme')}
                </p>
              </div>
              <div className="h-6 w-11 bg-neutral-200 rounded-full relative">
                {/* Simplified switch for demo */}
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">{t('Default Currency')}</p>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue placeholder={t('Select Currency')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="jpy">JPY</SelectItem>
                  <SelectItem value="gbp">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('Notification Settings')}</CardTitle>
            <CardDescription>
              {t('Manage your alert preferences')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('Email Alerts')}</p>
                <p className="text-sm text-neutral-500">
                  {t('Receive email notifications')}
                </p>
              </div>
              <div className="h-6 w-11 bg-blue-500 rounded-full relative">
                {/* Simplified switch for demo */}
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t('Cost Threshold Alerts')}</p>
                <p className="text-sm text-neutral-500">
                  {t('Get notified on cost thresholds')}
                </p>
              </div>
              <div className="h-6 w-11 bg-blue-500 rounded-full relative">
                {/* Simplified switch for demo */}
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{t('Save Preferences')}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Settings;
