import {Acao} from './acao';

export interface Investimento {
  nome: string;
  objetivo?: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: 'S' | 'N';
  acoes?: Acao[];
}
