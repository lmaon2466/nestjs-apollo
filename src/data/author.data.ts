import { Injectable, Logger } from "@nestjs/common";
import { AuthorDataRecords } from "./testData/author";
import { generateRecordsPayload } from "./testData/test-types";

@Injectable()
export class AuthorDataSource {
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(AuthorDataSource.name);

  // AuthorDataRecords is just a placeholder for the actual data source.
  constructor(private readonly authorRecords: AuthorDataRecords) {}

  /**
   * Creates a new author.
   * @param input - The input for creating a new author.
   * @returns A promise that resolves to the created author.
   */
  async createAuthor(input): Promise<any> {
    this.logger.log(
      `Creating author with name "${input.firstName} ${input.lastName}"`
    );
    return this.authorRecords.createAuthor(input);
  }

  /**
   * Fetches an author by its ID.
   * @param id - The ID of the author.
   * @returns A promise that resolves to the author with the given ID.
   */
  async getAuthorById(authorId: string): Promise<any> {
    this.logger.log(`Fetching author with id ${authorId}`);
    return this.authorRecords.getAuthorById(authorId);
  }

  /**
   * Fetches all authors.
   * @returns A promise that resolves to an array of all authors.
   */
  async getAllAuthors(): Promise<any[]> {
    this.logger.log(`Fetching all authors`);
    return this.authorRecords.getAllAuthors();
  }

  /**
   * Generates author records.
   * @returns The payload of the generated records.
   */
  generateRecords(): generateRecordsPayload {
    this.logger.log(`Generating author records`);
    return this.authorRecords.generateAuthorData();
  }
}
