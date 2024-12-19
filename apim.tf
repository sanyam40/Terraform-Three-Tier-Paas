# APIM Setup For Project
resource "azurerm_api_management" "apim" {
  count               = var.deploy_main_resource_group && var.deploy_apim ? 1 : 0
  name                = "${var.environment}-${var.api_management_name}-${var.location_short}"
  resource_group_name = azurerm_resource_group.rg-main[count.index].name
  location            = azurerm_resource_group.rg-main[count.index].location
  publisher_name      = var.publisher_name
  publisher_email     = var.publisher_email
  sku_name            = var.apim_sku_name
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}

resource "azurerm_api_management_logger" "apim-logger" {
  count               = var.deploy_main_resource_group && var.deploy_apim ? 1 : 0
  name                = "${var.environment}-${var.api_management_name}-logger"
  resource_group_name = azurerm_resource_group.rg-main[count.index].name
  api_management_name = azurerm_api_management.apim[count.index].name
  application_insights {
    instrumentation_key = azurerm_application_insights.appinsights[count.index].instrumentation_key
  }
}

# // APIM API for PersonalisationMS
# resource "azurerm_api_management_api" "personalisationms-api" {
#   count               = var.deploy_main_resource_group && var.deploy_apim ? 1 : 0
#   api_management_name = azurerm_api_management.apim[count.index].name
#   resource_group_name = azurerm_resource_group.rg-main[count.index].name
#   name                = "personalisationms"
#   revision            = "1"
#   path                = ""
#   version             = var.environment
#   version_set_id      = azurerm_api_management_api_version_set.personalisationms_api_version_set[count.index].id
#   contact {
#     email = var.publisher_email
#     name  = var.publisher_name
#   }

#   display_name = "personalisationms"
#   protocols    = ["https"]

#   import {
#     content_format = "openapi"
#     content_value  = file("${path.module}/schema/personalisationMS.openapi.yaml")
#   }
#   subscription_required = false
#   service_url           = "https://${azurerm_linux_web_app.personalisation[count.index].default_hostname}/"
# }

# resource "azurerm_api_management_api_version_set" "personalisationms_api_version_set" {
#   count               = var.deploy_main_resource_group && var.deploy_apim ? 1 : 0
#   name                = "personalisationms"
#   resource_group_name = azurerm_resource_group.rg-main[count.index].name
#   api_management_name = azurerm_api_management.apim[count.index].name
#   display_name        = "personalisationms"
#   versioning_scheme   = "Segment"
# }
