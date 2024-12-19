# Purpose: Create a search service in Azure.
resource "azurerm_search_service" "search_service" {
  count               = var.deploy_main_resource_group && var.deploy_search_service ? 1 : 0
  name                = "${var.environment}-${var.search_service_name}-${var.location_short}"
  resource_group_name = azurerm_resource_group.rg-main[count.index].name
  location            = azurerm_resource_group.rg-main[count.index].location
  sku                 = var.search_service_sku
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}