import DS from 'ember-data';
import ENV from 'movieapp/config/environment';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',

    pathForType() {
        return '';
    },

    buildURL(modelName, snapshot, query = {}) {
        query.apikey = ENV.OMDB_API_KEY;
        return this._super(...arguments);
    }
});
