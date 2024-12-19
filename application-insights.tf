# Purpose: Create an Application Insights instance in Azure to monitor the web app. 
resource "azurerm_application_insights" "appinsights" {
  count               = var.deploy_main_resource_group && var.deploy_application_insights ? 1 : 0
  name                = "${var.environment}-${var.application_insights_name}-${var.location_short}"
  resource_group_name = azurerm_resource_group.rg-main[count.index].name
  location            = azurerm_resource_group.rg-main[count.index].location
  application_type    = "web"
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}
