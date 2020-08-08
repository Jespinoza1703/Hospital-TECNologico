using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("clinicalhistory")]
    public partial class Clinicalhistory
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("patientid")]
        public int? Patientid { get; set; }
        [Column("medicalprocedurename")]
        [StringLength(55)]
        public string Medicalprocedurename { get; set; }
        [Column("treatment")]
        [StringLength(55)]
        public string Treatment { get; set; }
        [Column("date", TypeName = "date")]
        public DateTime? Date { get; set; }

        [ForeignKey(nameof(Medicalprocedurename))]
        [InverseProperty(nameof(Medicalprocedures.Clinicalhistory))]
        public virtual Medicalprocedures MedicalprocedurenameNavigation { get; set; }
        [ForeignKey(nameof(Patientid))]
        [InverseProperty(nameof(Patients.Clinicalhistory))]
        public virtual Patients Patient { get; set; }
    }
}
