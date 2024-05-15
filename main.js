class No {
    constructor(dado, prioridade) {
        this.dado = dado;
        this.prioridade = prioridade;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.topo = null;
    }

    inserirComPrioridade(dado, cor) {
        let prioridade;
        if (cor === "amarelo") {
            prioridade = 1;
        } else if (cor === "vermelho") {
            prioridade = 2; // Prioridade máxima para vermelho
        } else {
            prioridade = 0; // Verde ou qualquer outra cor
        }

        let novoNo = new No(dado, prioridade);

        if (!this.topo || prioridade > this.topo.prioridade) {
            novoNo.proximo = this.topo;
            this.topo = novoNo;
        } else {
            let atual = this.topo;

            while (atual.proximo && prioridade <= atual.proximo.prioridade) {
                atual = atual.proximo;
            }
            novoNo.proximo = atual.proximo;
            atual.proximo = novoNo;
        }
    }

    imprimirLista() {
        let atual = this.topo;
        while (atual) {
            let cor;
            if (atual.prioridade === 1) {
                cor = "amarelo";
            } else if (atual.prioridade === 2) {
                cor = "vermelho";
            } else {
                cor = "verde";
            }
            console.log(`Dado: ${atual.dado}, Prioridade: ${cor}`);
            atual = atual.proximo;
        }
    }
}

let lista = new ListaEncadeada();
lista.inserirComPrioridade("Item 1", "amarelo");
lista.inserirComPrioridade("Item 2", "verde");
lista.inserirComPrioridade("Item 3", "vermelho");
lista.inserirComPrioridade("Item 4", "amarelo");
lista.inserirComPrioridade("Item 5", "vermelho");
lista.imprimirLista();

