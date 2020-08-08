using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Lucia.Models
{
    public partial class PostgreContext : DbContext
    {
        public PostgreContext()
        {
        }

        public PostgreContext(DbContextOptions<PostgreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bedmedicalequipment> Bedmedicalequipment { get; set; }
        public virtual DbSet<Beds> Beds { get; set; }
        public virtual DbSet<Bookingmedicalprocedures> Bookingmedicalprocedures { get; set; }
        public virtual DbSet<Bookings> Bookings { get; set; }
        public virtual DbSet<Clinicalhistory> Clinicalhistory { get; set; }
        public virtual DbSet<Evaluations> Evaluations { get; set; }
        public virtual DbSet<Hospitalpersonnel> Hospitalpersonnel { get; set; }
        public virtual DbSet<Hospitals> Hospitals { get; set; }
        public virtual DbSet<Medicalequipment> Medicalequipment { get; set; }
        public virtual DbSet<Medicalprocedures> Medicalprocedures { get; set; }
        public virtual DbSet<Pathologies> Pathologies { get; set; }
        public virtual DbSet<Pathologypatients> Pathologypatients { get; set; }
        public virtual DbSet<Patients> Patients { get; set; }
        public virtual DbSet<Patientschanges> Patientschanges { get; set; }
        public virtual DbSet<Rooms> Rooms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Server=lucydatabase.postgres.database.azure.com;Database=HospitalDB;Port=5432;User Id=sabroso@lucydatabase;Password=Tantan20;Ssl Mode=Require;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bedmedicalequipment>(entity =>
            {
                entity.HasOne(d => d.BednumberNavigation)
                    .WithMany(p => p.Bedmedicalequipment)
                    .HasForeignKey(d => d.Bednumber)
                    .HasConstraintName("bedmedicalequipment_bednumber_fkey");

                entity.HasOne(d => d.MedicalequipmentnameNavigation)
                    .WithMany(p => p.Bedmedicalequipment)
                    .HasForeignKey(d => d.Medicalequipmentname)
                    .HasConstraintName("bedmedicalequipment_medicalequipmentname_fkey");
            });

            modelBuilder.Entity<Beds>(entity =>
            {
                entity.HasKey(e => e.Number)
                    .HasName("beds_pkey");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Beds)
                    .HasForeignKey(d => d.Roomid)
                    .HasConstraintName("beds_roomid_fkey");
            });

            modelBuilder.Entity<Bookingmedicalprocedures>(entity =>
            {
                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.Bookingmedicalprocedures)
                    .HasForeignKey(d => d.Bookingid)
                    .HasConstraintName("bookingmedicalprocedures_bookingid_fkey");

                entity.HasOne(d => d.MedicalprocedurenameNavigation)
                    .WithMany(p => p.Bookingmedicalprocedures)
                    .HasForeignKey(d => d.Medicalprocedurename)
                    .HasConstraintName("bookingmedicalprocedures_medicalprocedurename_fkey");
            });

            modelBuilder.Entity<Bookings>(entity =>
            {
                entity.HasOne(d => d.BednumberNavigation)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.Bednumber)
                    .HasConstraintName("bookings_bednumber_fkey");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.Patientid)
                    .HasConstraintName("bookings_patientid_fkey");
            });

            modelBuilder.Entity<Clinicalhistory>(entity =>
            {
                entity.HasOne(d => d.MedicalprocedurenameNavigation)
                    .WithMany(p => p.Clinicalhistory)
                    .HasForeignKey(d => d.Medicalprocedurename)
                    .HasConstraintName("clinicalhistory_medicalprocedurename_fkey");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Clinicalhistory)
                    .HasForeignKey(d => d.Patientid)
                    .HasConstraintName("clinicalhistory_patientid_fkey");
            });

            modelBuilder.Entity<Evaluations>(entity =>
            {
                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Evaluations)
                    .HasForeignKey(d => d.Patientid)
                    .HasConstraintName("evaluations_patientid_fkey");
            });

            modelBuilder.Entity<Hospitalpersonnel>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("hospitalpersonnel_pkey");

                entity.HasOne(d => d.Hospital)
                    .WithMany(p => p.Hospitalpersonnel)
                    .HasForeignKey(d => d.Hospitalid)
                    .HasConstraintName("hospitalpersonnel_hospitalid_fkey");
            });

            modelBuilder.Entity<Medicalequipment>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("medicalequipment_pkey");
            });

            modelBuilder.Entity<Medicalprocedures>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("medicalprocedures_pkey");
            });

            modelBuilder.Entity<Pathologies>(entity =>
            {
                entity.HasKey(e => e.Name)
                    .HasName("pathologies_pkey");
            });

            modelBuilder.Entity<Pathologypatients>(entity =>
            {
                entity.HasOne(d => d.PathologynameNavigation)
                    .WithMany(p => p.Pathologypatients)
                    .HasForeignKey(d => d.Pathologyname)
                    .HasConstraintName("pathologypatients_pathologyname_fkey");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Pathologypatients)
                    .HasForeignKey(d => d.Patientid)
                    .HasConstraintName("pathologypatients_patientid_fkey");
            });

            modelBuilder.Entity<Patients>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("patients_email_key")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<Patientschanges>(entity =>
            {
                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Patientschanges)
                    .HasForeignKey(d => d.Patientid)
                    .HasConstraintName("patientschanges_patientid_fkey");
            });

            modelBuilder.Entity<Rooms>(entity =>
            {
                entity.HasOne(d => d.Hospital)
                    .WithMany(p => p.Rooms)
                    .HasForeignKey(d => d.Hospitalid)
                    .HasConstraintName("rooms_hospitalid_fkey");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
