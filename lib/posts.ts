export const categories = [
  {
    slug: "workouts",
    name: "Workouts",
    description: "Simple sessions and movement plans that meet you where you are.",
  },
  {
    slug: "nutrition",
    name: "Nutrition Basics",
    description: "Flexible food guidance for everyday energy and satisfying meals.",
  },
  {
    slug: "habits",
    name: "Habit Building",
    description: "Small systems that make movement easier to return to.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: {
    label: string;
    text: string;
  };
};

export type Citation = {
  label: string;
  href: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: CategorySlug;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  author: string;
  quickStart: string[];
  sections: ArticleSection[];
  relatedSlugs: string[];
  citations: Citation[];
};

const postData: Post[] = [
  {
    slug: "full-body-workout-for-complete-beginners",
    title: "A Simple Full-Body Workout for Complete Beginners",
    description:
      "Start with a practical full-body routine, clear form cues, and flexible options for building strength without overdoing it.",
    excerpt:
      "A calm, repeatable full-body routine you can do at home with a chair and a little floor space.",
    category: "workouts",
    tags: ["beginner workouts", "bodyweight training", "strength"],
    publishedAt: "2026-07-26",
    updatedAt: "2026-07-26",
    readingMinutes: 7,
    author: "Steady Start Editorial Team",
    quickStart: [
      "Do this routine 2 or 3 non-consecutive days each week.",
      "Start with 1 round; rest whenever your form changes.",
      "Choose the easier option first and add reps only when it feels steady.",
    ],
    sections: [
      {
        id: "before-you-start",
        heading: "Before you start",
        paragraphs: [
          "You do not need to feel fit before you begin. This session is designed to help you practice the main movement patterns at a comfortable effort: squatting, pushing, pulling, hinging, and carrying your body through space.",
          "Aim for an effort where you could still say a short sentence. A little challenge is useful; sharp pain, dizziness, or a feeling that something is wrong is a reason to stop and seek appropriate advice.",
        ],
        callout: {
          label: "A useful rule",
          text: "Leave a couple of repetitions in reserve. Ending with the sense that you could do a little more is exactly right for a first few weeks.",
        },
      },
      {
        id: "the-routine",
        heading: "The routine",
        paragraphs: [
          "Move through the five exercises in order. Rest for about 45 to 90 seconds between exercises, or longer if you need it. After the last exercise, either finish there or repeat the circuit once more.",
        ],
        bullets: [
          "Chair squat — 6 to 10 reps. Sit back toward a sturdy chair, lightly touch it, then stand. Use your hands on the chair if needed.",
          "Wall or counter push-up — 6 to 10 reps. Keep your body in a straight line and bring your chest toward the wall or counter.",
          "Backpack row — 8 to 12 reps per side. Put a few books in a backpack, brace one hand on a chair, and pull the bag toward your hip.",
          "Hip hinge — 8 to 12 reps. Soften your knees, send your hips back, and keep your back long as your hands slide toward your thighs.",
          "Supported march — 20 to 30 slow steps. Hold a counter if you like and lift one knee at a time with control.",
        ],
      },
      {
        id: "make-it-fit",
        heading: "Make it fit your starting point",
        paragraphs: [
          "The best version of this routine is the one you can repeat. If one round leaves you tired for the rest of the day, do fewer repetitions next time. If it feels easy and your form is stable, add one or two repetitions before adding a second round.",
          "There is no prize for rushing progression. Give yourself two or three sessions at the same level so your body and your confidence can catch up together.",
        ],
        callout: {
          label: "If you miss a workout",
          text: "Nothing needs to be made up. Return to the next planned session, even if it is only one round. Consistency grows from returning, not from being perfect.",
        },
      },
      {
        id: "after-the-workout",
        heading: "After the workout",
        paragraphs: [
          "A short walk, a glass of water, and a normal meal are enough after this kind of session. Mild muscle soreness can happen when you try something new, but it is not a scorecard. Let your next session be guided by how you feel, not by whether you are sore.",
          "Pair this routine with a very small planning habit so it has a place in your week. You might also use the balanced-plate approach to make ordinary meals more supportive of your activity.",
        ],
      },
    ],
    relatedSlugs: [
      "balanced-plate-without-tracking",
      "ten-minute-habit-for-exercise-consistency",
    ],
    citations: [
      {
        label: "Physical Activity Guidelines for Americans, 2nd edition (U.S. Department of Health and Human Services)",
        href: "https://health.gov/sites/default/files/2019-09/Physical_Activity_Guidelines_2nd_edition.pdf",
      },
    ],
  },
  {
    slug: "balanced-plate-without-tracking",
    title: "How to Build a Balanced Plate Without Tracking Everything",
    description:
      "Learn a flexible way to build satisfying meals with protein, plants, carbs, and fats—without calorie counting or rigid rules.",
    excerpt:
      "A flexible visual guide for making everyday meals more satisfying, with no apps, numbers, or perfect plates required.",
    category: "nutrition",
    tags: ["nutrition basics", "balanced meals", "beginner nutrition"],
    publishedAt: "2026-07-26",
    updatedAt: "2026-07-26",
    readingMinutes: 6,
    author: "Steady Start Editorial Team",
    quickStart: [
      "Start with a source of protein and a fruit or vegetable when you can.",
      "Add a carbohydrate and a fat based on your preference, budget, and hunger.",
      "Use this as a flexible picture, not a rule to follow at every meal.",
    ],
    sections: [
      {
        id: "why-a-plate",
        heading: "Why a plate can be more useful than an app",
        paragraphs: [
          "Food tracking works for some people, but it is not required for basic nutrition. A visual framework can help you notice what is on your plate while leaving room for culture, convenience, appetite, and enjoyment.",
          "The aim is not a perfectly divided plate. The aim is to build meals that keep you comfortably fueled and make it easier to recover from everyday activity.",
        ],
      },
      {
        id: "four-parts",
        heading: "Think in four flexible parts",
        paragraphs: [
          "Most meals can include some combination of these four parts. Start with what is available and add one thing rather than rebuilding your entire routine.",
        ],
        bullets: [
          "Protein: eggs, yogurt, fish, chicken, tofu, beans, lentils, cheese, or a food that fits your preferences.",
          "Plants: vegetables, fruit, beans, lentils, herbs, or salads. Frozen and canned choices count too.",
          "Carbohydrates: bread, rice, pasta, oats, potatoes, corn, couscous, or other grains and starchy foods.",
          "Fats and flavor: olive oil, nuts, seeds, avocado, sauces, dressings, or the ingredients that make the meal enjoyable.",
        ],
        callout: {
          label: "Start where you are",
          text: "If breakfast is usually toast and coffee, try adding yogurt, an egg, fruit, or peanut butter. One addition is a real change.",
        },
      },
      {
        id: "ordinary-meals",
        heading: "What this looks like in ordinary meals",
        paragraphs: [
          "A balanced meal can be a bowl of lentil soup with bread and fruit. It can be pasta with tuna, tomatoes, and olive oil. It can be a sandwich with chicken or hummus, a side salad, and something you enjoy. The point is variety over time, not a single ideal meal.",
          "If you are exercising more, eating regular meals and snacks can make that activity feel more manageable. You do not need a special diet to begin a gentle strength routine.",
        ],
      },
      {
        id: "a-kinder-next-step",
        heading: "Choose one kind next step",
        paragraphs: [
          "Pick the meal you have most often and ask what would make it a little more satisfying or sustaining. That might mean adding fruit to breakfast, putting beans in a soup, or keeping a simple protein option at home.",
          "Nutrition advice should support your life, not take it over. If food feels stressful, restrictive, or closely tied to a medical condition, a registered dietitian or clinician can help with guidance that is personal to you.",
        ],
      },
    ],
    relatedSlugs: [
      "full-body-workout-for-complete-beginners",
      "ten-minute-habit-for-exercise-consistency",
    ],
    citations: [
      {
        label: "Healthy Eating Plate (Harvard T.H. Chan School of Public Health)",
        href: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/",
      },
    ],
  },
  {
    slug: "ten-minute-habit-for-exercise-consistency",
    title: "The 10-Minute Habit That Makes Exercise More Consistent",
    description:
      "Build a workout habit that survives busy weeks using a small starting step, a reliable cue, and a guilt-free reset plan.",
    excerpt:
      "A small, repeatable start can be more powerful than a big plan. Here is how to build one that works on real weeks.",
    category: "habits",
    tags: ["fitness habits", "consistency", "beginner fitness"],
    publishedAt: "2026-07-26",
    updatedAt: "2026-07-26",
    readingMinutes: 5,
    author: "Steady Start Editorial Team",
    quickStart: [
      "Choose one 10-minute action, such as a walk or one workout round.",
      "Attach it to a cue that already happens in your week.",
      "Treat the small version as the win, not as a failure to do more.",
    ],
    sections: [
      {
        id: "make-the-start-small",
        heading: "Make the start almost too small",
        paragraphs: [
          "A fitness habit does not begin with motivation alone. It begins with a start that still feels possible when your day is ordinary, busy, or a little messy. Ten minutes is long enough to create a real action and short enough to reduce the pressure to be perfect.",
          "Your 10-minute version might be one round of a beginner workout, a walk around the block, or a few mobility movements while dinner cooks. It should be specific enough that you know exactly what to do.",
        ],
      },
      {
        id: "give-it-a-cue",
        heading: "Give the habit a dependable cue",
        paragraphs: [
          "Instead of relying on a vague promise to work out later, connect the action to something that already happens. For example: after I put on my work shoes, I walk for 10 minutes. After I clear dinner, I do one round of my routine.",
          "The cue does not have to be at the same clock time each day. It just needs to be recognizable enough to remind you what comes next.",
        ],
        callout: {
          label: "Try this sentence",
          text: "After I [existing routine], I will [10-minute action] for [how long or how many reps].",
        },
      },
      {
        id: "make-returning-easy",
        heading: "Make returning easier than restarting",
        paragraphs: [
          "Missed days are part of building any routine. The useful question is not how to catch up; it is what makes the next start easier. Keep your shoes visible, save the routine in one place, or decide in advance that you will simply return to the small version.",
          "This approach protects the habit from all-or-nothing thinking. A short session keeps the identity of someone who practices movement alive, even when a long session is not realistic.",
        ],
      },
      {
        id: "grow-only-when-ready",
        heading: "Grow the habit only when it feels steady",
        paragraphs: [
          "After the 10-minute action feels familiar for a couple of weeks, you can add a little: one more walk day, a second circuit, or a few extra minutes. Keep the original small version available for busy days.",
          "A structured full-body routine gives this habit somewhere to go, while simple meal support can make your movement feel easier to sustain. Both can stay pleasantly ordinary.",
        ],
      },
    ],
    relatedSlugs: [
      "full-body-workout-for-complete-beginners",
      "balanced-plate-without-tracking",
    ],
    citations: [
      {
        label: "Making Healthy Choices Easier (Centers for Disease Control and Prevention)",
        href: "https://www.cdc.gov/healthy-weight-growth/healthy-eating/making-healthy-choices-easier.html",
      },
    ],
  },
];

