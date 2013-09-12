/**
 * @module ./manual-table.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ManualTable
 * @extends Component
 */
exports.ManualTable = Component.specialize(/** @lends ManualTable# */ {
    constructor: {
        value: function ManualTable() {
            this.super();
        }
    }
});
