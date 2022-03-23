/**
 * Messages
 *
 * This contains all the text for the container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.common.Orders.Details';

export default defineMessages({
  filterLabel: {
    id: `${scope}.filterLabel`,
    defaultMessage: 'Filter By',
  },
  filterMenuNone: {
    id: `${scope}.filterMenuNone`,
    defaultMessage: 'None',
  },
  filterMenuRoom: {
    id: `${scope}.filterMenuRoom`,
    defaultMessage: 'Room',
  },
  filterMenuDate: {
    id: `${scope}.filterMenuDate`,
    defaultMessage: 'Date',
  },
  filterDateLabel: {
    id: `${scope}.filterDateLabel`,
    defaultMessage: 'Date',
  },
  filterRoomLabel: {
    id: `${scope}.filterRoomLabel`,
    defaultMessage: 'Room',
  },
  btnFilter: {
    id: `${scope}.btnFilter`,
    defaultMessage: 'Filter',
  },
  btnClearFilter: {
    id: `${scope}.btnClearFilter`,
    defaultMessage: 'Clear all filter',
  },
  datepickerLabel: {
    id: `${scope}.datepickerLabel`,
    defaultMessage: 'Datepicker',
  },
});