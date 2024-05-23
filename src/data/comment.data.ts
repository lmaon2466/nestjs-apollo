import { Injectable, Logger } from "@nestjs/common";
import { CommentDataRecords } from "./testData/comments";
import { generateRecordsPayload } from "./testData/comments";

@Injectable()
export class CommentDataSource {
  private readonly logger: Logger = new Logger(CommentDataSource.name);
  constructor(private readonly commentRecords: CommentDataRecords) {}

  async getComment(id: string): Promise<any> {
    return {} as any;
  }

  async getAllComments(userId: string): Promise<any[]> {
    return [
      { content: "this worked", author: { id: "feresvtrg" }, id: "gregregrt" },
    ] as any;
  }

  generateRecords(): generateRecordsPayload {
    return this.commentRecords.generateCommentData();
  }
}
