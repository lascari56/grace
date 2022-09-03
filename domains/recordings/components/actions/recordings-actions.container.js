import React, {useState, useMemo, useEffect} from 'react';

import RecordingsActionsView from "./recordings-actions.view"

const RecordingsActionsContainer = ({...props}) => {
  const handleOpenFile = (link) => {
    window.open(link, '_blank');
  }

  return (
    <RecordingsActionsView
      {...props}
      onOpenFile={handleOpenFile}
    />
  );
}

export default RecordingsActionsContainer;
