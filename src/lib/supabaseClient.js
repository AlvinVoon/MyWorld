import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qbqgwfriomonyqbqeomb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWd3ZnJpb21vbnlxYnFlb21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2Njg5MDMsImV4cCI6MjAyMjI0NDkwM30.0EuY1JtlWhyaKJc7BSOCFZBhk4dmrUIWT1Yvr_NW08M')