const data = {
  skills: [
    {
      name: "C#",
      level: "90",
    },
    {
      name: "TypeScript",
      level: "80",
    },
    {
      name: "JavaScript",
      level: "75",
    },
    {
      name: "Unity",
      level: "75",
    },
    {
      name: "Python",
      level: "75",
    },
    {
      name: "Java",
      level: "50",
    },
    {
      name: "Html & CSS",
      level: "50",
    },
    {
      name: "Git",
      level: "33",
    },
    {
      name: "React",
      level: "50",
    },
    {
      name: "C++",
      level: "33",
    },
    {
      name: "SQL",
      level: "33",
    },
    {
      name: "php",
      level: "33",
    },
  ],
  portfolio: [
    {
      title: "Desktop Interaction Kit",
      descriptionEn:
        "Desktop Interaction Kit is an application that uses human motion, voice input. The functions of the application are similar to general operating systems. In this project, I was responsible for the development of the Framework and the video player. The Framework, provides basic human motion, voice and other input methods, and also provides the basic functions of the application, such as closing, moving, and resizing the application.",
      descriptionZh: `
      Desktop Interaction Kit是一個使用人體動作及語音應用程式，功能與一般操作系統相似。而我在這個專案中，負責開發Framework及影片播放器。在Framework中，提供了基本的人體動作，語音等輸入方法，亦提供了應用程式的基本功能，例如關閉應用程式、移動、及調較大小。`,
      langTags: ["C#"],
      appTags: ["WPF", "Kinect"],
      techTags: ["Gesture recognition", "Voice recognition"],
      links: {
        github: "https://github.com/MaltinR/SM3603_Project",
        youtube: "eQSwTL2hvR4",
      },
    },
    {
      title: "Employee Limited Company",
      descriptionEn:
        "This is a 2.5D two-player cooperative game made with Unity3D. In this project, I was responsible for program and algorithm design, game logic, and model making. The game refers to the gameplay of Among Us and Overcooked. Players need to complete the assigned work within a limited time to test the player's ability to divide labor. For this game, I designed an algorithm to generate random maps so that players can play a unique and non-repeating game every time.<br><br>*This is an exhibit of SIG Playful Media Showcase 2022 and 2022 Digital Entertainment Leadership Forum",
      descriptionZh: `這是一個使用Unity3D製作的2.5D 雙人合作遊戲。而我在這個專案中負責程式及算法設計、遊戲邏輯、模型製作。遊戲參考了Among Us及Overcooked的玩法，玩家需要在有限的時間內完成委派的工作，考驗玩家分工能力。在這遊戲，我特意設計了一個算法以生成隨機地圖，因而玩家每次都可以遊玩獨特不重覆的遊戲。
      <br><br>*此為SIG Playful Media Showcase 2022 及 2022數碼娛樂領袖論壇（DELF）參展作品
      `,
      langTags: ["C#"],
      appTags: ["Unity3D", "Blender"],
      techTags: [
        "Path finding",
        "Game design",
        "Room generation",
        "Modeling",
        "Program structure",
      ],
      links: {
        youtube: "ElA-x8C3uGc",
        sites: [
          {
            name: "SIG Playful Media 2022",
            url: "http://playfulmedia.hk/2022/Games_4.html",
          },
        ],
      },
    },
    {
      title: "Field Of Honour",
      descriptionEn:
        "Field Of Honour is a two-player competitive card game made with Unreal Engine 4. The biggest feature of the game is that each card has a model to represent it. I was in charge of game design, game logic, model making, API, and database design. It was also my first project developed with Unreal Engine.",
      descriptionZh: `Field Of Honour是一款使用Unreal Engine 4製作的雙人卡牌對戰遊戲，遊戲的最大特色是每一張卡片都有模型去代表他，我在這項目中負責遊戲設計、遊戲邏輯、模型製作、API、及數據庫設計。亦是我首個使用Unreal Engine開發的項目。`,
      langTags: ["C++", "SQL", "php"],
      appTags: ["Unreal Engine 4", "Blender", "XAMPP"],
      techTags: ["Database", "Game design", "Modeling", "Program structure"],
      links: {
        youtube: "v7FKWH8k3lo",
      },
    },
    {
      title: "Wordle Online",
      descriptionEn:
        "Wordle, the word game that took the world by storm, also fascinated me. But the original game does not offer simultaneous play, and the number of plays per day is limited. I developed a Windows application version of Wordle to play with friends. In this version of the game, players can play the same word at the same time, and other players will see the progress of other players in real-time for added excitement.",
      descriptionZh: `文字遊戲Wordle風靡全球，同樣令我著迷。但原創遊戲並不提供同時遊玩，而且每天遊玩次數有限。我開發了Windows應用程式版本的Wordle與朋友遊玩，在這版本中的遊戲，玩家可同時遊玩同一個詞語，其他玩家也會實時看到其他玩家的進度，以增加刺激感。`,
      langTags: ["C#"],
      appTags: ["WPF"],
      techTags: ["Networking", "Socket", "PC App"],
      links: {
        github: "https://github.com/MaltinR/WordleOnline",
        image: {
          path: "wordle_online.png",
          alt: "Preview of Wordle Online",
        },
      },
    },
    {
      title: "Observatory Simulator",
      descriptionEn:
        "This is an assignment in the course, a game developed by two people using the SDL Library. In this project, I was mainly responsible for art and game logic, I also participated in discussions on game skills, gameplay, and game speed. In the game, the player acts as the director of the observatory, and the goal of the game is to strike a balance between the economy and the safety of the citizens. As the game develops, players can invest resources to upgrade their skills.",
      descriptionZh: `這是課程中的作業，是一個使用SDL Library、雙人開發的遊戲。在這個項目中我主要負責美術及遊戲邏輯，亦參與遊戲技能、玩法、以及遊戲速度的討論。在遊戲中玩家扮演天文台台長，遊戲目標是需要在經濟及市民安全兩者之間取得平衡。隨著遊戲的發展，玩家可以投放資源去升級技能。`,
      langTags: ["C++"],
      appTags: ["SDL"],
      techTags: ["Game design", "PC game", "Artistic design"],
      links: {
        github: "https://github.com/MaltinR/Game-Observatory-Simulator",
        youtube: "8f45Hn6fV7I",
      },
    },
    {
      title: "Web Portfolio",
      descriptionEn:
        "The Web Portfolio is the web page you are currently browsing. In this web page, I demonstrate my skills and portfolio. The web page is designed, developed and programmed by myself, such as color matching, font style, layout and other elements.",
      descriptionZh: `Web Portfolio正是你目前正在瀏覽的網頁，在這個網頁中，我演示了我的技能以及作品集，網頁是由我本人設計、開發及編程，例如配色，字體風格，版面等等的元素。`,
      langTags: ["HTML", "CSS", "JavaScript"],
      appTags: [],
      techTags: ["Website"],
      links: {
        github: "https://github.com/MaltinR/maltinr.github.io",
        image: {
          path: "portfolio.png",
          alt: "Screenshot of Web Portfolio",
        },
      },
    },
    {
      title: "Krispest",
      descriptionEn:
        "This is a webpage focusing on snack inquiries. It uses React as the front-end, Node.js as the back-end, and MySQL as the data. The website provides advanced search options such as nutrition, ingredients and region to help users find their targets more easily. The website also has mobile device and desktop interfaces.",
      descriptionZh: `這個是一個關注零食查詢的網頁，使用了React作為前端，後端使用Node.js，數據則為MySQL。網頁提供進階搜尋如營養、成份及地區等篩選項協助用家更易找到目標。網頁亦同時設有移動設備及電腦版介面。`,
      langTags: ["JavaScript", "TypeScript"],
      appTags: ["React"],
      techTags: ["Next.js", "MySQL", "Node.js", "Express.js"],
      links: {
        image: {
          path: "krispest.png",
          alt: "Preview of Website",
        },
      },
    },
    {
      title: "Slot Fever",
      descriptionEn:
        "This game is based on the gameplay of slot machines. By making this game, I was able to deepen my understanding of existing knowledge such as Unity, and also learn technologies that I had never been exposed to before, such as AWS.",
      descriptionZh: `這個遊戲參照了角子機的玩法，透過製作此遊戲去加深理解已有知識如Unity，亦學習到以前沒有接觸的技術如AWS。`,
      langTags: ["C#", "JavaScript", "TypeScript"],
      appTags: ["Unity"],
      techTags: ["Steam", "AWS", "MySQL", "Node.js", "Express.js"],
      links: {
        image: {
          path: "slot_fever.png",
          alt: "Preview of Slot Fever gameplay",
        },
        sites: [
          {
            name: "Steam",
            url: "https://store.steampowered.com/app/2733430/Slot_Fever/",
          },
        ],
      },
    },
    {
      title: "Alphabet Mahjong-Spanish",
      descriptionEn:
        "This work was made by me at the beginning of learning Spanish. The game is played with rules that are similar to Mahjong. I hoped the players can learn new vocabulary when they are playing the game, and increase the players' motivation of learning Spanish. During this development process, I deepened my understanding of mobile games and tried to launch a mobile app.",
      descriptionZh: `此作品是我在學習西班牙語初期制作，遊戲以與麻雀相似的規則遊玩，同時學習新的字彙，希望能以遊戲增加學習的動機。在是次開發過程中，我加深了對手機遊戲的了解，並嘗試了上架手機應用程式。`,
      langTags: ["C#"],
      appTags: ["Unity"],
      techTags: ["Android"],
      links: {
        image: {
          path: "mahjong_spanish.webp",
          alt: "Preview of Alphabet Mahjong-Spanish",
        },
        sites: [
          {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.MartinL.AlphabetMahjongSpanish",
          },
        ],
      },
    },
    {
      title: "Discord Bot",
      descriptionEn:
        "Discord Bot is a one-man program for the Discord server, this bot provides some useful tools such as randomizing teams, and helping decision-making. The bot also automatically calculates server statistics. In addition, users can also use this bot to query the current real-time weather conditions provided by Hong Kong Observatory.",
      descriptionZh: `Discord Bot是一個單人開發的程式，用於Discord群組，此機械人提供了一些有用的工具例如：隨機分隊，幫助決策。機械人還會自動計算伺服器統計資訊。除此之外，用家亦可透過此機械人以了解目前香港天文台提供的實時天氣情況。`,
      langTags: ["JavaScript"],
      appTags: ["NodeJS", "Discord"],
      techTags: ["API"],
      links: {
        image: {
          path: "discord_bot.png",
          alt: "Preview of Discord Bot",
        },
      },
    },
    {
      title: "Phrasal Verb Challenge",
      descriptionEn:
        'In this assignment, I was mainly responsible for the layout design and also participated in discussions about the user experience. We have referenced learning apps on the market, and agreed that the complexity of the operation will affect the user\'s use and learning time, so we designed the gameplay centering on the principle of "one-handed control".',
      descriptionZh: `在這一個作業項目中，我主要負責版面設計，亦參與了有關用家體驗的討論。我們參考了市面上有關學習的應用程式，一致認為操作複雜性會影響用家的使用及學習時間，因此我們以「能以單手操控」的原則為中心設計玩法。`,
      langTags: ["Java"],
      appTags: ["Android Studio"],
      techTags: ["Android"],
      links: {
        image: {
          path: "phrasal_verb_challenge.png",
          alt: "Screenshots of Phrasal Verb Challenge",
        },
      },
    },
    {
      title: "Minesweeper",
      descriptionEn:
        "The game of minesweeper is simple and tests your reasoning ability. But the minesweeper games on the market are generally single-player. I hope to compete with my friends on the same map, so I developed my own version of minesweeper, in which players can enter the same seed code to compete together.",
      descriptionZh: `踩地雷玩法簡單，考驗推理能力。但市面上的踩地雷遊戲普遍都是單人遊玩，我希望可以與朋友在相同的地圖上比拼，因此我開發了一個踩地雷遊戲，當中玩可以輸入相同的種子碼一同競技。`,
      langTags: ["Java"],
      appTags: ["Swing"],
      techTags: ["PC App", "Map generating"],
      links: {
        image: {
          path: "minesweeper.png",
          alt: "Preview of Minesweeper",
        },
      },
    },
    {
      title: "Poker Inquiry",
      descriptionEn:
        "This program is for personal use, to check the hand range of Texas Hold'em. I often use this app when playing Texas Hold'em to reduce the tedious query work. After using this program, the speed of learning Texas Hold'em has increased.",
      descriptionZh: `這程式是作個人用途，用作查詢德州撲克的手牌範圍。本人在遊玩時經常使用這應用程式，以減少原本繁瑣的查詢工作。在使用此程式後，明顯感受到學習德州撲克的速度增加了。`,
      langTags: ["C#"],
      appTags: ["WinForm"],
      techTags: ["FileIO", "PC App"],
      links: {
        github: "https://github.com/MaltinR/Poker_Inquiry",
        image: {
          path: "poker_inquiry.png",
          alt: "Preview of Poker Inquiry",
        },
      },
    },
  ],
};

