INSERT INTO pathologies VALUES
    ('ebola'),
	('sika'),
	('covid');
	
INSERT INTO patients VALUES
    ('123@gmail.com',123123,'7777','01/01/1999','luis1','rojas','mi casax1'),
	('456@gmail.com',456456,'8888','01/03/1999','luis2','rojas','mi casax2'),
	('789@gmail.com',789789,'9999','01/05/1999','luis3','rojas','mi casax3');
	

INSERT INTO pathologyPatients VALUES
    (DEFAULT,123123,'ebola','sopita1'),
	(DEFAULT,123123,'sika','sopita2'),
	(DEFAULT,123123,'covid','sopita3');


INSERT INTO evaluations VALUES
    (DEFAULT,123123,1,2,3,4),
	(DEFAULT,123123,5,6,7,8),
	(DEFAULT,123123,9,9,9,9);


INSERT INTO medicalProcedures VALUES
    ('cirugia de nariz',12),
	('cirugia de oreja',5),
	('cirugia de ojo',7);

INSERT INTO clinicalHistory VALUES
    (DEFAULT,123123,'cirugia de nariz','01/01/2020'),
	(DEFAULT,123123,'cirugia de nariz','01/01/2020'),
	(DEFAULT,123123,'cirugia de nariz','01/01/2020');


INSERT INTO hospitals VALUES
    (123,'hospital del sur'),
	(456,'hospital del norte'),
	(789,'hospital del oeste');

INSERT INTO hospitalPersonnel VALUES
    ('123@gmail.com',123,999888,'7777','01/01/1999','luis1','rojas','mi casax1'),
	('456@gmail.com',456,777666,'8888','01/03/1999','luis2','rojas','mi casax2'),
	('789@gmail.com',789,666555,'9999','01/05/1999','luis3','rojas','mi casax3');
	

INSERT INTO rooms VALUES
    (1123,123,'sala1','hombres',12,1),
	(4456,123,'sala2','hombres',24,4),
	(7789,456,'sala3','mujeres',6,2);
	

INSERT INTO beds VALUES
    (987,1123,'yes'),
	(654,1123,'no'),
	(321,7789,'no');
	

INSERT INTO bookings VALUES
    (11123,123123,987,'01/01/2020','05/01/2020'),
	(44456,123123,654,'01/01/2020','05/01/2020'),
	(77789,123123,987,'01/02/2020','05/02/2020');


INSERT INTO bookingMedicalProcedures VALUES
    (DEFAULT,'cirugia de nariz',11123),
	(DEFAULT,'cirugia de nariz',44456),
	(DEFAULT,'cirugia de nariz',77789);
	

INSERT INTO medicalEquipment VALUES
    ('luces quirúrgicas','anonimo1',12),
	('ultrasonidos','anonimo2',12),
	('lesterilizadores','anonimo1',12),
	('desfibriladores','anonimo1',12),
	('respiradores artificiales','anonimo2',12),
	('respiradores electrocardiógrafos','anonimo1',12);
	

INSERT INTO bedMedicalEquipment VALUES
    (DEFAULT,'luces quirúrgicas',987),
	(DEFAULT,'ultrasonidos',987),
	(DEFAULT,'respiradores artificiales',321);