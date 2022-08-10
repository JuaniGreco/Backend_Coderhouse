class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getApellido() {
        return this.apellido;
    }
    getNombre() {
        return this.nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setMascotas(mascotas) {
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Bienvenido ${this.nombre} ${this.apellido}!`;
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombreLibro, autorLibro) {
        const libro = ([` ${nombreLibro}`, ` ${autorLibro}`])
        this.libros.push(libro);
    }

    getBookNames() {
        return this.libros.map(libros => `*${libros}.`);
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    
}

const usuarioPrueba = new Usuario('Juan', 'Perez', [], []);
usuarioPrueba.addBook('El señor de los anillos', 'J.R.R. Tolkien');
usuarioPrueba.addBook('Harry Potter', 'J.K. Rowling');
usuarioPrueba.addMascota('Gato');
usuarioPrueba.addMascota('Perro');
console.log(usuarioPrueba.getFullName());

console.log(`Usted tiene ${usuarioPrueba.countMascotas()} mascotas`);
console.log(`Lista de libros: ${usuarioPrueba.getBookNames()}`);