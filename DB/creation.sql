DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

create table pathologies(
	name VARCHAR(55),
	PRIMARY KEY(name)
);


create table patients(
	email VARCHAR(55),
	id INT,
	phoneNumber VARCHAR(55),
	birthDay DATE,
	firstName VARCHAR(55),
	lastName VARCHAR(55),
	Adress VARCHAR(55),
	PRIMARY KEY(id)
);

create table pathologyPatients(
	id SERIAL,
	patientId INT,
	pathologyName VARCHAR(55),
	treatment VARCHAR(55),
	PRIMARY KEY(id),
	FOREIGN KEY(patientId) REFERENCES patients(id),
	FOREIGN KEY(pathologyName) REFERENCES pathologies(name)
);

create table evaluations(
	id SERIAL,
	patientId INT,
	hospitalHygiene INT,
	punctuality INT,
	personnelCare INT,
	hospitalStay INT,
	PRIMARY KEY(id),
	FOREIGN KEY(patientId) REFERENCES patients(id)
);

create table medicalProcedures(
	name VARCHAR(55),
	minimumDays INT,
	PRIMARY KEY(name)
);

create table clinicalHistory(
	id SERIAL,
	patientId INT,
	medicalProcedureName VARCHAR(55),
	treatment VARCHAR(55),
	date DATE,
	PRIMARY KEY(id),
	FOREIGN KEY(patientId) REFERENCES patients(id),
	FOREIGN KEY(medicalProcedureName) REFERENCES medicalProcedures(name)
);

create table hospitals(
	id SERIAL,
	name VARCHAR(55),
	PRIMARY KEY(id)
);

create table hospitalPersonnel(
	email VARCHAR(55),
	hospitalId INT,
	id INT,
	phoneNumber VARCHAR(55),
	birthDay DATE,
	firstName VARCHAR(55),
	lastName VARCHAR(55),
	Adress VARCHAR(55),
	PRIMARY KEY(Email),
	FOREIGN KEY(hospitalId) REFERENCES hospitals(Id)
);

create table rooms(
	id SERIAL,
	hospitalId INT,
	name VARCHAR(55),
	type VARCHAR(55),
	capacity INT,
	floor INT,
	PRIMARY KEY(id),
	FOREIGN KEY(hospitalId) REFERENCES hospitals(Id)
);

create table beds(
	number SERIAL,
	roomId INT,
	ICU VARCHAR(5),
	PRIMARY KEY(number),
	FOREIGN KEY(roomId) REFERENCES rooms(Id)
);

create table bookings(
	id SERIAL,
	patientId INT,
	bedNumber INT,
	startDate DATE,
	finishDate DATE,
	PRIMARY KEY(id),
	FOREIGN KEY(patientId) REFERENCES patients(id),
	FOREIGN KEY(bedNumber) REFERENCES beds(number)
);

create table bookingMedicalProcedures(
	id SERIAL,
	medicalProcedureName VARCHAR(55),
	bookingId INT,
	PRIMARY KEY(id),
	FOREIGN KEY(medicalProcedureName) REFERENCES medicalProcedures(name),
	FOREIGN KEY(bookingId) REFERENCES bookings(id)
);

create table medicalEquipment(
	name VARCHAR(55),
	provider VARCHAR(55),
	amount INT,
	PRIMARY KEY(name)
);

create table bedMedicalEquipment(
	id SERIAL,
	medicalEquipmentName VARCHAR(55),
	bedNumber INT,
	PRIMARY KEY(id),
	FOREIGN KEY(medicalEquipmentName) REFERENCES medicalEquipment(name),
	FOREIGN KEY(bedNumber) REFERENCES beds(number)
);

create table patientsChanges(
	id SERIAL,
	patientId INT,
	timestamp DATE,
	PRIMARY KEY(id),
	FOREIGN KEY(patientId) REFERENCES patients(id)
);



