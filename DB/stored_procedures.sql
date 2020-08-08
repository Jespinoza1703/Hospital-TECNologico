create or replace procedure changePathologyName(
	oldName varchar(55),
	newName varchar(55)
)
language plpgsql    
as $$
begin
	insert into pathologies
	values (newName);

    update pathologyPatients 
    set pathologyName = newName 
    where pathologyName = oldName;
	
	delete from pathologies
	where name = oldName; 

    commit;
end;$$;

create or replace procedure changeRoomId(
	oldId INT,
	newId INT
)
language plpgsql    
as $$
begin
	insert into rooms (id,hospitalId,name,type,capacity,floor)
	select newId,hospitalId,name,type,capacity,floor from rooms where id = oldId;

    update beds 
    set roomId = newId 
    where roomId = oldId;
	
	delete from rooms
	where name = oldId; 

    commit;
end;$$;

create or replace procedure changeBookingId(
	oldId INT,
	newId INT
)
language plpgsql    
as $$
begin
	insert into bookings (id,patientId,bedNumber,startDate,finishDate)
	select newId,patientId,bedNumber,startDate,finishDate from bookings where id = oldId;

    update bookingMedicalProcedures 
    set bookingId = newId 
    where bookingId = oldId;
	
	delete from bookings
	where name = oldId; 

    commit;
end;$$;

create or replace procedure changeMedicalEquipmentName(
	oldName VARCHAR(55),
	newName VARCHAR(55)
)
language plpgsql    
as $$
begin
	insert into medicalEquipment (name,provider,amount)
	select newName,provider,amount from medicalEquipment where name = oldName;

    update bedMedicalEquipment 
    set medicalEquipmentName = newName 
    where medicalEquipmentName = oldName;
	
	delete from medicalEquipment
	where name = oldName; 

    commit;
end;$$;

create or replace procedure changeHospitalId(
	oldId INT,
	newId INT
)
language plpgsql    
as $$
begin
	insert into hospitals (id,name)
	select newId,name from hospitals where id = oldId;

    update hospitalPersonnel 
    set hospitalId = newId 
    where hospitalId = oldId;
	
	update rooms 
    set hospitalId = newId 
    where hospitalId = oldId;
	
	delete from hospitals
	where id = oldId; 

    commit;
end;$$;




