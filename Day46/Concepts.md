# Day 46 - Concepts

## Metadata in DB, bytes in storage
- **WHY:** Large binaries bloat the database and backups.
- **WHAT:** The table stores a pointer (storage_key), size and checksum; IFileStorage hides where bytes live (disk now, blob storage later).
- **HOW:** undefined
- **WHERE (in LearnInsurance):** documents table, IFileStorage.

## Never trust the file name or Content-Type
- **WHY:** Attackers send "../../x" names and rename .exe to .pdf.
- **WHAT:** The file is stored under a generated GUID name; the extension is checked against an allow-list AND the first bytes (magic numbers) must match.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DocumentService.

## Polymorphic attachment
- **WHY:** One upload feature for customers, policies and claims.
- **WHAT:** entity_type + entity_id with a CHECK constraint; the function verifies the target exists.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fn_document_register.

## FormData with axios
- **WHY:** JSON cannot carry files.
- **WHAT:** Build a FormData and override the default JSON Content-Type so axios adds the multipart boundary.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** documentQueries.
