# Leads' question bank: Domain 3 Cloud Technology and Services (34% of the exam)

Seed questions written by the leads so the Study Hub quiz has a strong start. Every question is original and
based only on public AWS information; each one links the AWS page it was checked against.
These are NOT real exam questions. Never add real exam questions, reworded exam questions or dump-site
content here (see the exam integrity section of the README).

Spot a mistake? Open a PR that fixes it and links the AWS source.

## D3-01: AWS CloudFormation

- Task statement: 3.1

A team wants to define its VPC, EC2 instances and databases in a template file so it can create identical environments repeatedly. Which service should it use?

- A) AWS CloudFormation
- B) Amazon CloudWatch
- C) AWS Config
- D) AWS Systems Manager Parameter Store

Answer: A

Why: CloudFormation is infrastructure as code: you describe resources in templates and AWS creates them consistently.

Source: https://aws.amazon.com/cloudformation/

## D3-02: AWS CLI

- Task statement: 3.1

An administrator wants to automate AWS tasks from shell scripts on a laptop. Which access method fits best?

- A) The AWS Command Line Interface (AWS CLI)
- B) AWS Artifact
- C) Amazon WorkSpaces
- D) The AWS Management Console

Answer: A

Why: The CLI lets you run AWS commands from scripts. The console is a browser interface for manual work.

Source: https://aws.amazon.com/cli/

## D3-03: AWS SDKs

- Task statement: 3.1

A Java developer wants the application itself to upload files to Amazon S3. What should the developer use?

- A) AWS Trusted Advisor
- B) The AWS Management Console
- C) An AWS SDK for the programming language
- D) AWS CloudShell only

Answer: C

Why: AWS SDKs let application code call AWS services in languages like Java and Python.

Source: https://aws.amazon.com/developer/tools/

## D3-04: Deployment models

- Task statement: 3.1

A bank keeps some systems in its own data center and runs others on AWS, connected together. Which cloud deployment model is this?

- A) Multi-Region
- B) Hybrid
- C) Cloud
- D) On-premises

Answer: B

Why: A hybrid deployment connects on-premises infrastructure with cloud resources.

Source: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html

## D3-05: Availability Zones

- Task statement: 3.2

What is an Availability Zone?

- A) A single server rack in an AWS data center
- B) One or more discrete data centers with redundant power, networking and connectivity within a Region
- C) A content cache location used by Amazon CloudFront
- D) A geographic area that contains several Regions

Answer: B

Why: A Region contains multiple isolated Availability Zones. Edge locations are separate and used for caching.

Source: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

## D3-06: Choosing a Region

- Task statement: 3.2

Which factor should a company consider first when choosing an AWS Region for customer data that by law must stay in its own country?

- A) The number of edge locations worldwide
- B) The AWS Support plan it has
- C) The location of AWS headquarters
- D) Data sovereignty and compliance requirements

Answer: D

Why: Compliance, latency to users, service availability and pricing are the main Region selection factors. Legal requirements come first.

Source: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

## D3-07: Edge locations

- Task statement: 3.2

What are AWS edge locations mainly used for?

- A) Storing AWS Artifact reports
- B) Hosting Availability Zones
- C) Caching content close to users through Amazon CloudFront to reduce latency
- D) Running Amazon RDS databases

Answer: C

Why: Edge locations power CloudFront (and services like Route 53) to serve content with low latency.

Source: https://aws.amazon.com/cloudfront/

## D3-08: Disaster recovery

- Task statement: 3.2

A company must keep its application running even if an entire AWS Region becomes unavailable. What should it do?

- A) Enable AWS Shield Standard
- B) Use a larger instance type
- C) Deploy the application in more than one Availability Zone only
- D) Deploy the application in more than one AWS Region

Answer: D

Why: Multiple AZs protect against data center failures; protecting against a whole Region needs a multi-Region design.

Source: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

## D3-09: AWS Local Zones

- Task statement: 3.2

A game studio needs single-digit millisecond latency for players in a large city far from the nearest AWS Region. Which option fits?

