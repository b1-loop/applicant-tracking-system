import { createClient } from '@supabase/supabase-js'

// Vi hårdkodar nycklarna tillfälligt för att se om det löser problemet
const supabaseUrl = 'https://iesqrsdmwhlwxwwujivp.supabase.co'
const supabaseAnonKey = 'sb_publishable_Fe_3exREbOy2oY_orYlrwQ_vlknnIFq' // (OBS: Detta är egentligen hemligt, vi tar bort det sen när det funkar)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)