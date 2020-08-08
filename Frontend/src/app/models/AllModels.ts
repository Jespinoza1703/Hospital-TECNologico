export const MPatient = [
  {column: 'Email', db: 'Email', email: 1},
  {column: 'Identification', db: 'Id', PK: 1},
  {column: 'First Name', db: 'FirstName'},
  {column: 'Last Name', db: 'LastName'},
  {column: 'Phone', db: 'Phone'},
  {column: 'Address', db: 'Address'},
  {column: 'Pathologies', pathology: 1, multiple: 1, FK: 1, db: [
      { pathology: 'pathology1' },
      { pathology: 'pathology2' },
      { pathology: 'pathology3' }
    ]},
  {column: 'Treatment', treatment: 1,  multiple: 1, db: [
      { treatment: 'treatment1' },
      { treatment: 'treatment2' },
      { treatment: 'treatment3' }
    ]},
  {column: 'Birthday', db: 'Birthday', date: 1}
];

export const MPersonnel = [
  {column: 'Email', db: 'Email', email: 1},
  {column: 'Identification', db: 'Id', PK: 1},
  {column: 'First Name', db: 'First Name'},
  {column: 'Last Name', db: 'LastName'},
  {column: 'Phone', db: 'Phone'},
  {column: 'Address', db: 'Address'},
  {column: 'Type', db: 'Type', type: ['doctor', 'nurse', 'admin']},
  {column: 'Birthday', db: 'Birthday', date: 1},
  {column: 'Institution Entry Date', db: 'StartDate', date: 1}
];

export const MBooking = [
  {db: 'Id', PK: 1},
  {column: 'Start Date', date: 1, db: 'StartDate'},
  {column: 'Procedures', FK: 1, multiple: 1, db: [
      { procedure: 'procedure' },
      { procedure: 'procedure' },
      { procedure: 'procedure' }
    ]}
];

export const MRoom = [
  {column: 'Id', db: 'Id', PK: 1},
  {column: 'Hospital Name', FK: 1, db: 'HospitalName'},
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
  {column: 'Room Id', db: 'RoomId', FK: 1}
];

export const MClinicalHistory = [
  {db: 'Id', PK: 1},
  {column: 'Medical Procedure', FK: 1, db: 'medicalProcedure'},
  {column: 'Treatment', db: 'treatment'},
  {column: 'Date', db: 'date', date: 1}
];
