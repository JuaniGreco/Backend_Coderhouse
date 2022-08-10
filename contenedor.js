const fs = require('fs/promises');

class Contenedor {
    constructor (rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    }

    //Metodo para retornar todos los objs que haya en el []
    async getAll(){
        try{
            const productos = await fs.readFile(this.rutaArchivo, 'utf-8');
            return (JSON.parse(productos));
        }
        catch(error){
            console.log(`Error: ${error}`);
        }
    }

    async save (producto){
        try{
            const objs = await this.getAll();
            let nuevaId;
            if(objs.length == 0){
                nuevaId = 1;
            }else {
                nuevaId = objs[objs.length - 1].id + 1;
            }
            const nuevoProducto = {id: nuevaId, ...producto};
            objs.push(nuevoProducto);
            await fs.writeFile(this.rutaArchivo, JSON.stringify(objs, null, 2));
            return nuevaId;
        } catch(error){
        console.log(`Error ${error} cuando guarda`);
        }
    }

    async getById(id){
        try{
            const objs = await this.getAll();
            const idProd = objs.find(obj => {
                return obj.id == id
            });
            if (idProd == undefined){
                console.log(`No existe el producto con el id ${id}`);
                return null;
            } else{
                return console.log(idProd);
            }
        } catch(error){
            console.log(`Error ${error} cuando busca`);
        }
    }

    async deleteById(id){
        try{
            const objs = await this.getAll();
            const indexObj = objs.findIndex((obj) => obj.id == id);
            if (indexObj == -1){
                console.log(`No existe el producto con el id ${id}`);
                return null;
            } else{
                objs.splice(indexObj, 1);
                await fs.writeFile(this.rutaArchivo, JSON.stringify(objs, null, 2));
                return console.log(`El producto ha sido eliminado`);
            }
        } catch(error){
            console.log(`Error ${error} cuando elimina`);
        }
    }

    async getRandom(){
        try{
            const objs = await this.getAll();
            
            let random = objs[Math.floor(Math.random() * objs.length)];

            return random;
        } catch (err) {
            return console.log(`No se obtuvo el producto random: ${error}`);
        }
    }
}

module.exports = Contenedor;

    // async function test(){
    //     const test = new Contenedor('./productos.json');
    //     console.log(await test.save({name: "Monitor", price: 600, thumbnail: "https://www.monitor-sony.com/wcsstore/GlobalAssets/images/products/monitor-sony-lg-27v5a-1-1.jpg"}));
    //     console.log(await test.save({name: "Mouse", price: 100, thumbnail: "https://www.mouse-laptop.com/wcsstore/GlobalAssets/images/products/mouse-laptop-logitech-m-100-1-1.jpg"}));
    //     console.log(await test.save({name: "Teclado", price: 200, thumbnail: "https://www.teclado-laptop.com/wcsstore/GlobalAssets/images/products/teclado-laptop-logitech-m-200-1-1.jpg"}));
    //     console.log(await test.getById(1));
    //     console.log(await test.getAll());
    //     console.log(await test.deleteById(1));
    //     console.log(await test.getAll);
    // }
    // test();