import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('note')
export class NoteController {
    constructor(){
    }
    @Get()
    all():[string , string] {
        return ['Note1','Note2']

    }
}
