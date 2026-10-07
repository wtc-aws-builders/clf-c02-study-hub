# Leads' question bank: Domain 4 Billing, Pricing, and Support (12% of the exam)

Seed questions written by the leads so the Study Hub quiz has a strong start. Every question is original and
based only on public AWS information; each one links the AWS page it was checked against.
These are NOT real exam questions. Never add real exam questions, reworded exam questions or dump-site
content here (see the exam integrity section of the README).

Spot a mistake? Open a PR that fixes it and links the AWS source.

## D4-01: On-Demand Instances

- Task statement: 4.1

A team is testing a new application for two weeks and has no idea how much compute it will need. Which EC2 purchasing option fits best?

- A) Reserved Instances with a 3-year term
- B) Dedicated Hosts
- C) On-Demand Instances
- D) A 3-year Compute Savings Plan

Answer: C

Why: On-Demand has no commitment, which suits short-term or unpredictable workloads.

Source: https://aws.amazon.com/ec2/pricing/on-demand/

## D4-02: Reserved Instances

- Task statement: 4.1

A company runs a database server 24/7 and will keep it for at least three years. Which EC2 option reduces cost the most compared with On-Demand?

- A) On-Demand Instances
- B) Reserved Instances with a 3-year term
- C) Spot Instances
- D) Dedicated Instances

Answer: B

Why: Reserved Instances give a large discount for a 1- or 3-year commitment on steady usage. Spot can be interrupted, which a database cannot accept.

Source: https://aws.amazon.com/ec2/pricing/reserved-instances/

## D4-03: Spot Instances

- Task statement: 4.1

A company runs image-processing jobs that can stop and restart at any time without problems. Which option offers the biggest discount?

- A) On-Demand Instances
- B) Reserved Instances
- C) Spot Instances
- D) Dedicated Hosts

Answer: C

Why: Spot uses spare EC2 capacity at up to 90% off On-Demand, but AWS can reclaim it with a two-minute warning.

Source: https://aws.amazon.com/ec2/spot/

## D4-04: Compute Savings Plans

- Task statement: 4.1

A company commits to a steady amount of compute spend per hour for 1 year and wants the discount to apply across Amazon EC2, AWS Fargate and AWS Lambda. Which option fits?

- A) Spot Instances
- B) EC2 Instance Savings Plans
- C) Standard Reserved Instances
- D) Compute Savings Plans

Answer: D

Why: Compute Savings Plans apply flexibly across EC2, Fargate and Lambda. EC2 Instance Savings Plans and RIs are tied to EC2.

Source: https://aws.amazon.com/savingsplans/

## D4-05: Dedicated Hosts

- Task statement: 4.1

A company must use existing software licenses that are bound to physical servers, and needs visibility of the physical cores. Which option fits?

- A) On-Demand Instances
- B) Dedicated Hosts
- C) AWS Lambda
- D) Spot Instances

Answer: B

Why: Dedicated Hosts give you a whole physical server, which supports server-bound licenses.

Source: https://aws.amazon.com/ec2/dedicated-hosts/

## D4-06: Capacity Reservations

- Task statement: 4.1

A company needs guaranteed EC2 capacity in a specific Availability Zone for a launch event next month, without a 1-year or 3-year commitment. Which option fits?

- A) A 3-year Standard Reserved Instance
- B) Dedicated Hosts with a 3-year reservation
- C) Spot Instances
- D) On-Demand Capacity Reservations

Answer: D

Why: Capacity Reservations reserve capacity in an AZ for any duration, without a long-term term commitment.

Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html

## D4-07: Data transfer costs

- Task statement: 4.1

Which type of data transfer is generally free on AWS?

- A) Data transferred out from EC2 to the internet
- B) Data transferred in to AWS from the internet
- C) Data transferred between AWS Regions
- D) Data transferred out through a NAT gateway to the internet

Answer: B

Why: Inbound data from the internet is generally not charged. Outbound to the internet and between Regions is charged.

Source: https://aws.amazon.com/ec2/pricing/on-demand/

## D4-08: AWS Budgets

- Task statement: 4.2

A student wants an email alert as soon as their AWS costs go above USD 1 this month. Which service should they use?

- A) AWS Cost and Usage Report
- B) AWS Budgets
- C) AWS Pricing Calculator
- D) AWS Cost Explorer

Answer: B

Why: Budgets sends alerts when cost or usage crosses a threshold. Cost Explorer is for analysing spend.

Source: https://aws.amazon.com/aws-cost-management/aws-budgets/

## D4-09: AWS Cost Explorer

- Task statement: 4.2

A manager wants to see a chart of the last six months of AWS spend by service and a forecast for next month. Which tool fits?

- A) AWS Budgets
- B) AWS Cost Explorer
- C) AWS Artifact
- D) AWS Pricing Calculator

Answer: B

Why: Cost Explorer visualizes historical costs and usage and forecasts future spend.

Source: https://aws.amazon.com/aws-cost-management/aws-cost-explorer/

## D4-10: AWS Pricing Calculator

- Task statement: 4.2

Before building anything, a team wants an estimate of what a new architecture on AWS will cost each month. Which tool fits?

- A) AWS Cost Explorer
- B) AWS Pricing Calculator
- C) AWS Trusted Advisor
- D) AWS Budgets

Answer: B

