// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'Valor 1',
    propiedad2: {
      propiedad3: 'Valor 3',
      propiedad4: 'Valor 4',
      obtenerPropiedad3: function () {
        return this.propiedad3;
    },
    },
};

module.exports = objetoAnidado;

console.log(objetoAnidado.propiedad2.obtenerPropiedad3());