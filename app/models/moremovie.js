import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    Title: DS.attr('string'),
    Year: DS.attr('string'),
    Rated: DS.attr('string'),
    Runtime: DS.attr('string'),
    Director: DS.attr('string'),
    Plot: DS.attr('string'),
    imdbID: DS.attr('string'),
    Type: DS.attr('string'),
    Poster: DS.attr('string')
});
