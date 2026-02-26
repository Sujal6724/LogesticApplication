from .models import Notification


def create_notification(user, title, message, type="general"):
    return Notification.objects.create(
        user=user,
        title=title,
        message=message,
        type=type,
    )


def mark_all_as_read(user):
    return Notification.objects.filter(user=user, is_read=False).update(is_read=True)


def unread_count(user):
    return Notification.objects.filter(user=user, is_read=False).count()