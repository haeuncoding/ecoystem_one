class StatsCanvas {
  constructor(){
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  }

  create() {
    this.context.fillStyle = 'white';
    this.context.font = `10px sans-serif`;
    this.context.textBaseline = 'top';
  }
}