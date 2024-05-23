import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { User } from "../entity/user.entity";

@ObjectType("Comment")
export class Comment {
  __typename: "Comment" = "Comment" as const;

  @Field(() => ID, {
    name: "id",
    description: "The comment's record uuid.",
    nullable: false,
  })
  id: string;

  @Field(() => String, {
    name: "content",
    description: "The comment's content.",
    nullable: false,
  })
  content?: string;

  @Field(() => User, {
    name: "author",
    description: "The comment authors user record.",
    nullable: false,
  })
  @Type(() => User)
  author: User;
}
