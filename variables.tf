# Terraform Variables for the Azure resources    
variable "subscription_id" {
  type        = string
  description = "The subscription ID to use for the Azure resources"
}

variable "tenant_id" {
  type        = string
  description = "The tenant ID to use for the Azure resources"
}

# Resources Group Variables
variable "resource_group_name" {
  type        = string
  default     = "terraform-sanyam"
  description = "The name of the resource group in which to create the resources"
}

variable "deploy_main_resource_group" {
  type        = bool
  description = "Whether to deploy the main resource group"
}

variable "environment" {
  type        = string
  description = "The environment in which the resources will be created"
}

variable "location" {
  type        = string
  description = "The location/region where the resources will be created"
}

variable "location_short" {
  type        = string
  description = "The short name of the location/region where the resources will be created"
}

variable "deploy_mode" {
  type        = string
  default     = "terraform"
  description = "The deployment mode"
}

# Azure Container Registry Variables
variable "deploy_acr" {
  type        = bool
  description = "Whether to deploy the Azure Container Registry"
}

variable "acr_name" {
  type        = string
  default     = "sanyamacr"
  description = "The name of the Azure Container Registry"
}

variable "acr_sku" {
  type        = string
  default     = "Standard"
  description = "The SKU of the Azure Container Registry"

}
# API Management Variables

variable "deploy_apim" {
  type        = bool
  description = "Whether to deploy the API Management instance"
}
variable "api_management_name" {
  type        = string
  default     = "test-apim"
  description = "The name of the API Management instance"
}

variable "apim_sku_name" {
  type        = string
  default     = "Consumption_0"
  description = "The SKU of the API Management instance"
}

variable "publisher_name" {
  type        = string
  default     = "xansr"
  description = "The name of the publisher"
}

variable "publisher_email" {
  type        = string
  default     = "partner@xansrmedia.com"
  description = "The email of the publisher"
}

# App Service Plan Variables
variable "deploy_service_plan" {
  type        = bool
  description = "Whether to deploy the app service plan"
}
variable "app_service_plan_name" {
  type        = string
  default     = "asp-test"
  description = "The name of the app service plan"
}

variable "app_service_plan_is_linux" {
  type        = bool
  default     = true
  description = "Is the app service plan for Linux or Windows?"
}

variable "app_service_plan_sku" {
  type        = string
  default     = "B1"
  description = "The SKU of the app service plan"
}

# Web App Variables
variable "deploy_frontend_webapp" {
  type        = bool
  description = "Whether to deploy the frontend web app"
}

variable "app_name_frontend" {
  type        = string
  default     = "test-fe"
  description = "The name of the frontend app"
}

variable "Frontend_Docker_Image" {
  type        = string
  description = "The Docker image for the frontend app"
}

variable "deploy_personalisationms_webapp" {
  type        = bool
  description = "Whether to deploy the PersonalisationMS web app"
}

variable "app_name_personalisation" {
  type        = string
  default     = "test-personalisation-ms"
  description = "The name of the Personalisation app"
}

variable "Personalisation_Docker_Image" {
  type        = string
  description = "The Docker image for the Personalisation app"
}

# Application Insights Variables
variable "deploy_application_insights" {
  type        = bool
  description = "Whether to deploy the application insights instance"
}

variable "application_insights_name" {
  type        = string
  default     = "test-appinsights"
  description = "The name of the application insights instance"
}

# Storage Account Variables
variable "storage_account_name" {
  type        = string
  default     = "testblob"
  description = "The name of the storage account"
}

variable "storage_account_tier" {
  type        = string
  default     = "Standard"
  description = "The tier of the storage account"
}

variable "deploy_storage_resources" {
  type        = bool
  description = "Whether to deploy the storage resources"
}

# Frontend Environment Variables
variable "Frontend_apim_url" {
  type        = string
  description = "The URL of the APIM instance"
}

variable "WEBSITES_ENABLE_APP_SERVICE_STORAGE" {
  type        = bool
  default     = false
  description = "Whether to enable app service storage"
}