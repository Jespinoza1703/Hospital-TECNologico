using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("beds")]
    public partial class Beds
    {
        public Beds()
        {
            Bedmedicalequipment = new HashSet<Bedmedicalequipment>();
            Bookings = new HashSet<Bookings>();
        }

        [Key]
        [Column("number")]
        public int Number { get; set; }
        [Column("roomid")]
        public int? Roomid { get; set; }
        [Column("icu")]
        [StringLength(5)]
        public string Icu { get; set; }

        [ForeignKey(nameof(Roomid))]
        [InverseProperty(nameof(Rooms.Beds))]
        public virtual Rooms Room { get; set; }
        [InverseProperty("BednumberNavigation")]
        public virtual ICollection<Bedmedicalequipment> Bedmedicalequipment { get; set; }
        [InverseProperty("BednumberNavigation")]
        public virtual ICollection<Bookings> Bookings { get; set; }
    }
}
