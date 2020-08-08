using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lucia.Models
{
    [Table("hospitalpersonnel")]
    public partial class Hospitalpersonnel
    {
        [Key]
        [Column("email")]
        [StringLength(55)]
        public string Email { get; set; }
        [Column("hospitalid")]
        public int? Hospitalid { get; set; }
        [Column("id")]
        public int? Id { get; set; }
        [Column("phonenumber")]
        [StringLength(55)]
        public string Phonenumber { get; set; }
        [Column("birthday", TypeName = "date")]
        public DateTime? Birthday { get; set; }
        [Column("firstname")]
        [StringLength(55)]
        public string Firstname { get; set; }
        [Column("lastname")]
        [StringLength(55)]
        public string Lastname { get; set; }
        [Column("adress")]
        [StringLength(55)]
        public string Adress { get; set; }

        [ForeignKey(nameof(Hospitalid))]
        [InverseProperty(nameof(Hospitals.Hospitalpersonnel))]
        public virtual Hospitals Hospital { get; set; }
    }
}
