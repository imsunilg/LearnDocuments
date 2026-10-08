# Day 13 - Concepts

## Uncontrolled inputs + refs
- **WHY:** A controlled form re-renders on every keystroke; a 40-field proposal form would crawl.
- **WHAT:** The DOM keeps values; the library reads them via refs on submit/validation.
- **HOW:** `{...register("email", rules)}` returns name/ref/onChange/onBlur.
- **WHERE (in LearnInsurance):** CustomerEditor.

## handleSubmit & formState
- **WHY:** Validation orchestration and submit state in one place.
- **WHAT:** handleSubmit(valid, invalid?) validates first; formState.errors holds per-field errors.
- **HOW:** Only components reading formState subscribe to its changes (Proxy-based).
- **WHERE (in LearnInsurance):** CustomerEditor.

## setError for server errors
- **WHY:** The API can reject what the client accepted (duplicates, rules).
- **WHAT:** Programmatically attach an error to a field.
- **HOW:** Effect over serverErrors → setError(field, {type:"server", message}).
- **WHERE (in LearnInsurance):** CustomerEditor.
