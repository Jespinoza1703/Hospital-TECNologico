using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("bookingmedicalprocedures")]
    public partial class Bookingmedicalprocedures
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("medicalprocedurename")]
        [StringLength(55)]
        public string Medicalprocedurename { get; set; }
        [Column("bookingid")]
        public int? Bookingid { get; set; }

        [ForeignKey(nameof(Bookingid))]
        [InverseProperty(nameof(Bookings.Bookingmedicalprocedures))]
        public virtual Bookings Booking { get; set; }
        [ForeignKey(nameof(Medicalprocedurename))]
        [InverseProperty(nameof(Medicalprocedures.Bookingmedicalprocedures))]
        public virtual Medicalprocedures MedicalprocedurenameNavigation { get; set; }
    }
}
