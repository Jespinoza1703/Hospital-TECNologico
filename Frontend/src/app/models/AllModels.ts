export const MPatient = [
  {column: 'Id', PK: 1},
  {column: 'Name'},
  {column: 'Last Name'},
  {column: 'Phone'},
  {column: 'Address'},
  {column: 'Birthday', date: 1},
  {column: 'Pathologies', multiple: 1},
  {column: 'Treatment'}
];

export const MDoctor = [
  {column: 'Id', PK: 1},
  {column: 'Name'},
  {column: 'Last Name'},
  {column: 'Phone'},
  {column: 'Address'},
  {column: 'Birthday', date: 1},
  {column: 'InstitutionEntryDate', date: 1},
  {column: 'Type', type: ['Doctor', 'Nurse']}
];

export const MAdmin = [
  {column: 'Id', PK: 1}
];
