import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from "./index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const text = "Hello it's my first test!";

describe("slugify", () => {
  it("should cut spaces and symbols", () => {
    expect(slugify(text)).toBe("hello-its-my-first-test");
  });
});

describe("composeArticleSlug", () => {
  it("should have id, cut spaces and symbols", () => {
    expect(composeArticleSlug(3, "Tue 11 Apr")).toBe("tue-11-apr-3");
  });
});

describe("extractArticleIdFromSlug", () => {
  it("should remove '-' and select last character", () => {
    expect(extractArticleIdFromSlug("Writing-test text-on-jest")).toBe("jest");
  });
});
