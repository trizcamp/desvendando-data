// Função que pesquisa o fato com base na data de nascimento
function pesquisar() {
  // Obtém a data de nascimento do input diretamente como string
  let dataInput = document.getElementById('data').value;

  //verificar se está com uma string vazia
  if (!dataInput) {
    alert("Por favor, insira uma data válida.");
    return;
  }

  // Extrai o dia e o mês da string de data "YYYY-MM-DD"
  let [ano, mes, dia] = dataInput.split('-');  // Split direto da string de data

  // Formata a data no estilo "dd/mm"
  let dataFormatada = `${dia}/${mes}`;



// Busca a data dentro da base de dados
  let fatoEncontrado = "";
  for (const fato of fatos) {
    if (fato.data.includes(dataFormatada)) {
        fatoEncontrado = fato;
        break; // para de iterar após encontrar o fato correspondente
    }
}

/*let fatoEncontrado = fatos.find(fato => fato.data.includes(dataFormatada));*/

  // Limpa a seção de resultados anteriores
  let resultados = document.getElementById('resultados-pesquisa');
  resultados.innerHTML = '';

  if (fatoEncontrado) {
    // Exibe o fato encontrado
    resultados.innerHTML += `
      <div class="item-resultado">
      <h3>${fatoEncontrado.titulo} ✨</h3>
      <h3 class="descricao-meta">${fatoEncontrado.data}</h3>
      <img src="${fatoEncontrado.capa}" alt="${fatoEncontrado.titulo}" width=600>
      <p>${fatoEncontrado.descricao}</p>
      <a href="${fatoEncontrado.link}" target="_blank">Saiba mais</a> 
      </div>
    `;
  } else {
    resultados.innerHTML = `<p>Nenhum fato histórico encontrado para essa data.</p>`;
  }
}