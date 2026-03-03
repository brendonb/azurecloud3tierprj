# Azure- 3 Tier single region architecture
Microsoft Azure Cloud

<img src="https://i.imgur.com/KppSPs4.png" title="source: imgur.com" />

<h1>Azure 3 tier single region </h1>


<h2>Description</h2>
A 3-tier Azure lab project demonstrating a secure web application architecture with C# ASP.NET, private backend VMs, 
and integrated monitoring using Microsoft Defender and Sentinel.Includes ARM templates and project code for learning and experimentation..
<br />


<h2> Applications and Utilities Used</h2>

- <b>Visual Studio Code Editor</b> 
- <b>Html,Css,JavaScript,C#,ASP.Net 10.03,Azure SQL,IIS</b>
- <b>Windows Server 2025 Datacenter</b>
- <b>Resource Groups</b>
- <b>Vnets, Subnets, Natgateways, Network Security Groups,Loadbalancer</b>
- <b>Bastion</b>
- <b>Azure Blob storage</b>
- <b>Microsoft Defender</b>
- <b>Microsoft Sentinel</b>

<h2>Program walk-through:</h2>

<img src="https://i.imgur.com/p1jwn8b.png" height="80%" width="80%" />

  <h1>Azure Resources</h1>
<img src="https://i.imgur.com/cyGVTGD.png" height="80%" width="80%" />

- <h3>Microsoft Clone website and Azure Setup</h3>
  1️ ASP.NET Web Application

Project Type:

C# ASP.NET web application
Hosted on Windows Server VMs with IIS in the application tier

Functionality:

Serves dynamic web pages via Controllers and Views
Connects to SQL Server database in the data tier
Demonstrates typical web app behavior: request → server → database → response

Project Structure:

/Controllers      → Handles web requests and business logic
/Views            → Razor pages for UI
/Models           → Application data models
Program.cs        → App entry point and configuration
Startup.cs        → Configures services, routing, and middleware

Development Notes:

Tested locally before deploying to Azure
Ready to be deployed to private application VMs in Azure

2️ Azure 3-Tier Architecture

Your lab replicates a production-style 3-tier architecture with security and monitoring:

Tier 1 — Web Tier (rg-web1)

Resources:

Load Balancer → Public IP: msclonelab.eastus.cloudapp.azure.com
NAT Gateway → Outbound internet access for backend VMs
Subnet → Web-tier subnet

Purpose:

Accepts traffic from the internet
Routes allowed requests to application VMs

Tier 2 — Application Tier (rg-app1)

Resources:

Windows Server VMs → App01 and App02
IIS + ASP.NET → Hosts your web application
AMA Agent → Sends logs to Log Analytics Workspace
Private subnet → Only accessible via LB or internal traffic

Purpose:

Runs business logic
Handles requests from web tier and interacts with the data tier
Generates Windows Security Events, enabling Defender & Sentinel monitoring

Tier 3 — Data Tier (rg-data1)

Resources:

SQL Server VM → Stores application data
Azure Blob Storage → Supports application storage requirements
Private subnet → Not exposed to public internet

Purpose:
Stores and protects sensitive data
Only accessible from the application tier

3️ Monitoring & Security Integration

Log Analytics Workspace → Centralized log collection from app VMs
Defender for Cloud → Monitors VM security and generates alerts
Sentinel → Ingests Defender logs for incident management
Windows Security Events → Captured by AMA for real-time monitoring
This setup ensures that all traffic reaching your application tier is monitored, logged, and analyzed, even in a lab environment.

4️ Deployment Flow

Users hit public LB IP → routed to backend VM via LB rules

Application VM executes ASP.NET web application → fetches data from SQL Server
VM logs security events → AMA → Log Analytics → Defender → Sentinel
Sentinel alerts generate incidents for suspicious activity (e.g., login attempts, port scans reaching VM).

- <h3>Challenges and constraints</h3>
Despite free-tier limits and networking challenges, the lab successfully demonstrates:

 *A secure 3-tier architecture
 *Private application and data tiers
 *Monitoring and security alerting using Defender and Sentinel
 *Reproducible setup with ARM templates and project code

These constraints guided decisions such as single-region deployment, PaaS SQL usage, 
and focus on VM-level monitoring — all of which reflect real-world considerations when designing cloud labs 
under resource and cost limitations.
  






<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>

