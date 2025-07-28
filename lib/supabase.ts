import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Debug: Check if environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables not found:', {
    url: !!supabaseUrl,
    key: !!supabaseAnonKey
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type SubscriptionType = 'bombers' | 'mossos'
export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'expired'
export type PlanType = 'monthly' | 'annual'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  subscription_type: SubscriptionType
  plan_type: PlanType
  status: SubscriptionStatus
  stripe_subscription_id: string | null
  stripe_customer_id: string | null
  current_period_start: string | null
  current_period_end: string | null
  created_at: string
  updated_at: string
}

export interface TestCategory {
  id: string
  name: string
  description: string | null
  subscription_type: SubscriptionType
  order_index: number
  is_active: boolean
  created_at: string
}

export interface Test {
  id: string
  category_id: string
  title: string
  description: string | null
  total_questions: number
  time_limit_minutes: number
  difficulty_level: number
  is_premium: boolean
  is_active: boolean
  created_at: string
  updated_at: string
  category?: TestCategory
}

export interface Question {
  id: string
  test_id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: 'A' | 'B' | 'C' | 'D'
  explanation: string | null
  difficulty_level: number
  order_index: number
  created_at: string
}

export interface UserTestAttempt {
  id: string
  user_id: string
  test_id: string
  score: number
  total_questions: number
  correct_answers: number
  time_taken_minutes: number | null
  completed_at: string
  answers: Record<string, string> | null
  created_at: string
  test?: Test
}

export interface UserProgress {
  id: string
  user_id: string
  category_id: string
  tests_completed: number
  total_questions_answered: number
  correct_answers: number
  average_score: number
  last_activity: string
  created_at: string
  updated_at: string
  category?: TestCategory
} 