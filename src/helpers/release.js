const NOT_READY = [
  'ContentHeader',
  'entryCounter',
  'PersonalActions',
  'API_ENDPOINT',
  'edit',
];

const IS_NOT_READY = item => (NOT_READY.includes(item));

export default IS_NOT_READY;
