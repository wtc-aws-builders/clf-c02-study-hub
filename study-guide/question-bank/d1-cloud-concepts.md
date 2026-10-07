# Leads' question bank: Domain 1 Cloud Concepts (24% of the exam)

Seed questions written by the leads so the Study Hub quiz has a strong start. Every question is original and
based only on public AWS information; each one links the AWS page it was checked against.
These are NOT real exam questions. Never add real exam questions, reworded exam questions or dump-site
content here (see the exam integrity section of the README).

Spot a mistake? Open a PR that fixes it and links the AWS source.

## D1-01: Go global in minutes

- Task statement: 1.1

A start-up in Johannesburg wants to launch its app for customers in Europe and Asia next week, with low latency for each region. Which benefit of the AWS Cloud makes this practical?

- A) Stop spending money on running data centers
- B) Benefit from massive economies of scale
- C) Trade fixed expense for variable expense
- D) Go global in minutes

Answer: D

Why: AWS Regions around the world let you deploy close to users in minutes. The other options are real benefits but are about cost, not reach.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-02: Stop guessing capacity

- Task statement: 1.1

An online shop over-buys servers every year to survive Black Friday, and they sit idle the rest of the year. Which cloud benefit addresses this most directly?

- A) Benefit from massive economies of scale
- B) Increase speed and agility
- C) Go global in minutes
- D) Stop guessing capacity

Answer: D

Why: In the cloud you scale up for the peak and back down afterwards, so you no longer have to guess and buy for the worst case.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-03: Speed and agility

- Task statement: 1.1

Developers used to wait three weeks for a test server. On AWS they create one in a few minutes. Which benefit does this describe?

- A) Increase speed and agility
- B) Stop guessing capacity
- C) Go global in minutes
- D) Trade fixed expense for variable expense

Answer: A

Why: Getting resources in minutes instead of weeks means teams experiment and deliver faster. That is speed and agility.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-04: Focus on the business

- Task statement: 1.1

A company wants its IT staff to spend less time racking, powering and cooling servers, and more time building features for customers. Which benefit of the AWS Cloud fits?

- A) Benefit from massive economies of scale
- B) Go global in minutes
- C) Stop guessing capacity
- D) Stop spending money running and maintaining data centers

Answer: D

Why: AWS runs the physical data centers, so the company can focus on its own customers instead of undifferentiated heavy lifting.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-05: Elasticity

- Task statement: 1.1

Which statement best describes elasticity in the AWS Cloud?

- A) Paying a lower price per unit as usage grows
- B) Automatically adding resources when demand rises and removing them when it falls
- C) Running the same application in every Availability Zone
- D) Keeping data in at least two Regions at all times

Answer: B

Why: Elasticity is about matching resources to demand in both directions. Lower unit prices with volume is economies of scale.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-06: High availability

- Task statement: 1.1

A company wants its web application to keep running if a single data center fails. Which AWS approach supports this?

- A) Deploy the application across multiple Availability Zones in a Region
- B) Buy Reserved Instances for the application
- C) Deploy the application on a larger EC2 instance
- D) Store the application code in Amazon S3

Answer: A

Why: Availability Zones are isolated from each other, so running in more than one keeps the app up if one AZ has a problem. Bigger instances do not remove the single point of failure.

Source: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

## D1-07: Economies of scale

- Task statement: 1.1

Why can AWS offer lower pay-as-you-go prices over time?

- A) AWS only runs data centers in low-cost countries
- B) Usage from many customers is aggregated, so AWS achieves higher economies of scale
- C) Customers sign long contracts before using any service
- D) Customers maintain the physical hardware themselves

Answer: B

Why: Because AWS serves a very large number of customers, it buys and runs infrastructure more cheaply and passes savings on as lower prices.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-08: Reliability pillar

- Task statement: 1.2

Which pillar of the AWS Well-Architected Framework focuses on a workload performing its intended function correctly and recovering quickly from failure?

- A) Security
- B) Reliability
- C) Performance efficiency
- D) Operational excellence

Answer: B

Why: Reliability covers recovering from failures and meeting demand. Performance efficiency is about using resources efficiently.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-09: Performance efficiency pillar

- Task statement: 1.2

A team chooses the right instance types and reviews them as demand and technology change, so the workload stays fast without waste. Which Well-Architected pillar is this?

- A) Reliability
- B) Cost optimization
- C) Performance efficiency
- D) Sustainability

Answer: C

Why: Performance efficiency is about using computing resources efficiently to meet requirements as demand and technologies change.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-10: Sustainability pillar

- Task statement: 1.2

Which Well-Architected pillar focuses on minimizing the environmental impact of running cloud workloads?

