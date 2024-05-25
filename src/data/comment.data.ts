import { Injectable, Logger } from "@nestjs/common";
import { CommentDataRecords } from "./testData/comments";
import { Comment } from "../graph/object/comment.object";

@Injectable()
export class CommentDataSource {
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(CommentDataSource.name);

  // CommentDataRecords is just a placeholder for the actual data source.
  constructor(private readonly commentRecords: CommentDataRecords) {}

  /**
   * Creates a new comment.
   * @param input - The input for creating a new comment.
   * @returns A promise that resolves to the created comment.
   */
  async createComment(input): Promise<any> {
    this.logger.log(`Creating comment with text "${input.text}"`);
    return this.commentRecords.createComment(input);
  }

  /**
   * Fetches a comment by its ID.
   * @param id - The ID of the comment.
   * @returns A promise that resolves to the comment with the given ID.
   * Currently, this method returns an empty object. You should replace this with your actual implementation.
   */
  async getComment(id: string): Promise<any> {
    this.logger.log(`Fetching comment with id ${id}`);
    return this.commentRecords.getCommentById(id);
  }

  /**
   * Fetches all comments made by a specific user.
   * @param authorId - The ID of the author.
   * @returns A promise that resolves to an array of comments made by the author.
   */
  async getCommentsByAuthor(authorId: string): Promise<any[]> {
    this.logger.log(`Fetching comments made by author with id ${authorId}`);
    return this.commentRecords.getCommentsByAuthor(authorId);
  }

  /**
   * Fetches all comments.
   * @returns A promise that resolves to an array of all comments.
   */
  async getAllComments(): Promise<any[]> {
    this.logger.log(`Fetching all comments`);
    return this.commentRecords.getAllComments();
  }

  /**
   * Generates comment records.
   * @returns The payload of the generated records.
   */
  generateRecords() {
    this.logger.log(`Generating comment records`);
    return this.commentRecords.generateCommentData();
  }
}
