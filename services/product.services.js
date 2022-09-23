//Servicios: va toda la logica del desarrollo, sale de la arquitectura THE CLEAN ARCHITECTURE
const faker = require('faker');//Exportamos faker
class ProductsServices{

    constructor(){
        this.products = [];
        this.generate();//Cada que se instancie se generarán 100 productos
    }

    generate(){
        const limit = 10; //Si se le envia el parametro mostrará la cantida de registro que se le pase, de lo contrario mostrará 10
        for(let i = 0; i < limit; i++){
            this.products.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            })
        }
    }

    create(){

    }

    find(){
        return this.products;
    }

    findOne(id){
        return this.products.find(item => item.id === id);
    }

    update(){

    }

    delete(){

    }
}

module.exports = ProductsServices;