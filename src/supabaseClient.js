// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Daten aus deinem Screenshot:
const supabaseUrl = 'https://gmpwhemwumzeiolfkqif.supabase.co'
const supabaseKey = 'sb_publishable_Twf1IIyIR-yCY2eviwQSMA_ZZuLYKC1'

export const supabase = createClient(supabaseUrl, supabaseKey)