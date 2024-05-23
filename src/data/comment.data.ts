import { Injectable, Logger } from "@nestjs/common";
import { CommentDataRecords } from "./testData/comments";
import { generateRecordsPayload } from "./testData/comments";

@Injectable()
export class CommentDataSource {
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(CommentDataSource.name);

  // Inject CommentDataRecords in the constructor
  constructor(private readonly commentRecords: CommentDataRecords) {}

  /**
   * Fetches a comment by its ID.
   * @param id - The ID of the comment.
   * @returns A promise that resolves to the comment with the given ID.
   * Currently, this method returns an empty object. You should replace this with your actual implementation.
   *
   * Example usage:
   * const comment = await this.getComment('123');
   */
  async getComment(id: string): Promise<any> {
    this.logger.log(`Fetching comment with id ${id}`);
    return {} as any;
  }

  /**
   * Fetches all comments made by a specific user.
   * @param userId - The ID of the user.
   * @returns A promise that resolves to an array of comments made by the user.
   *
   * Example usage:
   * const comments = await this.getCommentsByAuthor('123');
   */
  async getCommentsByAuthor(userId: string): Promise<any[]> {
    this.logger.log(`Fetching comments made by user with id ${userId}`);
    return this.commentRecords.getCommentsByAuthor(userId);
  }

  /**
   * Fetches all comments.
   * @returns A promise that resolves to an array of all comments.
   *
   * Example usage:
   * const comments = await this.getAllComments();
   */
  async getAllComments(): Promise<any[]> {
    this.logger.log(`Fetching all comments`);
    return this.commentRecords.getAllComments();
  }

  /**
   * Generates comment records.
   * @returns The payload of the generated records.
   *
   * Example usage:
   * const recordsPayload = this.generateRecords();
   */
  generateRecords(): generateRecordsPayload {
    this.logger.log(`Generating comment records`);
    return this.commentRecords.generateCommentData();
  }
}
