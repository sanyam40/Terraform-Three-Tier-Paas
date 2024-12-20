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

- .github/workflows: GitHub Actions workflows for CI/CD. ([.github/workflows](.github/workflows))
- backend: Node.js microservices. ([/backend](/backend))
- frontend: Next.js frontend. ([/frontend](/frontend))
- .gitignore: Files and directories to ignore. ([.gitignore](.gitignore))
- acr.tf: Azure Container Registry (ACR) configuration. ([acr.tf](acr.tf))
- apim.tf: API Management (APIM) configuration. ([apim.tf](apim.tf))
- application-insights.tf: Application Insights configuration. ([application-insights.tf](application-insights.tf))
- main.tf: Core Resource Group configuration. ([main.tf](main.tf))
- outputs.tf: Output variables. ([outputs.tf](outputs.tf))
- providers.tf: Azure provider configuration. ([providers.tf](providers.tf))
- service-plan.tf: Service Plan configuration. ([service-plan.tf](service-plan.tf))
- storage-account.tf: Storage Account configuration. ([storage-account.tf](storage-account.tf))
- terraform.tfvars: Terraform variables. ([terraform.tfvars](terraform.tfvars))
- variables.tf: Input variables. ([variables.tf](variables.tf))
- webapps.tf: Web Apps configuration. ([webapp.tf](webapps.tf))

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
