import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalize(store, primaryModelClass, payload) {
    payload.data = {}
    payload.data.imdbID = payload.imdbID
    payload.data.type = primaryModelClass.modelName
    payload.data.attributes = {
        Title: payload.Title,
        Year: payload.Year,
        Rated: payload.Rated,
        Runtime: payload.Runtime,
        Director: payload.Director,
        Plot: payload.Plot,
        Poster: payload.Poster,
        imdbID: payload.imdbID,
        Type: payload.Type
      };
      delete payload.Title;
      delete payload.Year;
      delete payload.Rated;
      delete payload.Runtime;
      delete payload.Plot;
      delete payload.Type;
      delete payload.Poster;

    //delete payload.data;
    return this._super(...arguments);
  }
});