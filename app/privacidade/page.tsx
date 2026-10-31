import Layout from "@/components/layout";
import MarkdownRenderer from "@/components/markdown-renderer";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Graphe Play e do site graphe.com.br. Entenda como respeitamos a sua privacidade, sem contas, sem anúncios e com funcionamento offline.",
  path: "/privacidade",
});

const privacyContent = `# Política de Privacidade

Esta Política de Privacidade esclarece como as informações são tratadas no aplicativo **Graphe Play** (\`br.com.graphe.play\`) e no site **graphe.com.br**, ambos desenvolvidos por Claudio Scheer como parte do projeto Graphe.

*Última atualização: 29 de outubro de 2026.*

---

## 1. Diretriz de privacidade

O Graphe Play e o site graphe.com.br foram concebidos com foco na privacidade por padrão (*privacy by design*). Acreditamos que o estudo das Escrituras deve ser uma experiência focada e livre de vigilância digital, publicidade direcionada ou coleta desnecessária de dados.

## 2. Aplicativo Graphe Play

### 2.1. Ausência de cadastro e de dados pessoais
O aplicativo opera de forma autônoma e não exige conexão com a internet para ser utilizado. Não solicitamos, coletamos, armazenamos nem compartilhamos nenhuma informação de identificação pessoal, tais como:
- Nome;
- Endereço de e-mail;
- Número de telefone;
- Dados de localização geográfica;
- Identificadores de dispositivo para publicidade.

Não existe sistema de contas, cadastro ou login.

### 2.2. Armazenamento e processamento local
Todas as informações e atividades geradas durante o uso do aplicativo ficam salvas exclusivamente no armazenamento local do seu próprio aparelho. Isso inclui:
- Contextos bíblicos selecionados para estudo (testamentos, livros ou capítulos);
- Progresso e histórico de revisão nos flashcards;
- Resultados obtidos nos quizzes;
- Versículos selecionados para memorização;
- Preferências de configuração do aplicativo.

Nenhum desses dados é transmitido para servidores do Graphe ou de terceiros. Se você desinstalar o aplicativo ou limpar os dados nas configurações do seu sistema operacional, essas informações locais serão excluídas.

### 2.3. Publicidade e ferramentas de análise (Analytics)
O Graphe Play não exibe anúncios publicitários e não inclui ferramentas de análise comportamental (*analytics*), telemetria ou rastreadores de terceiros.

### 2.4. Cópia de segurança do sistema operacional
Caso o recurso de backup automático do Android esteja ativado no seu aparelho, o próprio sistema operacional poderá incluir os dados locais do aplicativo na cópia de segurança associada à sua conta pessoal (por exemplo, no Google Drive). Esse processo é gerenciado pelo sistema operacional e pelo usuário; nós não temos acesso a essas cópias nem aos arquivos salvos.

## 3. Site graphe.com.br

O site graphe.com.br tem caráter informativo e de distribuição de software livre. A navegação pelas páginas é pública e não requer criação de conta. Não utilizamos cookies de rastreamento com finalidade publicitária nem exibimos anúncios.

## 4. Links para serviços externos

Tanto o aplicativo quanto o site contêm links para canais e recursos externos, como o canal da comunidade no Telegram e o repositório de código aberto no GitHub. Ao acessar esses links, você sai do ambiente do Graphe e passa a utilizar plataformas de terceiros, sujeitas às suas próprias políticas de privacidade e termos de uso.

## 5. Privacidade de crianças e adolescentes

Como nossos serviços não solicitam nem tratam dados pessoais, o Graphe Play e o site são adequados para o público de todas as idades, incluindo crianças e adolescentes, em conformidade com as legislações de proteção de dados vigentes.

## 6. Alterações nesta política

Esta Política de Privacidade poderá ser revisada ocasionalmente para refletir eventuais melhorias técnicas ou adequações legais. A data da versão mais recente estará sempre indicada no início desta página.

## 7. Contato

Se você tiver dúvidas sobre esta política de privacidade ou sobre o funcionamento do aplicativo, sinta-se à vontade para entrar em contato através dos nossos canais:

- **Telegram:** [Canal da comunidade Graphe](https://t.me/graphebiblesoftware)
- **Site:** [graphe.com.br](https://graphe.com.br)
`;

export default function PrivacyPage() {
  return (
    <Layout>
      <article className="max-w-[900px]">
        <MarkdownRenderer content={privacyContent} />
      </article>
    </Layout>
  );
}