- A) AWS Artifact
- B) Amazon S3 Glacier
- C) AWS Local Zones
- D) AWS Organizations

Answer: C

Why: Local Zones place compute and storage closer to large population centers for very low latency.

Source: https://aws.amazon.com/about-aws/global-infrastructure/localzones/

## D3-10: AWS Outposts

- Task statement: 3.2

A hospital must keep some workloads on premises but wants to use the same AWS infrastructure, services and APIs there. Which service fits?

- A) Amazon CloudFront
- B) AWS Outposts
- C) AWS Direct Connect
- D) AWS Local Zones

Answer: B

Why: Outposts brings AWS-managed infrastructure into the customer's own data center.

Source: https://aws.amazon.com/outposts/

## D3-11: Compute optimized instances

- Task statement: 3.3

Which EC2 instance family fits a batch processing job that needs high-performance processors?

- A) Accelerated computing
- B) Storage optimized
- C) Compute optimized
- D) Memory optimized

Answer: C

Why: Compute optimized instances suit compute-bound work such as batch processing and high-performance web servers.

Source: https://aws.amazon.com/ec2/instance-types/

## D3-12: Memory optimized instances

- Task statement: 3.3

Which EC2 instance family is designed for workloads that process large data sets in memory, such as in-memory databases?

- A) Storage optimized
- B) Compute optimized
- C) General purpose
- D) Memory optimized

Answer: D

Why: Memory optimized instances provide fast performance for large in-memory data sets.

Source: https://aws.amazon.com/ec2/instance-types/

## D3-13: Storage optimized instances

- Task statement: 3.3

A workload needs very high, sequential read and write access to large data sets on local storage. Which instance family fits?

- A) General purpose
- B) Memory optimized
- C) Compute optimized
- D) Storage optimized

Answer: D

Why: Storage optimized instances deliver high local storage throughput and IOPS.

Source: https://aws.amazon.com/ec2/instance-types/

## D3-14: AWS Lambda

- Task statement: 3.3

A company wants to run code in response to events, without managing servers, and pay only for the compute time used. Which service fits?

- A) AWS Outposts
- B) AWS Lambda
- C) Amazon EC2
- D) Amazon Lightsail

Answer: B

Why: Lambda runs code on demand and bills for the time your code runs. There are no servers to manage.

Source: https://aws.amazon.com/lambda/

## D3-15: AWS Fargate

- Task statement: 3.3

A team wants to run containers without provisioning or managing the underlying servers. Which service fits?

- A) Amazon EC2 Auto Scaling
- B) AWS Fargate
- C) AWS Batch
- D) Amazon Lightsail

Answer: B

Why: Fargate is serverless compute for containers, used with Amazon ECS or Amazon EKS.

Source: https://aws.amazon.com/fargate/

## D3-16: Amazon EKS

- Task statement: 3.3

A company already uses Kubernetes and wants a managed Kubernetes service on AWS. Which service should it use?

- A) Amazon Elastic Kubernetes Service (Amazon EKS)
- B) Amazon Lightsail
- C) AWS Elastic Beanstalk
- D) Amazon Elastic Container Service (Amazon ECS)

Answer: A

Why: EKS is managed Kubernetes. ECS is AWS's own container orchestrator, not Kubernetes.

Source: https://aws.amazon.com/eks/

## D3-17: Elastic Load Balancing

- Task statement: 3.3

Which service automatically distributes incoming traffic across multiple EC2 instances in multiple Availability Zones?

- A) Amazon Route 53
- B) Amazon EC2 Auto Scaling
- C) AWS Direct Connect
- D) Elastic Load Balancing

Answer: D

Why: Load balancers spread traffic across targets. Auto Scaling changes how many instances there are, but does not route traffic.

Source: https://aws.amazon.com/elasticloadbalancing/

## D3-18: EC2 Auto Scaling

- Task statement: 3.3

A website gets busy every evening and quiet overnight. Which service adds EC2 instances when demand rises and removes them when it falls?

