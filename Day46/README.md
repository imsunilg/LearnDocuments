# DAY 46

- **Topic:** Document Management
- **ReactJS Concept:** multipart FormData uploads, a reusable panel dropped onto several details pages, client-side validation that mirrors server rules, permission-gated actions
- **Insurance Functionality:** KYC, policy copies and claim documents attached to customers, policies and claims with a document type, description and audit trail
- **Backend Functionality:** DocumentsController (POST multipart upload, list/get generated, delete), DocumentService (size, extension and magic-byte checks, SHA-256, generated storage key), IFileStorage + LocalFileStorage with path-traversal guard
- **Database Functionality:** documents table (entity_type + entity_id polymorphic link, storage_key, checksum), fn_document_register (validates the target row and document type), vw_documents

## Learning objectives
- Upload files safely
- Attach one document model to many entities
- Keep bytes out of the database
- Validate on both client and server

## What I learned
- Validate content, not just the name
- Generated storage names defeat path tricks
- Orphan files must be cleaned when the DB insert fails

## Why this approach is used
Uploads are the most common attack surface of a business app, so every check is layered.

## Common mistakes
- Saving with the client file name
- Trusting Content-Type
- Serving the upload folder statically
- Setting multipart headers by hand without a boundary

## Interview questions
1. **How do you secure file uploads?**
   Allow-list extensions, verify magic bytes, limit size, store outside the web root under generated names, scan if possible, and serve with nosniff and attachment disposition.

## Practice task
Add duplicate detection: refuse a file whose checksum already exists for the same entity.

## Next day's topic
Day 47 - File Upload/Download/Preview

## Commit
`Day 46: Add document management`
