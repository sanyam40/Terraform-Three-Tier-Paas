# Purpose: Create a storage account and a container in the storage account
resource "azurerm_storage_account" "storage" {
  count                    = var.deploy_main_resource_group && var.deploy_storage_resources ? 1 : 0
  name                     = "${var.environment}${var.storage_account_name}${var.location_short}"
  resource_group_name      = azurerm_resource_group.rg-main[count.index].name
  location                 = azurerm_resource_group.rg-main[count.index].location
  account_tier             = var.storage_account_tier
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  tags = {
    environment = var.environment,
    deploy_mode = var.deploy_mode
  }
}
