export const MPatient = [
  {column: 'Email', db: 'email', email: 1},
  {column: 'Identification', db: 'id', PK: 1},
  {column: 'First Name', db: 'firstName'},
  {column: 'Last Name', db: 'lastName'},
  {column: 'Phone', db: 'phonenumber'},
  {column: 'Address', db: 'adress'},
  {column: 'Pathologies', pathology: 1, treatment: 1, multiple: 1, FK: 'Pathologies', db: [
      { name: 'No pathology', treatment: 'No Treatment'},
      { name: 'No pathology', treatment: 'No Treatment' },
      { name: 'No pathology', treatment: 'No Treatment' }
    ]},

  {column: 'Birthday', db: 'birthDay', date: 1}
];

export const MPersonnel = [
  {column: 'Email', db: 'email', email: 1},
  {column: 'Identification', db: 'id', PK: 1},
  {column: 'First Name', db: 'firstName'},
  {column: 'Last Name', db: 'lastName'},
  {column: 'Phone', db: 'phonenumber'},
  {column: 'Address', db: 'adress'},
  {column: 'Type', db: 'type', type: ['doctor', 'nurse', 'admin']},
  {column: 'Birthday', db: 'birthDay', date: 1},
  {column: 'Institution Entry Date', db: 'startDate', date: 1}
];

export const MBooking = [
  {db: 'Id', PK: 1},
  {column: 'Start Date', date: 1, db: 'StartDate'},
  {column: 'Procedures', FK: 'Procedures', multiple: 1, db: [
      { procedure: 'procedure' },
      { procedure: 'procedure' },
      { procedure: 'procedure' }
    ]}
];

export const MRoom = [
  {column: 'Id', db: 'Id', PK: 1},
  {column: 'Hospital Name', FK: 'HospitalName', db: 'HospitalName'},
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
  {column: 'Id', db: 'Id', PK: 1},
  {column: 'Name', db: 'Name'},
  {column: 'Minimum stay days', db: 'MinimumDays'},
];

export const MBed = [
  {column: 'Number', PK: 1, db: 'Number'},
  {column: 'ICU', db: 'ICU', type: ['yes', 'no']},
  {column: 'Room Id', db: 'RoomId', FK: 'RoomId'}
];

export const MClinicalHistory = [
  {db: 'Id', PK: 1},
  {column: 'Medical Procedure', FK: 'MedicalProcedure', db: 'medicalProcedure'},
  {column: 'Treatment', db: 'treatment'},
  {column: 'Date', db: 'date', date: 1}
];
