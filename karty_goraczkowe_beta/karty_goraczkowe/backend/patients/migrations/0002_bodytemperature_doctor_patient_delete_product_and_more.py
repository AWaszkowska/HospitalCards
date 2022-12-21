# Generated by Django 4.1 on 2022-12-13 10:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("patients", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="BodyTemperature",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("measurement", models.DecimalField(decimal_places=2, max_digits=4)),
                ("measurement_date", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Doctor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("surname", models.CharField(max_length=100)),
                ("username", models.CharField(max_length=100)),
                ("password", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="Patient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("surname", models.CharField(max_length=100)),
                ("birth_date", models.DateField()),
                ("pesel", models.CharField(max_length=11)),
                ("creation_date", models.DateTimeField(auto_now_add=True)),
                (
                    "gender",
                    models.CharField(
                        choices=[("M", "Mezczyzna"), ("K", "Kobieta")], max_length=1
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="Product",
        ),
        migrations.AddField(
            model_name="bodytemperature",
            name="patient_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="patients.patient"
            ),
        ),
    ]