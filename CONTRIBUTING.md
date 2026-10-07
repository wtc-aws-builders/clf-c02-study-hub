# Contributing

## Your weekly pull request

```bash
git clone https://github.com/wtc-aws-builders/clf-c02-study-hub.git
cd clf-c02-study-hub
git switch -c <your-username>/week-03
```

**1. Claim a topic.** Comment on the week's issue: `Claiming: Amazon S3`. If three people have already claimed it, pick another.

**2. Write your card.** Copy the template into the right domain folder:

```bash
mkdir -p study-guide/d3-technology-services/amazon-s3
cp study-guide/_template.md study-guide/d3-technology-services/amazon-s3/<your-username>.md
```

The topic folder is the topic name in lowercase with hyphens (`amazon-s3`, `security-groups-vs-network-acls`).
The file name is your GitHub username, so nobody's work collides with anyone else's.

**3. Write your build log.**

```bash
mkdir -p build/log/week-03
cp build/log/_template.md build/log/week-03/<your-username>.md
```

**4. Check it, commit, push.**

```bash
python build/tools/hub.py check
git add study-guide build/log
git commit -m "Add Amazon S3 card and week 3 build log"
git push -u origin <your-username>/week-03
```

**5. Open the PR** with the template filled in, and ask someone to review it.

## What makes a good card

- **Original and AWS-based only.** Your question is written by you from AWS documentation. **Never** use real exam
  questions (word for word, reworded or remembered), exam dump sites or paid practice tests. Doing so breaks the
  AWS Certification Program Agreement and can get certificates revoked. See the README's exam integrity section.
- **Your own words.** Copying from AWS pages teaches you nothing and makes a worse study guide.
- **Short.** Two or three sentences per section. The exam tests recognition, not essays.
- **A real exam-style question.** A short scenario, four believable options, one clear answer.
  Wrong answers should be real AWS services that someone might pick.
- **A source.** Link the AWS page you checked your answer against.

## Reviewing (this is half the learning)

Every PR needs **one approval** before it can merge. Review at least one PR for every PR you open.

- Is the answer to the question actually right? Check it against the source link.
- Does the question look copied from a real exam, a dump site or a paid practice test? If so, request changes and tell a lead.
- Is the source an AWS page (docs.aws.amazon.com, aws.amazon.com and similar)? Blogs and forums are not enough.
- Is any option ambiguous, so two answers could be right?
- Does "Easily confused with" name a real confusion?
- Any keys, passwords or 12 digit account IDs? Request changes straight away.
- Be kind and specific: "Option C is also correct because..." beats "wrong".

If you push changes after an approval, the approval is cleared and someone has to approve again.

## CI checks

A GitHub Action runs `python build/tools/hub.py check` on every PR. It fails if:

- a card is missing a section, an answer, a "Why" or an AWS source link
- a new card or log is not named after the PR author
- anything looks like an access key or an account ID

Run the same command before you push and you will never be surprised.

## Week 11: improving other people's cards

In week 11 you edit cards written by others. That is the one time you change files that are not yours.
Explain each fix in the PR description and link the source.
