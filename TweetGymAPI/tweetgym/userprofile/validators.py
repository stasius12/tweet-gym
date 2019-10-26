from rest_framework import serializers


def contains_only_alpha(value):
    if not value.isalpha():
        raise serializers.ValidationError(
            "This field should contains only letters"
        )
    return value
