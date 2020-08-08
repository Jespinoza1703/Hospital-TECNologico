using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("bedmedicalequipment")]
    public partial class Bedmedicalequipment
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("medicalequipmentname")]
        [StringLength(55)]
        public string Medicalequipmentname { get; set; }
        [Column("bednumber")]
        public int? Bednumber { get; set; }

        [ForeignKey(nameof(Bednumber))]
        [InverseProperty(nameof(Beds.Bedmedicalequipment))]
        public virtual Beds BednumberNavigation { get; set; }
        [ForeignKey(nameof(Medicalequipmentname))]
        [InverseProperty(nameof(Medicalequipment.Bedmedicalequipment))]
        public virtual Medicalequipment MedicalequipmentnameNavigation { get; set; }
    }
}
