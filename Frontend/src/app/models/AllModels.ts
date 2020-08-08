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
  {column: 'Start Date', date: 1, db: 'startDate'},
  {column: 'Finish Date', date: 1, db: 'finishDate', notShow: 1},
  {column: 'Medical Procedures', FK: 'MedicalProcedures', multiple: 1, db: [
      { procedure: 'procedure' },
      { procedure: 'procedure' },
      { procedure: 'procedure' }
    ]}
];

export const MRoom = [
  {column: 'Id', db: 'Id', PK: 1},
  {column: 'Name', db: 'Name'},
  {column: 'Type', db: 'Type'},
  {column: 'Capacity', db: 'Capacity'},
  {column: 'Floor', db: 'Floor'},
  {column: 'Hospital Id', FK: 'Hospital', db: 'Hospitalid'}
];

export const MMedicalEquipment = [
  {column: 'Name', db: 'Name', PK: 1},
  {column: 'Provider', db: 'Provider'},
  {column: 'Amount', db: 'Amount'},
];

export const MMedicalProcedures = [
  {column: 'Name', db: 'Name', PK: 1},
  {column: 'Minimum stay days', db: 'Minimumdays'},
];

export const MBed = [
  {column: 'Number', PK: 1, db: 'Number'},
  {column: 'ICU', db: 'Icu'},
  {column: 'Room Id', db: 'Roomid', FK: 'Rooms'}
];

export const MClinicalHistory = [
  {db: 'Id', PK: 1},
  {column: 'Treatment', db: 'Treatment'},
  {column: 'Date', db: 'Date', date: 1},
  {column: 'Medical Procedure', FK: 'MedicalProcedures', db: 'Medicalprocedurename'}
];
