# Day 12 - Implementation

## What was built
- Modal (portal, focus trap)
- ConfirmationDialog
- ToastProvider + useToast (auto-dismiss + close button)
- AppProviders
- overlay.css

## Code walkthrough
CustomersPage keeps `toDelete` in state. Clicking Delete sets it; the dialog opens; Confirm calls the API, shows a toast, closes and reloads the list.

## Architecture changes
None.
