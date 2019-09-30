import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['i'],
    actions:{
        more(id){
        this.transitionToRoute('more', {queryParams: {i: id}});
        return true;
        }
    }
});
