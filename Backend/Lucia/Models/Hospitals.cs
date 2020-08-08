using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("hospitals")]
    public partial class Hospitals
    {
        public Hospitals()
        {
            Hospitalpersonnel = new HashSet<Hospitalpersonnel>();
            Rooms = new HashSet<Rooms>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        [StringLength(55)]
        public string Name { get; set; }

        [InverseProperty("Hospital")]
        public virtual ICollection<Hospitalpersonnel> Hospitalpersonnel { get; set; }
        [InverseProperty("Hospital")]
        public virtual ICollection<Rooms> Rooms { get; set; }
    }
}
