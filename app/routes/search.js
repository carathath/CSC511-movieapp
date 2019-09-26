import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.query('movie', {
            s: 'test'
        });
    }

});

/*
{{#each this.model as |movie search| }}
    <div>
        {{search}}
    </div>
{{/each}}
*/