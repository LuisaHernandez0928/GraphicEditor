import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import InterestsRoundedIcon from '@mui/icons-material/InterestsRounded';
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
import React from 'react';

import { ESidebarPrimaryMenu } from '@globalTypes/types';

const SideBar = (): React.ReactElement => {
  const PRIMARY_SIDEBAR: {
    [K in ESidebarPrimaryMenu]: React.ReactElement;
  } = {
    [ESidebarPrimaryMenu.TEMPLATES]: <BackupTableRoundedIcon />,
    [ESidebarPrimaryMenu.ELEMENTS]: <InterestsRoundedIcon />,
    [ESidebarPrimaryMenu.TEXT]: <TitleRoundedIcon />,
    [ESidebarPrimaryMenu.DRAW]: <DrawRoundedIcon />,
    [ESidebarPrimaryMenu.UPLOAD]: <CloudUploadRoundedIcon />,
    [ESidebarPrimaryMenu.PROJECTS]: <CreateNewFolderRoundedIcon />,
  };

  const primaryMenu: ESidebarPrimaryMenu[] = [
    ESidebarPrimaryMenu.TEMPLATES,
    ESidebarPrimaryMenu.ELEMENTS,
    ESidebarPrimaryMenu.TEMPLATES,
    ESidebarPrimaryMenu.DRAW,
    ESidebarPrimaryMenu.UPLOAD,
    ESidebarPrimaryMenu.PROJECTS,
  ];
  const iconListPrimaryMenu = primaryMenu.map((view, index) => (
    <li key={`${index}-${view}`} className="primaryMenu-item">
      {PRIMARY_SIDEBAR[view]}
    </li>
  ));
  return <ul className="primaryMenu">{iconListPrimaryMenu}</ul>;
};

export default SideBar;
