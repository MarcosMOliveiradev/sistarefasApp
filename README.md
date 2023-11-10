<h1 align="center">Projeto Sistarefas</h1>

<p>O projeto sistarefas consistem em um sistema de controle de atividades, seu intuito é medir quais atividades os jovens aprendizes mais têm feito, e o tempo em que levam em cada uma das atividades, esse repositório é uma extensão do repositório ProjetoSistarefas que seria a parte da API e do banco de dados.
</br>
</br>
Antes de falar sobre a parte técnica do projeto, um pouco de porque resolvi desenvolver esse sistema.
</br>
</br>
Em 2019 fui contratado pela empresa que estou atualmente para ser jovem aprendiz num setor administrativos, minha função na época era auxiliar o setor de compras da empresa, eu fui atribuído de inserir no sistema todos os pedidos de compras, na época não tínhamos nenhum sistema que medisse o quanto nós produzíamos, então fiz em uma planilha de Excel um pequeno controle das minhas atividades, em um ano medindo as minhas atividades, descobri que tinha feito cerca de mil ordens de compra, entre outras atividades.
</br>
</br>
Demostrando um bom serviço e vontade de aprender, fui contratado para fazer parte do quadro de funcionários no final de 2020, dessa vez, meu desafio era auxiliar o setor de informática, descobri a paixão por TI ali quando fui desafiado a montar um sistema de nuvem utilizando o nextcloud e uma linguagem de programação, coisa na qual até ali eu achava que era impossível de eu conseguir, depois de muito sufoca, montei o sistema que auxiliou a empresa na distribuição de documentos durante a pandemia.
</br>
</br>
Em 2021 a coordenação do programa de jovem aprendiz da empresa (coordenação na qual eu faço parte de forma voluntaria) resolveu implementar um sistema parecido com a minha planilha de Excel, onde cada aprendiz colocaria quais atividades estavam fazendo e o tempo em que levavam em cada atividade. Inicialmente isso também seria uma planilha de Excel. Porém atualmente eu sou estudante de análise e desenvolvimento de sistemas, e na procura por adquirir experiencia resolvi desenvolver um sistema, com uma interface amigável e bem intuitiva.
</br>
</br>
Agora no final de 2023, seis mês após ter começado o desenvolvimento, o sistema está sendo implementado, e para mim é um orgulho ter conseguido tudo que eu consegui fazer.
</p>

### Foram utilizados nesse projeto
- Electron
- HTML
- CSS
- JavaScript

### Para instalar e utilizar o sistema

* 1º - Você tem que instalar a parte da API que esta no repositorio a baixo e seguir os passos da API
<p><a href="https://github.com/MarcosMOliveiradev/ProjetoSistarefas">https://github.com/MarcosMOliveiradev/ProjetoSistarefas</a></p>

<p>Depois de fazer toda a parte da API pode continuar aqui</p>

* 2º - No terminal digite o comando a seguir

```bash
npm i
```

* 3º - Na pasta public, no arquivo env.js coloque o IP da maquina em que esta intalado a API

* 4º - Para rodar local digite o seguinte comando
```bash
npm rum electron
```
* 5º - Para buildar e utilizar em outras maquinas utilize o seguinte comando

```bash
npm rum build
```

<p>Depos de buildar basta compartilhar a pasta packages para as outras maquinas</p>