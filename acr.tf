# Purpose: Create Azure Container Registry (ACR) resource.
resource "azurerm_container_registry" "acr" {
  count               = var.deploy_main_resource_group && var.deploy_acr ? 1 : 0
  name                = "${var.environment}${var.acr_name}${var.location_short}"
  resource_group_name = azurerm_resource_group.rg-main[count.index].name
  location            = azurerm_resource_group.rg-main[count.index].location
  sku                 = var.acr_sku
  admin_enabled       = true
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}
