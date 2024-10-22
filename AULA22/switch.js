let atendimento = 'Péssimo'

switch (atendimento) {
    case 'Ótimo':
        console.log(`Ótimo`);
        break;
    case 'Bom':
        console.log(`Bom`);
        break;
    case 'Regular':
        console.log(`Regular`);
        break;
    case 'Ruim':
        console.log(`Ruim`);
        break;
    case 'Péssimo':
        console.log(`Péssimo`);
        break;

    default:
        console.log(`Valor não entrado no banco de dados.`);
        break;
}