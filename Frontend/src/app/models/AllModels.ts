export const MPatient = [
  {db: 'Id', PK: 1},
  {column: 'First Name', db: 'FirstName'},
  {column: 'Last Name', db: 'LastName'},
  {column: 'Phone', db: 'Phone'},
  {column: 'Address', db: 'Address'},
  {column: 'Birthday', db: 'Birthday', date: 1},
  {column: 'Pathologies', db: 'Pathologies', multiple: 1},
  {column: 'Treatment', db: 'Treatment'}
];

export const MPersonnel = [
  {db: 'Id', PK: 1},
  {column: 'First Name', db: 'First Name'},
  {column: 'Last Name', db: 'LastName'},
  {column: 'Phone', db: 'Phone'},
  {column: 'Address', db: 'Address'},
  {column: 'Birthday', db: 'Birthday', date: 1},
  {column: 'Institution Entry Date', db: 'StartDate', date: 1},
  {column: 'Type', db: 'Type', type: ['Doctor', 'Nurse', 'Admin']}
];

export const MBooking = [
  {db: 'Id', PK: 1},
  {column: 'Start Date', date: 1, db: 'StartDate'},
  {column: 'Procedures', FK: 1, db: 'Procedures'}
];

export const MRoom = [
  {db: 'Id', PK: 1},
  {column: 'Hospital Id', FK: 1, db: 'HospitalId'},
  {column: 'Name', db: 'Name'},
  {column: 'Type', db: 'Type'},
  {column: 'Capacity', db: 'Capacity'},
  {column: 'Floor', db: 'Floor'}
];

export const MMedicalEquipment = [
  {column: 'Name', db: 'Name', PK: 1},
  {column: 'Provider', db: 'Provider'},
  {column: 'Amount', db: 'Amount'},
];

export const MMedicalProcedures = [
  {db: 'Id', PK: 1},
  {column: 'Name', db: 'Name'},
  {column: 'Minimum stay days', db: 'MinimumDays'},
];

export const MBed = [
  {column: 'Number', PK: 1, db: 'Number'},
  {column: 'ICU', db: 'ICU', type: ['yes', 'no']},
  {column: 'Room Id', db: 'RoomId', FK: 1}
];
