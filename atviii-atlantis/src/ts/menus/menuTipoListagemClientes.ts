import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Todos os dependentes`)
        console.log(`| 3 - Dependentes de um titular específico`)
        console.log(`| 4 - Titular de um dependente específico`)
        console.log(`----------------------`)
    }
}