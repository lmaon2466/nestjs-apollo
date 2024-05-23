import { v4 } from "uuid";
import { faker } from "@faker-js/faker";
import { User } from "../../graph/entity/user.entity";
import { Injectable } from "@nestjs/common";

// The following types would normally be generated by an ORM like Prisma
type Comment = { id: string; content: string; author: User };
export type generateRecordsPayload = { ok: boolean };

export class generateRecordsPayloadType implements generateRecordsPayload {
  ok: boolean = false;
}

@Injectable()
export class CommentDataRecords {
  public commentRecords: { [key: string]: Comment } = {};

  getComment(id: string) {
    return this.commentRecords[id];
  }

  getCommentsByAuthor(userId: string) {
    return Object.values(this.commentRecords).filter(
      (comment) => comment.author.id === userId
    );
  }

  getAllComments() {
    return Object.values(this.commentRecords);
  }

  generateCommentData(): generateRecordsPayload {
    try {
      for (let i = 0; i < 50; i++) {
        let id = v4();
        this.commentRecords[id] = {
          id,
          content: faker.word.words({ count: { min: 20, max: 100 } }),
          author: {
            __typename: "User",
            id: v4(),
            username: faker.internet.userName(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
          },
        };
      }

      return { ok: true };
    } catch (err: unknown) {
      console.error(err);
      return { ok: false };
    }
  }
}
