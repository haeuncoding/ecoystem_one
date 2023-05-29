const Herbivore = require('./kingdoms/fauna_categories/herbivore');
const Carnivore = require('./kingdoms/fauna_categories/carnivore')
const Flora = require('./kingdoms/flora');
const selfUtil = require('../self_util/self_util')

class Population {
  constructor(context, num, width, height, params) {
    this.context = context;
    this.population = []
    this.num = num;
    this.width = width;
    this.height = height;
    this.params = params;
  }

  populate () {
  let fauna = (this.num / 3);
  let flora = (this.num / 3)  * 2; 
   for (let i = 0; i < (Math.floor(fauna * 0.7)); i++) {
      let name = selfUtil.randomName()
      let x = selfUtil.randomWidth(this.width);
      let y = selfUtil.randomHeight(this.height);
      let bebe = new Herbivore(x, y, this.params, name);
      this.population.push(bebe)
    }

    for (let i = 0; i < (Math.floor(fauna * 0.3)); i++) {
      let name = selfUtil.randomName()
      let x = selfUtil.randomWidth(this.width);
      let y = selfUtil.randomHeight(this.height);

      this.population.push(new Carnivore(x, y, this.params, name));
    }
    
    for (let i = 0; i < flora; i++) {
      let name = selfUtil.randomName()
      let x = selfUtil.randomWidth(this.width);
      let y = selfUtil.randomHeight(this.height);

      this.population.push(new Flora(x, y, this.params, name));
    }
  }

  update () {
    this.population.forEach(org => {
      org.update();
      if (org instanceof Carnivore) {
        org.draw(this.context, 'carnivore');
        org.getHungry()

      } else if (org instanceof Herbivore) {
        org.draw(this.context, 'herbivore')
        org.getHungry()
      } else if (org instanceof Flora) {
        org.draw(this.context, 'flora')
      } else {
        org.draw(this.context);
      }
      org.bounce(this.width, this.height);
    })
  };
  
}

module.exports = Population;