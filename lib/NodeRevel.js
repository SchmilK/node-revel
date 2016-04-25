'use strict'

var request = require('request');

class NodeRevel {

  //lets do this thing
  constructor(endpoint, apiKey, apiSecret, enterpriseUserUri) {


    if (!endpoint || !apiKey || !apiSecret || !enterpriseUserUri) {

      throw new Error('You must create a node-revel object with all 4 fields: endpoint, apiKey, apiSecret, enterpriseUserUri');

    }

    if (!this) return new KristoRevel(endpoint, apiKey, apiSecret, enterpriseUserUri);

    this.endpoint = this._prepareEndpoint(endpoint);
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.enterpriseUserUri = enterpriseUserUri;

  }

  insertOrder(orderObject) {

    const resourceUrl = 'resources/Customer/';
    return this._insertObject(orderObject, resourceUrl);
  }

  insertCustomer(customerObject) {

    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    var addresses = [];

    if (customerObject.addresses) {
      customerObject.addresses.forEach((address) => {

        addresses.push({
          "active": address.active || true,
          "address_type": address.address_type || null,
          "city": address.city || "",
          "company_name": address.company_name || "",
          "country": address.country || "",
          "created_date": localISOTime,
          "email": address.email || "",
          "name": address.name || "",
          "phone_number": address.phone_number || "",
          "primary_billing": address.primary_billing || false,
          "primary_shipping": address.primary_shipping || false,
          "state": address.state || "",
          "street_1": address.street_1 || "",
          "street_2": address.street_2 || "",
          "updated_date": localISOTime,
          "zipcode": address.zipcode || ""
        })

      })
    }


    customerObject.active = customerObject.active || true
    customerObject.address = customerObject.address || ""
    customerObject.addresses = addresses
    customerObject.birth_date = customerObject.birth_date || null
    customerObject.cc_exp = customerObject.cc_exp || null
    customerObject.cc_first_name = customerObject.cc_first_name || null
    customerObject.cc_last_4_digits = customerObject.cc_last_4_digits || null
    customerObject.cc_last_name = customerObject.cc_last_name || null
    customerObject.cc_number = customerObject.cc_number || ""
    customerObject.city = customerObject.city || ""
    customerObject.company_name = customerObject.company_name || ""
    customerObject.contract_expiration = customerObject.contract_expiration || null
    customerObject.created_by = this.enterpriseUserUri
    customerObject.created_date = localISOTime
    customerObject.customer_groups = customerObject.customer_groups || []
    customerObject.deleted = false
    customerObject.email = customerObject.email || ""
    customerObject.exp_date = customerObject.exp_date || null
    customerObject.expensify_account = customerObject.expensify_account || null
    customerObject.first_name = customerObject.first_name || ""
    customerObject.gift_card_numbers = []
    customerObject.created_by = this.enterpriseUserUri
    customerObject.image = customerObject.image || null
    customerObject.is_visitor = customerObject.is_visitor || false
    customerObject.last_name = customerObject.last_name || ""
    customerObject.lic_number = customerObject.lic_number || null
    customerObject.loyalty_number = customerObject.loyalty_number || ""
    customerObject.loyalty_ref_id = customerObject.loyalty_ref_id || ""
    customerObject.notes = customerObject.notes || ""
    customerObject.phone_number = customerObject.phone_number || ""
    customerObject.picture = customerObject.picture || ""
    customerObject.ref_number = customerObject.ref_number || ""
    customerObject.reward_card_numbers = []
    customerObject.source = customerObject.source || 0
    customerObject.state = customerObject.state || ""
    customerObject.total_purchases = customerObject.total_purchases || 0
    customerObject.total_visits = customerObject.total_visits || 0
    customerObject.updated_by = this.enterpriseUserUri
    customerObject.zipcode = customerObject.zipcode || ""


    const resourceUrl = 'resources/Customer/';
    return this._insertObject(customerObject, resourceUrl);

  }

  updateCustomer(customerObject, id) {

    if (!id) {
      throw new Error('missing id for update');
    }

    id = this._prepareUri(id);

    const resourceUrl = 'resources/Customer/' + id;
    customerObject.updated_by = this.enterpriseUserUri;
    return this._updateObject(customerObject, resourceUrl);

  }

  deleteCustomer(id) {

    if (!id) {
      throw new Error('missing id for update');
    }

    id = this._prepareUri(id);

    const resourceUrl = 'resources/Customer/' + id;

    var customerObject = {};
    customerObject.deleted = true;
    customerObject.updated_by = this.enterpriseUserUri;

    return this._updateObject(customerObject, resourceUrl);

  }