- A) Amazon CloudFront
- B) Elastic Load Balancing
- C) Amazon EC2 Auto Scaling
- D) AWS Lambda layers

Answer: C

Why: Auto Scaling adjusts capacity to demand, which supports elasticity and cost savings.

Source: https://aws.amazon.com/ec2/autoscaling/

## D3-19: Amazon Lightsail

- Task statement: 3.3

A small business wants to launch a simple website on a virtual server with a predictable low monthly price and minimal setup. Which service fits?

- A) Amazon EKS
- B) AWS Outposts
- C) AWS Batch
- D) Amazon Lightsail

Answer: D

Why: Lightsail bundles a virtual server, storage and networking at a simple monthly price.

Source: https://aws.amazon.com/lightsail/

## D3-20: AWS Elastic Beanstalk

- Task statement: 3.3

Developers want to upload their web application code and let AWS handle capacity provisioning, load balancing and scaling. Which service fits?

- A) Amazon EC2 Dedicated Hosts
- B) Amazon Lightsail
- C) AWS CloudFormation
- D) AWS Elastic Beanstalk

Answer: D

Why: Elastic Beanstalk deploys and manages the infrastructure for your application while you keep control of the code.

Source: https://aws.amazon.com/elasticbeanstalk/

## D3-21: Amazon RDS

- Task statement: 3.4

A company wants a managed relational database (for example PostgreSQL) where AWS handles backups, patching and hardware. Which service fits?

- A) Amazon Redshift
- B) Amazon ElastiCache
- C) Amazon RDS
- D) Amazon DynamoDB

Answer: C

Why: RDS is a managed relational database service for engines like MySQL, PostgreSQL and SQL Server.

Source: https://aws.amazon.com/rds/

## D3-22: Amazon Aurora

- Task statement: 3.4

Which AWS database is MySQL- and PostgreSQL-compatible and built by AWS for high performance and availability?

- A) Amazon DynamoDB
- B) Amazon Neptune
- C) Amazon Aurora
- D) Amazon DocumentDB

Answer: C

Why: Aurora is a cloud-native relational database compatible with MySQL and PostgreSQL.

Source: https://aws.amazon.com/rds/aurora/

## D3-23: Amazon DynamoDB

- Task statement: 3.4

A mobile app needs a serverless key-value database with single-digit millisecond performance at any scale. Which service fits?

- A) Amazon RDS
- B) Amazon DynamoDB
- C) Amazon Redshift
- D) Amazon S3 Glacier

Answer: B

Why: DynamoDB is a serverless NoSQL key-value and document database built for consistent low latency.

Source: https://aws.amazon.com/dynamodb/

## D3-24: Amazon ElastiCache

- Task statement: 3.4

A company wants to speed up its application by caching frequent database query results in memory. Which service fits?

- A) Amazon EBS
- B) Amazon Athena
- C) Amazon ElastiCache
- D) AWS Storage Gateway

Answer: C

Why: ElastiCache provides managed in-memory caching (Redis OSS, Valkey, Memcached compatible).

Source: https://aws.amazon.com/elasticache/

## D3-25: AWS DMS

- Task statement: 3.4

A company wants to move its on-premises Oracle database to AWS with minimal downtime while the source stays operational. Which service helps?

- A) Amazon S3 Transfer Acceleration
- B) AWS Database Migration Service (AWS DMS)
- C) AWS Config
- D) AWS Backup

Answer: B

Why: DMS migrates databases to AWS and keeps the source available during migration, using replication.

Source: https://aws.amazon.com/dms/

## D3-26: AWS Schema Conversion Tool

- Task statement: 3.4

When migrating from Oracle to Amazon Aurora PostgreSQL, which tool helps convert the database schema to the new engine?

- A) AWS CloudFormation
- B) AWS Schema Conversion Tool (AWS SCT)
- C) AWS Glue DataBrew
- D) Amazon Inspector

Answer: B

Why: AWS SCT converts schemas between different database engines; DMS then moves the data.

