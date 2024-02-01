export function incrementarUmDia(data) {
    const novaData = new Date(data);

  // Verifica se é o primeiro dia do mês
  if (novaData.getDate() === 1) {
    // Se for, avança para o próximo mês e define o dia como 1
    novaData.setMonth(novaData.getMonth());
    novaData.setDate(novaData.getDate() + 1);
  } else {
    // Caso contrário, apenas incrementa o dia em 1
    novaData.setDate(novaData.getDate() + 1);
  }

  // Formata a data como "dd/mm/aaaa"
  const diaFormatado = String(novaData.getDate()).padStart(2, "0");
  const mesFormatado = String(novaData.getMonth() + 1).padStart(2, "0");
  const anoFormatado = novaData.getFullYear();

  return `${diaFormatado}-${mesFormatado}-${anoFormatado}`;
  }