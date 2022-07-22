class Usuario {
    constructor() {
        this.apellido = this.setApellido('Greco'); ;
        this.nombre = this.setNombre('Juani');
        this.libros = [];
        this.mascotas = [];

        this.addBook('El señor de los anillos', 'J.R.R. Tolkien');
        this.addBook('Harry Potter', 'J.K. Rowling');
        this.addMascota('Gato');
        this.addMascota('Perro');

        console.log(this.getFullName);
        console.log(`Usted tiene ${this.countMascotas()} mascotas`);
        console.log(`Lista de libros: ${this.getBookNames()}`);
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