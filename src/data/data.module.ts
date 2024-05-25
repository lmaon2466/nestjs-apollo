import { Module } from "@nestjs/common";
import { AuthorDataSource } from "./author.data";
import { CommentDataSource } from "./comment.data";
import { AuthorDataRecords } from "./testData/author";
import { CommentDataRecords } from "./testData/comments";

@Module({
  imports: [],
  providers: [
    CommentDataSource,
    CommentDataRecords,
    AuthorDataRecords,
    AuthorDataSource,
  ],
  exports: [CommentDataSource, AuthorDataSource],
})
export class Datamodule {}