Source: https://aws.amazon.com/dms/schema-conversion-tool/

## D3-27: Amazon Redshift

- Task statement: 3.4

A company wants a data warehouse to run complex analytics queries across petabytes of structured data. Which service fits?

- A) Amazon ElastiCache
- B) Amazon Redshift
- C) Amazon RDS for MySQL
- D) Amazon DynamoDB

Answer: B

Why: Redshift is a managed data warehouse built for analytics at scale.

Source: https://aws.amazon.com/redshift/

## D3-28: Amazon VPC

- Task statement: 3.5

Which service lets a company launch AWS resources in a logically isolated virtual network that it defines?

- A) Amazon Route 53
- B) Amazon CloudFront
- C) Amazon VPC
- D) AWS Direct Connect

Answer: C

Why: A VPC is your own isolated network in AWS, with subnets, route tables and gateways.

Source: https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

## D3-29: Security groups

- Task statement: 3.5

Which statement about security groups is correct?

- A) They can only contain deny rules
- B) They act as stateful virtual firewalls at the instance level
- C) They act as stateless firewalls at the subnet level
- D) They block traffic by default from inside the same instance

Answer: B

Why: Security groups are stateful and attached to instances or network interfaces. Network ACLs are stateless and work at the subnet level.

Source: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

## D3-30: Network ACLs

- Task statement: 3.5

Which VPC feature is a stateless firewall applied at the subnet level, with both allow and deny rules?

- A) Security group
- B) Internet gateway
- C) Network access control list (network ACL)
- D) NAT gateway

Answer: C

Why: Network ACLs are stateless, subnet-level and support deny rules. Security groups are stateful and allow-only.

Source: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html

## D3-31: Internet gateway

- Task statement: 3.5

What allows resources in a public subnet of a VPC to communicate with the internet?

- A) An internet gateway attached to the VPC, with a route to it
- B) A NAT gateway in a private subnet
- C) AWS Direct Connect
- D) A VPC endpoint for Amazon S3

Answer: A

Why: An internet gateway enables traffic between the VPC and the internet for public subnets.

Source: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html

## D3-32: NAT gateway

- Task statement: 3.5

Instances in a private subnet need to download software updates from the internet but must not accept incoming connections from it. What should be used?

- A) A NAT gateway
- B) An internet gateway attached directly to the private subnet
- C) Amazon CloudFront
- D) AWS Direct Connect

Answer: A

Why: A NAT gateway lets private instances start outbound connections while blocking unsolicited inbound traffic.

Source: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html

## D3-33: Amazon Route 53

- Task statement: 3.5

Which service provides DNS, domain name registration and health-check-based routing?

- A) AWS Global Accelerator
- B) Elastic Load Balancing
- C) Amazon Route 53
- D) Amazon CloudFront

Answer: C

Why: Route 53 is AWS's DNS service, including domain registration and routing policies.

Source: https://aws.amazon.com/route53/

## D3-34: AWS Direct Connect

- Task statement: 3.5

A company needs a dedicated, private network connection from its data center to AWS with consistent performance, not over the public internet. Which service fits?

- A) An internet gateway
- B) AWS Site-to-Site VPN
- C) Amazon CloudFront
- D) AWS Direct Connect

Answer: D

Why: Direct Connect is a dedicated private link. Site-to-Site VPN is an encrypted tunnel over the internet.

Source: https://aws.amazon.com/directconnect/

## D3-35: AWS Site-to-Site VPN

- Task statement: 3.5

A company needs an encrypted connection between its office network and its VPC quickly, using its existing internet connection. Which service fits?

- A) Amazon Route 53
- B) AWS Direct Connect
- C) VPC peering
- D) AWS Site-to-Site VPN

Answer: D

Why: Site-to-Site VPN creates encrypted IPsec tunnels over the internet and can be set up quickly.

Source: https://aws.amazon.com/vpn/site-to-site-vpn/

## D3-36: Amazon S3

- Task statement: 3.6

