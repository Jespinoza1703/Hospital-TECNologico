CREATE OR REPLACE FUNCTION logNewPatient()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL  
  AS
$$
BEGIN
	INSERT INTO patientsChanges(patientId, timestamp) VALUES (new.id, current_timestamp);

	RETURN NEW;
END;
$$;

CREATE TRIGGER savePatientsInsert
  AFTER INSERT
  ON patients
  FOR EACH ROW
  EXECUTE PROCEDURE logNewPatient();


CREATE OR REPLACE FUNCTION logUpdatedPatient()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL  
  AS
$$
BEGIN
	INSERT INTO patientsChanges(patientId, timestamp) VALUES (new.id, current_timestamp);

	RETURN NEW;
END;
$$;

CREATE TRIGGER savePatientsUpdate
  AFTER UPDATE
  ON patients
  FOR EACH ROW
  EXECUTE PROCEDURE logUpdatedPatient();
  
update patients set firstName='newnewLuis1' where id=123123
