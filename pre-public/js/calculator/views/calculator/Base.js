/*
 * CalculatorBase
 */
define(function () {
    console.log('CORE: calculatorBase called');	
    function calculatorBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    calculatorBase.prototype = {
        getConfigs: function () {
            console.log('CORE: calculatorBase getConfigs() called');            
            return this.configs;
        }
    };
    return calculatorBase;
});