Which service provides highly durable object storage for files such as images, backups and static website content?

- A) Amazon S3
- B) Instance store
- C) Amazon EBS
- D) Amazon EFS

Answer: A

Why: S3 is object storage accessed over the web. EBS and instance store are block storage for EC2; EFS is a file system.

Source: https://aws.amazon.com/s3/

## D3-37: S3 Glacier Deep Archive

- Task statement: 3.6

A company must keep records for 10 years, rarely reads them, and can wait hours to restore one. Which storage class is the lowest cost?

- A) S3 Standard-Infrequent Access
- B) S3 Glacier Deep Archive
- C) S3 Standard
- D) S3 One Zone-Infrequent Access

Answer: B

Why: Glacier Deep Archive is the lowest-cost S3 storage class, designed for long-term archives with retrieval in hours.

Source: https://aws.amazon.com/s3/storage-classes/

## D3-38: S3 Intelligent-Tiering

- Task statement: 3.6

A company stores data whose access patterns are unknown and change over time. Which S3 storage class automatically moves objects to the most cost-effective tier?

- A) S3 Standard
- B) S3 One Zone-Infrequent Access
- C) S3 Glacier Flexible Retrieval
- D) S3 Intelligent-Tiering

Answer: D

Why: Intelligent-Tiering monitors access and moves objects between tiers automatically.

Source: https://aws.amazon.com/s3/storage-classes/

## D3-39: S3 Lifecycle

- Task statement: 3.6

A company wants objects moved from S3 Standard to S3 Glacier Flexible Retrieval automatically 90 days after creation. What should it configure?

- A) An S3 bucket policy
- B) S3 Transfer Acceleration
- C) An S3 Lifecycle configuration
- D) AWS Backup Vault Lock

Answer: C

Why: Lifecycle rules transition or expire objects automatically based on their age.

Source: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html

## D3-40: Amazon EBS

- Task statement: 3.6

Which service provides persistent block storage volumes that attach to an Amazon EC2 instance?

- A) AWS Storage Gateway
- B) Amazon EFS
- C) Amazon S3
- D) Amazon EBS

Answer: D

Why: EBS volumes are block storage for EC2 that persist independently of the instance's life.

Source: https://aws.amazon.com/ebs/

## D3-41: Instance store

- Task statement: 3.6

Which EC2 storage is temporary, physically attached to the host, and loses its data when the instance is stopped or terminated?

- A) Amazon EFS
- B) Amazon S3
- C) Amazon EBS
- D) Instance store

Answer: D

Why: Instance store is ephemeral block storage, good for caches and scratch data, not for data you must keep.

Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html

## D3-42: Amazon EFS

- Task statement: 3.6

Many Linux EC2 instances across several Availability Zones need to read and write the same files at the same time. Which service fits?

- A) Amazon S3 Glacier
- B) Amazon EFS
- C) Amazon EBS
- D) Instance store

Answer: B

Why: EFS is a managed, elastic NFS file system that many Linux instances can share.

Source: https://aws.amazon.com/efs/

## D3-43: Amazon FSx for Windows File Server

- Task statement: 3.6

A company needs a fully managed shared file system that supports the Windows SMB protocol and Active Directory. Which service fits?

- A) Amazon EBS
- B) Amazon EFS
- C) AWS Storage Gateway
- D) Amazon FSx for Windows File Server

Answer: D

Why: FSx for Windows File Server provides managed Windows-native file shares. EFS is for Linux NFS workloads.

Source: https://aws.amazon.com/fsx/windows/

## D3-44: AWS Storage Gateway

- Task statement: 3.6

A company wants its on-premises applications to use cloud storage in AWS, with local caching of frequently used data. Which service fits?

- A) AWS Storage Gateway
- B) AWS Direct Connect
- C) Amazon EFS
- D) AWS Snowball Edge

Answer: A

Why: Storage Gateway is hybrid storage that connects on-premises apps to AWS storage with a local cache.

Source: https://aws.amazon.com/storagegateway/

