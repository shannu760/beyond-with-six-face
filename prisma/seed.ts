import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding BEYOND AI database...");

  // Clean existing data
  await prisma.notification.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.usage.deleteMany();
  await prisma.agentRun.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.workflowStep.deleteMany();
  await prisma.automationRun.deleteMany();
  await prisma.automation.deleteMany();
  await prisma.asset.deleteMany();
  await prisma.prompt.deleteMany();
  await prisma.generation.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.project.deleteMany();
  await prisma.brandKit.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.apiKeyConfig.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("BeyondAI@2026", 12);

  // 1. Create Demo User
  const user = await prisma.user.create({
    data: {
      email: "demo@beyondai.com",
      passwordHash,
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: "ADMIN",
      profile: {
        create: {
          company: "Apex Dynamics",
          jobTitle: "VP of Creative & Growth",
          bio: "Leading creative production and performance marketing through autonomous generative pipelines.",
          website: "https://beyondai.com",
          preferencesJson: JSON.stringify({
            theme: "dark",
            defaultAspectRatio: "1:1",
            defaultPlatform: "Instagram",
            autoSaveGenerations: true,
          }),
        },
      },
    },
  });

  // 2. Create Organization
  const org = await prisma.organization.create({
    data: {
      name: "Beyond Creative Studio",
      slug: "beyond-studio",
      plan: "PRO",
      logo: "/images/beyond-symbol.png",
      memberships: {
        create: {
          userId: user.id,
          role: "OWNER",
        },
      },
    },
  });

  // 3. Create Brand Kit
  const brandKit = await prisma.brandKit.create({
    data: {
      organizationId: org.id,
      name: "Beyond Futuristic Brand Kit",
      logoUrl: "/images/beyond-symbol.png",
      primaryColor: "#00F0FF",
      secondaryColor: "#7928CA",
      accentColor: "#3B82F6",
      fontHeading: "Inter",
      fontBody: "Inter",
      brandVoice: "Bold, visionary, high-conversion, cinematic and authoritative",
      targetAudience: "High-growth tech startups, D2C brands, and modern marketing agencies",
      industry: "AI Creative & SaaS",
      description: "Next-generation brand identity engineered for high-converting multi-platform ad scale.",
      websiteUrl: "https://beyondai.com",
      socialLinksJson: JSON.stringify({
        twitter: "https://twitter.com/beyondai",
        linkedin: "https://linkedin.com/company/beyondai",
        instagram: "https://instagram.com/beyondai",
      }),
      isDefault: true,
    },
  });

  // 4. Create Projects
  const project1 = await prisma.project.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      name: "Cybernetic Product Launch",
      description: "High-impact video commercials, multi-variant ads, and 8K CGI assets for the 2026 product reveal.",
      category: "ADS",
      status: "ACTIVE",
      thumbnail: "/images/showcase-1.png",
    },
  });

  const project2 = await prisma.project.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      name: "Omnichannel Display Banner Ecosystem",
      description: "Complete 12-piece responsive display suite across Google GDN, Meta, and website hero banners.",
      category: "BANNER",
      status: "ACTIVE",
      thumbnail: "/images/showcase-3.png",
    },
  });

  const project3 = await prisma.project.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      name: "Automated Social Copy & Video Storyboards",
      description: "Weekly automated scriptwriting and storyboard pipelines for TikTok and YouTube Shorts.",
      category: "VIDEO",
      status: "ACTIVE",
      thumbnail: "/images/showcase-2.png",
    },
  });

  // 5. Create Campaign
  const campaign = await prisma.campaign.create({
    data: {
      organizationId: org.id,
      projectId: project1.id,
      name: "Beyond AI Q3 Omnichannel Sprint",
      objective: "SALES",
      targetAudience: "CMOs, Performance Marketers & Creative Directors",
      budget: 15000,
      status: "ACTIVE",
      platformsJson: JSON.stringify(["Instagram", "YouTube", "LinkedIn", "TikTok", "Google Ads"]),
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  // 6. Create Seed Generations
  const adGen = await prisma.generation.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      projectId: project1.id,
      campaignId: campaign.id,
      brandKitId: brandKit.id,
      type: "AD",
      title: "Cybernetic Autonomous Creator - Meta & TikTok Batch",
      prompt: "Create high-converting performance ads for an AI creative automation platform targeting growth leaders.",
      settingsJson: JSON.stringify({
        platform: "Instagram",
        objective: "Sales",
        tone: "Bold",
        cta: "Get Started",
        aspectRatio: "1:1",
        variationsCount: 3,
      }),
      outputJson: JSON.stringify({
        conceptTitle: "BEYOND AI - Performance Scale Matrix",
        strategySummary: "3 multi-hook variations engineered to combat creative fatigue and boost CTR by +340%.",
        variations: [
          {
            id: "var-seed-1",
            headline: "Stop Wasting $20,000 on Slow Creative Agencies",
            subheadline: "Generate broadcast-ready AI commercials in 48 hours.",
            primaryText: "Creative fatigue kills paid ads. Scale your testing velocity 10x with BEYOND AI's autonomous studio.",
            hook: "What if you could test 20+ hooks every week for a fraction of the cost?",
            callToAction: "Get Started",
            badge: "🔥 Highest Conversion",
            previewUrl: "/images/showcase-1.png",
            targetMetrics: { predictedCtr: "4.85%", conversionScore: 96, recommendedPlacements: ["Instagram Feed", "Reels"] },
          },
          {
            id: "var-seed-2",
            headline: "The Secret 8-Figure Brands Use to Scale Ads",
            subheadline: "Engineered AI creative production that commands attention.",
            primaryText: "Meet the new standard in AI advertising. Photorealistic staging, synthetic voices, and instant multi-ratios.",
            hook: "Traditional production is dead. Superhuman AI creative is here.",
            callToAction: "Explore Now",
            badge: "⚡ Viral Hook",
            previewUrl: "/images/showcase-2.png",
            targetMetrics: { predictedCtr: "4.20%", conversionScore: 93, recommendedPlacements: ["TikTok", "YouTube Shorts"] },
          },
        ],
      }),
      status: "COMPLETED",
      provider: "SYNTHESIS_ENGINE",
      tokensUsed: 2450,
      creditsCost: 3,
    },
  });

  const bannerGen = await prisma.generation.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      projectId: project2.id,
      brandKitId: brandKit.id,
      type: "BANNER",
      title: "Hero Website & Display Banner Suite",
      prompt: "Generate an ultra-modern 1920x600 hero banner and 728x90 leaderboard banner.",
      settingsJson: JSON.stringify({
        preset: "Website Hero",
        dimensions: "1920x600",
        style: "Minimal Cyber",
      }),
      outputJson: JSON.stringify({
        conceptName: "BEYOND AI - Omnichannel Hero Suite",
        preset: "Website Hero",
        variations: [
          {
            id: "banner-seed-1",
            title: "Website Hero - Cyber Neon Edition",
            dimensions: "1920x600",
            width: 1920,
            height: 600,
            headline: "Create Beyond Imagination. Automate Beyond Limits.",
            subheadline: "One AI platform for advertising, creative production, and autonomous workflows.",
            ctaText: "Start Creating Free",
            tagline: "AUTONOMOUS CREATIVE ENGINE",
            previewUrl: "/images/showcase-3.png",
          },
        ],
      }),
      status: "COMPLETED",
      provider: "SYNTHESIS_ENGINE",
      tokensUsed: 1800,
      creditsCost: 2,
    },
  });

  const videoGen = await prisma.generation.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      projectId: project1.id,
      brandKitId: brandKit.id,
      type: "VIDEO",
      title: "30s Cinematic Product Commercial - Storyboard & Voiceover",
      prompt: "Produce a fast-paced sci-fi commercial showcasing the speed of autonomous AI generation.",
      settingsJson: JSON.stringify({
        videoLength: "30s",
        aspectRatio: "9:16",
        voice: "Futuristic Synth (Nova)",
        style: "Cinematic Luxury",
      }),
      outputJson: JSON.stringify({
        videoTitle: "BEYOND AI - Cinematic Launch Spot",
        jobId: "job-seed-video-01",
        status: "COMPLETED",
        progress: 100,
        aspectRatio: "9:16",
        totalLength: "30s",
        scenes: [
          {
            sceneNumber: 1,
            timeRange: "0:00 - 0:05",
            visualShot: "Dramatic macro pan across neon-glowing futuristic workstation",
            voiceoverScript: "In a world moving at lightspeed, manual creativity is a bottleneck.",
            onScreenText: "STOP WAITING.",
            framePreviewUrl: "/images/showcase-1.png",
          },
          {
            sceneNumber: 2,
            timeRange: "0:05 - 0:15",
            visualShot: "Rapid sequence of 10+ ad variations and 8K visuals generating autonomously",
            voiceoverScript: "BEYOND AI builds entire omnichannel campaigns in seconds.",
            onScreenText: "10X VELOCITY.",
            framePreviewUrl: "/images/showcase-magic.png",
          },
          {
            sceneNumber: 3,
            timeRange: "0:15 - 0:30",
            visualShot: "Hero reveal with glowing BEYOND monogram and direct call to action",
            voiceoverScript: "Create beyond imagination. Automate beyond limits. Start today.",
            onScreenText: "START FREE • BEYOND AI",
            framePreviewUrl: "/images/showcase-4.png",
          },
        ],
      }),
      status: "COMPLETED",
      provider: "SYNTHESIS_ENGINE",
      tokensUsed: 3600,
      creditsCost: 5,
    },
  });

  // 7. Create Assets in Media Library
  await prisma.asset.createMany({
    data: [
      {
        organizationId: org.id,
        projectId: project1.id,
        generationId: adGen.id,
        name: "Cybernetic Ad Master Visual 01",
        type: "IMAGE",
        url: "/images/showcase-1.png",
        thumbnail: "/images/showcase-1.png",
        dimensions: "1080x1080",
        sizeBytes: 1630000,
        format: "PNG",
        tagsJson: JSON.stringify(["Ad", "Cyberpunk", "Automotive", "1:1"]),
      },
      {
        organizationId: org.id,
        projectId: project1.id,
        generationId: adGen.id,
        name: "Editorial Avatar Fashion Render",
        type: "IMAGE",
        url: "/images/showcase-2.png",
        thumbnail: "/images/showcase-2.png",
        dimensions: "1080x1080",
        sizeBytes: 950000,
        format: "PNG",
        tagsJson: JSON.stringify(["Fashion", "Avatar", "8K CGI"]),
      },
      {
        organizationId: org.id,
        projectId: project2.id,
        generationId: bannerGen.id,
        name: "Omnichannel Responsive Display Banner",
        type: "IMAGE",
        url: "/images/showcase-3.png",
        thumbnail: "/images/showcase-3.png",
        dimensions: "1920x600",
        sizeBytes: 1170000,
        format: "PNG",
        tagsJson: JSON.stringify(["Banner", "Hero", "Display"]),
      },
      {
        organizationId: org.id,
        projectId: project1.id,
        generationId: videoGen.id,
        name: "30s Commercial Video Cut",
        type: "VIDEO",
        url: "/images/showcase-4.png",
        thumbnail: "/images/showcase-4.png",
        dimensions: "1080x1920",
        sizeBytes: 12600000,
        format: "MP4",
        tagsJson: JSON.stringify(["Video", "9:16", "Reels", "Commercial"]),
      },
    ],
  });

  // 8. Create Automations & Steps
  const auto1 = await prisma.automation.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      name: "Weekly High-Frequency Ad Refresh",
      description: "Auto-generates 5 fresh performance ad hooks every Monday at 6:00 AM to eliminate ad fatigue.",
      triggerType: "SCHEDULED",
      triggerConfigJson: JSON.stringify({ cron: "0 6 * * 1", timezone: "America/New_York" }),
      isActive: true,
      stepsJson: JSON.stringify([
        { id: "s1", name: "Trigger: Weekly Schedule (Mon 6AM)", type: "TRIGGER" },
        { id: "s2", name: "AI Step: Analyze Past Ad Metrics & CTR", type: "ANALYZE" },
        { id: "s3", name: "AI Step: Generate 5 New Hook Variations", type: "AI_GENERATE" },
        { id: "s4", name: "Action: Save to Project 'Cybernetic Launch'", type: "EXPORT" },
      ]),
    },
  });

  await prisma.automationRun.create({
    data: {
      automationId: auto1.id,
      status: "COMPLETED",
      inputDataJson: JSON.stringify({ scheduleTrigger: "Weekly Cron" }),
      outputDataJson: JSON.stringify({ generatedVariants: 5, status: "Successfully saved to project assets" }),
      logsJson: JSON.stringify([
        "06:00:01 - Trigger received: Weekly Ad Refresh",
        "06:00:03 - Fetched top performing audience personas",
        "06:00:08 - Generated 5 multi-ratio variations",
        "06:00:12 - Saved 5 assets to Media Library",
      ]),
      durationMs: 11400,
    },
  });

  // 9. Create AI Agents
  const agent1 = await prisma.agent.create({
    data: {
      organizationId: org.id,
      name: "Creative Fatigue Hunter",
      role: "Autonomous Ad Analyst & Optimizer",
      avatar: "/images/beyond-symbol.png",
      description: "Continuously monitors ad conversion trajectories and triggers instant multi-variant hook refreshes.",
      systemPrompt: "You are an elite Autonomous Performance Ad Director. Your job is to detect creative fatigue and craft winning ad concepts.",
      capabilitiesJson: JSON.stringify(["Hook Variation Engine", "CTR Prediction", "Automated A/B Prompting", "Multi-ratio Layout"]),
      schedule: "Every 12 hours",
      status: "ACTIVE",
      lastRunAt: new Date(Date.now() - 3600000),
    },
  });

  await prisma.agentRun.create({
    data: {
      agentId: agent1.id,
      task: "Analyze Q3 ad performance and suggest 3 high-impact hooks",
      status: "COMPLETED",
      resultJson: JSON.stringify({
        recommendation: "Shift visual focus toward macro product texture to elevate perceived luxury value.",
        hooksProduced: 3,
        confidenceScore: 0.94,
      }),
      logsJson: JSON.stringify([
        "Task initialized: Creative Fatigue Audit",
        "Audited 12 active creatives across Instagram and TikTok",
        "Identified 2 ad variations showing fatigue signs (> $22 CPA)",
        "Generated 3 replacement concepts with predicted CTR > 4.2%",
      ]),
    },
  });

  // 10. Create Usage Record
  await prisma.usage.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      period: "2026-08",
      creditsUsed: 340,
      creditsLimit: 1000,
      generationsCount: 28,
      videosRendered: 6,
      automationsRun: 14,
    },
  });

  // 11. Create Subscription
  await prisma.subscription.create({
    data: {
      organizationId: org.id,
      plan: "PRO",
      status: "ACTIVE",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  // 12. Create Transactions
  await prisma.transaction.createMany({
    data: [
      {
        organizationId: org.id,
        amount: 149,
        currency: "USD",
        status: "PAID",
        description: "BEYOND AI Pro Plan - Monthly Subscription",
        invoiceUrl: "#",
      },
      {
        organizationId: org.id,
        amount: 49,
        currency: "USD",
        status: "PAID",
        description: "Extra 500 AI Creative Credits Top-Up",
        invoiceUrl: "#",
      },
    ],
  });

  // 13. Create Notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: user.id,
        title: "Welcome to BEYOND AI",
        message: "Your workspace has been provisioned with 1,000 monthly creative credits.",
        type: "SYSTEM",
        linkUrl: "/app/dashboard",
      },
      {
        userId: user.id,
        title: "Creative Fatigue Hunter Completed",
        message: "Your autonomous agent analyzed 12 ads and generated 3 replacement concepts.",
        type: "GENERATION_READY",
        linkUrl: "/app/agents",
      },
    ],
  });

  console.log("Database seeded successfully with demo user: demo@beyondai.com / BeyondAI@2026");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
