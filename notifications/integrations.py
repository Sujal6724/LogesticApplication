from .services import create_notification


def notify_booking_confirmed(booking):
    return create_notification(
        user=booking.user,
        title="Booking Confirmed",
        message="Your booking has been confirmed",
        type="booking",
    )


def notify_payment_success(payment):
    return create_notification(
        user=payment.user,
        title="Payment Successful",
        message="Your payment was received successfully",
        type="payment",
    )


def notify_service_update(service_record):
    return create_notification(
        user=service_record.user,
        title="Service Updated",
        message="Your service request has been updated",
        type="service",
    )