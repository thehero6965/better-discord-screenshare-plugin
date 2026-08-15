import React from 'react';
import { StreamQualitySection } from '../stream-quality-section';

export const VoiceTrayQualityButton: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    const menu = BdApi.ContextMenu.buildMenu([
      {
        type: 'custom',
        render: () => <StreamQualitySection />,
      },
    ]);

    BdApi.ContextMenu.open(e, menu);
  };

  return (
    <div
      onClick={handleClick}
      title="BetterScreenshare quality settings"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        minWidth: 32,
        minHeight: 32,
        flexShrink: 0,
        borderRadius: 8,
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#dcddde',
        cursor: 'pointer',
        fontSize: 16,
        zIndex: 1,
      }}
    >
      ⚙
    </div>
  );
};
