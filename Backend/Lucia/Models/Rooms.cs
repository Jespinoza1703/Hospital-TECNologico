using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("rooms")]
    public partial class Rooms
    {
        public Rooms()
        {
            Beds = new HashSet<Beds>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("hospitalid")]
        public int? Hospitalid { get; set; }
        [Column("name")]
        [StringLength(55)]
        public string Name { get; set; }
        [Column("type")]
        [StringLength(55)]
        public string Type { get; set; }
        [Column("capacity")]
        public int? Capacity { get; set; }
        [Column("floor")]
        public int? Floor { get; set; }

        [ForeignKey(nameof(Hospitalid))]
        [InverseProperty(nameof(Hospitals.Rooms))]
        public virtual Hospitals Hospital { get; set; }
        [InverseProperty("Room")]
        public virtual ICollection<Beds> Beds { get; set; }
    }
}
