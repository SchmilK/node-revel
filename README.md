## Installation
``` javascript
 npm install node-revel --save
```

## Overview

- Handles Authentication
- Allows Creating, Updating, Getting of all Revel objects
- Returns Promises

The node-revel package is an easy way to deal with the revel API when using node. Every resource url is mapped to a function. This allows you to interact with your Revel objects by using four methods for each resource URL (get, insert, update, getAll). 

For each revel URL all you have to do is replace the 'Resource' name you want to interact with within the function:

Here is an example where the resource url is '/resources/Order/': 

``` javascript
var NodeRevel = require('node-revel');

nodeRevel = new NodeRevel(endpoint, apiKey, apiSecret, enterpriseUserUri);

nodeRevel.getOrder(id)
  .then((result) => {
    console.log(result);
  })

nodeRevel.insertOrder(orderObject)
  .then((result) => {
    console.log(result);
  })

nodeRevel.updateOrder(orderObject, id)
  .then((result) => {
    console.log(result);

  })
  // parameters are optional, returns a complete list of all orders if no parameters are specified.
nodeRevel.getAllOrders(parameters)
  .then((result) => {
    console.log(result);
  })

```
If you want to interact with a different object, for example products with a resource URL of: "/resources/Product/" the function would be ``` getProduct() ``` or if you want to access an order item at "/resources/OrderItem/" the function would be ``` getOrderItem()```. 



A full list of all the functions can be found at the bottom of this readme. 


## Example Usage: 

``` javascript

var NodeRevel = require('node-revel');

var endpoint = 'https://xxxxxxxx.revelup.com';
var apiKey = 'xxxxxxxxx';
var apiSecret = 'xxxxxxxxxxxxxx';

// the enterprise user uri is saved within each object that is updated or created.
var enterpriseUserUri = '/enterprise/User/1/';

// create a new revel object
nodeRevel = new NodeRevel(endpoint, apiKey, apiSecret, enterpriseUserUri);


// get all customers where email =  kristo.mikkonen@fabacus.com 
var parameters = {
  format: "json",
  email__iexact: "kristo.mikkonen@fabacus.com"
}

nodeRevel.getAllCustomers(parameters)
  .then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });


// get Customer where id = 5
nodeRevel.getCustomer(5)
  .then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });


// insert customer example
var customer = {
  email:"patrick.mckinley@fabacus.com",
  first_name: "Patrick",
  last_name: "Mckinley"
}

nodeRevel.insertCustomer(customer)
  .then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });


// update customer email,first_name,last_name where revel id = 5
var customer = {
  email:"user@email.com",
  first_name: "joe",
  last_name: "bloggs"
}

nodeRevel.updateCustomer(customer, '5')
  .then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });

```

##Full list of functions: 