## D3-45: AWS Backup

- Task statement: 3.6

A company wants one service to centrally manage and automate backups of EBS volumes, RDS databases and DynamoDB tables. Which service fits?

- A) Amazon S3 Lifecycle
- B) AWS Backup
- C) AWS CloudTrail
- D) AWS Config

Answer: B

Why: AWS Backup centralizes backup policies across many AWS services.

Source: https://aws.amazon.com/backup/

## D3-46: Amazon Athena

- Task statement: 3.7

An analyst wants to run standard SQL queries directly on log files stored in Amazon S3 without loading them into a database or managing servers. Which service fits?

- A) Amazon Kinesis Data Streams
- B) Amazon Redshift
- C) Amazon RDS
- D) Amazon Athena

Answer: D

Why: Athena is serverless interactive SQL over data in S3. You pay per query.

Source: https://aws.amazon.com/athena/

## D3-47: Amazon Kinesis

- Task statement: 3.7

A company wants to collect and process click-stream data from its website in real time. Which service fits?

- A) Amazon Athena
- B) Amazon QuickSight
- C) Amazon Kinesis
- D) AWS Glue

Answer: C

Why: Kinesis ingests and processes streaming data in real time.

Source: https://aws.amazon.com/kinesis/

## D3-48: AWS Glue

- Task statement: 3.7

Which serverless service discovers data, builds a data catalog and runs extract, transform and load (ETL) jobs?

- A) AWS Glue
- B) Amazon Lex
- C) Amazon QuickSight
- D) Amazon Kinesis

Answer: A

Why: Glue is a serverless data integration service for ETL and cataloging.

Source: https://aws.amazon.com/glue/

## D3-49: Amazon QuickSight

- Task statement: 3.7

Managers want interactive business intelligence dashboards built from company data. Which service fits?

- A) AWS Glue
- B) Amazon Athena
- C) Amazon QuickSight
- D) Amazon SageMaker AI

Answer: C

Why: QuickSight is AWS's business intelligence and dashboard service.

Source: https://aws.amazon.com/quicksight/

## D3-50: Amazon SageMaker AI

- Task statement: 3.7

Data scientists want a service to build, train and deploy their own machine learning models. Which service fits?

- A) Amazon Athena
- B) Amazon Lex
- C) Amazon SageMaker AI
- D) Amazon QuickSight

Answer: C

Why: SageMaker AI covers the machine learning lifecycle: build, train and deploy models.

Source: https://aws.amazon.com/sagemaker/

## D3-51: Amazon Lex

- Task statement: 3.7

A company wants to add a chatbot with voice and text conversations to its customer support site. Which service fits?

- A) Amazon Athena
- B) AWS Glue
- C) Amazon Lex
- D) Amazon Kinesis

Answer: C

Why: Lex builds conversational interfaces using speech recognition and natural language understanding.

Source: https://aws.amazon.com/lex/

## D3-52: Amazon SQS

- Task statement: 3.8

A company wants to decouple an order service from a slow payment service so that orders wait safely in a queue until processed. Which service fits?

- A) Amazon SQS
- B) Amazon SES
- C) Amazon SNS
- D) Amazon EventBridge Scheduler

Answer: A

Why: SQS is a message queue: producers send messages and consumers process them later, so the services are decoupled.

Source: https://aws.amazon.com/sqs/

## D3-53: Amazon SNS

- Task statement: 3.8

A company wants to send one notification that fans out to email, SMS and several applications at once. Which service fits?

- A) AWS Glue
- B) Amazon SES
- C) Amazon SQS
- D) Amazon SNS

Answer: D

Why: SNS is publish/subscribe messaging that pushes a message to many subscribers.

Source: https://aws.amazon.com/sns/

## D3-54: Amazon EventBridge

- Task statement: 3.8

Which service routes events between AWS services, your own applications and SaaS applications using rules?

- A) Amazon Kinesis
- B) Amazon EventBridge
- C) AWS Step Functions
- D) Amazon SQS