- A) Performance efficiency
- B) Cost optimization
- C) Sustainability
- D) Operational excellence

Answer: C

Why: Sustainability is the sixth pillar and focuses on reducing energy use and environmental impact.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-11: Cost optimization pillar

- Task statement: 1.2

Turning off development servers at night and deleting unused storage are examples of which Well-Architected pillar?

- A) Operational excellence
- B) Sustainability
- C) Reliability
- D) Cost optimization

Answer: D

Why: Cost optimization is about avoiding unnecessary costs. It can also help sustainability, but the main goal described here is cost.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-12: Operational excellence pillar

- Task statement: 1.2

Which Well-Architected pillar includes the design principle 'perform operations as code'?

- A) Security
- B) Performance efficiency
- C) Reliability
- D) Operational excellence

Answer: D

Why: Operational excellence is about running and monitoring systems and improving processes, including defining operations as code.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-13: Security pillar

- Task statement: 1.2

'Apply security at all layers' and 'enable traceability' are design principles of which Well-Architected pillar?

- A) Reliability
- B) Security
- C) Cost optimization
- D) Operational excellence

Answer: B

Why: Both are Security pillar design principles: defence in depth and logging who did what.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-14: Reliability design principle

- Task statement: 1.2

Which design principle belongs to the Reliability pillar?

- A) Perform operations as code
- B) Implement cloud financial management
- C) Automatically recover from failure
- D) Go global in minutes

Answer: C

Why: Automatically recovering from failure is a Reliability principle. Operations as code is Operational excellence, and cloud financial management is Cost optimization.

Source: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html

## D1-15: AWS Well-Architected Tool

- Task statement: 1.2

A team wants to review an existing workload against AWS best practices and get a list of improvement items. Which AWS service should they use?

- A) AWS Well-Architected Tool
- B) AWS Trusted Advisor
- C) Amazon Inspector
- D) AWS Config

Answer: A

Why: The Well-Architected Tool walks you through questions for each pillar and records risks and improvement plans for a workload.

Source: https://aws.amazon.com/well-architected-tool/

## D1-16: Six pillars

- Task statement: 1.2

Which list contains only pillars of the AWS Well-Architected Framework?

- A) Cost optimization, Availability, Compliance
- B) Security, Reliability, Sustainability
- C) Reliability, Scalability, Durability
- D) Security, Elasticity, Agility

Answer: B

Why: The six pillars are Operational excellence, Security, Reliability, Performance efficiency, Cost optimization and Sustainability.

Source: https://aws.amazon.com/architecture/well-architected/

## D1-17: AWS CAF People perspective

- Task statement: 1.3

Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on culture, organizational structure, leadership and training staff for the cloud?

- A) Security
- B) Platform
- C) Operations
- D) People

Answer: D

Why: The People perspective bridges technology and business and helps the organization evolve its culture and skills.

Source: https://aws.amazon.com/cloud-adoption-framework/

## D1-18: AWS CAF Business perspective

- Task statement: 1.3

Which AWS CAF perspective helps ensure cloud investments accelerate the company's digital transformation and business outcomes?

- A) Platform
- B) Business
- C) People
- D) Governance

Answer: B

Why: The Business perspective connects cloud investment to business outcomes.

Source: https://aws.amazon.com/cloud-adoption-framework/

## D1-19: AWS CAF Governance perspective

- Task statement: 1.3

Which AWS CAF perspective helps orchestrate cloud initiatives while maximizing benefits and minimizing transformation risk, including cloud financial management?

- A) Business
- B) Security
- C) Governance
- D) Operations

Answer: C

Why: Governance covers program management, benefits, risk and cloud financial management.

Source: https://aws.amazon.com/cloud-adoption-framework/

## D1-20: AWS CAF perspectives

- Task statement: 1.3

Which TWO are perspectives of the AWS Cloud Adoption Framework? (Choose two.)

- A) Operations
- B) Migration
- C) Elasticity
- D) Platform
- E) Pricing

Answer: D, A

Why: The six perspectives are Business, People, Governance, Platform, Security and Operations.

Source: https://aws.amazon.com/cloud-adoption-framework/

## D1-21: Rehost

- Task statement: 1.3

A company moves its application servers to Amazon EC2 without changing the application, to exit its data center quickly. Which migration strategy is this?

- A) Repurchase
- B) Retire
- C) Refactor
- D) Rehost

Answer: D

Why: Rehost ('lift and shift') moves an application as it is. Refactor would change its architecture.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-22: Replatform

- Task statement: 1.3

A team moves its self-managed MySQL database to Amazon RDS for MySQL, making a few changes but keeping the core application the same. Which migration strategy is this?

