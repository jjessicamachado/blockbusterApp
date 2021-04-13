export class Movie {
    constructor(
        public nome: string,
        public ano?: string,
        public diretor?: string,
        public genero?: string,
        public descricao?: string,
        public poster?: string
    ) { }
}