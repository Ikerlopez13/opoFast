-- =============================================
-- OPOFAST DATABASE SCHEMA
-- =============================================

-- =============================================
-- 1. CREATE ENUM TYPES FIRST
-- =============================================
DO $$ BEGIN
    CREATE TYPE subscription_type AS ENUM ('bombers', 'mossos');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE subscription_status AS ENUM ('active', 'inactive', 'cancelled', 'expired');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE plan_type AS ENUM ('monthly', 'annual');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- =============================================
-- 2. PROFILES TABLE (extends auth.users)
-- =============================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- =============================================
-- 3. SUBSCRIPTIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  subscription_type subscription_type NOT NULL,
  plan_type plan_type NOT NULL,
  status subscription_status DEFAULT 'inactive',
  stripe_subscription_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Create partial unique index to ensure user can only have one active subscription per type
DROP INDEX IF EXISTS idx_unique_active_subscription;
CREATE UNIQUE INDEX idx_unique_active_subscription 
ON public.subscriptions (user_id, subscription_type) 
WHERE status = 'active';

-- Policies for subscriptions
DROP POLICY IF EXISTS "Users can view own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can update own subscriptions" ON public.subscriptions
  FOR UPDATE USING (auth.uid() = user_id);

-- =============================================
-- 4. TEST CATEGORIES
-- =============================================
CREATE TABLE IF NOT EXISTS public.test_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  subscription_type subscription_type NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories (only if table is empty)
INSERT INTO public.test_categories (name, description, subscription_type, order_index) 
SELECT * FROM (VALUES
-- Bombers categories
('Constitución Española', 'Derechos fundamentales y organización del Estado', 'bombers'::subscription_type, 1),
('Estatuto de Autonomía', 'Organización territorial de Catalunya', 'bombers'::subscription_type, 2),
('Protección Civil', 'Planes de emergencia y gestión de crisis', 'bombers'::subscription_type, 3),
('Técnicas de Extinción', 'Física y química del fuego, agentes extintores', 'bombers'::subscription_type, 4),
('Primeros Auxilios', 'Soporte vital básico y atención sanitaria', 'bombers'::subscription_type, 5),

-- Mossos categories
('Constitución Española', 'Derechos fundamentales y organización del Estado', 'mossos'::subscription_type, 1),
('Estatuto de Autonomía', 'Organización territorial de Catalunya', 'mossos'::subscription_type, 2),
('Derecho Penal', 'Código penal y procedimiento penal', 'mossos'::subscription_type, 3),
('Derecho Procesal', 'Procedimientos judiciales y policiales', 'mossos'::subscription_type, 4),
('Normativa de Tráfico', 'Código de circulación y sanciones', 'mossos'::subscription_type, 5)
) AS v(name, description, subscription_type, order_index)
WHERE NOT EXISTS (SELECT 1 FROM public.test_categories);

-- =============================================
-- 5. TESTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.tests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.test_categories(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  total_questions INTEGER NOT NULL DEFAULT 0,
  time_limit_minutes INTEGER DEFAULT 60,
  difficulty_level INTEGER DEFAULT 1 CHECK (difficulty_level BETWEEN 1 AND 5),
  is_premium BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;

-- Policies for tests
DROP POLICY IF EXISTS "Anyone can view active tests" ON public.tests;
CREATE POLICY "Anyone can view active tests" ON public.tests
  FOR SELECT USING (is_active = true);

-- =============================================
-- 6. QUESTIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id UUID REFERENCES public.tests(id) ON DELETE CASCADE NOT NULL,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
  explanation TEXT,
  difficulty_level INTEGER DEFAULT 1 CHECK (difficulty_level BETWEEN 1 AND 5),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Policies for questions - only premium users can see questions
DROP POLICY IF EXISTS "Premium users can view questions" ON public.questions;
CREATE POLICY "Premium users can view questions" ON public.questions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.subscriptions s
      JOIN public.tests t ON t.id = questions.test_id
      JOIN public.test_categories tc ON tc.id = t.category_id
      WHERE s.user_id = auth.uid()
      AND s.subscription_type = tc.subscription_type
      AND s.status = 'active'
      AND s.current_period_end > NOW()
    )
  );

-- =============================================
-- 7. USER TEST ATTEMPTS
-- =============================================
CREATE TABLE IF NOT EXISTS public.user_test_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  test_id UUID REFERENCES public.tests(id) ON DELETE CASCADE NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  time_taken_minutes INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  answers JSONB, -- Store user answers: {"1": "A", "2": "B", ...}
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_test_attempts ENABLE ROW LEVEL SECURITY;

