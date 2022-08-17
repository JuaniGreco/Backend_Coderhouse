const fs = require('fs') ;

class Contenedor {

    constructor(fileName) {
        this.fileName = fileName;
    }

    async save(objs) {
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify(objs,null,2), 'utf-8');
        } catch (error) {
            throw new Error(error);
        }
    }

    async create (data) {
        const objs = await this.getAll();
        let newId = objs.length === 0 ? 1 : objs[objs.length - 1].id + 1;
        const newData = {...data, id: newId};
        objs.push(newData);
        await this.save(objs);
        return newData;
    }

    async update(data) {
        const objs = await this.getAll();
        const itemIndex = objs.findIndex(obj => obj.id === data.id);
        if (itemIndex === -1) {
            return itemIndex
        }
        objs[itemIndex] = data;
        await this.save(objs);
        return objs[itemIndex];
    }

    async getById(id) {
        const objs = await this.getAll();
        return objs.find((obj) => obj.id == id) || null;
    }

    async getAll() {
        try {
            const objs = await fs.promises.readFile(this.fileName, 'utf-8');
            return JSON.parse(objs);
        } catch (error) {
            return [];
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

    async deleteById(id) {
        const objs = await this.getAll();
        const newObjs = objs.filter(obj => obj.id != id);
        if(objs.length === newObjs.length) {
            return -1;
        }
        await this.save(newObjs);
        return id;
    }

    async deleteAll() {
        await this.save([]);
        return true;
    }


}

module.exports = Contenedor;

    async function test(){
        const test = new Contenedor('./productos.json');
        console.log(await test.save({name: "Monitor", price: 600, thumbnail: "https://www.monitor-sony.com/wcsstore/GlobalAssets/images/products/monitor-sony-lg-27v5a-1-1.jpg"}));
        console.log(await test.save({name: "Mouse", price: 100, thumbnail: "https://www.mouse-laptop.com/wcsstore/GlobalAssets/images/products/mouse-laptop-logitech-m-100-1-1.jpg"}));
        console.log(await test.save({name: "Teclado", price: 200, thumbnail: "https://www.teclado-laptop.com/wcsstore/GlobalAssets/images/products/teclado-laptop-logitech-m-200-1-1.jpg"}));
        console.log(await test.getById(1));
        console.log(await test.getAll());
        console.log(await test.deleteById(1));
        console.log(await test.getAll);
    }
    test();





