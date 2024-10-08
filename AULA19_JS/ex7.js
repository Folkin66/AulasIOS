let alt = Number(prompt ('Qual é a sua altura?'))
let pes = Number(prompt ('Qual é o seu peso?'))

if (!isNaN(alt) && !isNaN(pes) && alt > 0 && pes > 0) {
    // Converte altura de cm para metros
    alt = alt / 100; 
    let calc = pes / (alt * alt);
    alert(`O seu IMC é ${calc.toFixed(2)}.`);
} else {
    alert('Por favor, insira valores válidos para altura e peso.');
}