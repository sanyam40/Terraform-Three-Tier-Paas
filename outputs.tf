# # Resource Group Outputs
# output "main_resource_group_name" {
#   description = "The name of the main resource group"
#   value       = azurerm_resource_group.rg-main[0].name
# }

# output "main_resource_group_location" {
#   description = "The location of the main resource group"
#   value       = azurerm_resource_group.rg-main[0].location
# }

# output "core_resource_group_name" {
#   description = "The name of the core resource group"
#   value       = azurerm_resource_group.rg-core[0].name
# }

# output "core_resource_group_location" {
#   description = "The location of the core resource group"
#   value       = azurerm_resource_group.rg-core[0].location
# }

# # Azure Container Registry (ACR) Outputs
# # output "acr_name" {
# #   description = "The name of the Azure Container Registry"
# #   value       = azurerm_container_registry.acr[0].name
# # }

# # output "acr_login_server" {
# #   description = "The login server of the Azure Container Registry"
# #   value       = azurerm_container_registry.acr[0].login_server
# # }

# # Azure Search Service Outputs
# output "search_service_name" {
#   description = "The name of the Azure Search Service"
#   value       = azurerm_search_service.search_service[0].name
# }

# output "search_service_location" {
#   description = "The location of the Azure Search Service"
#   value       = azurerm_search_service.search_service[0].location
# }

# # Azure App Service Plan Outputs
# output "service_plan_name" {
#   description = "The name of the Azure App Service Plan"
#   value       = azurerm_service_plan.service[0].name
# }

# output "service_plan_location" {
#   description = "The location of the Azure App Service Plan"
#   value       = azurerm_service_plan.service[0].location
# }

# # Azure Storage Account Outputs
# output "storage_account_name" {
#   description = "The name of the Azure Storage Account"
#   value       = azurerm_storage_account.storage[0].name
# }

# output "storage_account_location" {
#   description = "The location of the Azure Storage Account"
#   value       = azurerm_storage_account.storage[0].location
# }

# output "storage_container_commentary_clips_name" {
#   description = "The name of the commentary clips storage container"
#   value       = azurerm_storage_container.containercommentary-clips[0].name
# }

# output "storage_container_highlight_clips_name" {
#   description = "The name of the highlight clips storage container"
#   value       = azurerm_storage_container.container-highlight-clips[0].name
# }

# output "storage_container_index_data_name" {
#   description = "The name of the index data storage container"
#   value       = azurerm_storage_container.container-index-data[0].name
# }

# output "storage_container_stitch_clips_name" {
#   description = "The name of the stitch clips storage container"
#   value       = azurerm_storage_container.container-stitch-clips[0].name
# }

# # Azure Web Apps Outputs
# output "frontend_web_app_name" {
#   description = "The name of the frontend web app"
#   value       = azurerm_linux_web_app.frontend[0].name
# }

# output "aims_web_app_name" {
#   description = "The name of the AIMS web app"
#   value       = azurerm_linux_web_app.aims[0].name
# }

# output "stitchms_web_app_name" {
#   description = "The name of the StitchMS web app"
#   value       = azurerm_linux_web_app.stitchms[0].name
# }

# output "mediaadapter_web_app_name" {
#   description = "The name of the MediaAdapter web app"
#   value       = azurerm_linux_web_app.mediaadapter[0].name
# }

# output "personalisation_web_app_name" {
#   description = "The name of the Personalisation web app"
#   value       = azurerm_linux_web_app.personalisation[0].name
# }

# # Application Insights Outputs
# output "application_insights_name" {
#   description = "The name of the Application Insights instance"
#   value       = azurerm_application_insights.appinsights[0].name
# }

# output "application_insights_instrumentation_key" {
#   description = "The instrumentation key of the Application Insights instance"
#   value       = azurerm_application_insights.appinsights[0].instrumentation_key
# }

# # API Management (APIM) Outputs
# output "apim_name" {
#   description = "The name of the API Management instance"
#   value       = azurerm_api_management.apim[0].name
# }

# output "apim_logger_name" {
#   description = "The name of the API Management logger"
#   value       = azurerm_api_management_logger.apim-logger[0].name
# }

# output "personalisationms_api_name" {
#   description = "The name of the PersonalisationMS API"
#   value       = azurerm_api_management_api.personalisationms-api[0].name
# }

# output "aims_api_name" {
#   description = "The name of the AIMS API"
#   value       = azurerm_api_management_api.aims-api[0].name
# }

# output "stitchms_api_name" {
#   description = "The name of the StitchMS API"
#   value       = azurerm_api_management_api.stitchms-api[0].name
# }

# output "mediaadapterms_api_name" {
#   description = "The name of the MediaAdapterMS API"
#   value       = azurerm_api_management_api.mediaadapterms-api[0].name
# }