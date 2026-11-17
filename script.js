// 1. Crie a variável com o método HTTP desejado
const metodoHttp = +prompt('digite a STRING EM letra maiuscula  corretamente!!! "GET", "POST", "PUT", "DELETE" '); // Você pode testar alterando para "GET", "PUT", "DELETE" ou qualquer outro valor.

// 2. Use o switch para simular o comportamento da API
switch (metodoHttp) {
    case "GET":
        console.log("Buscando dados no banco de dados...");
        break;
    case "POST":
        console.log("Criando um novo registro...");
        break;
    case "PUT":
        console.log("Atualizando os dados do registro...");
        break;
    case "DELETE":
        console.log("Registro removido com sucesso.");
        break;
    default:
        console.log("Erro: Método não permitido para esta rota.");
        break;
}

// 1. Solicita ao usuário o ambiente através de um prompt no navegador
const ambiente = prompt("Digite o ambiente (dev, test, prod):");

// 2. Use o switch para definir a conexão com o banco de dados com base no input
switch (ambiente) {
    case "dev":
        console.log("Conectando ao banco de dados local (SQLite).");
        alert("Conectando ao banco de dados local (SQLite).");
        break;
    case "test":
        console.log("Conectando ao banco de dados em memória.");
        alert("Conectando ao banco de dados em memória.");
        break;
    case "prod":
        console.log("Conectando ao banco de dados oficial na nuvem (PostgreSQL).");
        alert("Conectando ao banco de dados oficial na nuvem (PostgreSQL).");
        break;
    default:
        console.log("CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.");
        alert("CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.");
        break;
}

// 1. Solicita ao usuário o comando através de um prompt
const comando = prompt("Digite o comando (start, stop, restart, status):");

// 2. Use o switch com fall-through para processar os comandos
switch (comando) {
    case "start":
    case "restart":
        console.log("Iniciando o servidor de aplicação...");
        alert("Iniciando o servidor de aplicação...");
        break;
    case "stop":
        console.log("Desligando o servidor com segurança...");
        alert("Desligando o servidor com segurança...");
        break;
    case "status":
        console.log("O servidor está rodando na porta 3000.");
        alert("O servidor está rodando na porta 3000.");
        break;
    default:
        console.log("Comando não encontrado. Digite 'help' para ver a lista de comandos.");
        alert("Comando não encontrado. Digite 'help' para ver a lista de comandos.");
        break;
}

// 1. Solicita ao usuário o código de status e converte para número
const statusCodeInput = prompt("Digite o código de status HTTP (ex: 200, 404, 500):");
const statusCode = Number(statusCodeInput);

// 2. Use o switch com fall-through para traduzir o código para uma mensagem amigável
switch (statusCode) {
    case 200:
    case 201:
        console.log("Sucesso: Requisição processada corretamente.");
        alert("Sucesso: Requisição processada corretamente.");
        break;
    case 400:
        console.log("Erro na requisição: Verifique os dados enviados.");
        alert("Erro na requisição: Verifique os dados enviados.");
        break;
    case 401:
    case 403:
        console.log("Acesso negado: Você não tem permissão ou precisa fazer login.");
        alert("Acesso negado: Você não tem permissão ou precisa fazer login.");
        break;
    case 404:
        console.log("Não encontrado: O recurso solicitado não existe.");
        alert("Não encontrado: O recurso solicitado não existe.");
        break;
    case 500:
        console.log("Erro interno no servidor: Tente novamente mais tarde.");
        alert("Erro interno no servidor: Tente novamente mais tarde.");
        break;
    default:
        console.log("Código de status desconhecido.");
        alert("Código de status desconhecido.");
        break;
}

// 1. Solicita ao usuário o perfil através de um prompt
const perfilUsuario = prompt("Digite o perfil de usuário (admin, editor, aluno, visitante):");

// 2. Use o switch com fall-through para definir o nível de permissão
switch (perfilUsuario) {
    case "admin":
        console.log("Acesso Total: Gerenciar usuários, configurações e conteúdos.");
        alert("Acesso Total: Gerenciar usuários, configurações e conteúdos.");
        break;
    case "editor":
        console.log("Acesso Intermediário: Criar e editar conteúdos publicados.");
        alert("Acesso Intermediário: Criar e editar conteúdos publicados.");
        break;
    case "aluno":
    case "visitante":
        console.log("Acesso Somente Leitura: Visualizar materiais disponíveis.");
        alert("Acesso Somente Leitura: Visualizar materiais disponíveis.");
        break;
    default:
        console.log("Perfil inválido: Conta bloqueada por segurança.");
        alert("Perfil inválido: Conta bloqueada por segurança.");
        break;
}


// 1. Solicita ao usuário o evento de webhook recebido
const eventoPagamento = prompt("Digite o evento de pagamento (ex: payment.approved, payment.pending, payment.failed, payment.refunded):");

// 2. Use o switch para atualizar o status do pedido conforme o webhook
switch (eventoPagamento) {
    case "payment.approved":
        console.log("Pagamento confirmado! Liberando envio do produto.");
        alert("Pagamento confirmado! Liberando envio do produto.");
        break;
    case "payment.pending":
        console.log("Aguardando compensação do pagamento...");
        alert("Aguardando compensação do pagamento...");
        break;
    case "payment.failed":
        console.log("Falha no pagamento: Notificando cliente para tentar outro cartão.");
        alert("Falha no pagamento: Notificando cliente para tentar outro cartão.");
        break;
    case "payment.refunded":
        console.log("Estorno realizado: Cancelando pedido e devolvendo estoque.");
        alert("Estorno realizado: Cancelando pedido e devolvendo estoque.");
        break;
    default:
        console.log("Evento ignorado pelo sistema.");
        alert("Evento ignorado pelo sistema.");
        break;
}


// 1. Solicita ao usuário a extensão do arquivo através de um prompt
const extensaoArquivo = prompt("Digite a extensão do arquivo (ex: .jpg, .pdf, .mp4, .exe):");

// 2. Use o switch com fall-through para classificar o tipo de arquivo
switch (extensaoArquivo) {
    case ".jpg":
    case ".png":
    case ".gif":
        console.log("Arquivo de imagem detectado. Salvando na galeria...");
        alert("Arquivo de imagem detectado. Salvando na galeria...");
        break;
    case ".pdf":
    case ".docx":
        console.log("Documento detectado. Salvando na pasta de arquivos...");
        alert("Documento detectado. Salvando na pasta de arquivos...");
        break;
    case ".mp4":
    case ".mov":
        console.log("Vídeo detectado. Enviando para processamento de mídia...");
        alert("Vídeo detectado. Enviando para processamento de mídia...");
        break;
    case ".exe":
    case ".bat":
        console.log("Bloqueado: Arquivos executáveis não são permitidos por segurança.");
        alert("Bloqueado: Arquivos executáveis não são permitidos por segurança.");
        break;
    default:
        console.log("Formato não suportado pelo sistema.");
        alert("Formato não suportado pelo sistema.");
        break;
}




