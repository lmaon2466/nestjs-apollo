import { Injectable } from "@nestjs/common/decorators";
import { CommentDataSource } from "../data/comment.data";
import { Comment } from "../graph/object/comment.object";
import { generateRecordsPayload } from "../../dist/data/testData/comments";

@Injectable()
export class CommentService {
  constructor(private readonly commentData: CommentDataSource) {}

  async getComment(id: string): Promise<Comment> {
    return await this.commentData.getComment(id);
  }

  async getAllComments(userId: string): Promise<Comment[]> {
    return await this.commentData.getAllComments(userId);
  }

  generateRecords(): generateRecordsPayload {
    return this.commentData.generateRecords();
  }
}
