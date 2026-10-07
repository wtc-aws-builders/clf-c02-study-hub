# Leads' question bank: Domain 2 Security and Compliance (30% of the exam)

Seed questions written by the leads so the Study Hub quiz has a strong start. Every question is original and
based only on public AWS information; each one links the AWS page it was checked against.
These are NOT real exam questions. Never add real exam questions, reworded exam questions or dump-site
content here (see the exam integrity section of the README).

Spot a mistake? Open a PR that fixes it and links the AWS source.

## D2-01: Shared responsibility: EC2

- Task statement: 2.1

A company runs its application on Amazon EC2. Under the shared responsibility model, which task is the company's responsibility?

- A) Securing the data center building
- B) Patching the guest operating system on the instances
- C) Maintaining the physical servers
- D) Patching the hypervisor

Answer: B

Why: With EC2 (infrastructure as a service) the customer manages the guest OS, its patches and everything above it. AWS secures the hardware, hypervisor and facilities.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-02: Shared responsibility: AWS

- Task statement: 2.1

Which is AWS's responsibility under the shared responsibility model?

- A) Physical security of the data centers
- B) Configuring security groups
- C) Creating IAM users with least privilege
- D) Encrypting customer data

Answer: A

Why: AWS is responsible for security OF the cloud, including facilities and hardware. Customers are responsible for security IN the cloud.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-03: Shared responsibility: managed database

- Task statement: 2.1

A company moves from a database on EC2 to Amazon RDS. Which responsibility moves from the customer to AWS?

- A) Managing database user permissions
- B) Patching the database engine and the underlying operating system
- C) Controlling who can connect to the database
- D) Deciding which data to store

Answer: B

Why: With a managed service like RDS, AWS patches the OS and database software. The customer still controls access and data.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-04: Shared responsibility: Lambda

- Task statement: 2.1

For an AWS Lambda function, which is the customer responsible for?

- A) The function code and the permissions it is given
- B) Patching the operating system the function runs on
- C) Maintaining the language runtime hardware
- D) Scaling the servers that run the function

Answer: A

Why: With serverless, AWS runs and patches the infrastructure and runtime. The customer owns their code, data and IAM permissions.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-05: Shared controls

- Task statement: 2.1

Which is a shared control between AWS and the customer?

- A) Patch management
- B) Physical security of data centers
- C) Customer data classification
- D) Environmental controls like cooling

Answer: A

Why: AWS lists patch management, configuration management, and awareness and training as shared controls. Each side handles its own part.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-06: Shared responsibility: network rules

- Task statement: 2.1

Who is responsible for configuring the security groups that control traffic to Amazon EC2 instances?

- A) The AWS Partner who built the account
- B) The customer
- C) AWS
- D) Both AWS and the customer jointly approve each rule

Answer: B

Why: Security groups are customer-configured firewall rules, part of security IN the cloud.

Source: https://aws.amazon.com/compliance/shared-responsibility-model/

## D2-07: AWS Artifact

- Task statement: 2.2

An auditor asks for AWS's SOC and ISO compliance reports. Where can the company download them?

- A) Amazon Inspector
- B) AWS Artifact
- C) AWS Security Hub
- D) AWS Config

Answer: B

Why: AWS Artifact is the self-service portal for AWS compliance reports and agreements.

Source: https://aws.amazon.com/artifact/

## D2-08: AWS CloudTrail

- Task statement: 2.2

A security team needs to find out which user deleted an S3 bucket yesterday and from which IP address. Which service records this?

- A) Amazon CloudWatch
- B) AWS Config
- C) Amazon GuardDuty
- D) AWS CloudTrail

Answer: D

Why: CloudTrail records API calls: who made them, when and from where. CloudWatch is metrics and logs; Config tracks resource configuration.

Source: https://aws.amazon.com/cloudtrail/

## D2-09: AWS Config

- Task statement: 2.2

A company wants to record how its resource configurations change over time and check them against rules, such as 'all EBS volumes must be encrypted'. Which service should it use?

