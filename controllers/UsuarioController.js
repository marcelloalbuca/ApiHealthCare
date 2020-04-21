module.exports = class Usuario {
    constructor(nome, endereco, dataNascimento, cpf, rg, telefone, email, sexo) {
        this.nome = nome;
        this.endereco = endereco;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = new Date();
    }
}