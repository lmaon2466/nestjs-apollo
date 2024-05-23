import { Test, TestingModule } from "@nestjs/testing";
import { CommentsQueryResolver } from "../comments.resolver";
import { CommentService } from "../../../service/comment.service";
import { generateRecordsPayload } from "../../../../dist/data/testData/comments";

describe("CommentsQueryResolver", () => {
  let resolver: CommentsQueryResolver;
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsQueryResolver, CommentService],
    }).compile();

    resolver = module.get<CommentsQueryResolver>(CommentsQueryResolver);
    service = module.get<CommentService>(CommentService);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  describe("generateTestCommentRecords", () => {
    it("should return an array of generated comment records", async () => {
      const result = [
        // Add your test data here
      ];
      jest.spyOn(service, "generateRecords").mockImplementation(() => result);

      expect(await resolver.generateTestCommentRecords()).toBe(result);
    });
  });

  describe("getCommentsByAuthor", () => {
    it("should return an array of comments made by a specific user", async () => {
      const result: Comment[] = [
        // Add your test data here
      ];
      jest
        .spyOn(service, "getCommentsByAuthor")
        .mockImplementation(() => Promise.resolve(result));

      expect(await resolver.getCommentsByAuthor("123")).toBe(result);
    });

    it("should return an empty array if no comments are found for the user", async () => {
      jest
        .spyOn(service, "getCommentsByAuthor")
        .mockImplementation(() => Promise.resolve([]));

      expect(await resolver.getCommentsByAuthor("123")).toEqual([]);
    });
  });

  describe("getAllComments", () => {
    it("should return an array of all comments", async () => {
      const result: Comment[] = [
        // Add your test data here
      ];
      jest
        .spyOn(service, "getAllComments")
        .mockImplementation(() => Promise.resolve(result));

      expect(await resolver.getAllComments()).toBe(result);
    });
  });
});
