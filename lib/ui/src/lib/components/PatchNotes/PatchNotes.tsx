import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  patchNotesData,
  getLastSeenVersion,
  setLastSeenVersion,
  hasNewVersion,
} from '@project-ed/lib/constants';
import { Modal } from '../Modal/Modal';
import { Badge } from '../Badge/Badge';
import { ScrollArea } from '../ScrollArea';

interface PatchNotesProps {
  isVisible: boolean;
  onClose: () => void;
  onVersionSeen?: (version: string) => void;
}

// Constants matching CreateInvoiceModal
const MODAL_SIZES = {
  LARGE: 'max-w-[80%] min-w-[50%]',
};

const SIDEBAR_CLASSES =
  'w-1/3 min-w-[300px] border-2 rounded-lg overflow-hidden';
const MAIN_CONTENT_CLASSES = 'flex-1';
const MODAL_CONTENT_HEIGHT = 'calc(60vh - 4rem)';

export const PatchNotes: React.FC<PatchNotesProps> = ({
  isVisible,
  onClose,
  onVersionSeen,
}) => {
  const { t } = useTranslation('host');
  const [selectedVersion, setSelectedVersion] = useState<string>(
    patchNotesData[0]?.version || ''
  );

  // Update last seen version when modal is closed
  const handleClose = () => {
    const currentVersion = patchNotesData[0]?.version;
    if (currentVersion) {
      setLastSeenVersion(currentVersion);
      onVersionSeen?.(currentVersion);
    }
    onClose();
  };

  const selectedNote = patchNotesData.find(
    (note) => note.version === selectedVersion
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      title={t('patch_notes')}
      onClose={handleClose}
      closeButtonText={t('close')}
      width={MODAL_SIZES.LARGE}
      dataTestid="patch-notes-modal"
    >
      {/* Header section */}
      <div className="mb-4">
        <div className="text-neutral-700">{t('whats_new')}</div>
        <div className="text-2xl">{t('release_notes')}</div>
        <div className="mt-2">
          View release notes and updates for all versions
        </div>
      </div>

      <div className="flex gap-2">
        {/* Sidebar - Version List */}
        <div
          style={{ height: MODAL_CONTENT_HEIGHT }}
          className={SIDEBAR_CLASSES}
        >
          <div className="p-2 border-b-2">
            <div className="font-medium">{t('all_versions')}</div>
          </div>
          <ScrollArea
            className="h-full"
            style={{ height: 'calc(100% - 3rem)' }}
          >
            {patchNotesData.map((note) => (
              <div
                key={note.version}
                onClick={() => setSelectedVersion(note.version)}
                className={`flex justify-between gap-2 border-b-2 p-2 py-5 cursor-pointer hover:bg-neutral-90 transition-colors ${
                  selectedVersion === note.version ? 'bg-neutral-95' : ''
                }`}
              >
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="info" size="sm">
                      v{note.version}
                    </Badge>
                    {note === patchNotesData[0] && (
                      <Badge variant="success" size="sm">
                        Latest
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-neutral-700">
                    {formatDate(note.releaseDate)}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Main Content - Selected Version Details */}
        <div className={MAIN_CONTENT_CLASSES}>
          {selectedNote ? (
            <ScrollArea
              className="h-full pr-2"
              style={{ height: MODAL_CONTENT_HEIGHT }}
            >
              {/* Version Header */}
              <div className="pb-4 mb-4 border-b-2">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-medium">
                    Version {selectedNote.version}
                  </h2>
                  {selectedNote === patchNotesData[0] && (
                    <Badge variant="success" size="sm">
                      Latest
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-neutral-700">
                  Released: {formatDate(selectedNote.releaseDate)}
                </div>
                {selectedNote.summary && (
                  <div className="mt-3 text-sm">{selectedNote.summary}</div>
                )}
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {selectedNote.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-medium pb-2 mb-3 border-b-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-sm flex items-start gap-2"
                        >
                          <span className="mt-1 flex-shrink-0">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-neutral-700">{t('no_patch_notes')}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
