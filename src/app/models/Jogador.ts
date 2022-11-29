import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import Endereco from './Endereco';
import Patente from './Patente';
import Compra from './Compra';
import Artefato from './Artefato';

@Entity('tb_jogador')
class Jogador {

    @PrimaryColumn('text')
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number;

    //coluna opcional
    @Column('date', {nullable: true})
    data_ultimo_login: Date;

    //coluna opcional, caso nao seja informado data, vai recebere a data corrente.
    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_cadastro: Date;

    @ManyToOne(type => Endereco)
    @JoinColumn({name: "endereco_id", referencedColumnName: "id"})
    endereco: Endereco;

    //agregacao
    @ManyToMany(() => Artefato)
    @JoinTable({name : "tb_jogador_artefato", joinColumn: {name:
    "jogador_nickname", referencedColumnName: "nickname"}, inverseJoinColumn: {name:
    "artefato_id", referencedColumnName: "id"}})
    artefatos: Artefato[];

    //agregacao
    @ManyToMany(() => Patente)
    @JoinTable({name : "tb_jogador_patente", joinColumn: {name:
    "jogador_nickname", referencedColumnName: "nickname"}, inverseJoinColumn: {name:
    "patente_id", referencedColumnName: "id"}})
    patentes: Patente[];
    //agregacao por composicao
    @OneToMany(() => Compra, compra => compra.jogador)
    compras: Compra[];

}
export default Jogador;