``` javascript
  getAddress()
  updateAddress()
  insertAddress()
  getAllAddresss()
  getAppliedServiceFee()
  updateAppliedServiceFee()
  insertAppliedServiceFee()
  getAllAppliedServiceFees()
  getAppliedTaxOrder()
  updateAppliedTaxOrder()
  insertAppliedTaxOrder()
  getAllAppliedTaxOrders()
  getAppliedTaxOrderItem()
  updateAppliedTaxOrderItem()
  insertAppliedTaxOrderItem()
  getAllAppliedTaxOrderItems()
  getAppointment()
  updateAppointment()
  insertAppointment()
  getAllAppointments()
  getAttribute()
  updateAttribute()
  insertAttribute()
  getAllAttributes()
  getAttributeValue()
  updateAttributeValue()
  insertAttributeValue()
  getAllAttributeValues()
  getBankDrop()
  updateBankDrop()
  insertBankDrop()
  getAllBankDrops()
  getBoard()
  updateBoard()
  insertBoard()
  getAllBoards()
  getBrand()
  updateBrand()
  insertBrand()
  getAllBrands()
  getBusinessActionLog()
  updateBusinessActionLog()
  insertBusinessActionLog()
  getAllBusinessActionLogs()
  getBusinessDay()
  updateBusinessDay()
  insertBusinessDay()
  getAllBusinessDays()
  getCardswipe()
  updateCardswipe()
  insertCardswipe()
  getAllCardswipes()
  getCateringDelivery()
  updateCateringDelivery()
  insertCateringDelivery()
  getAllCateringDeliverys()
  getClockInImage()
  updateClockInImage()
  insertClockInImage()
  getAllClockInImages()
  getComboProductSet()
  updateComboProductSet()
  insertComboProductSet()
  getAllComboProductSets()
  getCompany()
  updateCompany()
  insertCompany()
  getAllCompanys()
  getCurrency()
  updateCurrency()
  insertCurrency()
  getAllCurrencys()
  getCustomMenu()
  updateCustomMenu()
  insertCustomMenu()
  getAllCustomMenus()
  getCustomer()
  updateCustomer()
  insertCustomer()
  getAllCustomers()
  getCustomerAddress()
  updateCustomerAddress()
  insertCustomerAddress()
  getAllCustomerAddresss()
  getCustomerGroup()
  updateCustomerGroup()
  insertCustomerGroup()
  getAllCustomerGroups()
  getCustomerGroupCustomers()
  updateCustomerGroupCustomers()
  insertCustomerGroupCustomers()
  getAllCustomerGroupCustomerss()
  getCustomerHistory()
  updateCustomerHistory()
  insertCustomerHistory()
  getAllCustomerHistorys()
  getCustomerImage()
  updateCustomerImage()
  insertCustomerImage()
  getAllCustomerImages()
  getDeclaredTips()
  updateDeclaredTips()
  insertDeclaredTips()
  getAllDeclaredTipss()
  getDeliveries()
  updateDeliveries()
  insertDeliveries()
  getAllDeliveriess()
  getDeliveryDriver()
  updateDeliveryDriver()
  insertDeliveryDriver()
  getAllDeliveryDrivers()
  getDeliveryMileage()
  updateDeliveryMileage()
  insertDeliveryMileage()
  getAllDeliveryMileages()
  getDepartment()
  updateDepartment()
  insertDepartment()
  getAllDepartments()
  getDevice()
  updateDevice()
  insertDevice()
  getAllDevices()
  getDeviceExtraParameters()
  updateDeviceExtraParameters()
  insertDeviceExtraParameters()
  getAllDeviceExtraParameterss()
  getDeviceView()
  updateDeviceView()
  insertDeviceView()
  getAllDeviceViews()
  getDiscount()
  updateDiscount()
  insertDiscount()
  getAllDiscounts()
  getDiscountCode()
  updateDiscountCode()
  insertDiscountCode()
  getAllDiscountCodes()
  getDiscountLevel()
  updateDiscountLevel()
  insertDiscountLevel()
  getAllDiscountLevels()
  getDisplayUnit()
  updateDisplayUnit()
  insertDisplayUnit()
  getAllDisplayUnits()
  getDynamicCombo()
  updateDynamicCombo()
  insertDynamicCombo()
  getAllDynamicCombos()
  getDynamicComboUpsellSlot()
  updateDynamicComboUpsellSlot()
  insertDynamicComboUpsellSlot()
  getAllDynamicComboUpsellSlots()
  getEmployee()
  updateEmployee()
  insertEmployee()
  getAllEmployees()
  getEmployeeRoleEstablishment()
  updateEmployeeRoleEstablishment()
  insertEmployeeRoleEstablishment()
  getAllEmployeeRoleEstablishments()
  getEnablerFieldNameMapping()
  updateEnablerFieldNameMapping()
  insertEnablerFieldNameMapping()
  getAllEnablerFieldNameMappings()
  getEstablishment()
  updateEstablishment()
  insertEstablishment()
  getAllEstablishments()
  getEventDate()
  updateEventDate()
  insertEventDate()
  getAllEventDates()
  getEventInfo()
  updateEventInfo()
  insertEventInfo()
  getAllEventInfos()
  getEventInventory()
  updateEventInventory()
  insertEventInventory()
  getAllEventInventorys()
  getFiscalReport()
  updateFiscalReport()
  insertFiscalReport()
  getAllFiscalReports()
  getForecourtData()
  updateForecourtData()
  insertForecourtData()
  getAllForecourtDatas()
  getGiftCard()
  updateGiftCard()
  insertGiftCard()
  getAllGiftCards()
  getGiftCardLog()
  updateGiftCardLog()
  insertGiftCardLog()
  getAllGiftCardLogs()
  getGrades()
  updateGrades()
  insertGrades()
  getAllGradess()
  getHoseLogs()
  updateHoseLogs()
  insertHoseLogs()
  getAllHoseLogss()
  getHoses()
  updateHoses()
  insertHoses()
  getAllHosess()
  getHouseAccountPayment()
  updateHouseAccountPayment()
  insertHouseAccountPayment()
  getAllHouseAccountPayments()
  getIngredient()
  updateIngredient()
  insertIngredient()
  getAllIngredients()
  getIngredientInventory()
  updateIngredientInventory()
  insertIngredientInventory()
  getAllIngredientInventorys()
  getIngredientPurchase()
  updateIngredientPurchase()
  insertIngredientPurchase()
  getAllIngredientPurchases()
  getInventory()
  updateInventory()
  insertInventory()
  getAllInventorys()
  getInventoryReceipt()
  updateInventoryReceipt()
  insertInventoryReceipt()
  getAllInventoryReceipts()
  getInventoryStockAmount()
  updateInventoryStockAmount()
  insertInventoryStockAmount()
  getAllInventoryStockAmounts()
  getInventoryUnit()
  updateInventoryUnit()
  insertInventoryUnit()
  getAllInventoryUnits()
  getKitchenProduct()
  updateKitchenProduct()
  insertKitchenProduct()
  getAllKitchenProducts()
  getKitchenView()
  updateKitchenView()
  insertKitchenView()
  getAllKitchenViews()
  getLanguagePackage()
  updateLanguagePackage()
  insertLanguagePackage()
  getAllLanguagePackages()
  getLanguagePackageItem()
  updateLanguagePackageItem()
  insertLanguagePackageItem()
  getAllLanguagePackageItems()
  getLoyaltyTier()
  updateLoyaltyTier()
  insertLoyaltyTier()
  getAllLoyaltyTiers()
  getLoyaltyTierRule()
  updateLoyaltyTierRule()
  insertLoyaltyTierRule()
  getAllLoyaltyTierRules()
  getModifier()
  updateModifier()
  insertModifier()
  getAllModifiers()
  getModifierClass()
  updateModifierClass()
  insertModifierClass()
  getAllModifierClasss()
  getModifierDiscount()
  updateModifierDiscount()
  insertModifierDiscount()
  getAllModifierDiscounts()
  getModifierItem()
  updateModifierItem()
  insertModifierItem()
  getAllModifierItems()
  getModifierRecipe()
  updateModifierRecipe()
  insertModifierRecipe()
  getAllModifierRecipes()
  getOrder()
  updateOrder()
  insertOrder()
  getAllOrders()
  getOrderAllInOne()
  updateOrderAllInOne()
  insertOrderAllInOne()
  getAllOrderAllInOnes()
  getOrderExchange()
  updateOrderExchange()
  insertOrderExchange()
  getAllOrderExchanges()
  getOrderExchangeItem()
  updateOrderExchangeItem()
  insertOrderExchangeItem()
  getAllOrderExchangeItems()
  getOrderHistory()
  updateOrderHistory()
  insertOrderHistory()
  getAllOrderHistorys()
  getOrderItem()
  updateOrderItem()
  insertOrderItem()
  getAllOrderItems()
  getOrderItemCatering()
  updateOrderItemCatering()
  insertOrderItemCatering()
  getAllOrderItemCaterings()
  getOrderItemCommission()
  updateOrderItemCommission()
  insertOrderItemCommission()
  getAllOrderItemCommissions()
  getOrderRegistryData()
  updateOrderRegistryData()
  insertOrderRegistryData()
  getAllOrderRegistryDatas()
  getOrderTaxBreakDown()
  updateOrderTaxBreakDown()
  insertOrderTaxBreakDown()
  getAllOrderTaxBreakDowns()
  getOriginalProductGroup()
  updateOriginalProductGroup()
  insertOriginalProductGroup()
  getAllOriginalProductGroups()
  getPOSMessage()
  updatePOSMessage()
  insertPOSMessage()
  getAllPOSMessages()
  getPOSOfferTransaction()
  updatePOSOfferTransaction()
  insertPOSOfferTransaction()
  getAllPOSOfferTransactions()
  getPackage()
  updatePackage()
  insertPackage()
  getAllPackages()
  getPayment()
  updatePayment()
  insertPayment()
  getAllPayments()
  getPaymentSignatureImage()
  updatePaymentSignatureImage()
  insertPaymentSignatureImage()
  getAllPaymentSignatureImages()
  getPayout()
  updatePayout()
  insertPayout()
  getAllPayouts()
  getPermission()
  updatePermission()
  insertPermission()
  getAllPermissions()
  getPortData()
  updatePortData()
  insertPortData()
  getAllPortDatas()
  getPosStation()
  updatePosStation()
  insertPosStation()
  getAllPosStations()
  getPosTemplate()
  updatePosTemplate()
  insertPosTemplate()
  getAllPosTemplates()
  getProduct()
  updateProduct()
  insertProduct()
  getAllProducts()
  getProductCategory()
  updateProductCategory()
  insertProductCategory()
  getAllProductCategorys()
  getProductCategorySoldCount()
  updateProductCategorySoldCount()
  insertProductCategorySoldCount()
  getAllProductCategorySoldCounts()
  getProductClass()
  updateProductClass()
  insertProductClass()
  getAllProductClasss()
  getProductGroup()
  updateProductGroup()
  insertProductGroup()
  getAllProductGroups()
  getProductGroupAction()
  updateProductGroupAction()
  insertProductGroupAction()
  getAllProductGroupActions()
  getProductModifier()
  updateProductModifier()
  insertProductModifier()
  getAllProductModifiers()
  getProductModifierClass()
  updateProductModifierClass()
  insertProductModifierClass()
  getAllProductModifierClasss()
  getProductPurchase()
  updateProductPurchase()
  insertProductPurchase()
  getAllProductPurchases()
  getProductPurchaseOrderItem()
  updateProductPurchaseOrderItem()
  insertProductPurchaseOrderItem()
  getAllProductPurchaseOrderItems()
  getProductRecipe()
  updateProductRecipe()
  insertProductRecipe()
  getAllProductRecipes()
  getProductRevelImage()
  updateProductRevelImage()
  insertProductRevelImage()
  getAllProductRevelImages()
  getProductSerial()
  updateProductSerial()
  insertProductSerial()
  getAllProductSerials()
  getProductVariablePrice()
  updateProductVariablePrice()
  insertProductVariablePrice()
  getAllProductVariablePrices()
  getProtocolType()
  updateProtocolType()
  insertProtocolType()
  getAllProtocolTypes()
  getPumpProtocolData()
  updatePumpProtocolData()
  insertPumpProtocolData()
  getAllPumpProtocolDatas()
  getPumpTypeData()
  updatePumpTypeData()
  insertPumpTypeData()
  getAllPumpTypeDatas()
  getPumps()
  updatePumps()
  insertPumps()
  getAllPumpss()
  getPurchaseOrder()
  updatePurchaseOrder()
  insertPurchaseOrder()
  getAllPurchaseOrders()
  getPurchaseOrderInvoice()
  updatePurchaseOrderInvoice()
  insertPurchaseOrderInvoice()
  getAllPurchaseOrderInvoices()
  getPurchaseOrderItem()
  updatePurchaseOrderItem()
  insertPurchaseOrderItem()
  getAllPurchaseOrderItems()
  getReceiptText()
  updateReceiptText()
  insertReceiptText()
  getAllReceiptTexts()
  getReturn()
  updateReturn()
  insertReturn()
  getAllReturns()
  getReturnedItem()
  updateReturnedItem()
  insertReturnedItem()
  getAllReturnedItems()
  getRevelImage()
  updateRevelImage()
  insertRevelImage()
  getAllRevelImages()
  getRevenueCenter()
  updateRevenueCenter()
  insertRevenueCenter()
  getAllRevenueCenters()
  getRewardCardLog()
  updateRewardCardLog()
  insertRewardCardLog()
  getAllRewardCardLogs()
  getRewardsCard()
  updateRewardsCard()
  insertRewardsCard()
  getAllRewardsCards()
  getRewardsCardNew()
  updateRewardsCardNew()
  insertRewardsCardNew()
  getAllRewardsCardNews()
  getRole()
  updateRole()
  insertRole()
  getAllRoles()
  getServiceFee()
  updateServiceFee()
  insertServiceFee()
  getAllServiceFees()
  getShipRate()
  updateShipRate()
  insertShipRate()
  getAllShipRates()
  getSiteModeSettings()
  updateSiteModeSettings()
  insertSiteModeSettings()
  getAllSiteModeSettingss()
  getSocialNetwork()
  updateSocialNetwork()
  insertSocialNetwork()
  getAllSocialNetworks()
  getSpecialRequest()
  updateSpecialRequest()
  insertSpecialRequest()
  getAllSpecialRequests()
  getSurcharge()
  updateSurcharge()
  insertSurcharge()
  getAllSurcharges()
  getSystemSetting()
  updateSystemSetting()
  insertSystemSetting()
  getAllSystemSettings()
  getSystemSettingOption()
  updateSystemSettingOption()
  insertSystemSettingOption()
  getAllSystemSettingOptions()
  getTable()
  updateTable()
  insertTable()
  getAllTables()
  getTableReservation()
  updateTableReservation()
  insertTableReservation()
  getAllTableReservations()
  getTableSection()
  updateTableSection()
  insertTableSection()
  getAllTableSections()
  getTableTag()
  updateTableTag()
  insertTableTag()
  getAllTableTags()
  getTableType()
  updateTableType()
  insertTableType()
  getAllTableTypes()
  getTanks()
  updateTanks()
  insertTanks()
  getAllTankss()
  getTax()
  updateTax()
  insertTax()
  getAllTaxs()
  getTaxAgency()
  updateTaxAgency()
  insertTaxAgency()
  getAllTaxAgencys()
  getTaxCode()
  updateTaxCode()
  insertTaxCode()
  getAllTaxCodes()
  getTaxProductGroup()
  updateTaxProductGroup()
  insertTaxProductGroup()
  getAllTaxProductGroups()
  getTaxRate()
  updateTaxRate()
  insertTaxRate()
  getAllTaxRates()
  getTaxTable()
  updateTaxTable()
  insertTaxTable()
  getAllTaxTables()
  getTill()
  updateTill()
  insertTill()
  getAllTills()
  getTimeBlock()
  updateTimeBlock()
  insertTimeBlock()
  getAllTimeBlocks()
  getTimeSchedule()
  updateTimeSchedule()
  insertTimeSchedule()
  getAllTimeSchedules()
  getTimeScheduleRule()
  updateTimeScheduleRule()
  insertTimeScheduleRule()
  getAllTimeScheduleRules()
  getTimeSheetEntry()
  updateTimeSheetEntry()
  insertTimeSheetEntry()
  getAllTimeSheetEntrys()
  getTimetable()
  updateTimetable()
  insertTimetable()
  getAllTimetables()
  getTimetableItem()
  updateTimetableItem()
  insertTimetableItem()
  getAllTimetableItems()
  getUnitType()
  updateUnitType()
  insertUnitType()
  getAllUnitTypes()
  getUser()
  updateUser()
  insertUser()
  getAllUsers()
  getVendor()
  updateVendor()
  insertVendor()
  getAllVendors()
  getVendorEstablishment()
  updateVendorEstablishment()
  insertVendorEstablishment()
  getAllVendorEstablishments()
  getViewPurchaseOrder()
  updateViewPurchaseOrder()
  insertViewPurchaseOrder()
  getAllViewPurchaseOrders()
  getViewPurchaseOrderProduct()
  updateViewPurchaseOrderProduct()
  insertViewPurchaseOrderProduct()
  getAllViewPurchaseOrderProducts()
  getViewTax()
  updateViewTax()
  insertViewTax()
  getAllViewTaxs()
  getVisitorTracking()
  updateVisitorTracking()
  insertVisitorTracking()
  getAllVisitorTrackings()
```


Any feedback is appreciated.

## Contributers: 

Kristo Mikkonen
kristo.mikkonen@fabacus.com

Patrick McKinley
patrick.mckinley@fabacus.com