- A) AWS CloudTrail
- B) AWS Config
- C) Amazon CloudWatch
- D) AWS Artifact

Answer: B

Why: AWS Config records configuration history and evaluates resources against compliance rules.

Source: https://aws.amazon.com/config/

## D2-10: Amazon CloudWatch

- Task statement: 2.2

Which service collects metrics such as EC2 CPU utilization and can send an alarm when a threshold is crossed?

- A) Amazon CloudWatch
- B) AWS CloudTrail
- C) AWS Trusted Advisor
- D) AWS Config

Answer: A

Why: CloudWatch monitors metrics and logs and raises alarms. CloudTrail is about API activity, not performance.

Source: https://aws.amazon.com/cloudwatch/

## D2-11: Amazon GuardDuty

- Task statement: 2.2

Which service continuously analyzes sources like CloudTrail events, VPC Flow Logs and DNS logs to detect threats such as compromised credentials?

- A) AWS Shield
- B) Amazon Macie
- C) Amazon Inspector
- D) Amazon GuardDuty

Answer: D

Why: GuardDuty is intelligent threat detection. Inspector scans for software vulnerabilities; Macie finds sensitive data.

Source: https://aws.amazon.com/guardduty/

## D2-12: Amazon Inspector

- Task statement: 2.2

A company wants automated scanning of its EC2 instances and container images for known software vulnerabilities. Which service should it use?

- A) Amazon Inspector
- B) Amazon GuardDuty
- C) AWS Config
- D) AWS WAF

Answer: A

Why: Amazon Inspector is automated vulnerability management for workloads like EC2, container images and Lambda.

Source: https://aws.amazon.com/inspector/

## D2-13: AWS Security Hub

- Task statement: 2.2

A company wants one place to see security findings from GuardDuty, Inspector and Macie across its accounts, and check them against best-practice standards. Which service fits?

- A) AWS Artifact
- B) Amazon CloudWatch
- C) AWS Security Hub
- D) AWS Trusted Advisor

Answer: C

Why: Security Hub aggregates and prioritizes security findings and runs security standard checks.

Source: https://aws.amazon.com/security-hub/

## D2-14: Encryption at rest

- Task statement: 2.2

Which service helps a company create and control the encryption keys used to encrypt data at rest across AWS services?

- A) AWS Secrets Manager
- B) Amazon Macie
- C) AWS Key Management Service (AWS KMS)
- D) AWS Certificate Manager

Answer: C

Why: KMS creates and manages encryption keys used by services like S3 and EBS. ACM manages TLS certificates for data in transit.

Source: https://aws.amazon.com/kms/

## D2-15: Encryption in transit

- Task statement: 2.2

A company wants free public TLS certificates for its website on AWS so that data is encrypted in transit. Which service provides them?

- A) Amazon Inspector
- B) AWS KMS
- C) AWS Certificate Manager (ACM)
- D) AWS Shield

Answer: C

Why: ACM provisions and manages SSL/TLS certificates used to encrypt traffic in transit.

Source: https://aws.amazon.com/certificate-manager/

## D2-16: Amazon Macie

- Task statement: 2.2

Which service uses machine learning to discover and protect sensitive data, such as personal information, stored in Amazon S3?

- A) AWS Config
- B) Amazon GuardDuty
- C) Amazon Inspector
- D) Amazon Macie

Answer: D

Why: Macie discovers sensitive data in S3. GuardDuty looks for threats, not sensitive data.

Source: https://aws.amazon.com/macie/

## D2-17: Data residency

- Task statement: 2.2

A South African company must keep customer data inside South Africa to meet a regulation. How can it do this on AWS?

- A) Choose the Africa (Cape Town) Region to store the data; AWS does not move content out of the chosen Region without the customer's action
- B) Enable AWS Shield Advanced on all resources
- C) Use edge locations to store the data
- D) Ask AWS Support to tag the data as local

Answer: A

Why: Customers choose the Region where their content is stored. That is how geographic compliance requirements are met.

Source: https://aws.amazon.com/compliance/data-privacy-faq/

## D2-18: Root user best practice

