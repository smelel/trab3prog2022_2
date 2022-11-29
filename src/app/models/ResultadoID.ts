import {ManyToOne, JoinColumn, Column} from "typeorm";
import Round from './Round';
import Objetivo from './Objetivo';
export class ResultadoID {
 //associação.
 @ManyToOne(type => Round, {primary : true})
 @JoinColumn({name: "round_id", referencedColumnName: "id"})
 round: Round;
 //associação.
 @ManyToOne(type => Objetivo, {primary : true})
 @JoinColumn({name: "objetivo_id", referencedColumnName: "id"})
 objetivo: Objetivo;
}