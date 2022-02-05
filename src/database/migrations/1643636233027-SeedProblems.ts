import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedProblems1643636233027 implements MigrationInterface {
    ids = [];

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 1
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Bridge, Decorator, Façade (fachada), Proxy  e Flyweight são exemplos de padrões gof:', 'Criacionais|Comportamentais|Estruturais|De persistência', 'Junior', 'Este grupo explica como montar objetos e classes em estruturas maiores, mas ainda mantendo essas estruturas flexíveis e eficientes.', 'Estruturais') RETURNING id`
            )
        );
        // 2
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Com relação a padrões comportamentais, julgue o item seguinte.
                “O padrão Command permite suportar operações reversíveis e diferentes requisições parametrizadas pelo cliente.”', 'Certo|Errado', 'Estágiario', 'O padrão command encapsula uma solicitação como um objeto.', 'Certo') RETURNING id`
            )
        );
        // 3
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Com relação a padrões comportamentais, julgue o item seguinte.
                “O padrão Iterator oferece uma forma flexível de uso de herança para estender uma funcionalidade.”', 'Certo|Errado', 'Estágiario', 'O padrão Iterator fornece um meio de acessar, sequencialmente, os elementos de um objeto agregado sem expor sua representação subjacente.', 'Errado') RETURNING id`
            )
        );
        // 4
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Acerca de padrões estruturais, julgue o item subsequente.
                “Um cliente que precisa tratar, de maneira uniforme, objetos individuais e suas composições deve utilizar, para essa finalidade, o padrão Facade.”', 'Certo|Errado', 'Estágiario', 'O padrão Facade fornece uma interface unificada para um conjunto de interfaces em um subsistema. Facade define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.', 'Errado') RETURNING id`
            )
        );
        // 5
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Acerca de padrões estruturais, julgue o item subsequente.
                “O propósito do padrão Adapter é separar uma abstração de sua implementação, para que as duas possam variar e ser independentes.”', 'Certo|Errado', 'Estágiario', 'O padrão Adapter converte a interface de uma classe em outra interface, esperada pelo cliente. O Adapter permite que interfaces incompatíveis trabalhem em conjunto – o que, de outra forma, seria impossível.', 'Errado') RETURNING id`
            )
        );
        // 6 - Questão sobrando
        // this.ids.push(
        //     await queryRunner.query(
        //         `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('A respeito de padrões de criação, julgue o item subsectivo.
        //         “Conforme o padrão Singleton, um sistema que necessite de um único objeto de uma classe, após o programa instanciar o objeto, não deve ter permissão de criar objetos adicionais dessa classe.”
        //         ', 'Certo|Errado', 'Estágiario', 'O padrão Singleton garante que uma classe chamada várias vezes, tenha apenas uma instância criada.', 'Certo') RETURNING id`
        //     )
        // );
        // 7
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('O padrão _____________ ensina como fornecer um método que pode ser sobrescrito para criar objetos de tipos variáveis.” Assinale a alternativa que completa corretamente a afirmativa anterior.
                ', 'Proxy|Visitor|Singleton|Factory Method', 'Sênior', 'É um padrão criacional.', 'Factory Method') RETURNING id`
            )
        );
        // 8
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Entre os três tipos de padrões GoF, dois são descritos a seguir:
                I. Descrevem os aspectos de elaboração, associação e a organização entre objetos e classes/interfaces, permitindo combinar objetos em modalidades mais complexas, ou descrever como as classes são herdadas ou compostas a partir de outras.
                II. Mostram o processo de como os objetos ou classes se comunicam, em geral, buscando um baixo acoplamento entre os objetos, apesar da comunicação que existe entre eles.
                Os padrões de projeto Gof descritos em I e II são conhecidos, respectivamente, como:
                ', 'Comportamentais e interativos|Estruturais e comportamentais|Interativos e procedurais|Procedurais e temporais', 'Junior', 'Interativo não é um grupo de padrões GoF', 'Estruturais e comportamentais') RETURNING id`
            )
        );
        // 9 - Questão sobrando
        // this.ids.push(
        //     await queryRunner.query(
        //         `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Assinale a opção que apresenta o padrão de projeto que tem por objetivo separar o display de estado de um objeto a partir do objeto em si e que permite que sejam fornecidos displays alternativos.', 'Decorator|Prototype|Facade|Observer|Iterator', 'Estágiario', 'É um padrão do tipo comportamental.', 'Observer') RETURNING id`
        //     )
        // );
        // 10
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('O texto a seguir contém a definição de um dos chamados padrões de projeto (design pattern) GoF:
                “Uma maneira de notificar mudanças de estado para um grupo de objetos interessados nessas mudanças. Define uma dependência um para muitos entre objetos de modo que, quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. Este é um padrão comportamental.”
                Este padrão é denominado:
                ', 'State|Observer|Memento|Iterator|Strategy', 'Pleno', 'Padrão que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.', 'Observer') RETURNING id`
            )
        );
        // 11
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Uma programadora precisa mudar a implementação chamada de uma função em tempo de execução dependendo da entrada de dados. Um dos requisitos importantes é ocultar do usuário desta função a exposição das estruturas de dados complexas, específicas do algoritmo. Entre os padrões de projeto conhecidos, qual é o indicado?
                ', 'Builder|Strategy|Façade|Template Method', 'Especialista', 'É um padrão de projeto do tipo comportamental.', 'Strategy') RETURNING id`
            )
        );
        // 12
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Com relação às finalidades e características dos Padrões de Projeto, assinale a opção que apresenta dois padrões de Projeto Comportamentais.', 'Adapter e Command|Template Method e State|Observer e Composite|Chain of Responsability e Flyweight', 'Pleno', 'Os padrões comportamentais cuidam da comunicação eficiente e da assinalação de responsabilidades entre objetos.', 'Template Method e State') RETURNING id`
            )
        );
        // 13
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('O padrão de projeto strategy pode ser utilizado quando se necessita:', 'De variantes de um algoritmo|Deixar visível aos usuários estruturas de dados complexas|Isolar a aplicação da implementação da classe concreta|Reutilizar classes com interfaces inicialmente incompatíveis|Usar uma classe existente que não corresponde à interface requerida', 'Especialista', 'O padrão Strategy geralmente descreve diferentes maneiras de fazer a mesma coisa.', 'De variantes de um algoritmo') RETURNING id`
            )
        );
        // 14
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('O padrão de projetos chain of responsability é:', 'Um padrão arquitetural|Utilizado, quando o objeto que trata a solicitação deve ser escolhido automaticamente|Utilizado, quando especificamos explicitamente o receptor|Um padrão com alto acoplamento|Um padrão GoF estrutural', 'Sênior', 'É um padrão de projeto que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.', 'Utilizado, quando o objeto que trata a solicitação deve ser escolhido automaticamente') RETURNING id`
            )
        );
        // 15
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('O padrão de projeto singleton tem por objetivo:
                ', 'Criar famílias de objetos por meio de uma única interface|Permitir a variação de interfaces|Disponibilizar interfaces simplificadas|Processar vários objetos com características similares|Assegurar que cada classe tenha uma única instância', 'Sênior', 'Este padrão fornece um ponto de acesso global para uma instância específica.', 'Assegurar que cada classe tenha uma única instância') RETURNING id`
            )
        );
        // 16
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Os padrões de projeto tornam mais fácil reutilizar projetos e arquiteturas bem sucedidas. Atualmente existem diversos padrões de projetos conforme abaixo:
                I. Fornece uma interface para a criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
                
                II. Converte a interface de uma classe em outra interface esperada pelos clientes permitindo que certas classes trabalhem em conjunto, pois de outra forma, seria impossível por causa de suas interfaces incompatíveis.
                
                III. Fornece uma maneira de acessar sequencialmente os elementos de uma agregação de objetos sem expor sua representação subjacente.
                Os padrões de projeto apresentados em I, II e III são, respectivamente:', 'Façade, Builder e Mediator|Abstract Factory, Adapter e Iterator|Façade, Adapter e Interpreter|Singleton, Builder e Mediator|Abstract Factory, Prototype e Iterator', 'Master', 'Os padrões são do tipo criacional, estrutural e comportamental, respectivamente.', 'Abstract Factory, Adapter e Iterator') RETURNING id`
            )
        );
        // 17
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('No contexto de padrões de projeto GoF, há um padrão que tem como definição garantir que uma classe tenha apenas uma instância de si mesma e que forneça um ponto global de acesso. Assinale-o. ', 'Builder|Factory|Proxy|Singleton|Strategy', 'Sênior', 'É um padrão criacional.', 'Singleton') RETURNING id`
            )
        );
        // 18
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Considerando o catálogo GoF.
                I. Bridge.
                II. Mediator.
                III. Proxy.
                Estes padrões de projeto são, respectivamente, do tipo:
                ', 'Comportamental, estrutural e comportamental|Criacional, estrutural e comportamental|Estrutural, comportamental e criacional|Estrutural, comportamental e estrutural|Criacional, comportamental e criacional', 'Junior', 'O padrão Mediator é do tipo comportamental.', 'Estrutural, comportamental e estrutural') RETURNING id`
            )
        );
        // 19
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Padrões de Projeto descrevem soluções para problemas recorrentes no desenvolvimento de sistemas de software orientados a objetos. Um padrão de projeto estabelece um nome e define o problema, a solução, quando se aplica esta solução e suas consequências. Um dos padrões de projeto mais utilizados é o padrão Adapter (adaptador), que tem como função:', 'Garantir a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto|Adicionar dinamicamente um comportamento a um objeto existente sem alterar o código das classes existentes|Fornecer uma interface para a criação de famílias de objetos correlatos ou dependentes sem a necessidade de especificar a classe concreta destes objetos|Definir novas operações sem alterar as classes dos elementos sobre os quais ele opera|Permitir que classes com interfaces incompatíveis possam interagir', 'Master', 'O padrão Adapter permite que você crie uma classe de meio termo que serve como um tradutor entre seu código e a classe antiga, uma classe de terceiros, ou qualquer outra classe com uma interface estranha.', 'Permitir que classes com interfaces incompatíveis possam interagir') RETURNING id`
            )
        );
        // 20
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Qual padrão de projeto é mais adequado para resolver o problema abaixo:

                import static emailValidator.EmailValidator.isEmail;
                
                public class Client {
                /* 
                Suponha que é necessário trocar o método de validação de email ou este método não satisfaz todos os casos necessários, em todas as classes que usam este validador, teremos um problema.
                */
                    public static void main(String[] args) {
                        String email = "test@gmail.com";
                
                        if(isEmail(email)) {
                            System.out.println("Email válido");
                        } else {
                            System.out.println("Email inválido");
                        }
                    }
                }
                ', 'Adapter|Composite|Bridge|Strategy', 'Especialista', 'É um padrão de projeto do tipo estrutural.', 'Adapter') RETURNING id`
            )
        );
        // 21
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Um certo padrão de projeto de criação utiliza métodos para criar objetos sem que o chamador precise especificar a classe exata desses objetos, e sem invocar seu construtor diretamente. O método que define a classe a ser instanciada pode estar especificado em uma interface e ser codificado em classes que a implementam, ou então ser implementado em uma classe base e opcionalmente redefinido em uma classe filha. Esse padrão de projeto é conhecido como', 'Bridge|Singleton|Factory Method|Template Method|Visitor', 'Master', 'É um padrão de projeto do tipo criacional.', 'Factory Method') RETURNING id`
            )
        );
        // 22
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Os padrões de projeto de software são classificados de acordo com a funcionalidade. Assim, eles podem ser de criação, estrutural e comportamental. Assinale a alternativa que contém um exemplo de padrão de cada tipo.', 'Adapter, Bridge e Composite|Factory Method, Prototype e Interpreter|Prototype, Singleton e Adapter|Builder, Bridge e Observer|Façade, Bridge e Iterator', 'Pleno', 'Não é a primeira opção.', 'Builder, Bridge e Observer') RETURNING id`
            )
        );
        // 23
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Padrões de Projeto são descrições dos problemas e suas soluções. Essas soluções devem ter a possibilidade de serem reusadas em diferentes tipos de contextos. Também pode-se definir padrões de projetos como soluções já aprovadas para problemas comuns que foram criados a partir do conhecimento e, principalmente, da experiência. Assinale a alternativa que NÃO apresenta um padrão de projeto reconhecido.', 'Abstract Factory|Primitive Operation|Singleton|Adapter|Template Method', 'Pleno', 'Não é a última opção.', 'Primitive Operation') RETURNING id`
            )
        );
        // 24
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('É um padrão de projeto usado para criar um objeto sem expor a lógica de sua criação ao cliente, buscando o uso de interfaces comuns.', 'Singleton|Factory|Iterator|Memento|Adapter', 'Especialista', 'É um padrão de projeto do tipo criacional.', 'Factory') RETURNING id`
            )
        );
        // 25
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Um certo padrão de projeto, em Engenharia de Software, consiste em definir o esqueleto de um algoritmo em uma operação, delegando alguns de seus passos a subclasses. Essas subclasses redefinem esses passos sem alterar a estrutura do algoritmo.
                Esse padrão de projeto é conhecido como:
                ', 'Template Method|Singleton|Strategy|Chain of Responsibility|Command', 'Junior', 'É um padrão de projeto do tipo comportamental.', 'Template Method') RETURNING id`
            )
        );
        // 26
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Considere as afirmativas abaixo a respeito dos padrões de projeto Proxy e Template Method.
                I. O padrão Proxy pode ser usado para controlar os direitos de acesso a outro objeto.
                II. O padrão Proxy pode ser usado para acessar um objeto localizado em um ambiente remoto.
                III. O padrão Template Method define métodos templates para a criação de objetos que seguem uma determinada regra.
                IV. O padrão Template Method permite definir uma família de algoritmos que podem ser substituídos dinamicamente.
                Estão corretas as afirmativas:
                ', 'I e II|I e III|III e IV|II e IV', 'Master', 'Não é a terceira opção.', 'I e II') RETURNING id`
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.ids.map(async (curr) => {
            await queryRunner.query(`DELETE FROM problems WHERE id = ${curr}`);
        });
    }
}
