import { describe, it, expect } from "vitest";
import { render } from "../../utils/testUtils";
import ArticleCard from "./ArticleCard";

describe("ArticleCard Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <ArticleCard title="Test article">
        <div>Content</div>
      </ArticleCard>
    );
    const articleCardElement = getByTestId("article-card");
    expect(articleCardElement).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    const { getByText } = render(
      <ArticleCard title="Test article">
        <div>Content</div>
      </ArticleCard>
    );
    expect(getByText("Test article")).toBeInTheDocument();
  });

  it("renders children content", () => {
    const { getByText } = render(
      <ArticleCard title="Test article">
        <div>Content</div>
      </ArticleCard>
    );
    expect(getByText("Content")).toBeInTheDocument();
  });
});
