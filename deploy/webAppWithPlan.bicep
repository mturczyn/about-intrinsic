@allowed(['prod', 'nonprod'])
param environmentType string

var location = resourceGroup().location
var tags = { env: environmentType }

var appServicePlanName = 'intrinsic-${environmentType}-asp'
var webappName = environmentType == 'prod' 
  ? 'intrinsic-michal-turczyn' 
  : 'intrinsic-michal-turczyn-${environmentType}-webapp'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: appServicePlanName
  location: location
  kind: 'linux'
  sku: {
    name: 'F1'
    capacity: 1
  }
  properties: {
    reserved: true
  }
  tags: tags
}

resource webApplication 'Microsoft.Web/sites@2023-12-01' = {
  name: webappName
  location: location
  kind: 'app,linux,container'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'DOCKER|intrinsicweb.azurecr.io/intrinsicweb/about-intrinsic:724fee6883ff4fa2ba1b5a9c4f1939687dafbcd0'
    }
  }
  tags: tags
}

output webAppName string = webApplication.name
