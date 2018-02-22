
# -*- coding: utf-8 -*-
###############################################################################
#    License, author and contributors information in:                         #
#    __manifest__.py file at the root folder of this module.                  #
###############################################################################

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

class ProductProduct(models.Model):
    _inherit = "product.product"

    pos_qty_available = fields.Boolean('Show Available Qty in POS?')

