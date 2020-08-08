using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("patientschanges")]
    public partial class Patientschanges
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("patientid")]
        public int? Patientid { get; set; }
        [Column("timestamp", TypeName = "date")]
        public DateTime? Timestamp { get; set; }

        [ForeignKey(nameof(Patientid))]
        [InverseProperty(nameof(Patients.Patientschanges))]
        public virtual Patients Patient { get; set; }
    }
}
