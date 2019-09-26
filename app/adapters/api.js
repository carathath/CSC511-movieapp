import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',

    pathForType() {
        return '';
    },

    buildURL(modelName, id, snapshot, requestType, query = {}) {
        query.apikey = ENV.OMDB_API_KEY;
        return this._super(...arguments);
    }
});
