import { Injectable } from '@nestjs/common';
import { subscribeOn } from 'rxjs';

export interface Aluno{
  id: string
  name: string
  surname: string
}

@Injectable()
export class AppService {
  private alunos: Aluno[] = [{
    id: "1",
    name: "Lucas",
    surname: "Lopes"
  },{
    id: "2",
    name: "Arthur",
    surname: "Souza"
  },{
    id: "3",
    name: "Adriana",
    surname: "Souza"
  }]

  getAlunos(): Aluno[]{
    return this.alunos;
}
  getAlunoById(id: string): Aluno | undefined {
  return this.alunos.find(aluno => aluno.id === id);
}

}

