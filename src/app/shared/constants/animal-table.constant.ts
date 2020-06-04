export const COLUMNS_TO_DISPLAY: string[] = [
  'triggerDelete', 'triggerEditSave', 'cowId', 'animalId', 'eventId', 'currentGroupId', 'newGroupId',
  'healthIndex', 'endDate', 'minValueDateTime', 'type', 'deletable', 'lactationNumber', 'oldLactationNumber',
  'daysInLactation', 'ageInDays', 'startDateTime', 'reportingDateTime', 'sire', 'breedingNumber', 'interval',
  'heatIndexPeak', 'newGroupName', 'currentGroupName', 'destinationGroup', 'destinationGroupName',
  'daysInPregnancy', 'alertType', 'duration', 'originalStartDateTime', 'alert', 'original',
  'isOutOfBreedingWindow', 'cowEntryStatus', 'birthDateCalculated', 'newborns', 'calvingEase'
];

export const NON_EDITABLE_COLUMN_DEFINITIONS: any[] = [
  {
    type: 'number',
    name: 'cowId',
    title: 'Cow id'
  },
  {
    type: 'string',
    name: 'animalId',
    title: 'Animal id'
  },
  {
    type: 'number',
    name: 'eventId',
    title: 'Event id'
  },
  {
    type: 'number',
    name: 'currentGroupId',
    title: 'Current group id'
  },
  {
    type: '',
    name: 'newGroupId',
    title: 'New group id'
  },
];

export const EDITABLE_COLUMN_DEFINITIONS: any[] = [
  {
    type: 'number',
    name: 'healthIndex',
    title: 'Health index'
  },
  {
    type: 'number',
    name: 'endDate',
    title: 'End Date'
  },
  {
    type: 'number',
    name: 'minValueDateTime',
    title: 'Min value date time'
  },
  {
    type: 'string',
    name: 'type',
    title: 'Type'
  },
  {
    type: 'boolean',
    name: 'deletable',
    title: 'Deletable'
  },
  {
    type: 'number',
    name: 'lactationNumber',
    title: 'Lactation number'
  },
  {
    type: 'number',
    name: 'oldLactationNumber',
    title: 'Old lactation number'
  },
  {
    type: 'number',
    name: 'daysInLactation',
    title: 'Days in lactation'
  },
  {
    type: 'number',
    name: 'ageInDays',
    title: 'Age in days'
  },
  {
    type: 'number',
    name: 'startDateTime',
    title: 'Start date time'
  },
  {
    type: 'number',
    name: 'reportingDateTime',
    title: 'Reporting date time'
  },
  {
    type: 'boolean',
    name: 'sire',
    title: 'Sire'
  },
  {
    type: 'number',
    name: 'breedingNumber',
    title: 'Breeding number'
  },
  {
    type: 'number',
    name: 'interval',
    title: 'Interval'
  },
  {
    type: 'string',
    name: 'heatIndexPeak',
    title: 'Heat index peak'
  },
  {
    type: 'string',
    name: 'newGroupName',
    title: 'New group name'
  },
  {
    type: 'string',
    name: 'currentGroupName',
    title: 'Current group name'
  },
  {
    type: 'number',
    name: 'destinationGroup',
    title: 'Destination group'
  },
  {
    type: 'string',
    name: 'destinationGroupName',
    title: 'Destination group name'
  },
  {
    type: 'number',
    name: 'daysInPregnancy',
    title: 'Days in pregnancy'
  },
  {
    type: 'string',
    name: 'alertType',
    title: 'Alert type'
  },
  {
    type: 'number',
    name: 'duration',
    title: 'Duration'
  },
  {
    type: 'number',
    name: 'originalStartDateTime',
    title: 'Original start date time'
  },
  {
    type: 'string',
    name: 'alert',
    title: 'Alert'
  },
  {
    type: 'string',
    name: 'original',
    title: 'Original'
  },
  {
    type: 'boolean',
    name: 'isOutOfBreedingWindow',
    title: 'Is out of breeding window'
  },
  {
    type: 'string',
    name: 'cowEntryStatus',
    title: 'Cow entry status'
  },
  {
    type: 'boolean',
    name: 'birthDateCalculated',
    title: 'Birth date calculated'
  },
  {
    type: 'boolean',
    name: 'newborns',
    title: 'Newborns'
  },
  {
    type: 'boolean',
    name: 'calvingEase',
    title: 'Calving ease'
  }
];

export const ALL_COLUMN_DEFINITIONS = NON_EDITABLE_COLUMN_DEFINITIONS.concat(EDITABLE_COLUMN_DEFINITIONS);
