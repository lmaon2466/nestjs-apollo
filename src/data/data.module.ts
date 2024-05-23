import { Module } from "@nestjs/common";
import { CommentDataSource } from "./comment.data";

@Module({
  imports: [],
  providers: [CommentDataSource],
  exports: [CommentDataSource],
})
export class Datamodule {}
