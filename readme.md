# Three-Tier Application Deployment on Azure using Terraform

This project demonstrates the deployment of a Three-Tier Application on Azure using Terraform. The application stack consists of:

- Frontend: Next.js
- Backend: Node.js microservices
- Database: MongoDB

## Infrastructure Setup

The infrastructure is provisioned using Terraform and includes:

- Resource Group: To group all Azure resources.
- Azure Container Registry (ACR): To store container images.
- API Management (APIM): To manage and secure APIs.
- Application Insights: To monitor application performance and availability.
- Service Plan: Hosting plan for Azure Web Apps.
- Storage Account: For static assets and general-purpose storage.
- Web Apps: Hosting for the frontend and backend applications.

## Repository Structure

- .github/workflows: GitHub Actions workflows for CI/CD.
- backend: Node.js microservices.
- frontend: Next.js frontend.
- .gitignore: Files and directories to ignore.
- acr.tf: Azure Container Registry (ACR) configuration.
- apim.tf: API Management (APIM) configuration.
- application-insights.tf: Application Insights configuration.
- main.tf: Core Resource Group configuration.
- outputs.tf: Output variables.
- providers.tf: Azure provider configuration.
- service-plan.tf: Service Plan configuration.
- storage-account.tf: Storage Account configuration.
- terraform.tfvars: Terraform variables.
- variables.tf: [variables.tf](variables.tf) Input variables.
- webapps.tf: [webapp.tf](webapps.tf) Web Apps configuration.

### Prerequisites

- Terraform v0.14.0 or later
- Azure CLI v2.0 or later

### Installation

1. Clone this repository
2. Navigate to the repository directory

## Usage

To init the Terraform deployment, run:

```sh
terraform init
```

To Validate the Terraform deployment, run:

```sh
terraform validate
```

To plan the Terraform deployment, run:

```sh
terraform plan
```

To apply the Terraform deployment, run:

```sh
terraform apply
```

To destroy the Terraform deployment, run:

```sh
terraform destroy
```
