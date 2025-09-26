// src/notes/notes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private repo: Repository<Note>,
  ) {}

  create(data: Partial<Note>) {
    const note = this.repo.create(data);
    return this.repo.save(note);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, body: Partial<Note>) {
    const note = await this.repo.findOneBy({ id });
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    Object.assign(note, body);
    return this.repo.save(note);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new NotFoundException(`Nota com id ${id} não encontrada`);
    return { deleted: true };
  }

}
