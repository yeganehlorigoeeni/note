import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
    constructor(@InjectRepository(Note) private noteRepository: Repository<Note>){

    }
    findAll(){
        return this.noteRepository.find()
    }
    create(title:string){
        let note:Note
        note.title =title
        note.description= ''
        return this.noteRepository.save(note)
    }
}
