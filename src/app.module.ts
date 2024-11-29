import { Module, Options } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from 'sqlite3';
import { dirname, join } from 'path';


@Module ({
  imports: [TypeOrmModule.forRoot({
type: 'sqlite',
database:'database.sqlite',
entities:[join(__dirname,'**','*.entity.{ts,js}')],
synchronize:true,
  }), NoteModule],
})
export class AppModule {}
