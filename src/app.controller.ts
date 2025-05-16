import { Controller, Get, NotFoundException, Param, Req } from '@nestjs/common';
import { Aluno, AppService } from './app.service';
import { identity } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/alunos')
  getAlunos(): Aluno [] {
    return this.appService.getAlunos()
  }
 @Get('/alunos/:id')
  getAlunoById(@Param('id') id: string): Aluno {
    const aluno = this.appService.getAlunoById(id); 
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }
}


