# Frontend Web App
resource "azurerm_linux_web_app" "frontend" {
  count               = var.deploy_main_resource_group && var.deploy_frontend_webapp ? 1 : 0
  name                = "${var.environment}-${var.app_name_frontend}-${var.location_short}"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg-main[count.index].name

  service_plan_id = azurerm_service_plan.service[count.index].id
  https_only      = true
  site_config {
    always_on = true

    application_stack {
      docker_image_name        = var.Frontend_Docker_Image
      # docker_registry_url      = "https://${azurerm_container_registry.acr.login_server}"
      # docker_registry_password = azurerm_container_registry.acr.admin_password
      # docker_registry_username = azurerm_container_registry.acr.admin_username
    }
    ip_restriction {
      priority    = 500
      service_tag = "AzureCloud"
      name        = "azure-cloud"
    }
  }
  app_settings = {
    APPINSIGHTS_INSTRUMENTATIONKEY             = azurerm_application_insights.appinsights[count.index].instrumentation_key
    APPLICATIONINSIGHTS_CONNECTION_STRING      = azurerm_application_insights.appinsights[count.index].connection_string
    ApplicationInsightsAgent_EXTENSION_VERSION = "~3"
    # DOCKER_REGISTRY_SERVER_PASSWORD=
    # DOCKER_REGISTRY_SERVER_URL=
    # DOCKER_REGISTRY_SERVER_USERNAME=
    PORT     = 3000
  }
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}

# Personalisation Web App
resource "azurerm_linux_web_app" "personalisation" {
  count               = var.deploy_main_resource_group && var.deploy_personalisationms_webapp ? 1 : 0
  name                = "${var.environment}-${var.app_name_personalisation}-${var.location_short}"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg-main[count.index].name

  service_plan_id = azurerm_service_plan.service[count.index].id
  https_only      = true
  site_config {
    always_on = true

    application_stack {
      docker_image_name        = var.Personalisation_Docker_Image
      # docker_registry_url      = "https://${azurerm_container_registry.acr.login_server}"
      # docker_registry_password = azurerm_container_registry.acr.admin_password
      # docker_registry_username = azurerm_container_registry.acr.admin_username
    }
    ip_restriction {
      priority    = 500
      service_tag = "AzureCloud"
      name        = "azure-cloud"
    }
  }
  app_settings = {
    APPINSIGHTS_INSTRUMENTATIONKEY             = azurerm_application_insights.appinsights[count.index].instrumentation_key
    APPLICATIONINSIGHTS_CONNECTION_STRING      = azurerm_application_insights.appinsights[count.index].connection_string
    ApplicationInsightsAgent_EXTENSION_VERSION = "~3"
    # DOCKER_REGISTRY_SERVER_PASSWORD=
    # DOCKER_REGISTRY_SERVER_URL=
    # DOCKER_REGISTRY_SERVER_USERNAME=

  }
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}
