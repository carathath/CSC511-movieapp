import DS from 'ember-data';
const { Model } = DS;

export default DS.Model.extend({
    Title: DS.attr('string'),
    Year: DS.attr('string'),
    imdbID: DS.attr('string'),
    Type: DS.attr('string'),
    Plot: DS.attr('string'),
    Runtime: DS.attr('string'),
    Poster: DS.attr('string')
});
