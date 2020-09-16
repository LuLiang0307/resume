'use strict';

window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        init: function init() {
            var APP_ID = 'rCwH8Apt0eMqF8L5eX51eXYy-gzGzoHsz';
            var APP_KEY = 'a97cELdbFXVms1mnyBG5WYH6';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function fetch() {
            var query = new AV.Query(resourceName);
            return query.find();
        },
        save: function save(object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object);
        }
    };
};