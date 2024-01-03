const formatarContato = (contato) => {
    const {Nome, Email, Telefone} = contato;
    return `Nome: ${Nome}, Email: ${Email}, Telefone: ${Telefone}`;
}

console.log(formatarContato({Nome:"Ana Silva", Email:"ana.silva@example.com", Telefone:84924265175}));

//ok