# Creating a resource group for web apps
resource "azurerm_resource_group" "rg-main" {
  count    = var.deploy_main_resource_group ? 1 : 0
  name     = "${var.environment}-${var.resource_group_name}"
  location = var.location
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}