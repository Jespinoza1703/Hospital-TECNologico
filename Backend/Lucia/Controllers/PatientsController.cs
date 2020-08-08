using Lucia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lucia.Controllers
{
    public class PatientsController : ApiController
    {
        // GET: api/Hospital
        PostgreContext postgreContext = new PostgreContext();
        IList<patientsView> pacientes = new List<patientsView>();
        // GET: api/Pathologies
        public IList<patientsView> Get()

        {
            foreach (Patients patient in postgreContext.Patients)
            {
                patientsView paciente = new patientsView();
                paciente.Email = patient.Email;
                paciente.Id = patient.Id;
                paciente.Phonenumber = patient.Phonenumber;
                paciente.Birthday = patient.Birthday;
                paciente.Firstname = patient.Firstname;
                paciente.Lastname = patient.Lastname;
                paciente.Adress = patient.Lastname;
                pacientes.Add(paciente);

            }
            return pacientes;
        }

        // GET: api/Patients/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Patients
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Patients/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Patients/5
        public void Delete(int id)
        {
        }
    }
}
