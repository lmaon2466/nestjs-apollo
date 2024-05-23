import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { Comment } from "../object/comment.object";

@ObjectType("User")
@Directive('@key(fields: "id")')
export class User {
  __typename: "User" = "User" as const;

  @Field(() => ID, {
    name: "id",
    description: "The user's record uuid.",
    nullable: false,
  })
  id: string;

  @Field(() => String, {
    name: "username",
    description: "The user's username.",
    nullable: false,
  })
  username: string;

  @Field(() => String, {
    name: "firstname",
    description: "The user's first name.",
    nullable: false,
  })
  firstname: string;

  @Field(() => String, {
    name: "lastname",
    description: "The user's last name.",
    nullable: false,
  })
  lastname: string;

  @Field(() => Comment, {
    name: "comments",
    description: "Comments authored by the user.",
    nullable: true,
  })
  @Type(() => Comment)
  comments?: Comment[];
}
