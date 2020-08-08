using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("medicalprocedures")]
    public partial class Medicalprocedures
    {
        public Medicalprocedures()
        {
            Bookingmedicalprocedures = new HashSet<Bookingmedicalprocedures>();
            Clinicalhistory = new HashSet<Clinicalhistory>();
        }

        [Key]
        [Column("name")]
        [StringLength(55)]
        public string Name { get; set; }
        [Column("minimumdays")]
        public int? Minimumdays { get; set; }

        [InverseProperty("MedicalprocedurenameNavigation")]
        public virtual ICollection<Bookingmedicalprocedures> Bookingmedicalprocedures { get; set; }
        [InverseProperty("MedicalprocedurenameNavigation")]
        public virtual ICollection<Clinicalhistory> Clinicalhistory { get; set; }
    }
}
