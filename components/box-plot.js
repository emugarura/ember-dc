App.BoxPlotComponent = Ember.Component.extend( App.CoordinateGridMixin, {
  classNames: ['box-plot'],

  createChart: function() {

    if(this.get('group') == null){
        return false;
    }

    this.chart = dc.boxPlot('#'+this.$().context.id);

    this.renderChart();

  }.on('didInsertElement').observes('group')

});