using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("pathologies")]
    public partial class Pathologies
    {
        public Pathologies()
        {
            Pathologypatients = new HashSet<Pathologypatients>();
        }

        [Key]
        [Column("name")]
        [StringLength(55)]
        public string Name { get; set; }

        [InverseProperty("PathologynameNavigation")]
        public virtual ICollection<Pathologypatients> Pathologypatients { get; set; }
    }
}
