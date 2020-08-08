using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lucia.Models
{
    public class patientsView
    {
        
        public string Email { get; set; }
        
        public int Id { get; set; }
        
        public string Phonenumber { get; set; }
        
        public DateTime? Birthday { get; set; }
        
        public string Firstname { get; set; }
        
        public string Lastname { get; set; }
        
        public string Adress { get; set; }
    }
}