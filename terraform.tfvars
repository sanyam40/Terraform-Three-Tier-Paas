# Azure Credentials
subscription_id = ""
tenant_id       = ""

# Resource Group Configuration
environment    = "demo"
location       = "Central India"
location_short = "ci"

# Which resource group to deploy in Core Resource Group 
deploy_storage_resources = true
deploy_acr               = true
deploy_apim              = true

# Which resource group to deploy in Main Resource Group
deploy_main_resource_group  = true
deploy_service_plan         = true
deploy_application_insights = true
deploy_frontend_webapp      = true
deploy_backend_webapp       = true

# Azure Container Registry Variables
Frontend_Docker_Image = "playgroundiacfe:latest"
Backend_Docker_Image  = "playgroundiacms:latest"

# Frontend Environment Variables
Frontend_apim_url = "value"

