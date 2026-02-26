# Notification Module Compliance

## Security requirements

- User-scoped access is enforced in all querysets (`user=request.user`).
- Private data isolation is preserved by filtering to authenticated user data only.
- `created_at` is read-only in serializer.
- `is_deleted` is read-only in serializer.
- Role-safe access is enforced via `IsAuthenticated` permissions on all APIs.

## Performance

- `created_at` uses `db_index=True` for faster sorting/filtering on timeline queries.
- List API uses pagination (`page_size=10`, configurable by `page_size`, max `100`).

## Production enhancements implemented

- Unread count API: `GET /api/notifications/unread-count/`
- Bulk mark read API: `PUT /api/notifications/bulk-read/`
- Soft delete behavior for delete endpoint.
- Paginated list endpoint.

## Realtime websocket notification

- Not enabled in this baseline because it requires Django Channels + ASGI channel layer setup (e.g., Redis).
- Existing architecture is ready to extend by publishing events on notification create/update.