Answer: B

Why: EventBridge is a serverless event bus that matches events to targets with rules.

Source: https://aws.amazon.com/eventbridge/

## D3-55: Amazon SES

- Task statement: 3.8

A company wants to send order confirmation and marketing emails from its application. Which service fits?

- A) Amazon WorkSpaces
- B) Amazon SNS
- C) Amazon Connect
- D) Amazon Simple Email Service (Amazon SES)

Answer: D

Why: SES is AWS's email sending service.

Source: https://aws.amazon.com/ses/

## D3-56: Amazon Connect

- Task statement: 3.8

A company wants to set up a cloud contact center for its customer service agents. Which service fits?

- A) Amazon SES
- B) Amazon Connect
- C) Amazon WorkSpaces
- D) Amazon Lex

Answer: B

Why: Amazon Connect is a cloud contact center service.

Source: https://aws.amazon.com/connect/

## D3-57: Amazon WorkSpaces

- Task statement: 3.8

Staff need secure virtual Windows desktops they can reach from home on any device. Which service fits?

- A) Amazon WorkSpaces
- B) Amazon Lightsail
- C) Amazon AppStream 2.0
- D) AWS Outposts

Answer: A

Why: WorkSpaces provides managed virtual desktops. AppStream 2.0 streams individual applications, not full desktops.

Source: https://aws.amazon.com/workspaces/

## D3-58: Amazon AppStream 2.0

- Task statement: 3.8

A university wants to stream one desktop design application to students' browsers without installing it on their laptops. Which service fits best?

- A) Amazon AppStream 2.0
- B) Amazon WorkSpaces
- C) AWS Amplify
- D) Amazon CloudFront

Answer: A

Why: AppStream 2.0 streams applications to a browser. WorkSpaces gives users a full virtual desktop.

Source: https://aws.amazon.com/appstream2/

## D3-59: AWS CodePipeline

- Task statement: 3.8

A team wants every code change to automatically go through build, test and deploy stages. Which service orchestrates this release pipeline?

- A) AWS CodePipeline
- B) AWS X-Ray
- C) AWS Config
- D) AWS CodeBuild

Answer: A

Why: CodePipeline is continuous delivery: it orchestrates stages. CodeBuild is the step that compiles and tests.

Source: https://aws.amazon.com/codepipeline/

## D3-60: AWS CodeBuild

- Task statement: 3.8

Which fully managed service compiles source code, runs tests and produces deployable packages?

- A) AWS CodePipeline
- B) Amazon Inspector
- C) AWS CodeBuild
- D) AWS X-Ray

Answer: C

Why: CodeBuild is a managed build service. It is often one stage inside CodePipeline.

Source: https://aws.amazon.com/codebuild/

## D3-61: AWS X-Ray

- Task statement: 3.8

Developers want to trace requests as they travel through several microservices to find where latency occurs. Which service fits?

- A) Amazon Inspector
- B) AWS X-Ray
- C) AWS Config
- D) AWS CloudTrail

Answer: B

Why: X-Ray traces requests through distributed applications. CloudTrail records API calls to AWS, not application request paths.

Source: https://aws.amazon.com/xray/

## D3-62: AWS Amplify

- Task statement: 3.8

Front-end developers want to build and host a full-stack web or mobile app quickly with AWS-backed features. Which service fits?

- A) Amazon Redshift
- B) AWS Outposts
- C) AWS Amplify
- D) AWS Direct Connect

Answer: C

Why: Amplify helps front-end and mobile developers build, deploy and host full-stack apps.

Source: https://aws.amazon.com/amplify/

## D3-63: AWS IoT Core

- Task statement: 3.8

A farm wants thousands of soil sensors to send readings securely to the cloud. Which service connects the devices?

- A) AWS IoT Core
- B) AWS Amplify
- C) Amazon WorkSpaces
- D) Amazon Connect

Answer: A

Why: IoT Core connects IoT devices to AWS and routes their messages.

Source: https://aws.amazon.com/iot-core/
