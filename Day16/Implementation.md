# Day 16 - Implementation

## What was built
- AppConfigContext / Provider / useAppConfig
- ThemeToggle in the header
- Persisted theme and page size via useLocalStorage
- Dark theme tokens

## Code walkthrough
The provider reads the saved theme (falling back to prefers-color-scheme), syncs it to document.documentElement.dataset.theme and exposes toggleTheme.

## Architecture changes
None.
