// Usage: node LearnDocuments/tools/commit-day.mjs <n>
// End-of-day helper: generate docs, refresh GitHistory.md, commit.
import { execSync } from 'node:child_process'
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..', '..')
const n = Number(process.argv[2])
const run = (c) => execSync(c, { cwd: root, stdio: ['ignore', 'pipe', 'inherit'] }).toString()

// Optional extra args = only these paths belong to this day (others stay unstaged for later days).
const paths = process.argv.slice(3)
const partial = paths.length > 0
if (partial) run(`git add -- ${paths.map((p) => `"${p}"`).join(' ')}`)
execSync(`node "${join(here, 'gen-day.mjs')}" ${n}`, {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, ...(partial ? { PARTIAL_STAGE: '1' } : {}) },
})

const days = {}
for (const f of readdirSync(join(here, 'days')).filter((x) => x.endsWith('.mjs')))
  Object.assign(days, (await import(pathToFileURL(join(here, 'days', f)).href)).default)

let log = ''
try { log = run('git log --pretty=format:"%h|%ad|%s" --date=short') } catch { /* first commit */ }
const rows = log.split('\n').filter(Boolean).map((l) => l.split('|'))
writeFileSync(
  join(root, 'LearnDocuments', 'GitHistory.md'),
  `# Git history\n\n| Commit | Date | Message |\n|---|---|---|\n${rows.map((r) => `| ${r[0]} | ${r[1]} | ${r.slice(2).join('|')} |`).join('\n')}\n`,
)
if (partial) run(`git add -- LearnDocuments`)
else run('git add -A')
const msg = days[n].commit
const body = 'Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>'
writeFileSync(join(root, '.git', 'COMMIT_MSG_TMP'), `${msg}\n\n${body}\n`)
run('git commit -q -F .git/COMMIT_MSG_TMP')
console.log(run('git log -1 --pretty=format:"%h %s"'))
