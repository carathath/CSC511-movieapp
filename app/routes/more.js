import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    i: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('moremovie', {
      i: params.i || 'tt3896198'
    });
  }
});