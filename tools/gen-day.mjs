// Usage: node LearnDocuments/tools/gen-day.mjs <dayNumber>
// Generates LearnDocuments/DayXX/*.md from the day definitions in ./days/*.mjs and
// the files currently changed in git (FilesChanged.md).
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..', '..')
const n = Number(process.argv[2])
if (!n) throw new Error('day number required')

const days = {}
for (const f of readdirSync(join(here, 'days')).filter((x) => x.endsWith('.mjs'))) {
  Object.assign(days, (await import(pathToFileURL(join(here, 'days', f)).href)).default)
}
const d = days[n]
if (!d) throw new Error(`No definition for day ${n}`)
const nn = String(n).padStart(2, '0')
const dir = join(root, 'LearnDocuments', `Day${nn}`)
mkdirSync(dir, { recursive: true })

const list = (a) => (a ?? []).map((x) => `- ${x}`).join('\n')
const w = (name, text) => writeFileSync(join(dir, name), text.trim() + '\n')

let changed = ''
try {
  if (!process.env.PARTIAL_STAGE) execSync('git add -A', { cwd: root })
  changed = execSync('git diff --cached --name-status', { cwd: root }).toString()
} catch { /* no git */ }
const created = [], modified = []
for (const line of changed.split('\n').filter(Boolean)) {
  const [s, ...p] = line.split('\t')
  const path = p.join(' ')
  if (path.startsWith(`LearnDocuments/Day${nn}/`)) continue
  ;(s.startsWith('A') ? created : modified).push(path)
}

w('README.md', `
# DAY ${nn}

- **Topic:** ${d.title}
- **ReactJS Concept:** ${d.react}
- **Insurance Functionality:** ${d.insurance}
- **Backend Functionality:** ${d.backend ?? 'none'}
- **Database Functionality:** ${d.database ?? 'none'}

## Learning objectives
${list(d.objectives)}

## What I learned
${list(d.learned)}

## Why this approach is used
${d.approach}

## Common mistakes
${list(d.mistakes)}

## Interview questions
${(d.interview ?? []).map(([q, a], i) => `${i + 1}. **${q}**\n   ${a}`).join('\n')}

## Practice task
${d.exercise}

## Next day's topic
${d.next ?? 'See the roadmap'}

## Commit
\`${d.commit}\`
`)

w('Concepts.md', `
# Day ${nn} - Concepts

${(d.concepts ?? []).map((c) => `## ${c.name}\n- **WHY:** ${c.why}\n- **WHAT:** ${c.what}\n- **HOW:** ${c.how}\n- **WHERE (in LearnInsurance):** ${c.where}`).join('\n\n')}
`)

w('Implementation.md', `
# Day ${nn} - Implementation

## What was built
${list(d.built)}

## Code walkthrough
${d.walkthrough ?? ''}

## Architecture changes
${list(d.architecture) || 'None.'}
`)

w('FilesChanged.md', `
# Day ${nn} - Files changed

## Created
${list(created.map((x) => '`' + x + '`')) || '- none'}

## Modified / deleted
${list(modified.map((x) => '`' + x + '`')) || '- none'}
`)

if (d.problems?.length)
  w('ProblemsAndSolutions.md', `# Day ${nn} - Problems and solutions\n\n${d.problems.map(([p, s]) => `### ${p}\n${s}`).join('\n\n')}`)
if (d.api?.length) w('APIChanges.md', `# Day ${nn} - API changes\n\n${list(d.api)}`)
if (d.db?.length) w('DatabaseChanges.md', `# Day ${nn} - Database changes\n\n${list(d.db)}`)

w('ReactConcepts.md', `
# Day ${nn} - ReactJS / TypeScript concepts

## ReactJS
${list(d.reactNotes ?? [d.react])}

## TypeScript
${list(d.tsNotes) || '- (no new TypeScript concept today)'}

## Best practices
${list(d.bestPractices)}
`)

w('LearningNotes.md', `
# Day ${nn} - Learning notes

## Exercise
${d.exercise}

## Exercise hint
${d.hint ?? 'Re-read the code walkthrough and try it yourself before looking at solutions.'}

## Git
- Commit message: \`${d.commit}\`
`)

console.log(`Day ${nn} docs generated (${created.length} created, ${modified.length} modified files)`)
