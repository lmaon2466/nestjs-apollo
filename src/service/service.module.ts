import { Module } from "@nestjs/common";
import { Datamodule } from "src/data/data.module";
import { CommentService } from "./comment.service";

@Module({
  imports: [Datamodule],
  providers: [CommentService],
  exports: [CommentService],
})
export class ServiceModule {}
