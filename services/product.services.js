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

   async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }

        this.products.push(newProduct)
        return newProduct;
    }

    async find(){
        return this.products;
    }

    async findOne(id){
        const tete = this.getAño();
        return this.products.find(item => item.id === id);
    }

    async update(id, changes){
        const index  = this.products.findIndex(item => item.id === id);//Retorna el index del elemento cuyo id se esta mandando
        if(index === -1){
            throw new Error('Producto no encontrado')
        }

        this.products[index] = changes;//Modifica el objeto
        return   this.products[index]
    }

    async delete(id ){
        const index  = this.products.findIndex(item => item.id === id);//Retorna el index del elemento cuyo id se esta mandando
        if(index === -1){
            throw new Error('Producto no encontrado')
        }

        this.products.splice(index, 1);

        return {id};

    }
}

module.exports = ProductsServices;