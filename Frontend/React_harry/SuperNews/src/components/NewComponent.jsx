import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";

export default class NewComponent extends Component {
  articles = [
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Carolina Gonzalez",
      title: "Fintech Clara Raises $80 Million to Bolster Latin America Growth",
      description:
        "Financial technology startup Clara, a corporate spending management firm, has raised an additional $80 million in funding from investors as it seeks to bolster its operations in Brazil, Mexico and Colombia with plans to become profitable by year-end.",
      url: "https://www.bloomberg.com/news/articles/2025-04-29/fintech-clara-raises-80-million-to-bolster-latin-america-growth",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLtkz4ou9ICg/v1/1200x799.jpg",
      publishedAt: "2025-04-29T18:00:00+00:00",
      content:
        "Financial technology startup Clara, a corporate spending management firm, has raised an additional $80 million in funding from investors as it seeks to bolster its operations in Brazil, Mexico and Co… [+332 chars]",
    },
    {
      source: { id: "msnbc", name: "MSNBC" },
      author: "Clarissa-Jan Lim",
      title:
        "Amazon denies plan to show tariff price hikes on goods after White House criticism",
      description:
        "Amazon said it is not displaying tariff price hikes on products on its main website, denying a report that it plans to show consumers just how much President Trump's tariffs will raise the price of items after the White House criticized the tech giant.",
      url: "https://www.msnbc.com/top-stories/latest/amazon-tariffs-price-white-house-bezos-trump-rcna203488",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250429-amazon-shopping-app-vl-1033a-9850a1.jpg",
      publishedAt: "2025-04-29T17:24:56Z",
      content:
        "Amazon said it is not displaying tariff price hikes on products on its main website, denying an earlier report that it had planned to show consumers just how much President Donald Trumps tariffs will… [+2589 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Kurt Wagner, Sabrina Willmer",
      title:
        "Meta, FTC Spar at Antitrust Trial Over What Defines a Social Network",
      description:
        "Tech executives from major social media networks like TikTok, X, Reddit, Pinterest and Discord have appeared in federal court over the past week as part of the US Federal Trade Commission’s antitrust trial against Meta Platforms Inc.",
      url: "https://www.bloomberg.com/news/articles/2025-04-29/meta-ftc-spar-at-trial-over-what-defines-a-social-network",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWnDLdGfMfLY/v0/1200x799.jpg",
      publishedAt: "2025-04-29T17:09:00+00:00",
      content:
        "Tech executives from major social media networks like TikTok, X, Reddit, Pinterest and Discord have appeared in federal court over the past week as part of the US Federal Trade Commissions antitrust … [+88 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Biz Carson",
      title:
        "Peter Thiel Pledges $1.2 Billion of Palantir Stock for Personal Debt (PLTR)",
      description:
        "Palantir Technologies Inc. co-founder Peter Thiel has pledged more than $1 billion worth of stock he holds in the data-analysis software company as collateral for personal debt agreements, according to a recent filing.",
      url: "https://www.bloomberg.com/news/articles/2025-04-29/thiel-pledges-1-2-billion-of-palantir-shares-for-personal-debt",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZeWpWAh37j8/v1/1200x800.jpg",
      publishedAt: "2025-04-29T16:21:16+00:00",
      content:
        "Palantir Technologies Inc. co-founder Peter Thiel has pledged more than $1 billion worth of stock he holds in the data-analysis software company as collateral for personal debt agreements, according … [+203 chars]",
    },
    {
      source: { id: "la-repubblica", name: "La Repubblica" },
      author: "La Repubblica",
      title:
        "Costo dei dazi sui prodotti Amazon, la Casa Bianca: “Atto ostile”. La Big Tech chiarisce",
      description:
        "“Un’idea del nostro negozio Haul ultra low cost, mai preso in considerazione sullo store principale”, fa sapere l’azienda di Bezos",
      url: "https://www.repubblica.it/economia/2025/04/29/news/dazi_amazon_trump_costo_prodotti_prezzo-424156195/",
      urlToImage:
        "https://www.repstatic.it/content/nazionale/img/2025/04/29/173445475-49a12dba-e50f-4dc6-9fe5-9186c6a67120.jpg",
      publishedAt: "2025-04-29T15:34:51Z",
      content:
        "Unidea del nostro negozio Haul ultra low cost, mai preso in considerazione sullo store principale, fa sapere lazienda di Bezos\r\nL'ascolto è riservato agli abbonati premium",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Vipal Monga",
      title:
        "A Canadian Technocrat’s New Mission: A Radical Breakup With Trump’s U.S.",
      description:
        "Mark Carney won Canada’s election as a counterpoint to Trump—and now success means unwinding decades of foreign policy",
      url: "https://www.wsj.com/world/americas/mark-carney-canada-prime-minister-dd5ab528?mod=hp_lead_pos7",
      urlToImage: "https://images.wsj.net/im-54984395/social",
      publishedAt: "2025-04-29T11:48:00Z",
      content:
        "After his promises to protect Canadian voters from U.S. President Trump, Prime Minister Mark Carney must make quick work of a radical plan: decoupling Canadas economy from its biggest trading partner… [+496 chars]",
    },
    {
      source: { id: "wired", name: "Wired" },
      author: "Wired",
      title: "Trump’s Tariffs Will Widen the Digital Divide",
      description:
        "Tariffs will raise prices on essential tech and lead to inflation. Experts say that people who depend on cheap stuff to survive are going to suffer the most.",
      url: "https://www.wired.com/story/trumps-tariffs-will-widen-the-digital-divide/",
      urlToImage:
        "https://media.wired.com/photos/680ff585c27033f9c7d2e1cd/191:100/w_1280,c_limit/Gear_cheapelectronic_GettyImages-2152857918-(1).jpg",
      publishedAt: "2025-04-29T10:00:00Z",
      content:
        "As President Donald Trumps tariff turmoil continues, it becomes increasingly clear that this unpredictability in the US will create economic stress for American businesses and residents. But as with … [+3362 chars]",
    },
    {
      source: { id: "le-monde", name: "Le Monde" },
      author: "Isabelle Chaperon",
      title:
        "« Pirelli cherche à se débarrasser de son encombrant partenaire chinois, considéré comme un obstacle pour son développement aux Etats-Unis »",
      description:
        "Décision rarissime, le conseil d’administration du fabricant de pneus a entériné lundi 28 avril la fin du contrôle exercé par la société d’Etat chinois Sinochem, en dépit de sa participation de 37 %. Depuis le mois de janvier, Washington interdit les technolo…",
      url: "https://www.lemonde.fr/economie/article/2025/04/29/pirelli-cherche-a-se-debarrasser-de-son-encombrant-partenaire-chinois-considere-comme-un-obstacle-pour-son-developpement-aux-etats-unis_6601552_3234.html",
      urlToImage:
        "https://img.lemde.fr/2025/04/29/0/0/5568/3712/1440/960/60/0/71d434b_sirius-fs-upload-1-wsr4w74b8qqr-1745916153552-000-1k14ob.jpg",
      publishedAt: "2025-04-29T09:45:03Z",
      content:
        "Différents types de pneus Pirelli sont exposés dans le paddock de lAutodromo Nazionale di Monza, le 5 septembre 2019, avant le Grand Prix dItalie de Formule 1. MIGUEL MEDINA/AFP\r\nMarco Polo Internati… [+1523 chars]",
    },
    {
      source: { id: "gruenderszene", name: "Gruenderszene" },
      author: null,
      title: "KI im Unternehmen einsetzen: Anleitung und Tipps, wie es geht",
      description:
        "KI ersetzt repetitive Aufgaben, damit Mitarbeiter echten Mehrwert schaffen können. So bindet ihr die Technologie überall im Startup ein.",
      url: "https://www.businessinsider.de/gruenderszene/business/ki-soll-im-fokus-eures-startups-stehen-so-setzt-ihr-das-um-und-ueberzeugt-eure-mitarbeiter/",
      urlToImage:
        "https://cdn.businessinsider.de/wp-content/uploads/2025/04/202504_GS_Artikel_AIfirst_1800x1200.jpg?ver=1745836089",
      publishedAt: "2025-04-29T06:00:00+00:00",
      content:
        "Ein Beitrag von Henrik Roth. Er ist Mitgründer und CMO von Neuroflash aus Frankfurt. Das Unternehmen spezialisiert sich auf die Erstellung von Content durch KI, setzt dafür unter anderem auf ChatGPT … [+337 chars]",
    },
    {
      source: { id: "focus", name: "Focus" },
      author: "Sarah Neu",
      title:
        "Familienbetrieb baut jetzt eigenen Solarpark – und spart damit jede Menge Geld",
      description:
        "Eigentlich ist das Unternehmen Gira bekannt für seine Elektro- und Sicherheitstechnik. Jetzt kommt etwas völlig Neues dazu: Ein eigener Solarpark. Noch diesen Sommer soll Strom für zwei Werke laufen. Projektleiter Dietmar Daszkiewic erklärt im Interview, was …",
      url: "https://www.focus.de/earth/familienbetrieb-baut-jetzt-eigenen-solarpark-und-spart-damit-jede-menge-geld_cd933bba-33dd-4535-8859-bddd264eac46.html",
      urlToImage:
        "https://quadro.burda-forward.de/ctf/bc46bf57-0805-4ec9-97fc-21ccddfeac4f.b88f2b3e-5f42-4d12-8171-aa0f04e7d9e6.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28926%2C469%29&hash=239dad2d91f7064bf43260c7b279c02ebdd8e1384ea6600b9178b68953eacea7",
      publishedAt: "2025-04-26T05:00:00Z",
      content:
        "Auf 70.000 Quadratmetern baut das Familienunternehmen Gira aus Radevormwald (Nordrhein-Westfalen) gerade seinen eigenen Solarpark. Ab Sommer 2025 soll der die zwei nahegelegenen Werke des Gebäudetech… [+4273 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Lauren Forristal",
      title:
        "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
      description:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
      url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
      publishedAt: "2024-05-08T15:14:57Z",
      content:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.\r\nThe company announced Wednesday that it … [+6416 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Alex Wilhelm and Theresa Loconsolo",
      title:
        "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
      description:
        "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
      url: "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835",
      publishedAt: "2024-05-08T15:01:51Z",
      content:
        "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Rebecca Bellan",
      title:
        "Uber promises member exclusives as Uber One passes $1B run-rate | TechCrunch",
      description:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.  “You will see",
      url: "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675",
      publishedAt: "2024-05-08T14:41:36Z",
      content:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions. \r\nYou will see more member-exclusives coming up where members … [+4676 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Mike Butcher",
      title:
        "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
      description:
        "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
      url: "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
      publishedAt: "2024-05-08T13:02:12Z",
      content:
        "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (… [+3279 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Paul Sawers",
      title:
        "UK challenger bank Monzo nabs another $190M as US expansion beckons | TechCrunch",
      description:
        "Monzo has raised another $190 million, as the challenger bank looks to expand its presence internationally — particularly in the U.S.",
      url: "https://techcrunch.com/2024/05/08/uk-challenger-bank-monzo-nabs-another-190m-at-5-2b-valuation/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676",
      publishedAt: "2024-05-08T12:34:05Z",
      content:
        "Monzo has raised another £150 million ($190 million), as the challenger bank looks to expand its presence internationally particularly in the U.S.\r\nThe new round comes just two months after Monzo rai… [+1960 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Brian Heater",
      title: "iRobot names former Timex head Gary Cohen as CEO | TechCrunch",
      description:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive,",
      url: "https://techcrunch.com/2024/05/08/irobot-names-former-timex-head-gary-cohen-as-ceo/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-08-at-7.19.50 AM.jpg?resize=1200,919",
      publishedAt: "2024-05-08T12:22:30Z",
      content:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive, will be heading up the company, marking a maj… [+2120 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Devin Coldewey",
      title:
        "Google Deepmind debuts huge AlphaFold update and free proteomics-as-a-service web app | TechCrunch",
      description:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of",
      url: "https://techcrunch.com/2024/05/08/google-deepmind-debuts-huge-alphafold-update-and-free-proteomics-as-a-service-web-app/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.jpg?resize=1200,675",
      publishedAt: "2024-05-07T22:10:14Z",
      content:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of proteins. AlphaFold 3 is not only more accurate, b… [+7069 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Tim De Chant",
      title:
        "Mycocycle uses mushrooms to upcycle old tires and construction waste | TechCrunch",
      description:
        "The startup's fungi use their mycelium to consume oil-based rubbers and plastics, creating new bio-based materials in the process.",
      url: "https://techcrunch.com/2024/05/08/mycocycle-uses-mushrooms-to-upcycle-old-tires-and-construction-waste/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1350655821.jpeg?resize=1200,796",
      publishedAt: "2024-05-07T18:07:09Z",
      content:
        "Usually, when something starts to rot, it gets pitched in the trash. But Joanne Rodriguez wants to turn the concept of rot on its head by growing fungus on trash to turn it into something better.\r\nWe… [+4229 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Kyle Wiggers",
      title:
        "Controversial drone company Xtend leans into defense with new $40M round | TechCrunch",
      description:
        "Xtend, a drone company heavily involved with defense customers, has raised a new round of capital to expand its operations.",
      url: "https://techcrunch.com/2024/05/08/controversial-drone-company-xtend-leans-into-defense/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900",
      publishedAt: "2024-05-07T18:01:34Z",
      content:
        "Close to a decade ago, brothers Aviv and Matteo Shapira co-founded Replay, a company that created a video format for 360-degree replays — the sorts of replays that have become part and parcel of majo… [+5398 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello i am constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Super News - top Headlines</h1>
        <div className="my-5 row row-cols-4 row-gap-5">
          {this.state.articles.map((news) => {
            return (
              <div className="col" key={news.url}>
                <NewsItem
                  title={news.title}
                  description={news.description}
                  imageURL={news.urlToImage}
                  newsURL={news.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
