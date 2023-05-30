const TP = require('tweakpane')

class Tweakpane {
  constructor() {
    this.pane = new TP.Pane();
    this.params = {
      population: 300,
      radius: 20
    }
  }

  createPane () {
    let folder;
    folder = this.pane.addFolder({ title: 'Ecosystem One :)' });
    this.pane.addInput(this.params, 'population', {step: 100, min: 100, max: 1800});
    this.pane.addInput(this.params, 'radius', {min: 3, max: 30})
  }
}

module.exports = Tweakpane