-- Policies for test attempts
DROP POLICY IF EXISTS "Users can view own test attempts" ON public.user_test_attempts;
CREATE POLICY "Users can view own test attempts" ON public.user_test_attempts
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own test attempts" ON public.user_test_attempts;
CREATE POLICY "Users can insert own test attempts" ON public.user_test_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- =============================================
-- 8. USER PROGRESS TRACKING
-- =============================================
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  category_id UUID REFERENCES public.test_categories(id) ON DELETE CASCADE NOT NULL,
  tests_completed INTEGER DEFAULT 0,
  total_questions_answered INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  average_score DECIMAL(5,2) DEFAULT 0.00,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, category_id)
);

-- Enable RLS
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Policies for user progress
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
CREATE POLICY "Users can view own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
CREATE POLICY "Users can update own progress" ON public.user_progress
  FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- 9. FUNCTIONS AND TRIGGERS
-- =============================================

-- Function to handle new user registration
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update user progress after test completion
DROP FUNCTION IF EXISTS public.update_user_progress() CASCADE;
CREATE OR REPLACE FUNCTION public.update_user_progress()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_progress (
    user_id, 
    category_id, 
    tests_completed, 
    total_questions_answered, 
    correct_answers,
    average_score,
    last_activity
  )
  SELECT 
    NEW.user_id,
    tc.id,
    1,
    NEW.total_questions,
    NEW.correct_answers,
    NEW.score,
    NEW.completed_at
  FROM public.tests t
  JOIN public.test_categories tc ON tc.id = t.category_id
  WHERE t.id = NEW.test_id
  
  ON CONFLICT (user_id, category_id) 
  DO UPDATE SET
    tests_completed = user_progress.tests_completed + 1,
    total_questions_answered = user_progress.total_questions_answered + NEW.total_questions,
    correct_answers = user_progress.correct_answers + NEW.correct_answers,
    average_score = (
      (user_progress.average_score * user_progress.tests_completed + NEW.score) / 
      (user_progress.tests_completed + 1)
    ),
    last_activity = NEW.completed_at,
    updated_at = NOW();
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to update progress after test completion
DROP TRIGGER IF EXISTS on_test_completed ON public.user_test_attempts;
CREATE TRIGGER on_test_completed
  AFTER INSERT ON public.user_test_attempts
  FOR EACH ROW EXECUTE FUNCTION public.update_user_progress();

-- =============================================
-- 10. INDEXES FOR PERFORMANCE
-- =============================================
DROP INDEX IF EXISTS idx_subscriptions_user_type_status;
CREATE INDEX idx_subscriptions_user_type_status ON public.subscriptions(user_id, subscription_type, status);

DROP INDEX IF EXISTS idx_subscriptions_stripe_id;
CREATE INDEX idx_subscriptions_stripe_id ON public.subscriptions(stripe_subscription_id);

DROP INDEX IF EXISTS idx_tests_category;
CREATE INDEX idx_tests_category ON public.tests(category_id);

DROP INDEX IF EXISTS idx_questions_test;
CREATE INDEX idx_questions_test ON public.questions(test_id);

DROP INDEX IF EXISTS idx_user_attempts_user_test;
CREATE INDEX idx_user_attempts_user_test ON public.user_test_attempts(user_id, test_id);

DROP INDEX IF EXISTS idx_user_progress_user_category;
CREATE INDEX idx_user_progress_user_category ON public.user_progress(user_id, category_id);

-- =============================================
-- 11. SAMPLE DATA (Optional - for testing)
-- =============================================

-- Sample tests for Bombers (only if no tests exist)
INSERT INTO public.tests (category_id, title, description, total_questions, time_limit_minutes, difficulty_level) 
SELECT 
  id, 
  'Test de ' || name || ' - Nivel Básico',
  'Preguntas fundamentales sobre ' || name,
  20,
  20,
  1
FROM public.test_categories 
WHERE subscription_type = 'bombers'
AND NOT EXISTS (SELECT 1 FROM public.tests);

-- Sample tests for Mossos (only if no tests exist)
INSERT INTO public.tests (category_id, title, description, total_questions, time_limit_minutes, difficulty_level) 
SELECT 
  id, 
  'Test de ' || name || ' - Nivel Básico',
  'Preguntas fundamentales sobre ' || name,
  20,
  20,
  1
FROM public.test_categories 
WHERE subscription_type = 'mossos'
AND NOT EXISTS (SELECT 1 FROM public.tests); 