# CLF-C02 Study Hub

The AWS Student Builder Group at WeThinkCode_ is preparing for the **AWS Certified Cloud Practitioner (CLF-C02)**
exam together, over 12 weeks from 9 October 2026. This repo is what we build on the way:

- **`study-guide/`**: a card for every service and concept on the exam, written by us, each with an exam-style question.
- **`build/`**: the Study Hub website that turns those cards into a searchable guide and a quiz. It grows each week
  with a new AWS service: S3, IAM, Lambda, DynamoDB, CloudWatch, then a cost estimate and a Well-Architected review.

**Live Study Hub:** https://wtc-aws-builders.github.io/clf-c02-study-hub/ (updates on every merge)

## Start here

| | |
| --- | --- |
| 📚 **What do I study?** | [RESOURCES.md](RESOURCES.md): every free course, lab and practice test in one place |
| 🛠️ **First-time setup (15 minutes, once)** | The steps below |
| ✍️ **How do I write a card and open a PR?** | [CONTRIBUTING.md](CONTRIBUTING.md) |
| 🔒 **Before touching AWS** | [SAFETY.md](SAFETY.md) |
| 📌 **This week's task** | The pinned issue in the [Issues tab](../../issues) |

### First-time setup

1. **Accept the invite** to the `wtc-aws-builders` organisation, from your email or at https://github.com/wtc-aws-builders.
2. **Clone the repo** (Git Bash on Windows, Terminal on Linux or Mac):

   ```bash
   git clone https://github.com/wtc-aws-builders/clf-c02-study-hub.git
   cd clf-c02-study-hub
   ```

3. **Check Python works** (the card checker needs it): `python --version` should print 3.9 or newer.
4. **Pick your AWS path:** your own account on the AWS **Free plan**, or **AWS Educate** (email only, no card).
   Either is fine. Details in [SAFETY.md](SAFETY.md).
5. **Bookmark** the [Study Hub](https://wtc-aws-builders.github.io/clf-c02-study-hub/) and [RESOURCES.md](RESOURCES.md).

Every week after that, start by updating your copy: `git switch main && git pull`.

## Every week

1. **Friday:** 1-hour workshop on the week's topic. The week's task is posted as an issue labelled `week`.
2. **During the week:** study the free resources listed in the issue, and claim a card topic in the issue comments.
3. **By Thursday 23:59:** open **one pull request** with:
   - your card: `study-guide/<domain>/<topic>/<your-username>.md`
   - your build log: `build/log/week-XX/<your-username>.md`
4. Review at least one other person's PR. One approval is needed to merge.
5. Fill in the weekly check-in form (link in Teams).

New here? Read [CONTRIBUTING.md](CONTRIBUTING.md), then [SAFETY.md](SAFETY.md) **before** you touch AWS.

## The exam

| Domain | Weight | Folder |
| --- | --- | --- |
| 1 Cloud Concepts | 24% | `study-guide/d1-cloud-concepts` |
| 2 Security and Compliance | 30% | `study-guide/d2-security-compliance` |
| 3 Cloud Technology and Services | 34% | `study-guide/d3-technology-services` |
| 4 Billing, Pricing, and Support | 12% | `study-guide/d4-billing-pricing-support` |

65 questions, 90 minutes, pass mark 700/1000. Official guide:
[AWS Certified Cloud Practitioner (CLF-C02) exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html).

## Run the Hub on your machine

```bash
python build/tools/hub.py check    # the same check CI runs on your PR
python build/tools/hub.py build    # writes build/site/cards.json
cd build/site && python -m http.server 8000
```

Then open http://localhost:8000.

## Rules we keep

- Evidence over screenshots: links, pasted output and code beat pictures.
- No credentials or account IDs in this repo, ever.
- Never share real exam questions. It breaks the AWS certification agreement and gets certificates revoked.
- Progress is private. There are no public leaderboards.
