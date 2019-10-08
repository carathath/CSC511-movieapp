import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalizeResponse(store, primaryModelClass, payload) {
    payload.data = {}
    payload.data.imdbID = payload.imdbID
    payload.data.type = primaryModelClass.modelName
    payload.data.attributes = {
        Title: payload.Title,
        Year: payload.Year,
        Runtime: payload.Runtime,
        Director: payload.Director,
        Plot: payload.Plot,
        Poster: payload.Poster,
        imdbID: payload.imdbID,
        Type: payload.Type
      };

    //delete payload.data;
    return this._super(...arguments);
  }
});