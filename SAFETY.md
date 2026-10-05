# Safety rules

Every practical in this sprint is designed to cost nothing and leak nothing. These rules make sure it stays that way.

## Week 1, before anything else

1. **Account path.** Either open your own AWS account and choose the **Free plan** at sign-up (credits, no charges,
   lasts 6 months), or use AWS Educate labs, which need only an email address. Both are fine.
   Sign-up for your own account asks for a card even on the Free plan. If that is a problem, tell a lead privately.
2. **MFA on the root user.**
3. **A zero-spend budget** in AWS Budgets with an email alert. You get an email the moment anything costs money.
4. **One region** for every lab, written in your week 1 log. Forgotten resources hide in other regions.

## Week 4 onward

- Stop signing in as root. Use your everyday admin identity (IAM Identity Center user or an IAM user with MFA).

## Never commit

- Access keys or secret keys
- `.env`, `credentials` or anything from `~/.aws/`
- Your 12 digit AWS account ID, real ARNs, or passwords

Use placeholders: `YOUR-BUCKET`, `YOUR-REGION`, `YOUR-ACCOUNT-ID`. The CI check and GitHub push protection
both look for keys, but you are the first line.

**If a key leaks:** deactivate it in IAM straight away, then tell a lead. Deleting the commit is not enough,
because the key is already in the history and bots scan public repos within minutes.

## Every lab

- Each week's issue lists exactly what to delete and when. Most lab resources stay until week 9, then everything goes.
- Week 9 teardown: everything except the budget and your admin identity. The checklist is in `build/docs/teardown.md`.
- A budget alert email is not something to ignore. Check Billing and delete whatever caused it, then tell a lead.

## No card, or would rather not use one?

Every week's issue has a **sandbox or no-account path**: a free AWS Educate lab or a version of the task
that needs no account. It counts exactly the same.
