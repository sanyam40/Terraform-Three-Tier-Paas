# Terraform Project

This repository contains the Terraform configuration files for creating and managing resources in Azure.

## Getting Started

### Prerequisites

- Terraform v0.14.0 or later
- Azure CLI v2.0 or later

### Installation

1. Clone this repository
2. Navigate to the repository directory

## Resources

This Terraform configuration creates the following resources:

- Providers : Configured in [providers.tf](providers.tf)
- Resource Group: Configured in [main.tf](main.tf) [Core Resource Group / Main Resource Group]
- Variables : Configured in [variables.tf](variables.tf)
- Variables Secret Values : Configured in [terraform.tfvars](terraform.tfvars)
- Outputs : Configured in [outputs.tf](outputs.tf)

### Core Resources Group SKU's

- ACR : Configured in [acr.tf](acr.tf)
- APIM : Configured in [apim.tf](apim.tf)
- Storage Accounts : Configured in [storage-account.tf](storage-account.tf)

### Main Resource Group SKU's

- webapps : Configured in [webapps.tf](webapps.tf)
- Service Plan : Configured in [service-plan.tf](service-plan.tf)
- Application Insights : Configured in [application-insights.tf](application-insights.tf)

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
