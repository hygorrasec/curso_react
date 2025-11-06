import { useState } from 'react';

class ContaBancariaClasse {
    private saldo: number;
    public titular: string;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

function ContaBancaria() {
    const [mensagem, setMensagem] = useState('');

    const visualizarConta = () => {
        const conta = new ContaBancariaClasse('Hygor', 1000);
        conta.depositar(200);
        conta.sacar(500);
        setMensagem(
            `Titular: ${conta.titular} | Saldo final: R$ ${conta.consultarSaldo()}`
        );
    };

    return (
        <>
            <button onClick={visualizarConta}>Visualizar Conta</button>
            <p>{mensagem}</p>
        </>
    );
}

export default ContaBancaria;
