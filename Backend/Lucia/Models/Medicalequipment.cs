using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("medicalequipment")]
    public partial class Medicalequipment
    {
        public Medicalequipment()
        {
            Bedmedicalequipment = new HashSet<Bedmedicalequipment>();
        }

        [Key]
        [Column("name")]
        [StringLength(55)]
        public string Name { get; set; }
        [Column("provider")]
        [StringLength(55)]
        public string Provider { get; set; }
        [Column("amount")]
        public int? Amount { get; set; }

        [InverseProperty("MedicalequipmentnameNavigation")]
        public virtual ICollection<Bedmedicalequipment> Bedmedicalequipment { get; set; }
    }
}
