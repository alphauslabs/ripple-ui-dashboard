import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '../Dialog/Dialog';

interface ModalProps {
  isVisible: boolean;
  title?: string;
  onClose: () => void;
  closeButtonText?: string;
  onAction?: () => void;
  actionText?: string;
  children: React.ReactNode;
  className?: string;
  customTitle?: React.ReactNode;
  onActionDisabled?: boolean;
  onClear?: () => void;
  clearText?: string;
  onClearDisabled?: boolean;
  clearButtonVariant?: 'secondary' | 'danger';
  width?: string;
  dataTestid?: string;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  onClose,
  closeButtonText,
  onAction,
  actionText,
  children,
  className,
  customTitle,
  onActionDisabled,
  onClear,
  clearText,
  onClearDisabled,
  clearButtonVariant = 'secondary',
  width = 'w-[576px]',
  dataTestid = '',
}) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isVisible} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={`flex flex-col min-h-[200px] max-h-[90vh] ${width} ${className}`}
        data-testid={dataTestid}
      >
        {(title || customTitle) && (
          <DialogHeader className="flex-none p-0">
            {title && (
              <DialogTitle className="text-lg font-semibold text-left">
                {title}
              </DialogTitle>
            )}
            {customTitle && customTitle}
          </DialogHeader>
        )}

        <div className="flex-1 overflow-y-auto -mx-6 px-6">{children}</div>

        <DialogFooter className="flex-none p-0 mt-4">
          <div className="flex justify-between w-full">
            <Button
              variant="secondary"
              className="h-[34px] text-tangBlue-40 font-semibold"
              onClick={onClose}
              data-testid="modal-close-button"
            >
              {closeButtonText || t('close')}
            </Button>
            <div className="flex items-center gap-2">
              {clearText && onClear && (
                <Button
                  disabled={onClearDisabled}
                  variant={
                    clearButtonVariant === 'danger' ? 'outline' : 'secondary'
                  }
                  className={`h-[34px] ${
                    clearButtonVariant === 'danger'
                      ? 'border-danger-60 text-danger-60 hover:bg-danger-90 hover:text-danger-50 hover:border-danger-50'
                      : ''
                  }`}
                  onClick={onClear}
                >
                  {clearText}
                </Button>
              )}
              {actionText && onAction && (
                <Button
                  disabled={onActionDisabled}
                  variant="default"
                  className="h-[34px]"
                  onClick={onAction}
                  data-testid="modal-action-button"
                >
                  {actionText}
                </Button>
              )}
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
