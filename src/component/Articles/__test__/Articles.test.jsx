import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElement,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/dom";
import Articles from "..";
import * as api from "../../../api/apiSlice";
import mediaQuery from "css-mediaquery";

jest.mock("../../../api/apiSlice");

function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

describe("Article page", () => {
  beforeEach(() => jest.clearAllMocks());
  it("render Article component with success api", async () => {
    api.fetchArticles.mockResolvedValue({
      results: [
        {
          uri: "nyt://article/b04a8df5-1f93-5910-b484-ab852443e662",
          url: "https://www.nytimes.com/2024/02/07/business/economy/united-states-china-mexico-trade.html",
          id: 100000009292387,
          asset_id: 100000009292387,
          source: "New York Times",
          published_date: "2024-02-07",
          updated: "2024-02-07 09:47:38",
          section: "Business",
          subsection: "Economy",
          nytdsection: "business",
          adx_keywords:
            "International Trade and World Market;United States Economy;Factories and Manufacturing;Supply Chain;Customs (Tariff);United States Politics and Government;United States International Relations;Russian Invasion of Ukraine (2022);Schneider Electric SA;China;Mexico;United States",
          column: null,
          byline: "By Ana Swanson and Simon Romero",
          type: "Article",
          title:
            "For First Time in Two Decades, U.S. Buys More From Mexico Than China",
          abstract:
            "The United States bought more goods from Mexico than China in 2023 for the first time in 20 years, evidence of how much global trade patterns have shifted.",
          des_facet: [
            "International Trade and World Market",
            "United States Economy",
            "Factories and Manufacturing",
            "Supply Chain",
            "Customs (Tariff)",
            "United States Politics and Government",
            "United States International Relations",
            "Russian Invasion of Ukraine (2022)",
          ],
          org_facet: ["Schneider Electric SA"],
          per_facet: [],
          geo_facet: ["China", "Mexico", "United States"],
          media: [
            {
              type: "image",
              subtype: "photo",
              caption:
                "A factory in the northern Mexico industrial hub of Saltillo. Mexico was among the markets that American consumers and businesses turned to last year for car parts, shoes, toys and raw materials.",
              copyright: "Daniel Becerril/Reuters",
              approved_for_syndication: 1,
              "media-metadata": [
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-thumbStandard.jpg",
                  format: "Standard Thumbnail",
                  height: 75,
                  width: 75,
                },
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-mediumThreeByTwo210.jpg",
                  format: "mediumThreeByTwo210",
                  height: 140,
                  width: 210,
                },
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-mediumThreeByTwo440.jpg",
                  format: "mediumThreeByTwo440",
                  height: 293,
                  width: 440,
                },
              ],
            },
          ],
          eta_id: 0,
        },
      ],
    });
    render(<Articles />);
    await waitFor(() => {
      screen.getByText(
        "For First Time in Two Decades, U.S. Buys More From Mexico Than China"
      );
    });

    fireEvent.click(
      screen.getByText(
        "For First Time in Two Decades, U.S. Buys More From Mexico Than China"
      )
    );
  });
  it("render Article component in mobile", async () => {
    resizeScreenSize(480);
    api.fetchArticles.mockResolvedValue({
      results: [
        {
          uri: "nyt://article/b04a8df5-1f93-5910-b484-ab852443e662",
          url: "https://www.nytimes.com/2024/02/07/business/economy/united-states-china-mexico-trade.html",
          id: 100000009292387,
          asset_id: 100000009292387,
          source: "New York Times",
          published_date: "2024-02-07",
          updated: "2024-02-07 09:47:38",
          section: "Business",
          subsection: "Economy",
          nytdsection: "business",
          adx_keywords:
            "International Trade and World Market;United States Economy;Factories and Manufacturing;Supply Chain;Customs (Tariff);United States Politics and Government;United States International Relations;Russian Invasion of Ukraine (2022);Schneider Electric SA;China;Mexico;United States",
          column: null,
          byline: "By Ana Swanson and Simon Romero",
          type: "Article",
          title:
            "For First Time in Two Decades, U.S. Buys More From Mexico Than China",
          abstract:
            "The United States bought more goods from Mexico than China in 2023 for the first time in 20 years, evidence of how much global trade patterns have shifted.",
          des_facet: [
            "International Trade and World Market",
            "United States Economy",
            "Factories and Manufacturing",
            "Supply Chain",
            "Customs (Tariff)",
            "United States Politics and Government",
            "United States International Relations",
            "Russian Invasion of Ukraine (2022)",
          ],
          org_facet: ["Schneider Electric SA"],
          per_facet: [],
          geo_facet: ["China", "Mexico", "United States"],
          media: [
            {
              type: "image",
              subtype: "photo",
              caption:
                "A factory in the northern Mexico industrial hub of Saltillo. Mexico was among the markets that American consumers and businesses turned to last year for car parts, shoes, toys and raw materials.",
              copyright: "Daniel Becerril/Reuters",
              approved_for_syndication: 1,
              "media-metadata": [
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-thumbStandard.jpg",
                  format: "Standard Thumbnail",
                  height: 75,
                  width: 75,
                },
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-mediumThreeByTwo210.jpg",
                  format: "mediumThreeByTwo210",
                  height: 140,
                  width: 210,
                },
                {
                  url: "https://static01.nyt.com/images/2024/02/07/multimedia/07dc-trade-01-jwpg/07dc-trade-01-jwpg-mediumThreeByTwo440.jpg",
                  format: "mediumThreeByTwo440",
                  height: 293,
                  width: 440,
                },
              ],
            },
          ],
          eta_id: 0,
        },
      ],
    });
    render(<Articles />);
    await waitFor(() => {
      screen.getByText(
        "For First Time in Two Decades, U.S. Buys More From Mexico Than China"
      );
    });
    fireEvent.click(
      screen.getByText(
        "For First Time in Two Decades, U.S. Buys More From Mexico Than China"
      )
    );
    fireEvent.click(screen.getByRole("button"));
  });
  it("render Article component with failed api", async () => {
    api.fetchArticles.mockRejectedValue({});
    render(<Articles />);
    await waitFor(() => {
      screen.getByText("Article Api failed...");
    });
  });
});
