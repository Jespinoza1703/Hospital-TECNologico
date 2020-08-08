using Lucia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lucia.Controllers
{
    public class PathologiesController : ApiController
    {
        // GET: api/Pathologies

        PostgreContext postgreContext = new PostgreContext();
        IList<pathologiesView> enfermedades = new List<pathologiesView>();
        // GET: api/Pathologies
        public IList<pathologiesView> Get()

        {
            foreach (Pathologies pathology in postgreContext.Pathologies)
            {
                pathologiesView enfermedad = new pathologiesView();
                enfermedad.Name = pathology.Name;
                enfermedades.Add(enfermedad);


            }
            return enfermedades;
        }

        // GET: api/Pathologies/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pathologies
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Pathologies/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pathologies/5
        public void Delete(int id)
        {
        }
    }
}