- Task statement: 2.3

What is an AWS best practice for the root user of an AWS account?

- A) Create access keys for it to use with the AWS CLI
- B) Share its password with the team lead for emergencies
- C) Enable MFA on it and do not use it for everyday tasks
- D) Use it for all administrative work

Answer: C

Why: The root user has unrestricted access. Protect it with MFA and use IAM identities for daily work. Avoid root access keys.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

## D2-19: Root user tasks

- Task statement: 2.3

For a standalone AWS account that is not part of AWS Organizations, which task requires the root user?

- A) Launching an EC2 instance
- B) Creating an IAM user
- C) Creating an S3 bucket
- D) Closing the AWS account

Answer: D

Why: A small set of tasks, such as closing a standalone account and changing root user details, require root credentials. Day-to-day tasks should use IAM identities.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html

## D2-20: Least privilege

- Task statement: 2.3

What does the principle of least privilege mean?

- A) Granting only the permissions needed to perform a task
- B) Using the root user only for small tasks
- C) Removing all permissions from developers
- D) Giving every user administrator access so work is never blocked

Answer: A

Why: Least privilege limits the damage if credentials are misused. It is a core IAM best practice.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

## D2-21: IAM roles

- Task statement: 2.3

An application on an EC2 instance needs to read objects from an S3 bucket. What is the most secure way to give it access?

- A) Attach an IAM role to the instance with a policy allowing read access
- B) Make the bucket public
- C) Store an IAM user's access keys in the application code
- D) Use the root user's access keys

Answer: A

Why: Roles give temporary credentials that rotate automatically, so no long-term keys are stored on the instance.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html

## D2-22: IAM groups

- Task statement: 2.3

Ten developers need exactly the same permissions. What is the simplest way to manage this?

- A) Put them in an IAM group and attach the policy to the group
- B) Give them the root user password
- C) Attach the policy to each user separately
- D) Let them share one IAM user

Answer: A

Why: Groups let you manage permissions for many users at once. Sharing users or root credentials removes accountability.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html

## D2-23: IAM Identity Center

- Task statement: 2.3

A company with many AWS accounts wants its staff to sign in once and access the accounts and apps they are allowed to use. Which service fits best?

- A) AWS IAM Identity Center
- B) Amazon Cognito user pools
- C) AWS Artifact
- D) AWS Secrets Manager

Answer: A

Why: IAM Identity Center provides single sign-on for workforce users across multiple AWS accounts and applications.

Source: https://aws.amazon.com/iam/identity-center/

## D2-24: Secrets Manager

- Task statement: 2.3

A company wants to store database passwords securely and rotate them automatically. Which service should it use?

- A) AWS Secrets Manager
- B) AWS KMS
- C) AWS Artifact
- D) AWS Systems Manager Parameter Store

Answer: A

Why: Secrets Manager stores secrets and has built-in automatic rotation. Parameter Store stores values but does not rotate them on its own.

Source: https://aws.amazon.com/secrets-manager/

## D2-25: Access keys

- Task statement: 2.3

What do developers use to authenticate when making programmatic requests with the AWS CLI as an IAM user?

- A) The console password and MFA code only
- B) An SSH key pair
- C) An AWS Artifact agreement
- D) An access key ID and secret access key

Answer: D

Why: Access keys sign programmatic requests. They must never be shared or committed to code repositories.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

## D2-26: Password policy

- Task statement: 2.3

A company wants every IAM user's password to be at least 14 characters and include numbers. What should it configure?

- A) An IAM account password policy
- B) A security group rule
- C) A service control policy
- D) An S3 bucket policy

Answer: A

Why: The account password policy sets complexity and rotation rules for IAM user passwords.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html

## D2-27: Service control policies

- Task statement: 2.3

A company using AWS Organizations wants to stop any account in the 'Students' organizational unit from using certain Regions, even administrators. What should it use?

- A) AWS Artifact
- B) A security group
- C) An IAM password policy
- D) A service control policy (SCP)

Answer: D

