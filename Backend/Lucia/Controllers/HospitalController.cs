using Lucia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lucia.Controllers
{
    public class HospitalController : ApiController
    {
        // GET: api/Hospital
        PostgreContext postgreContext = new PostgreContext();
        IList<hospitalView> hospitales = new List<hospitalView>();
        // GET: api/Pathologies
        public IList<hospitalView> Get()

        {
            foreach (Hospitals hospital in postgreContext.Hospitals)
            {
                hospitalView hospi = new hospitalView();
                hospi.Name = hospital.Name;
                hospi.Id = hospital.Id;
                hospitales.Add(hospi);

            }

            return hospitales;
        }

        // GET: api/Hospital/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Hospital
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Hospital/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Hospital/5
        public void Delete(int id)
        {
        }
    }
}
