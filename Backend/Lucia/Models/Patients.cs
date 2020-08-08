using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("patients")]
    public partial class Patients
    {
        public Patients()
        {
            Bookings = new HashSet<Bookings>();
            Clinicalhistory = new HashSet<Clinicalhistory>();
            Evaluations = new HashSet<Evaluations>();
            Pathologypatients = new HashSet<Pathologypatients>();
            Patientschanges = new HashSet<Patientschanges>();
        }

        [Column("email")]
        [StringLength(55)]
        public string Email { get; set; }
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("phonenumber")]
        [StringLength(55)]
        public string Phonenumber { get; set; }
        [Column("birthday", TypeName = "date")]
        public DateTime? Birthday { get; set; }
        [Column("firstname")]
        [StringLength(55)]
        public string Firstname { get; set; }
        [Column("lastname")]
        [StringLength(55)]
        public string Lastname { get; set; }
        [Column("adress")]
        [StringLength(55)]
        public string Adress { get; set; }

        [InverseProperty("Patient")]
        public virtual ICollection<Bookings> Bookings { get; set; }
        [InverseProperty("Patient")]
        public virtual ICollection<Clinicalhistory> Clinicalhistory { get; set; }
        [InverseProperty("Patient")]
        public virtual ICollection<Evaluations> Evaluations { get; set; }
        [InverseProperty("Patient")]
        public virtual ICollection<Pathologypatients> Pathologypatients { get; set; }
        [InverseProperty("Patient")]
        public virtual ICollection<Patientschanges> Patientschanges { get; set; }
    }
}