- A) Replatform
- B) Refactor
- C) Retain
- D) Rehost

Answer: A

Why: Replatform ('lift, tinker and shift') makes small optimizations, like moving to a managed database, without rewriting the app.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-23: Refactor

- Task statement: 1.3

A company rewrites a large monolithic application into serverless microservices to gain agility and scale. Which migration strategy is this?

- A) Rehost
- B) Refactor
- C) Replatform
- D) Relocate

Answer: B

Why: Refactoring (re-architecting) changes how the application is built, usually to use cloud-native features.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-24: Repurchase

- Task statement: 1.3

A company replaces its self-hosted CRM with a software-as-a-service (SaaS) CRM. Which migration strategy is this?

- A) Rehost
- B) Replatform
- C) Repurchase
- D) Retain

Answer: C

Why: Repurchase means moving to a different product, often SaaS, instead of migrating the old one.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-25: Retire

- Task statement: 1.3

During migration planning, a company finds applications that nobody uses any more and decides to switch them off. Which strategy is this?

- A) Rehost
- B) Retire
- C) Repurchase
- D) Retain

Answer: B

Why: Retire means decommissioning what is no longer needed, which also reduces the migration effort.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-26: Retain

- Task statement: 1.3

An application must stay on premises for now because of a recent hardware investment. Which migration strategy describes this decision?

- A) Relocate
- B) Rehost
- C) Retain
- D) Retire

Answer: C

Why: Retain means keeping the application where it is for now and revisiting later.

Source: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html

## D1-27: Benefits of migration

- Task statement: 1.3

According to the AWS CAF, which is a business outcome of moving to the AWS Cloud?

- A) Improved environmental, social and governance (ESG) performance
- B) Higher fixed IT costs
- C) More manual operational work
- D) Longer hardware procurement cycles

Answer: A

Why: AWS CAF lists reduced business risk, improved ESG performance, increased revenue and increased operational efficiency.

Source: https://aws.amazon.com/cloud-adoption-framework/

## D1-28: Variable expense

- Task statement: 1.4

A company pays only for the compute and storage it uses each month, instead of buying servers up front. What type of cost model is this?

- A) Variable expense
- B) Capital expense
- C) Sunk cost
- D) Fixed expense

Answer: A

Why: Pay-as-you-go turns large up-front (fixed, capital) costs into variable costs that follow usage.

Source: https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html

## D1-29: Rightsizing

- Task statement: 1.4

A review shows many EC2 instances run at under 10% CPU all day. Moving them to smaller instance types is an example of what?

- A) Bring your own license
- B) Rightsizing
- C) Economies of scale
- D) Elasticity

Answer: B

Why: Rightsizing matches instance types and sizes to actual workload needs at the lowest cost.

Source: https://aws.amazon.com/aws-cost-management/aws-cost-optimization/right-sizing/

## D1-30: Bring your own license

- Task statement: 1.4

A company already owns licenses for some commercial software and wants to use them on AWS instead of paying for license-included instances. What is this called?

- A) Savings Plans
- B) Bring your own license (BYOL)
- C) Consolidated billing
- D) AWS Marketplace subscription

Answer: B

Why: BYOL lets you use eligible existing licenses on AWS. License-included pricing bundles the license cost into the hourly price.

Source: https://aws.amazon.com/windows/resources/licensing/

## D1-31: On-premises costs

- Task statement: 1.4

Which cost does a company typically stop paying directly after moving its workloads to the AWS Cloud?

- A) Developer salaries for application code
- B) Power and cooling for its own data center
- C) Licenses for its own business applications
- D) The cost of designing its database schema

Answer: B

Why: AWS runs the physical facilities, so data center power, cooling and physical security become part of the service price.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

## D1-32: Automation savings

- Task statement: 1.4

How does automation in the AWS Cloud help reduce costs?

- A) It removes the need to pay for compute
- B) It reduces manual work and errors, for example by scheduling non-production resources to stop when not needed
- C) It lets AWS manage the customer's application code
- D) It makes every service free for the first year

Answer: B

Why: Automating routine tasks cuts staff time and mistakes, and switching resources off automatically avoids paying for idle capacity.

Source: https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html

## D1-33: Total cost of ownership

- Task statement: 1.4

A company is comparing the cost of on premises with AWS. Which costs should be included for the on-premises side to make a fair comparison? (Choose two.)

- A) The AWS Free Tier
- B) Data center power and cooling
- C) AWS Support plan discounts
- D) Staff time spent maintaining hardware
- E) Amazon S3 storage class names

Answer: B, D

Why: A fair total cost of ownership comparison includes hidden on-premises costs like facilities, power, cooling and staff time, not only server prices.

Source: https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html
