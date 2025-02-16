import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Supabase credentials
const supabaseUrl = "https://bmhmqjahtqjfifiopqgp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaG1xamFodHFqZmlmaW9wcWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDU5NjQsImV4cCI6MjA1NTAyMTk2NH0.jf3z_JnY0QR5nX5820tXw43vB3enw9P4HDn4ywI6sRs";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export Supabase client
export { supabase };