function validatePosts(posts: Post[]): Post[] {
  const slugs = new Set<string>();
  const validCategories = new Set(categories.map((category) => category.slug));

  for (const post of posts) {
    if (!post.slug || slugs.has(post.slug)) {
      throw new Error(`Each post needs a unique, non-empty slug. Problem: ${post.slug}`);
    }
    if (!post.title || !post.description || !post.excerpt || !post.author) {
      throw new Error(`Post metadata is incomplete for ${post.slug}.`);
    }
    if (!validCategories.has(post.category)) {
      throw new Error(`Post ${post.slug} has an invalid category.`);
    }
    if (!post.sections.length || !post.quickStart.length || !post.citations.length) {
      throw new Error(`Post ${post.slug} is missing required content or citations.`);
    }
    if (new Set(post.sections.map((section) => section.id)).size !== post.sections.length) {
      throw new Error(`Post ${post.slug} has duplicate section identifiers.`);
    }
    slugs.add(post.slug);
  }

  for (const post of posts) {
    for (const relatedSlug of post.relatedSlugs) {
      if (!slugs.has(relatedSlug) || relatedSlug === post.slug) {
        throw new Error(`Post ${post.slug} has an invalid related post.`);
      }
    }
  }

  return posts;
}

export const posts = validatePosts(postData);

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: Post) {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((relatedPost): relatedPost is Post => Boolean(relatedPost));
}

export function getCategory(category: CategorySlug) {
  return categories.find((item) => item.slug === category);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
