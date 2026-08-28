export type GenerationType = "AD" | "BANNER" | "POSTER" | "VIDEO" | "COPY" | "BRAND";

export interface BrandContext {
  brandName?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  fontHeading?: string;
  brandVoice?: string;
  targetAudience?: string;
  industry?: string;
}

export interface AdGenerationInput {
  product: string;
  description: string;
  targetAudience: string;
  platform: "Instagram" | "Facebook" | "YouTube" | "LinkedIn" | "Google Ads" | "Website" | "TikTok";
  objective: "Sales" | "Leads" | "Awareness" | "Traffic" | "App Installs" | "Engagement";
  tone: "Professional" | "Luxury" | "Bold" | "Minimal" | "Friendly" | "Gen Z" | "Corporate" | "Emotional" | "Technical";
  cta: "Shop Now" | "Learn More" | "Get Started" | "Book Now" | "Try Free" | "Contact Us";
  aspectRatio: "1:1" | "9:16" | "16:9" | "4:5";
  variationsCount: number;
  brandKit?: BrandContext;
}

export interface AdVariation {
  id: string;
  headline: string;
  subheadline: string;
  primaryText: string;
  hook: string;
  callToAction: string;
  badge: string;
  visualPrompt: string;
  previewUrl: string;
  targetMetrics: {
    predictedCtr: string;
    conversionScore: number;
    recommendedPlacements: string[];
  };
  styleTokens: {
    bgGradient: string;
    accentColor: string;
    badgeBg: string;
  };
}

export interface AdGenerationOutput {
  conceptTitle: string;
  strategySummary: string;
  targetPersona: string;
  variations: AdVariation[];
  suggestedHashtags: string[];
  recommendedAudienceKeywords: string[];
  tokensUsed: number;
  creditsCost: number;
}

export interface BannerGenerationInput {
  brand: string;
  product: string;
  headline: string;
  supportingCopy?: string;
  cta: string;
  preset: "Website Hero" | "Instagram" | "LinkedIn" | "YouTube" | "Google Display" | "E-commerce" | "Product Launch" | "Sale" | "Event";
  dimensions: string; // e.g. "1200x628", "1920x600", "1080x1080", "300x250", "728x90"
  style: "Minimal Cyber" | "Luxury Editorial" | "Bold Neon" | "Clean Corporate" | "Gradient Mesh";
  colorPreference?: string;
  brandKit?: BrandContext;
}

export interface BannerVariation {
  id: string;
  title: string;
  dimensions: string;
  width: number;
  height: number;
  headline: string;
  subheadline: string;
  ctaText: string;
  tagline: string;
  svgData?: string;
  previewUrl: string;
  theme: {
    background: string;
    textColor: string;
    accentColor: string;
    ctaBg: string;
    ctaTextColor: string;
    overlayGradient: string;
  };
}

export interface BannerGenerationOutput {
  conceptName: string;
  preset: string;
  variations: BannerVariation[];
  tokensUsed: number;
  creditsCost: number;
}

export interface PosterGenerationInput {
  prompt: string;
  headline?: string;
  supportingCopy?: string;
  cta?: string;
  theme: "Cyber Launch" | "Luxury Minimal" | "Futuristic Vision" | "Dark Cinema" | "Editorial Fashion";
  aspectRatio: "2:3" | "3:4" | "1:1" | "9:16";
  brandKit?: BrandContext;
}

export interface PosterGenerationOutput {
  posterTitle: string;
  headline: string;
  supportingCopy: string;
  ctaText: string;
  badge: string;
  visualPrompt: string;
  previewUrl: string;
  layoutScheme: {
    fontFamily: string;
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    vignetteIntensity: string;
  };
  metadata: {
    aspectRatio: string;
    dpi: number;
    recommendedPrintSize: string;
  };
  tokensUsed: number;
  creditsCost: number;
}

export interface VideoGenerationInput {
  product: string;
  description: string;
  targetAudience: string;
  videoLength: "15s" | "30s" | "60s";
  platform: "TikTok" | "Instagram Reels" | "YouTube Shorts" | "Meta Video" | "LinkedIn";
  style: "Fast-Paced High Energy" | "Cinematic Luxury" | "Problem-Solution Explainer" | "Viral UGC" | "Sci-Fi Product Reveal";
  voice: "Futuristic Synth (Nova)" | "Deep Authoritative (Atlas)" | "Warm & Energetic (Elena)" | "Crisp Tech (Marcus)";
  language: "English (US)" | "English (UK)" | "Spanish" | "French" | "German" | "Japanese";
  aspectRatio: "9:16" | "16:9" | "1:1";
  callToAction: string;
  brandKit?: BrandContext;
}

export interface VideoScene {
  sceneNumber: number;
  timeRange: string;
  visualShot: string;
  cameraMovement: string;
  voiceoverScript: string;
  onScreenText: string;
  soundEffect: string;
  framePreviewUrl: string;
}

export interface VideoGenerationOutput {
  videoTitle: string;
  jobId: string;
  status: "PREPARING" | "GENERATING" | "RENDERING" | "COMPLETED";
  progress: number;
  estimatedDurationSeconds: number;
  aspectRatio: string;
  totalLength: string;
  musicTrack: string;
  voiceActor: string;
  scenes: VideoScene[];
  fullScript: string;
  masterVideoUrl: string;
  tokensUsed: number;
  creditsCost: number;
}

export interface CopyGenerationInput {
  template: "Instagram Caption" | "LinkedIn Post" | "YouTube Title" | "YouTube Description" | "Ad Copy" | "Product Description" | "Landing Page Copy" | "Email" | "Headline" | "CTA" | "Blog Outline";
  topic: string;
  description: string;
  tone: "Professional" | "Luxury" | "Bold" | "Minimal" | "Friendly" | "Gen Z" | "Corporate" | "Emotional" | "Technical";
  targetAudience: string;
  length: "Short" | "Medium" | "Long";
  language: string;
  keywords?: string;
  brandKit?: BrandContext;
}

export interface CopyVariation {
  id: string;
  angle: string;
  title: string;
  content: string;
  hookRating: string;
  wordCount: number;
  callToAction: string;
  hashtags?: string[];
}

export interface CopyGenerationOutput {
  template: string;
  topic: string;
  variations: CopyVariation[];
  seoRecommendations: string[];
  tokensUsed: number;
  creditsCost: number;
}

export interface AIProvider {
  name: string;
  generateAd(input: AdGenerationInput): Promise<AdGenerationOutput>;
  generateBanner(input: BannerGenerationInput): Promise<BannerGenerationOutput>;
  generatePoster(input: PosterGenerationInput): Promise<PosterGenerationOutput>;
  generateVideo(input: VideoGenerationInput): Promise<VideoGenerationOutput>;
  generateCopy(input: CopyGenerationInput): Promise<CopyGenerationOutput>;
}
