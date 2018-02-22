odoo.define('pos_logo_address_sync.product', function (require) {
    "use strict";

    var core = require('web.core');
    var models = require('point_of_sale.models');
    var _super_posmodel = models.PosModel.prototype;
    
    models.PosModel = models.PosModel.extend({
        initialize: function (session, attributes) {
            // New code
            var partner_model = _.find(this.models, function(model){
                return model.model === 'product.product';
            });
            
            partner_model.fields.push('qty_available');
            partner_model.fields.push('pos_qty_available');
            
            // Inheritance
            return _super_posmodel.initialize.call(this, session, attributes);
        },
    });


});