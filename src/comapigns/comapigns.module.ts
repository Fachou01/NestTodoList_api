import { Module } from '@nestjs/common';
import { ComapignsService } from './comapigns.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {config} from "../orm.config";
import {ComapignsController} from "./comapigns.controller";
import {CompaignEntity} from "../entities/compaign.entity";

@Module({
  imports: [TypeOrmModule.forRoot(config),TypeOrmModule.forFeature([CompaignEntity])],
  exports : [],
  controllers: [ComapignsController],
  providers: [ComapignsService]
})
export class ComapignsModule {}