// Get DOM
const skillGrid = document.querySelector(".grid-skills");
const showcase = document.querySelector(".section-showcase");
const skillsSection = document.querySelector(".section-skills");

data["skills"].forEach((e) => {
  skillGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="skill">
      <div class="skill-box">
        <p class="skill-title">${e.name}</p>
        <div class="skill-bar-flex">

          <div class="skill-bar skill-bar--main skill-bar--main--0 skill-bar--main--${e.level}"></div>
          <div class="skill-bar skill-bar--background"></div>
        </div>
      </div>
    </div>
    `
  );
});

const addPortfolio = function (project, isPreviewFirst = false) {
  const getTagsHTML = function (tags, tagName) {
    return tags.reduce((pre, e) => {
      return pre + `<p class="tag tag-${tagName}">${e}</p>`;
    }, "");
  };

  const langTagsHTML = getTagsHTML(project.langTags, "language");
  const appTagsHTML = getTagsHTML(project.appTags, "software");
  const techTagsHTML = getTagsHTML(project.techTags, "tech");

  const previewHTML = project.links.youtube
    ? `
  <iframe class="preview" src="https://www.youtube.com/embed/${project.links.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
    : `<img class="preview" src="images/${project.links.image.path}" alt="${project.links.image.alt}">`;

  let githubHTML = "";
  project.links.github &&
    (githubHTML += `<a href="${project.links.github}">Github</a>`);

  let sitesHTML = "";
  // Link
  if (project.links.sites) {
    sitesHTML = project.links.sites.reduce((pre, site) => {
      return pre + `<a href="${site.url}">${site.name}</a>`;
    }, "");
  }

  showcase.insertAdjacentHTML(
    "beforeend",
    `
    <div class="showcase showcase-right">
      <div class="description">

        <p class="description-title">${project.title}</p>
        <p class="description-text">${project.descriptionEn}</p>
        <p class="description-text">${project.descriptionZh}</p>
      </div>
      <div class="preview-and-tags ${isPreviewFirst ? "flex-first" : ""}">
        <div class="preview-frame">
          ${previewHTML}
        </div>
        <div class="tags">
          ${langTagsHTML ?? langTagsHTML}
          ${appTagsHTML ?? appTagsHTML}
          ${techTagsHTML ?? techTagsHTML}
        </div>
        <div class="related">
          ${githubHTML}
          ${sitesHTML}
        </div>
      </div>
    </div>
  `
  );
};

data.portfolio.forEach((port, index) => {
  addPortfolio(port, index % 2 == 1);
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });

      return;
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
    window.open(href, "_blank");
  });
});

//// Reveal ////
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach((skillBar) => {
    skillBar.classList.remove("skill-bar--main--0");
  });
  observer.unobserve(entry.target);
};

const skillsSectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.35,
});

skillsSectionObserver.observe(skillsSection);
