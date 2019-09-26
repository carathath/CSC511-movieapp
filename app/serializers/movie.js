import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    normalizeResponse(store, primaryModelClass, id, requestType) {
        payload.data = payload.Search;
        payload.data.forEach(item => {
            item.type = primaryModelClass.modelName;
            item.attributes = {
                Title: item.Title,
                Year: item.Year,
                imdbID: item.imdbID,
                Type: item.Type,
                Plot: item.Plot,
                Runtime: item.Runtime,
                Poster: item.Poster
            }
            delete item.Title;
            delete item.Year;
            delete item.imdbID;
            delete item.Type;
            delete item.Plot;
            delete item.Runtime;
            delete item.Poster;
        });

        delete payload.Search;
        return this._super(...arguments);
    }
});
