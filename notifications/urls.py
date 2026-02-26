from django.urls import path
from .views import (
    CreateNotificationAPIView,
    UserNotificationListAPIView,
    MarkNotificationReadAPIView,
    DeleteNotificationAPIView,
    UnreadCountAPIView,
    MarkAllReadAPIView,
)

urlpatterns = [
    path("create/", CreateNotificationAPIView.as_view()),
    path("", UserNotificationListAPIView.as_view()),
    path("list/", UserNotificationListAPIView.as_view()),
    path("<int:pk>/read/", MarkNotificationReadAPIView.as_view()),
    path("<int:pk>/delete/", DeleteNotificationAPIView.as_view()),
    path("unread-count/", UnreadCountAPIView.as_view()),
    path("mark-all-read/", MarkAllReadAPIView.as_view()),
]
