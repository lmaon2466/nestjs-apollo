import { Module } from "@nestjs/common";
import { CommentDataSource } from "./comment.data";
import { CommentDataRecords } from "./testData/comments";

@Module({
  imports: [],
  providers: [CommentDataSource, CommentDataRecords],
  exports: [CommentDataSource],
})
export class Datamodule {}
