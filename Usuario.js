class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.apellido = this.setApellido({apellido}); ;
        this.nombre = this.setNombre({nombre});
        this.libros = [{libros}];
        this.mascotas = [{mascotas}];

        this.addBook('El señor de los anillos', 'J.R.R. Tolkien');
        this.addBook('Harry Potter', 'J.K. Rowling');
        this.addMascota('Gato');
        this.addMascota('Perro');

        usuarioPrueba = new Usuario('Juan', 'Greco', [], []);
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