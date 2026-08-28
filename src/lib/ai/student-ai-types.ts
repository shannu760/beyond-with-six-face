// BEYOND Student Growth Engine — AI Types & Tool Interfaces

export interface StudentContext {
  studentId: string;
  name: string;
  classLevel: string; // e.g. "Class 11", "Class 12", "Gap Year"
  targetExam: "JEE Main" | "JEE Advanced" | "NEET UG" | "CUET" | "General Degree" | "Other";
  subjects: string[];
  interests: string[];
  weakTopics: string[];
  strongTopics: string[];
  starsBalance: number;
  streakDays: number;
}

export interface DiagnosticInput {
  classLevel: string;
  targetExam: string;
  favoriteSubjects: string[];
  perceivedStrengths: string[];
  currentChallenges: string[];
  dailyStudyHours: number;
  longTermGoal: string;
}

export interface PathwayRoadmapStep {
  stepNumber: number;
  title: string;
  duration: string;
  description: string;
  keyMilestones: string[];
  recommendedTopics: string[];
}

export interface DiagnosticOutput {
  alignmentStatus: string;
  alignmentScore: number;
  coreAnalysis: string;
  evidencePoints: string[];
  uncertainties: string[];
  next30DaysRoadmap: PathwayRoadmapStep[];
  recommendedFocusAreas: string[];
}

export interface StudentChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  citations?: {
    sourceName: string;
    sourceUrl: string;
    snippet: string;
  }[];
  suggestedActions?: string[];
}

export interface StudyPlanItem {
  id: string;
  topic: string;
  subject: string;
  durationMinutes: number;
  activityType: "Concept Review" | "Problem Solving" | "Mock Test" | "Weak Topic Remediation";
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  subject: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface QuizOutput {
  title: string;
  subject: string;
  topic: string;
  questions: QuizQuestion[];
  timeLimitMinutes: number;
}

export interface StudentIdeaSubmission {
  title: string;
  category: "Study Tool" | "App Idea" | "Science Project" | "Community Idea" | "School Innovation";
  problemStatement: string;
  proposedSolution: string;
  targetUsers: string;
}

export interface IdeaFeasibilityAnalysis {
  feasibilityScore: number; // 0-100
  clarifiedConcept: string;
  keyStrengths: string[];
  potentialChallenges: string[];
  prototypePlan: string[];
  nextExperiment: string;
}

export interface ScholarshipMatchInput {
  classLevel: string;
  state: string;
  targetCourse: string;
  annualIncomeBand?: string;
  category?: string;
  academicScorePercentage?: number;
}

export interface ScholarshipMatchResult {
  id: string;
  title: string;
  provider: string;
  matchConfidence: "Strong Match" | "Possible Match" | "Low Match";
  awardAmount: string;
  deadline: string;
  officialSourceUrl: string;
  sourceOrganization: string;
  requiredDocuments: string[];
  eligibilitySummary: string;
}
