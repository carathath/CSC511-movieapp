import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalize(store, primaryModelClass, payload) {
    payload.data = payload.Search;
    payload.data.forEach(item => {
      item.type = primaryModelClass.modelName;
      item.attributes = {
        Title: item.Title,
        Year: item.Year,
        Rated: item.Rated,
        Runtime: item.Runtime,
        Director: item.Director,
        Plot: item.Plot,
        imdbID: item.imdbID,
        Type: item.Type,
        Poster: item.Poster
      };
      delete item.Title;
      delete item.Year;
      delete item.Rated;
      delete item.Runtime;
      delete item.Director;
      delete item.Plot;
      delete item.Type;
      delete item.Poster;
    });

    delete payload.Search;
    return this._super(...arguments);
  }
});