using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("bookings")]
    public partial class Bookings
    {
        public Bookings()
        {
            Bookingmedicalprocedures = new HashSet<Bookingmedicalprocedures>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("patientid")]
        public int? Patientid { get; set; }
        [Column("bednumber")]
        public int? Bednumber { get; set; }
        [Column("startdate", TypeName = "date")]
        public DateTime? Startdate { get; set; }
        [Column("finishdate", TypeName = "date")]
        public DateTime? Finishdate { get; set; }

        [ForeignKey(nameof(Bednumber))]
        [InverseProperty(nameof(Beds.Bookings))]
        public virtual Beds BednumberNavigation { get; set; }
        [ForeignKey(nameof(Patientid))]
        [InverseProperty(nameof(Patients.Bookings))]
        public virtual Patients Patient { get; set; }
        [InverseProperty("Booking")]
        public virtual ICollection<Bookingmedicalprocedures> Bookingmedicalprocedures { get; set; }
    }
}
