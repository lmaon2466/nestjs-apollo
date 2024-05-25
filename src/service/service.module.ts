import { Module } from "@nestjs/common";
import { Datamodule } from "src/data/data.module";
import { CommentService } from "./comment.service";
import { AuthorService } from "./author.service";

@Module({
  imports: [Datamodule],
  providers: [CommentService, AuthorService],
  exports: [CommentService, AuthorService],
})
export class ServiceModule {}
