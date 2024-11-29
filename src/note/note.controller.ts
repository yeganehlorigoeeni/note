import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { NoteService } from './note.service';
import { create } from 'domain';
import { title } from 'process';

@Controller('note')
export class NoteController {
    constructor( private noteService:NoteService){
    }
    @Get()
    getAll(){
        return this.noteService.findAll()
    }
    @Post()
        create(@Body('title')title: string){
            return this.noteService.create(title)
        }
    
}
