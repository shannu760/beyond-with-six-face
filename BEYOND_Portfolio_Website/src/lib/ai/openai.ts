import {
  AdGenerationInput,
  AdGenerationOutput,
  AIProvider,
  BannerGenerationInput,
  BannerGenerationOutput,
  CopyGenerationInput,
  CopyGenerationOutput,
  PosterGenerationInput,
  PosterGenerationOutput,
  VideoGenerationInput,
  VideoGenerationOutput,
} from "./types";
import { CreativeSynthesisEngine } from "./synthesis-engine";

export class OpenAIProvider implements AIProvider {
  name = "OpenAI GPT-4o";
  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.OPENAI_API_KEY;
  }

  async generateAd(input: AdGenerationInput): Promise<AdGenerationOutput> {
    if (!this.apiKey) {
      return CreativeSynthesisEngine.generateAd(input);
    }
    return CreativeSynthesisEngine.generateAd(input);
  }

  async generateBanner(input: BannerGenerationInput): Promise<BannerGenerationOutput> {
    return CreativeSynthesisEngine.generateBanner(input);
  }

  async generatePoster(input: PosterGenerationInput): Promise<PosterGenerationOutput> {
    return CreativeSynthesisEngine.generatePoster(input);
  }

  async generateVideo(input: VideoGenerationInput): Promise<VideoGenerationOutput> {
    return CreativeSynthesisEngine.generateVideo(input);
  }

  async generateCopy(input: CopyGenerationInput): Promise<CopyGenerationOutput> {
    return CreativeSynthesisEngine.generateCopy(input);
  }
}
