# Purpose: Create an Azure App Service Plan
resource "azurerm_service_plan" "service" {
  count               = var.deploy_main_resource_group && var.deploy_service_plan ? 1 : 0
  name                = "${var.environment}-${var.app_service_plan_name}-${var.location_short}"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg-main[0].name
  os_type             = var.app_service_plan_is_linux ? "Linux" : "Windows"
  sku_name            = var.app_service_plan_sku

  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}
