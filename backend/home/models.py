from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()
    jhgjgjhg = models.PositiveIntegerField(
        null=True,
        blank=True,
    )

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Hngjf(models.Model):
    "Generated Model"
    hghgh = models.BigIntegerField(
        blank=True,
    )
    nbvbnvnv12213234232 = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="hngjf_nbvbnvnv12213234232",
    )
