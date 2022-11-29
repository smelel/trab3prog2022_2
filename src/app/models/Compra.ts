import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn} from
'typeorm';
import Jogador from './Jogador';
@Entity('tb_compra')
class Compra {

 @PrimaryColumn('int')
 id: number;
 @Column('timestamp')
 data: Date;

 @Column()
 total: number;

 //agregacao por composicao: OneToMany do Jogador referencia esse atributo.
 @ManyToOne(type => Jogador)
 @JoinColumn({name: "jogador_nickname", referencedColumnName:
"nickname"})
 jogador: Jogador;
}
export default Compra;