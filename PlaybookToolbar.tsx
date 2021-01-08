import * as React from 'react';

import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
  StatusStep,
  StatusIndicator,
  ToastNotification,
} from '@carbon/ibm-security';
import classnames from 'classnames';
import {
  AlignHorizontalCenter16,
  ArrowLeft20,
  Error16,
  FitToScreen16,
  OpenPanelRight20,
  OpenPanelFilledRight20,
  Redo16,
  Select_0116,
  Undo16,
  ZoomIn16,
  ZoomOut16,
} from '@carbon/icons-react';

interface PlaybookToolbarType {
  playbook: {
    display_name: string;
    status: string;
  };
  hasChanged: Boolean;
  isSaving: Boolean;
  isSaved: Boolean;
  onSavePlaybooks: Function;
  handlePanelOpen: Function;
  handleZoomClick: Function;
  panelIsOpen: Boolean;
  onBackShowModal: Function;
  onClickUndo: Boolean;
  onClickRedo: Boolean;
  isActive: Boolean;
  handleLasso: Function;
  handleUndo: Function;
  handleRedo: Function;
  errorComponent: Function;
  disableSave: boolean;
  hasErrors: boolean;
}

const PlaybookToolbar: React.FunctionComponent<PlaybookToolbarType> = ({
  playbook,
  hasChanged,
  isSaving,
  isSaved,
  onSavePlaybooks,
  handlePanelOpen,
  handleZoomClick,
  handleLasso,
  handleUndo,
  handleRedo,
  panelIsOpen,
  onBackShowModal,
  onClickUndo,
  onClickRedo,
  isActive,
  errorComponent,
  disableSave,
  hasErrors,
}) => {
  const namespace = 'playbook-toolbar';

  return (
    <div className={namespace}>
      <div className={`${namespace}--left`}>
        <Button
          hasIconOnly
          id={`${namespace}__back-button-id`}
          className={`${namespace}__button`}
          iconDescription='Back to Playbooks'
          onClick={hasChanged || isSaving ? onBackShowModal : null}
          kind='ghost'
          renderIcon={ArrowLeft20}
          tooltipPosition='bottom'
          tooltipAlignment='start'
          size='field'
          href={!hasChanged && !isSaving ? '#playbooks' : null}
        />
        <div className={`${namespace}__heading-wrapper`}>
          <h1>
            Playbook designer: <span title={playbook.display_name}>{playbook.display_name}</span>
          </h1>
        </div>
        <div className={`${namespace}__save-button-wrapper`}>
          {!isSaving && !isSaved ? (
            <Button
              kind='ghost'
              size='field'
              disabled={disableSave}
              onClick={onSavePlaybooks}
              id={`${namespace}__save-button-id`}
              className={classnames(`${namespace}__button`, `${namespace}__button--save`)}>
              {hasChanged ? _T('Save – Edited') : _T('Save')}
            </Button>
          ) : (
            <StatusIndicator>
              <StatusStep
                className={`${namespace}__status-step`}
                description={_T('Saving and checking logic...')}
                errorMsg={null}
                label={_T('Saving and checking logic...')}
                status={!isSaved ? 'current' : 'complete'}
              />
            </StatusIndicator>
          )}
        </div>
      </div>
      <div className={`${namespace}--right`}>
        <div className={`${namespace}__controls-region`}>
          <Button
            hasIconOnly
            id={`${namespace}__zoom-in-button-id`}
            className={`${namespace}__button`}
            iconDescription='Zoom in'
            kind='ghost'
            renderIcon={ZoomIn16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            onClick={() => handleZoomClick(true)}
          />
          <Button
            hasIconOnly
            id={`${namespace}__zoom-out-button-id`}
            className={`${namespace}__button`}
            iconDescription='Zoom out'
            kind='ghost'
            renderIcon={ZoomOut16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            onClick={() => handleZoomClick(false)}
          />
          <Button
            hasIconOnly
            id={`${namespace}__fit-to-screen-button-id`}
            className={`${namespace}__button`}
            iconDescription='Fit to screen'
            kind='ghost'
            renderIcon={FitToScreen16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            disabled
          />
          <Button
            hasIconOnly
            id={`${namespace}__undo-button-id`}
            className={`${namespace}__button`}
            iconDescription='Undo'
            kind='ghost'
            renderIcon={Undo16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            onClick={handleUndo}
            disabled={onClickUndo}
          />
          <Button
            hasIconOnly
            id={`${namespace}__redo-button-id`}
            className={`${namespace}__button`}
            iconDescription='Redo'
            kind='ghost'
            renderIcon={Redo16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            onClick={handleRedo}
            disabled={onClickRedo}
          />
          <Button
            hasIconOnly
            id={`${namespace}__align-center-button-id`}
            className={`${namespace}__button`}
            iconDescription='Auto-align'
            kind='ghost'
            renderIcon={AlignHorizontalCenter16}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            disabled
          />
          <Button
            hasIconOnly
            id={`${namespace}__select-area-button-id`}
            className={isActive ? `${namespace}__button--active` : `${namespace}__button`}
            iconDescription='Activate lasso'
            kind='ghost'
            renderIcon={Select_0116}
            tooltipPosition='bottom'
            tooltipAlignment='center'
            size='field'
            onClick={() => handleLasso(true)}
          />
          <OverflowMenu
            id={`${namespace}__overflow-menu-id`}
            className={`${namespace}__controls-region__overflow-menu`}
            menuOptionsClass={`${namespace}__controls-region__overflow-menu__menu`}
            iconDescription='Playbook actions'
            flipped>
            <OverflowMenuItem itemText='Print' disabled />
            <OverflowMenuItem itemText='Export playbook package' disabled />
            <OverflowMenuItem itemText='Duplicate' disabled />
            <OverflowMenuItem itemText='Delete' disabled />
          </OverflowMenu>
        </div>
        <div className={`${namespace}__notifications-region`}>{errorComponent()}</div>
        <div className={`${namespace}__details-region`}>
          <Button
            kind='ghost'
            size='field'
            renderIcon={panelIsOpen ? OpenPanelFilledRight20 : OpenPanelRight20}
            id={`${namespace}__details-button-id`}
            onClick={() => {
              handlePanelOpen('playbook_details');
            }}
            className={`${namespace}__button`}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaybookToolbar;