  getCustomer(id) {

    if (id) {
      id = this._prepareUri(id);
    } else {
      var id = "";
    }

    const resourceUrl = 'resources/Customer/' + id;
    return this._getObject(resourceUrl);

  }

  getAllCustomers(parameters) {

    parameters = parameters || {
      format: "json",
      limit: 0
    }

    const resourceUrl = 'resources/Customer/';
    return this._getObject(resourceUrl, parameters);

  }

  getOrder(id) {

    if (id) {
      id = this._prepareUri(id);
    } else {
      var id = "";
    }

    const resourceUrl = 'resources/Order/' + id;
    return this._getObject(resourceUrl);

  }


  getAllOrders(parameters) {

    parameters = parameters || {
      format: "json",
      limit: 0
    }

    const resourceUrl = 'resources/Order/';
    return this._getObject(resourceUrl, parameters);

  }


  /*  
      first check is customer exists with a get request,
      by using the customer based resource_uri
    patch if exists else post. 

    if the customer object has an address array we will check if it exists and upsert in a similar fashion as the customer object
    */


  _insertObject(object, resourceUrl) {

    object.created_by = object.created_by || this.enterpriseUserUri;
    var callUrl = this.endpoint + resourceUrl;

    console.log(object);
    var args = {
      method: 'POST',
      url: callUrl,
      body: JSON.stringify(object),
      format: 'json',
      headers: {
        'Content-Type': 'application/json',
        "API-AUTHENTICATION": this.apiKey + ":" + this.apiSecret
      },

    }
    return new Promise((resolve, reject) => {
      request(args, function(error, response, body) {
        console.log(body);

        if (Buffer.isBuffer(body)) {
          reject(
            new Error('something went wrong with the API call \n Request method: POST \n URL: ' + args.url + '\n data: \n ' + body.toString())
          );
        }

        resolve(body);

      })

    });

  }


  _getObject(resource_uri, parameters) {

    parameters = parameters || { format: "json" };

    resource_uri = resource_uri || object.resource_uri;

    var callUrl = this.endpoint + resource_uri;

    //callUrl = "https://huntsman.revelup.com/resources/Customer/";

    var args = {

      url: callUrl,
      qs: parameters,
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "API-AUTHENTICATION": this.apiKey + ":" + this.apiSecret,

      }
    };

    return new Promise((resolve, reject) => {
      request(args, function(error, responses, body) {
        body = JSON.stringify(body);
        body = JSON.parse(body);
        resolve(body);

      });
    })
  }

  _updateObject(object, resource_uri) {

    object.resource_uri = resource_uri || object.resource_uri;

    var callUrl = this.endpoint + object.resource_uri;

    //callUrl = "https://huntsman.revelup.com/resources/Customer/";
    console.log(callUrl);

    var args = {
      url: callUrl,
      body: JSON.stringify(object),
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "API-AUTHENTICATION": this.apiKey + ":" + this.apiSecret
      }
    };


    return new Promise((resolve, reject) => {
      request(args, function(error, responses, body) {
        body = JSON.stringify(body);
        body = JSON.parse(body);
        resolve(body);

      });
    })
  }

  upsertObject(object, key, resource_uri) {


    object.resource_uri = resource_uri || object.resource_uri;
    key = key || false;
    // use iexact key

    console.log('todo');
  }


  // Upsert customer  exists in our own DB and get a symphony id
  // then check if that customer has a revel_id 
  // if it does then patch the information in the customer object and take the address array
  // take their address array and check if they have a billing and a shipping address update one accordingly

  upsertCustomer(object, key, resource_uri) {

    object.resource_uri = resource_uri || object.resource_uri;
    key = key || false;

  }

  _prepareEndpoint(endpoint) {
    // make sure it has a trailing "/" and begins with https://

    //if (new RegExp(endpoint).test('https://')) {
    if (endpoint.indexOf('https://') >= 0) {

      var lastChar = endpoint.substr(-1); // Selects the last character
      if (lastChar != '/') { // If the last character is not a slash
        endpoint = endpoint + '/'; // Append a slash to it.
      }

      return endpoint;

    } else {
      throw new Error('Endpoint: ' + endpoint + ' must begin with "https://"');
    }

  }

  _prepareUri(uri) {

    //get the int id and add a "/" to it
    uri = parseInt(uri);

    uri = uri + '/';
    return uri;

  }

}

module.exports = NodeRevel;
