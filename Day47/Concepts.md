# Day 47 - Concepts

## Why not <a href>?
- **WHY:** Our access token lives in memory and is sent as a header; links and iframes cannot add headers.
- **WHAT:** Fetch the file as a Blob through axios, then use URL.createObjectURL for the iframe/img or a temporary <a download>.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** fetchDocumentBlob, saveBlob.

## Object URL cleanup
- **WHY:** Each object URL keeps the blob in memory until revoked.
- **WHAT:** The effect cleanup revokes the URL when the dialog closes or the document changes.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DocumentPreview.

## Upload progress
- **WHY:** Large files need feedback.
- **WHAT:** axios onUploadProgress reports loaded/total; a progressbar element shows it with aria-valuenow.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** documentQueries, DocumentsPanel.

## Inline vs attachment
- **WHY:** Serving an uploaded HTML/SVG inline could run script in our origin.
- **WHAT:** Only a short allow-list renders inline; everything else is forced to download, always with nosniff.
- **HOW:** undefined
- **WHERE (in LearnInsurance):** DocumentsController.Content.
