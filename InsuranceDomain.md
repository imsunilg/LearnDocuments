# General insurance – the domain in this app

## Vocabulary

| Term | Meaning | Where in the app |
|---|---|---|
| Customer / proposer | Person or business buying cover; KYC verified with ID and address proof | Customers, Documents |
| Product / product line | Motor, Health, Home, Travel; each has plans and its own rating rules | Products, `product_field_config` |
| Proposal | The application: insured details + quote. Draft → Submitted → Under Review → Approved / Rejected | Proposal wizard |
| Premium | Price of cover: base + add-ons − discounts + GST (18%) | `fn_premium_calculate` → `fn_premium_<type>` |
| Sum insured / IDV | Maximum payable; for motor, IDV = Insured Declared Value (ex-showroom price depreciated by age) | Motor quote |
| NCB | No Claim Bonus: discount on own-damage premium for claim-free years (20/25/35/45/50%) | Motor, Renewals |
| Policy | The issued contract with period, premium, certificate and status | Policies |
| Endorsement | A mid-term change (address, nominee, vehicle details); some need underwriter approval | Endorsements |
| Renewal | New term before expiry; NCB steps up if no claim was made | Renewals |
| Claim | Request for payment after a loss: Intimated → Under Review ⇄ Documents Pending → Approved → Settled; Rejected / Withdrawn end it | Claims |
| Agent / broker | Intermediaries who sell policies and earn commission | Agents, Brokers |
| Underwriting | Deciding whether and on what terms to accept the risk | Proposal decision (`proposals.edit`/Underwriter role) |

## Lifecycle

```
Customer ─▶ Quote (premium engine) ─▶ Proposal ─▶ Underwriter decision ─▶ Policy issued ─▶ Payment & receipt
                                                                              │
                         Renewal ◀── expiry approaching ◀── Endorsements ◀───┤
                                                                              └─▶ Claim ─▶ review ─▶ approve/reject ─▶ settle
```

## Business rules implemented (examples)

* A claim must fall inside the policy period, not exceed the sum insured, and its type must match the product line (e.g. *Own damage* only on motor).
* Claim approval needs `claims.approve`; an approved amount cannot exceed the claimed amount or the sum insured.
* Payments: a policy is *Paid* when successful payments cover the total premium; amount cannot exceed the premium due; retries link to the failed attempt; refunds need `payments.refund`.
* Issuing a policy needs `policies.issue` and an approved proposal; the policy end date is start + 1 year − 1 day.
* Renewal quotes recompute premium with the stepped-up NCB (only if no claim in the term).

## Roles (seeded)

| Role | Typical capabilities |
|---|---|
| Admin | everything, including users, roles, audit log, perf lab |
| Underwriter | proposals decision, issue policies, endorsement approval, renewals, reports |
| Agent | customers, proposals, payments (create), claims intimation, documents upload |
| ClaimsOfficer | claims review/approve/settle, documents, read policies |
| Viewer | read-only (can view reports) |

Demo logins: `admin / Admin@123`; `underwriter`, `agent`, `claims`, `viewer` / `Pass@123`.
