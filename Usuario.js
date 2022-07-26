class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

        const usuarioPrueba = new Usuario('Juan', 'Perez', [], []);
        usuarioPrueba.addBook('El señor de los anillos', 'J.R.R. Tolkien');
        usuarioPrueba.addBook('Harry Potter', 'J.K. Rowling');
        usuarioPrueba.addMascota('Gato');
        usuarioPrueba.addMascota('Perro');
        console.log(usuarioPrueba.getFullName());
        console.log(usuarioPrueba.addBook('El señor de los anillos', 'J.R.R. Tolkien'));
        console.log(usuarioPrueba.addMascota('Perro'));
        console.log(`Usted tiene ${usuarioPrueba.countMascotas()} mascotas`);
        console.log(`Lista de libros: ${usuarioPrueba.getBookNames()}`);

    }
    getApellido() {
        return this.apellido;
    }
    getNombre() {
        return this.nombre;
    }

    setApellido(apellido){
        this.apellido = apellido;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
    setLibros(libros){
        this.libros = libros;
    }

    setMascotas(mascotas){
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Bienvenido ${nombre}, ${apellido}!`;
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push(new Libro(nombre, autor));
    }

    getBookNames(){
        return this.libros.map(libro => libro.getNombre());
    }

    addMascota(nombre){
        this.mascotas.push(nombre);
    }
} 