Why: SCPs set the maximum permissions for accounts in an organization, and they apply even to administrators in those accounts.

Source: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html

## D2-28: Federation

- Task statement: 2.3

A company wants employees to sign in to AWS with their existing corporate identities instead of creating new IAM users. What is this called?

- A) Resource tagging
- B) Cross-Region replication
- C) Identity federation
- D) Consolidated billing

Answer: C

Why: Federation lets an external identity provider authenticate users who then get temporary AWS access.

Source: https://aws.amazon.com/iam/identity-center/

## D2-29: Multi-factor authentication

- Task statement: 2.3

Which TWO are AWS-recommended practices for securing user access? (Choose two.)

- A) Share IAM users between team members
- B) Grant least-privilege permissions
- C) Use the root user for daily tasks
- D) Store access keys in source code
- E) Require MFA for users

Answer: E, B

Why: MFA and least privilege are core IAM best practices. The others increase risk.

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

## D2-30: AWS Shield Standard

- Task statement: 2.4

Which service gives all AWS customers protection against common DDoS attacks at no additional cost?

- A) AWS Shield Advanced
- B) Amazon GuardDuty
- C) AWS WAF
- D) AWS Shield Standard

Answer: D

Why: Shield Standard is automatic and free for all customers. Shield Advanced is a paid upgrade with extra protection and response support.

Source: https://aws.amazon.com/shield/

## D2-31: AWS Shield Advanced

- Task statement: 2.4

A company running a high-profile website wants enhanced DDoS protection plus access to the AWS Shield Response Team during attacks. Which option fits?

- A) AWS Shield Standard
- B) AWS Firewall Manager
- C) Amazon Inspector
- D) AWS Shield Advanced

Answer: D

Why: Shield Advanced adds enhanced detection, mitigation and access to the Shield Response Team.

Source: https://aws.amazon.com/shield/

## D2-32: AWS WAF

- Task statement: 2.4

A company wants to block SQL injection and cross-site scripting requests before they reach its web application. Which service should it use?

- A) AWS WAF
- B) Security groups
- C) AWS Shield Standard
- D) Amazon Inspector

Answer: A

Why: AWS WAF is a web application firewall that filters HTTP(S) requests with rules. Security groups work at the network level, not on web request content.

Source: https://aws.amazon.com/waf/

## D2-33: AWS Firewall Manager

- Task statement: 2.4

A company wants to centrally configure and apply AWS WAF rules across all accounts in its organization. Which service helps?

- A) AWS Firewall Manager
- B) Amazon Macie
- C) AWS Artifact
- D) AWS Config

Answer: A

Why: Firewall Manager centrally manages firewall rules, including WAF and Shield Advanced, across accounts.

Source: https://aws.amazon.com/firewall-manager/

## D2-34: Trusted Advisor security checks

- Task statement: 2.4

Which service can flag security groups that allow unrestricted access to specific ports, and a root user without MFA?

- A) AWS Artifact
- B) AWS Trusted Advisor
- C) AWS Cost Explorer
- D) Amazon Route 53

Answer: B

Why: Trusted Advisor inspects your account and gives recommendations, including security checks like these.

Source: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

## D2-35: AWS Marketplace security products

- Task statement: 2.4

A company wants to buy a third-party firewall product that runs on AWS and is billed through its AWS bill. Where should it look?

- A) AWS Health Dashboard
- B) AWS Artifact
- C) AWS Partner Network
- D) AWS Marketplace

Answer: D

Why: AWS Marketplace offers third-party software, including security products, billed through AWS.

Source: https://aws.amazon.com/marketplace/

## D2-36: Finding security information

- Task statement: 2.4

Where can customers find AWS security best practices, bulletins and blog posts about AWS security?

- A) AWS Cost Explorer reports
- B) The AWS Security Center, AWS Security Blog and AWS Knowledge Center
- C) The Amazon S3 console
- D) The AWS Pricing Calculator

Answer: B

Why: AWS publishes security guidance, bulletins and articles through its security center, blog and Knowledge Center.

Source: https://aws.amazon.com/security/
