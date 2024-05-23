import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AuthorDataSource {
  private readonly logger: Logger = new Logger(AuthorDataSource.name);
  constructor() {}
}