Why: The Pricing Calculator estimates costs for planned architectures, and you do not need an AWS account to use it.

Source: https://calculator.aws/

## D4-11: Consolidated billing

- Task statement: 4.2

A company has 12 AWS accounts and wants one bill, with usage combined so it reaches volume pricing tiers sooner. What should it use?

- A) Cost allocation tags
- B) Consolidated billing in AWS Organizations
- C) AWS Budgets
- D) AWS Cost Explorer

Answer: B

Why: Consolidated billing combines accounts into one bill and aggregates usage for volume discounts.

Source: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html

## D4-12: Cost allocation tags

- Task statement: 4.2

A company wants to see its AWS costs broken down by project, using labels it applies to resources. What should it use?

- A) Security groups
- B) Service control policies
- C) Cost allocation tags
- D) AWS Artifact

Answer: C

Why: Activated cost allocation tags let you group and filter costs by your own labels, such as project or team.

Source: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html

## D4-13: AWS Cost and Usage Report

- Task statement: 4.2

Which source provides the most detailed, line-item data about AWS costs and usage for analysis in tools like Athena?

- A) AWS Cost and Usage Report
- B) AWS Pricing Calculator
- C) AWS Budgets
- D) AWS Health Dashboard

Answer: A

Why: The Cost and Usage Report is the most comprehensive cost and usage data AWS provides.

Source: https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html

## D4-14: Basic Support

- Task statement: 4.3

Which AWS Support plan is included for every AWS account at no additional cost?

- A) Basic Support
- B) AWS Unified Operations
- C) AWS Business Support+
- D) AWS Enterprise Support

Answer: A

Why: Basic Support comes with every account and includes customer service, documentation, AWS re:Post and some Trusted Advisor checks.

Source: https://aws.amazon.com/premiumsupport/plans/

## D4-15: AWS Health Dashboard

- Task statement: 4.3

Where can a customer see AWS service events and scheduled maintenance that affect their own resources?

- A) AWS Marketplace
- B) AWS Health Dashboard
- C) AWS Cost Explorer
- D) AWS Artifact

Answer: B

Why: The AWS Health Dashboard shows service health and events that affect your account's resources.

Source: https://aws.amazon.com/premiumsupport/technology/aws-health-dashboard/

## D4-16: AWS re:Post

- Task statement: 4.3

A student has a question about configuring Amazon S3 and wants answers from the AWS community and AWS experts for free. Where should they ask?

- A) AWS Professional Services
- B) AWS Marketplace
- C) AWS Artifact
- D) AWS re:Post

Answer: D

Why: re:Post is AWS's community Q&A site, available to everyone.

Source: https://repost.aws/

## D4-17: AWS Partner Network

- Task statement: 4.3

A company wants to hire a consulting firm that specializes in AWS to help with its migration. Where can it find one?

- A) Amazon Connect
- B) AWS Health Dashboard
- C) AWS Partner Network (APN)
- D) AWS Artifact

Answer: C

Why: The AWS Partner Network includes consulting partners (system integrators) and independent software vendors.

Source: https://aws.amazon.com/partners/

## D4-18: AWS Marketplace

- Task statement: 4.3

A company wants to buy third-party software that runs on AWS and pay for it on its AWS bill. Where should it look?

- A) AWS Artifact
- B) AWS Partner Network
- C) AWS Marketplace
- D) AWS Pricing Calculator

Answer: C

Why: AWS Marketplace is a catalog of third-party software and services, billed through AWS.

Source: https://aws.amazon.com/marketplace/

## D4-19: Trusted Advisor cost checks

- Task statement: 4.3

Which service can recommend cost savings, such as flagging idle or underused resources in an account?

- A) AWS CloudTrail
- B) AWS Trusted Advisor
- C) AWS Artifact
- D) Amazon Inspector

Answer: B

Why: Trusted Advisor gives recommendations in categories including cost optimization, security, fault tolerance, performance and service limits.

Source: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

## D4-20: AWS Prescriptive Guidance

- Task statement: 4.3

A team wants AWS-vetted strategies, guides and patterns for migrating and modernizing workloads. Which resource fits?

- A) AWS Artifact
- B) AWS Cost Explorer
- C) AWS Prescriptive Guidance
- D) Amazon CloudWatch

Answer: C

Why: AWS Prescriptive Guidance publishes vetted strategies, guides and patterns for common cloud projects.

Source: https://aws.amazon.com/prescriptive-guidance/

## D4-21: AWS Professional Services

- Task statement: 4.3

A large company wants a team of AWS experts to work alongside its staff on a major cloud project. Which AWS offering fits?

- A) Basic Support
- B) AWS Marketplace
- C) AWS re:Post
- D) AWS Professional Services

Answer: D

Why: AWS Professional Services is a global team of AWS experts who help customers deliver cloud projects.

Source: https://aws.amazon.com/professional-services/

## D4-22: Technical resources

- Task statement: 4.3

Where can a learner find in-depth AWS documents on topics like the Well-Architected Framework and pricing, written by AWS?

- A) AWS Artifact
- B) AWS Health Dashboard
- C) AWS Cost and Usage Report
- D) AWS Whitepapers and Guides

Answer: D

Why: AWS publishes free whitepapers and guides covering architecture, security, pricing and more.

Source: https://aws.amazon.com/whitepapers/
