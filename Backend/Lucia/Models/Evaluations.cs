using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("evaluations")]
    public partial class Evaluations
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("patientid")]
        public int? Patientid { get; set; }
        [Column("hospitalhygiene")]
        public int? Hospitalhygiene { get; set; }
        [Column("punctuality")]
        public int? Punctuality { get; set; }
        [Column("personnelcare")]
        public int? Personnelcare { get; set; }
        [Column("hospitalstay")]
        public int? Hospitalstay { get; set; }

        [ForeignKey(nameof(Patientid))]
        [InverseProperty(nameof(Patients.Evaluations))]
        public virtual Patients Patient { get; set; }
    }
}
