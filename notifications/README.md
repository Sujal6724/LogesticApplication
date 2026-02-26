# Notifications Module

Azure DevOps-friendly structure with a service layer.

## Structure

- `models.py` — Notification entity
- `serializers.py` — DRF serializer
- `pagination.py` — list pagination policy
- `services.py` — reusable domain service functions
- `integrations.py` — booking/payment/service integration helpers
- `views.py` — API endpoints
- `urls.py` — route mapping

## API Endpoints

- `POST /api/notifications/create/`
- `GET /api/notifications/list/`
- `PUT /api/notifications/read/<id>/`
- `DELETE /api/notifications/delete/<id>/`
- `GET /api/notifications/unread-count/`
- `POST /api/notifications/mark-all-read/`

## Integration from other modules

### Direct service call

```python
from notifications.services import create_notification

create_notification(
    user=booking.user,
    title="Booking Confirmed",
    message="Your booking has been confirmed",
    type="booking",
)
```

### Prebuilt helper examples

```python
from notifications.integrations import notify_booking_confirmed

notify_booking_confirmed(booking)
```
