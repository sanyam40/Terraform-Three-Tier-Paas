# Azure Credentials
subscription_id = "032af27b-0c1a-4828-aba0-4da2df5e398c"
tenant_id       = "b868613f-a153-49ec-a06e-990b12559e5f"

# Resource Group Configuration
environment    = "demo"
location       = "Central India"
location_short = "ci"

# Which resource group to deploy in Core Resource Group 
deploy_storage_resources   = true
deploy_acr                 = true
deploy_apim                = true

# Which resource group to deploy in Main Resource Group
deploy_main_resource_group      = true
deploy_service_plan             = true
deploy_application_insights     = true
deploy_personalisationms_webapp = false
deploy_frontend_webapp          = true

# Azure Container Registry Variables
Personalisation_Docker_Image = ""
Frontend_Docker_Image        = "demoiacacrsnci.azurecr.io/playgroundiacfe:latest"

# Frontend Environment Variables
Frontend_apim_url              = "value"