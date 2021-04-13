from django.db import models

# Create your models here.


class Task(models.Model):
    task = models.CharField(max_length=255, null=False)
    status = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.task

    class Meta():
        db_table = 'task'
