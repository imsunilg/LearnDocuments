# DAY 47

- **Topic:** File Upload, Download and Preview
- **ReactJS Concept:** Drag-and-drop zone, upload progress via onUploadProgress, Blob downloads through the authenticated client, object URLs revoked in effect cleanup, preview dialog
- **Insurance Functionality:** Open a scanned policy copy or KYC proof without leaving the file; download the original
- **Backend Functionality:** GET /api/documents/{id}/content (attachment by default, ?inline=true only for pdf/png/jpeg/txt), X-Content-Type-Options: nosniff
- **Database Functionality:** No new objects: the Day 46 documents table already holds everything the viewer needs

## Learning objectives
- Show upload progress
- Download files that need an Authorization header
- Preview PDF/image/text safely
- Avoid object-URL memory leaks

## What I learned
- Blob + object URL pattern
- Revoke object URLs
- Inline only a safe allow-list

## Why this approach is used
Treat every uploaded file as hostile: validate going in, restrict how it is served coming out.

## Common mistakes
- Putting the JWT in a query string for downloads
- Forgetting URL.revokeObjectURL
- Serving user HTML inline

## Interview questions
1. **How do you download a file that needs an auth header?**
   Fetch it as a Blob via the authenticated client and save it through an object URL; links cannot send custom headers.

## Practice task
Support multiple files at once with a progress bar per file.

## Next day's topic
Day 48 - Reports Dashboard

## Commit
`Day 47: Add file upload, download and preview`
