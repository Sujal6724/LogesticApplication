from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("notifications", "0002_alter_notification_type"),
        ("notifications", "0003_remove_notification_is_deleted_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notification",
            name="type",
            field=models.CharField(
                choices=[
                    ("booking", "Booking"),
                    ("payment", "Payment"),
                    ("service", "Service"),
                    ("general", "General"),
                ],
                default="general",
                max_length=20,
            ),
        ),
        migrations.AlterField(
            model_name="notification",
            name="is_read",
            field=models.BooleanField(db_index=True, default=False),
        ),
        migrations.AlterField(
            model_name="notification",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True, db_index=True),
        ),
    ]
