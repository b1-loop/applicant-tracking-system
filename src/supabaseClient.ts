import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Supabase keys are missing! Check your GitHub Secrets.')
}

// Vi skapar klienten även om nycklarna saknas för att undvika "Uncaught Error",
// men databas-anrop kommer misslyckas kontrollerat istället för att krascha sidan.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)