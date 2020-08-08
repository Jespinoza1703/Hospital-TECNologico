using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("pathologypatients")]
    public partial class Pathologypatients
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("patientid")]
        public int? Patientid { get; set; }
        [Column("pathologyname")]
        [StringLength(55)]
        public string Pathologyname { get; set; }
        [Column("treatment")]
        [StringLength(55)]
        public string Treatment { get; set; }

        [ForeignKey(nameof(Pathologyname))]
        [InverseProperty(nameof(Pathologies.Pathologypatients))]
        public virtual Pathologies PathologynameNavigation { get; set; }
        [ForeignKey(nameof(Patientid))]
        [InverseProperty(nameof(Patients.Pathologypatients))]
        public virtual Patients Patient { get; set; }
    }
}
